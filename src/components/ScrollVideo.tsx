import { useEffect, useMemo, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const PLAYHEAD_DAMPING = 12
const SEEK_THRESHOLD = 0.035

type ScrollVideoProps = {
  poster: string
  src: string
  triggerSelector: string
}

export function ScrollVideo({ poster, src, triggerSelector }: ScrollVideoProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const rafRef = useRef<number | null>(null)
  const seekingRef = useRef(false)
  const durationRef = useRef(0)
  const targetTimeRef = useRef(0)
  const displayTimeRef = useRef(0)
  const pendingTargetRef = useRef<number | null>(null)
  const lastTimestampRef = useRef<number | null>(null)
  const parallaxRef = useRef({ x: 0, y: 0 })
  const [duration, setDuration] = useState(0)
  const [bufferedRatio, setBufferedRatio] = useState(0)
  const [isReady, setIsReady] = useState(false)
  const [hasError, setHasError] = useState(false)

  const motionReduced = useMemo(
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    [],
  )

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const syncBuffered = () => {
      if (video.buffered.length === 0 || durationRef.current === 0) {
        setBufferedRatio(0)
        return
      }

      const end = video.buffered.end(video.buffered.length - 1)
      setBufferedRatio(Math.min(end / durationRef.current, 1))
    }

    const onLoadedMetadata = () => {
      durationRef.current = video.duration || 0
      setDuration(durationRef.current)
      setIsReady(true)
      syncBuffered()
    }

    const onSeeked = () => {
      seekingRef.current = false
      if (pendingTargetRef.current !== null) {
        const nextTarget = pendingTargetRef.current
        pendingTargetRef.current = null
        if (Math.abs(video.currentTime - nextTarget) > SEEK_THRESHOLD) {
          seekingRef.current = true
          video.currentTime = nextTarget
        }
      }
    }

    const onError = () => {
      setHasError(true)
    }

    video.addEventListener('loadedmetadata', onLoadedMetadata)
    video.addEventListener('progress', syncBuffered)
    video.addEventListener('seeked', onSeeked)
    video.addEventListener('error', onError)

    return () => {
      video.removeEventListener('loadedmetadata', onLoadedMetadata)
      video.removeEventListener('progress', syncBuffered)
      video.removeEventListener('seeked', onSeeked)
      video.removeEventListener('error', onError)
    }
  }, [])

  useEffect(() => {
    const trigger = document.querySelector(triggerSelector)
    if (!trigger) return

    const scrollTrigger = ScrollTrigger.create({
      trigger,
      start: 'top top',
      end: 'bottom bottom',
      onUpdate: (self) => {
        if (motionReduced || durationRef.current === 0) return
        targetTimeRef.current = self.progress * durationRef.current
      },
    })

    return () => {
      scrollTrigger.kill()
    }
  }, [motionReduced, triggerSelector])

  useEffect(() => {
    if (motionReduced) return

    const tick = (timestamp: number) => {
      const video = videoRef.current
      if (!video) return

      const last = lastTimestampRef.current ?? timestamp
      const deltaSeconds = (timestamp - last) / 1000
      lastTimestampRef.current = timestamp

      const lerpFactor = 1 - Math.exp(-PLAYHEAD_DAMPING * deltaSeconds)
      displayTimeRef.current += (targetTimeRef.current - displayTimeRef.current) * lerpFactor

      if (durationRef.current > 0) {
        const nextTime = Math.min(Math.max(displayTimeRef.current, 0), durationRef.current)

        if (seekingRef.current) {
          pendingTargetRef.current = nextTime
        } else if (Math.abs(video.currentTime - nextTime) > SEEK_THRESHOLD) {
          seekingRef.current = true
          video.currentTime = nextTime
        }
      }

      rafRef.current = window.requestAnimationFrame(tick)
    }

    rafRef.current = window.requestAnimationFrame(tick)

    return () => {
      if (rafRef.current !== null) {
        window.cancelAnimationFrame(rafRef.current)
      }
    }
  }, [motionReduced])

  useEffect(() => {
    if (motionReduced) return

    const onPointerMove = (event: PointerEvent) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 10
      const y = (event.clientY / window.innerHeight - 0.5) * 10
      parallaxRef.current = { x, y }
      const video = videoRef.current
      if (!video) return
      video.style.transform = `translate3d(${x}px, ${y}px, 0) scale(1.04)`
    }

    const onPointerLeave = () => {
      const video = videoRef.current
      if (!video) return
      video.style.transform = 'translate3d(0, 0, 0) scale(1)'
    }

    window.addEventListener('pointermove', onPointerMove)
    window.addEventListener('pointerleave', onPointerLeave)

    return () => {
      window.removeEventListener('pointermove', onPointerMove)
      window.removeEventListener('pointerleave', onPointerLeave)
    }
  }, [motionReduced])

  return (
    <div className="scroll-video-shell">
      <div className="scroll-video-rim" aria-hidden="true" />
      <div className="scroll-video-frame">
        <div className="scroll-video-meta">
          <span>Leather study</span>
          <span>{duration > 0 ? `${duration.toFixed(1)}s runtime` : 'Loading runtime'}</span>
        </div>
        <video
          ref={videoRef}
          className="scroll-video"
          src={src}
          poster={poster}
          muted
          playsInline
          preload="auto"
          disablePictureInPicture
        />
        <div className="scroll-video-status" aria-hidden="true">
          <span style={{ width: `${bufferedRatio * 100}%` }} />
        </div>
        {!isReady && !hasError && <div className="scroll-video-overlay">Loading film</div>}
        {hasError && <div className="scroll-video-overlay">Video unavailable</div>}
      </div>
    </div>
  )
}

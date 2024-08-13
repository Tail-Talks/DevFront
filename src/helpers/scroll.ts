import { MutableRefObject } from 'react'

export const initialMouseX = { current: 0 }
export const initialThumbX = { current: 0 }
export const isDragging = { current: false }

export const handleThumbDrag = (
  e: MouseEvent,
  sliderRef: MutableRefObject<HTMLDivElement | null>,
  thumbRef: MutableRefObject<HTMLDivElement | null>,
  trackRef: MutableRefObject<HTMLDivElement | null>
) => {
  if (!isDragging.current) return

  const slider = sliderRef.current
  const thumb = thumbRef.current
  const track = trackRef.current
  if (!slider || !thumb || !track) return

  const rect = track.getBoundingClientRect()
  const maxScrollLeft = slider.scrollWidth - slider.clientWidth
  const maxThumbLeft = track.clientWidth - thumb.clientWidth

  const deltaX = e.clientX - initialMouseX.current
  const newLeft = Math.min(Math.max(initialThumbX.current + deltaX, 0), maxThumbLeft)

  thumb.style.left = `${newLeft}px`
  const newScrollLeft = (newLeft / maxThumbLeft) * maxScrollLeft
  slider.scrollLeft = newScrollLeft
}

export const handleMouseDown = (
  e: MouseEvent,
  thumbRef: MutableRefObject<HTMLDivElement | null>,
  handleThumbDrag: (e: MouseEvent) => void
) => {
  isDragging.current = true
  initialMouseX.current = e.clientX
  initialThumbX.current = thumbRef.current!.offsetLeft

  document.addEventListener('mousemove', handleThumbDrag)
  document.addEventListener(
    'mouseup',
    () => {
      isDragging.current = false
      document.removeEventListener('mousemove', handleThumbDrag)
    },
    { once: true }
  )
}

export const handleScroll = (
  sliderRef: MutableRefObject<HTMLDivElement | null>,
  thumbRef: MutableRefObject<HTMLDivElement | null>,
  trackRef: MutableRefObject<HTMLDivElement | null>
) => {
  const slider = sliderRef.current
  const thumb = thumbRef.current
  const track = trackRef.current
  if (!slider || !thumb || !track) return

  const maxScrollLeft = slider.scrollWidth - slider.clientWidth
  const maxThumbLeft = track.clientWidth - thumb.clientWidth
  const scrollLeft = slider.scrollLeft
  const thumbLeft = (scrollLeft / maxScrollLeft) * maxThumbLeft
  thumb.style.left = `${thumbLeft}px`
}

let lockCount = 0

const saved = {
  htmlOverflow: "",
  bodyOverflow: "",
  bodyPaddingRight: "",
}

/** Measure scrollbar width before overflow is hidden (works on classic scrollbars). */
function measureScrollbarWidth(): number {
  const outer = document.createElement("div")
  outer.style.cssText =
    "visibility:hidden;overflow:scroll;position:absolute;top:-9999px;width:100px;height:100px;"
  document.body.appendChild(outer)

  const inner = document.createElement("div")
  inner.style.width = "100%"
  inner.style.height = "200px"
  outer.appendChild(inner)

  const measured = outer.offsetWidth - inner.offsetWidth
  document.body.removeChild(outer)

  const fromViewport = Math.max(0, window.innerWidth - document.documentElement.clientWidth)
  return Math.max(measured, fromViewport)
}

export function lockBodyScroll(): () => void {
  lockCount += 1

  if (lockCount === 1) {
    const scrollbarWidth = measureScrollbarWidth()

    saved.htmlOverflow = document.documentElement.style.overflow
    saved.bodyOverflow = document.body.style.overflow
    saved.bodyPaddingRight = document.body.style.paddingRight

    document.documentElement.setAttribute("data-scroll-locked", "")
    document.documentElement.style.setProperty("--scrollbar-width", `${scrollbarWidth}px`)
    document.documentElement.style.overflow = "hidden"
    document.body.style.overflow = "hidden"
    document.body.style.paddingRight = `${scrollbarWidth}px`
  }

  return () => {
    lockCount -= 1

    if (lockCount <= 0) {
      lockCount = 0

      document.documentElement.removeAttribute("data-scroll-locked")
      document.documentElement.style.removeProperty("--scrollbar-width")
      document.documentElement.style.overflow = saved.htmlOverflow
      document.body.style.overflow = saved.bodyOverflow
      document.body.style.paddingRight = saved.bodyPaddingRight
    }
  }
}

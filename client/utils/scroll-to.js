// 获取当前滚动高度
export const getScrollTop = () => {
  return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
}

// 设置滚动高度
const setScrollTop = (top) => {
  document.documentElement.scrollTop = top
  document.body.scrollTop = top
}

// 缓动算法 (Quad Ease-In-Out)
// t: 当前时间, b: 初始值, c: 变化量, d: 持续时间
const easeInOutQuad = (t, b, c, d) => {
  t /= d / 2
  if (t < 1) return (c / 2) * t * t + b
  t--
  return (-c / 2) * (t * (t - 2) - 1) + b
}

/**
 * 平滑滚动到指定位置
 * @param {number} to - 目标高度
 * @param {number} duration - 滚动总时长 (毫秒)
 */
export const scrollTo = (to, duration = 300) => {
  const start = getScrollTop()
  const change = to - start
  const startTime = performance.now()

  const animateScroll = (currentTime) => {
    const elapsedTime = currentTime - startTime
    const nextPosition = easeInOutQuad(Math.min(elapsedTime, duration), start, change, duration)

    setScrollTop(nextPosition)

    if (elapsedTime < duration) {
      requestAnimationFrame(animateScroll)
    } else {
      setScrollTop(to)
    }
  }

  requestAnimationFrame(animateScroll)
}

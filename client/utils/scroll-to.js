/**
 * 在指定毫秒内，滚动页面到某处
 *
 * @param {number} to   页面滚动到的位置
 * @param {number} time 指定毫秒内
 *
 */

const getScrollTop = () => {
  const total = document.body.scrollTop + document.documentElement.scrollTop
  return parseInt(total, 10)
}

const setScrollTop = (top) => {
  document.body.scrollTop = top
  document.documentElement.scrollTop = top
}

const scrollTo = (to, time) => {
  const from = getScrollTop()
  const runEvery = 5

  to = parseInt(to, 10)
  time /= runEvery

  // 设置一个 节流函数 来避免频发触发
  let i = 0
  const interval = setInterval(() => {
    i += 1
    setScrollTop(((to - from) / time) * i + from)

    if (i >= time) {
      clearInterval(interval)
    }
  }, runEvery)
}

export default {
  getScrollTop,
  scrollTo,
  setScrollTop,
}

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

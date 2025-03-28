function request({ url, data, method = 'get', reject = () => {}, resolve = () => {}, headers = {} }) {
  const option = {
    method,
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
  }

  if (method.toLocaleLowerCase() === 'post') {
    option.body = JSON.stringify(data || {})
  }

  fetch(url, option)
    .then((res) => res.json())
    .then((res) => {
      resolve(res)
    })
    .catch((error) => {
      console.error(error)
      reject(error)
    })
}

export default request

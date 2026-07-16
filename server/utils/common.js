import path from 'path'
import url from 'url'

export function getDirname(metaUrl) {
  const filename = url.fileURLToPath(metaUrl)
  return path.dirname(filename)
}

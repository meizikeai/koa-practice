import path from 'node:path'
import url from 'node:url'

export function getDirname(metaUrl) {
  const filename = url.fileURLToPath(metaUrl)
  return path.dirname(filename)
}

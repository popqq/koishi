import { message } from '~/components'

export function formatSize(size: number) {
  const units = ['B', 'KB', 'MB', 'GB']
  for (const idx in units) {
    if (idx && size > 1024) { size /= 1024 } else { return `${size.toFixed(1)} ${units[idx]}` }
  }
  return `${size.toFixed(1)} ${units[units.length - 1]}`
}

export function handleError(e, msg: string = '') {
  console.warn(e)
  if (msg.length) msg += '：'
  if (e instanceof Error) msg += e.name
  else if (typeof e === 'string') {
    msg += e.split('\n')[0]
  }
  return message.error(msg)
}
function pad0(n: number) {
  return n.toString().padStart(2, '0')
}
export function timeStr(date: Date) {
  return [
    pad0(date.getHours()),
    pad0(date.getMinutes()),
    pad0(date.getSeconds()),
  ].join(':')
}
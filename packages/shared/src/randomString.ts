export function generateRandomStr(len, charSet?) {
  const chars =
    charSet ||
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let randomStr = ''
  for (let i = 0; i < len; i++) {
    randomStr += chars.charAt(
      Math.floor(Math.random() * chars.length)
    )
  }
  return randomStr
}

const os = require('os')

const user = os.userInfo()
console.log(user)

console.log(os.uptime())
const currentOs = {
  totalmem: os.totalmem(),
  freemem: os.freemem(),
  systemtype: os.type(),
  architecture: os.arch(),
}
console.log(currentOs)

// @flow
export default function parseObject(obj: Object): string {
  let retstr: string = ''
  for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      switch (typeof obj[prop]) {
        case 'string':
        retstr += obj[prop]
          break
        case 'object':
          retstr += parseObject(obj[prop])
        default:
          break
      }
    }
  }
  return retstr
}

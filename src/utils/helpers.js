// Todo: enable once spa is live, not supported by topcoat-core currently
// import { nanoid } from 'nanoid'

//? https://rubular.com/r/KYT9TmfS8aR4bN
export const proceedIfStringlean = (propName) => /^(is|can|has|show)+.*/.test(propName)

//? convert isLoading into stringleanIsLoading
export const stringleanCase = (string) => 'stringlean' + string[0].toUpperCase() + string.slice(1)

//? support both :prop="false" and prop="false", lower entry-barrier for the end user
export const computeStringlean = (value) => {
  if (typeof value == 'string') {
    return value == 'true'
  }
  return value
}

//? generates a unique UUID for an input and it's matching label
// Todo: remove when spa is live
export const computedInputUuid = () => {
  return 'xxxx-yy'.replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == 'x' ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })

  // Todo: enable once spa is live, not supported by topcoat-core currently
  // return nanoid()
}

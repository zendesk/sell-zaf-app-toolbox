// If there are promise callbacks already in javascript's queue pending to be processed at the time
// setImmediate is called, then these will be processed before the callback given
// to setImmediate is called. Therefore the new promise being generated in this
// library's flushPromises is guaranteed to resolve after the pending promises are resolved.

export const flushPromises = () => {
  return new Promise((resolve) => setImmediate(resolve))
}

export default flushPromises

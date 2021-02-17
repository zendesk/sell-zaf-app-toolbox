import {useState, useCallback} from 'react'

const useCounter = () => {
  const [counter, setCounter] = useState(0)

  const increment = useCallback(() => setCounter((c) => c + 1), [])

  return {
    counter,
    increment,
  }
}

export default useCounter

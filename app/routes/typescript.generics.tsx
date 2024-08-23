import { useState } from 'react'

// type Dispatch<A> = (value: A) => void
// type SetStateAction<S> = S | ((prevState: S) => S)

// function myUseState<S = undefined>(
//   initialState: S,
// ): [S, Dispatch<SetStateAction<S>>] {
//   let state = initialState

//   function setState(action: SetStateAction<S>) {
//     if (typeof action === 'function') {
//       state = (action as (prevState: S) => S)(state)
//     } else {
//       state = action
//     }
//   }

//   return [state, setState]
// }

export default function GenericsTS() {
  const [count, setCount] = useState<number>(0)

  // Generics
  type NewType<T = number> = {
    name: string
    someValue: T
  }

  // const user: NewType<string> = {
  //   name: 'Vasil',
  //   someValue: 123,
  // }

  const user: NewType = {
    name: 'Vasil',
    someValue: 123,
  }

  console.log(user)

  // Function
  interface GenericHello<T = number> {
    (arg: T): T
  }

  function hello<T>(arg: T): T {
    return arg
  }

  console.log(hello('hi'))
  console.log(hello<number>(123))

  const myHello: GenericHello<string> = hello
  const myNumber: GenericHello = hello
  console.log(myHello('hii'))
  console.log(myNumber(4))

  return (
    <>
      <h2 className="text-1xl">Generics in TypeScript</h2>▶{' '}
      <code>Open the code</code>
      <button
        className="spacing-1 m-4 block border-2 bg-yellow-100 p-4 text-gray-800"
        onClick={() => setCount(c => c + 1)}
      >
        {count}
      </button>
    </>
  )
}

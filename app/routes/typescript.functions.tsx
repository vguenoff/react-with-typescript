export default function FunctionsTS() {
  // Basic functions
  function doSomething(a: number, b: number): string {
    return String(a + b)
  }

  // Optional parameters
  function optionalParameters(a: number, b?: number): string {
    if (!b) return String(a)

    return String(a + b)
  }

  // Default parameters
  function defaultParameters(a: number, b: number = 10): string {
    return String(a + b)
  }

  // Call signatures
  interface MathOperations {
    (x: number, y: number): number
  }

  const add: MathOperations = (x, y) => x + y
  const subtract: MathOperations = (x, y) => x - y

  // Higher-order functions
  function higherOrder10(
    func: (a: number, b: number) => number,
    other: number,
  ): number {
    return func(other, 10)
  }

  // void
  function returnVoid(): void {
    console.log('returnVoid')
    return
  }

  returnVoid()

  const returnArrowVoid: () => void = () => {}
  returnArrowVoid()

  // unknown
  // function unknownFunction(a: unknown) {
  //   return a + 10
  // }

  // never
  // function neverReturnAValue(): never {
  //   throw new Error('error')
  // }

  // function neverIsTricky(x: string | number) {
  //   if (typeof x === 'string') {
  //     console.log('do something string')
  //   } else if (typeof x === 'number') {
  //     console.log('do something number')
  //   } else {
  //     return x;
  //   }
  // }

  // Function global type
  // function functionGlobalType(func: Function) {
  //   return func(1, 2)
  // }

  // Rest parameters
  function restParameters(n: number, ...m: number[]) {
    return m.map(x => x + n)
  }

  const a = restParameters(10, 1, 2, 3)
  console.log(a)

  // Parameter destruction
  type Params = {
    a: number
    b: number
    c: string
  }

  function parameterDestruction({ a, b, c }: Params) {
    console.log(a, b, c)
  }

  // Function overloading

  function combine(a: number, b: number): number
  function combine(a: string, b: string): string
  function combine(a: any, b: any) {
    if (typeof a === 'number' && typeof b === 'number') {
      return a + b
    } else if (typeof a === 'string' && typeof b === 'string')
      return a + ' ' + b
  }

  console.log(combine(1, 2))
  console.log(combine('Hello', 'World'))
  console.log(combine('Hello', 2))

  return (
    <>
      <h2 className="text-1xl">Functions in TypeScript</h2>▶{' '}
      <code>Open the code</code>
      <p>{defaultParameters(1)}</p>
      <p>{add(1, 1)}</p>
      <p>{subtract(2, 1)}</p>
      <p>{higherOrder10(add, 1)}</p>
    </>
  )
}

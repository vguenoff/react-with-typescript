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

export default function TypescriptBasic() {
  const hundred: number = 100
  const hello: string = 'hello'
  const largeNumber: bigint = BigInt('12837489012374')
  const isActive: boolean = false
  const uniqueKey: symbol = Symbol('description')
  const emptyValue: null = null
  let unitializedValue: undefined
  const person: { name: string; age: number } = {
    name: 'Bob',
    age: 100,
  }

  console.log({
    hundred: typeof hundred,
    hello: typeof hello,
    largeNumber: typeof largeNumber,
    isActive: typeof isActive,
    uniqueKey: typeof uniqueKey,
    emptyValue: typeof emptyValue,
    unitializedValue: typeof unitializedValue,
    person: typeof person,
  })

  return (
    <>
      <h2 className="text-1xl">Basic Types</h2>▶ <code>Open the console</code>
    </>
  )
}

export default function TypescriptAdvanced() {
  // Arrays
  const numbers: number[] = [1, 2, 3]
  const names: Array<string> = ['Alice', 'Bob', 'Beto']

  // Enums
  enum DarkMode {
    DARK = 'DARK',
    LIGHT = 'LIGHT',
    SYSTEM = 'SYSTEM',
  }

  const theme: DarkMode = DarkMode.DARK
  console.log(theme)

  // Interfaces
  interface Person {
    birthday?: string
  }

  interface Person {
    height?: number
  }

  interface User extends Person {
    id: number
    name: string
    age?: number
  }

  const user: User = {
    id: 123,
    name: 'Vasil',
    birthday: '20 June',
    height: 180,
  }

  console.log(user)

  // Type Aliases
  type Vehicle = {
    wheels: number
  }

  type Car = {
    brand: string
    year: number
  }

  const car: Vehicle & Car = {
    wheels: 4,
    brand: 'toyota',
    year: 2020,
  }

  console.log(car)

  // Literal types
  type Direction = 'north' | 'south'
  const direction: Direction = 'north'

  // Intersection types
  type A = { a: string }
  type B = {
    b: string
    //  a: number
  }
  type C = A & B

  const value: C = {
    a: 'a',
    b: 'b',
  }

  // Type Assertions and Casting
  const someValue: any = 'this is a string'
  const strLength: number = (someValue as string).length

  return (
    <>
      <h2 className="text-1xl">Advanced Types</h2>▶ <code>Open the code</code>
      <p>{theme === 'DARK' ? 'Light' : 'Dark'} theme</p>
      <p>{direction}</p>
    </>
  )
}

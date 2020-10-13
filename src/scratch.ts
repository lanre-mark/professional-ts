/* eslint-disable */

// Optional Chaining


type Foo<T extends any[]> = [boolean, ...T, boolean];

// Labelled Tuple Types
// type Address = [number, string, string, number] // house number, city, state, house number

type Address = [streetNumber: number, city: string, state: string, postal: number]; // house number, city, state, house number

function printAddress(...address: Address) {

}
printAddress(11, 'San Franciso', 'CA', 1231)

// Recursive Type Aliases / Interfaces

// type JSONValue  = string|number|boolean|null|JSONArray|JSONObject;
// interface JSONObject {
//   [k: string]: JSONValue
// }
// interface JSONArray extends Array<JSONValue> {}
// types can refer to themselves in the same definition
type JSONValue  = string|number|boolean|null|JSONValue[]| {
  [k: string]: JSONValue
}
const val: JSONValue = {
  name: 'mike',
  address: {
    street: "Spear St",
   
  }
}

// type literals for all possible combinations of values - Typescript 4.10
// type Corner = `${'top' | 'bottom'}-${'left' | 'right'}`;

// @ts-expect-error
const num1: number = 'hello';
// @ts-ignore
const num2: number = 'hello';


// TYPE GUARDS
function somethingRisky() {}

try {
  somethingRisky()
} catch (err: unknown) { // error Guard using unknown
  if (err instanceof Error) {
    console.log(err.stack)
  } else {
    console.log(err)
  }
}

function isError(err: any): err is Error {
  return err instanceof Error;
}

try {
  somethingRisky()
} catch (err: unknown) { // error Guard using unknown
  if (isError(err)) {
    console.log(err.stack)
  } else {
    console.log(err)
  }
}

function assertIsError(err: any): asserts err is Error {
  if (!(err instanceof Error)) throw new Error(`Not an error: ${err}`)
}

try {
  somethingRisky()
} catch (err: unknown) { 
  assertIsError(err);
  console.log(err.stack)
}





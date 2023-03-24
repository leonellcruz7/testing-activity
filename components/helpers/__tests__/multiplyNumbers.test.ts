import { multiplyNumbers } from '../multiplyNumbers'

describe('multiplyNumbers', () => {
  it('return the product of two numbers', () => {
    const num1 = 1
    const num2 = 2

    const expectedProduct = num1 * num2
    const actualProduct = multiplyNumbers(num1, num2)
    expect(actualProduct).toEqual(expectedProduct)
  })
  it('returns 0 when one input is 0', () => {
    const num1 = 1
    const num2 = 0
    const expectedProduct = 0
    const actualProduct = multiplyNumbers(num1, num2)
    expect(actualProduct).toEqual(expectedProduct)
  })
})

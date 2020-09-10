export const increment = (number, secondNumber) => {
  return {
    type: 'INCREMENT',
    payload: [number, secondNumber],
  }
}
// payload == data
export const decrement = () => {
  return {
    type: 'DECREMENT'
  }
}
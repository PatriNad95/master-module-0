// export const sum = (a: number, b: number): number => a + b
export const sum = (...operands: number[]): number =>
  operands.reduce((accumulator, current) => accumulator + current, 0)

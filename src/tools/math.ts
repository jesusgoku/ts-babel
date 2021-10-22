function add(...numbers: number[]): number {
  return numbers.reduce((acc: number, num: number) => acc + num, 0);
}

export { add };

function makeSortNumbersFn() {
  return function (a: number, b: number): number {
    return a - b;
  };
}

function makeSortStringsFn() {
  return function (a: string, b: string): number {
    return a.localeCompare(b);
  };
}

export { makeSortNumbersFn, makeSortStringsFn };

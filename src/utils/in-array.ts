export function inArray(arr: Array<any>, query: any): boolean {
  for (const value of arr) {
    if (value == query) {
      return true;
    }
  }

  return false;
}

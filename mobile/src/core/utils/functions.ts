export const compareArrays = (a: Array<any>, b: Array<any>) => {
  console.log(a, b);
  console.log(JSON.stringify(a) === JSON.stringify(b));
  console.log(JSON.stringify(a), JSON.stringify(b));
  return JSON.stringify(a) === JSON.stringify(b);
};

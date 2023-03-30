export const sortObj = (objs: any, propName: string) => {
  return objs.sort((a: any, b: any) => {
    if (a[propName] > b[propName]) {
      return 1;
    }
    if (a[propName] < b[propName]) {
      return -1;
    }
    return 0;
  });
};

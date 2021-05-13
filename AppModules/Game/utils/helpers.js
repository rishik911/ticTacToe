export const getAutomatedData = arr => {
  let row = 0;
  let col = 0;
  let res = [];
  if (arr[row + 2][col] === 0) {
    //2.0
    res.push(row + 2);
    res.push(col);
    return res;
  }
  if (arr[row + 1][col + 1] === 0) {
    //1,1
    res.push(row + 1);
    res.push(col + 1);
    return res;
  }
  if (arr[row][col] === 0) {
    //0,0
    res.push(row);
    res.push(col);
    return res;
  }
  if (arr[row][col + 1] === 0) {
    //0,1
    res.push(row);
    res.push(col + 1);
    return res;
  }
  if (arr[row + 2][col + 1] === 0) {
    //2,1
    res.push(row + 2);
    res.push(col + 1);
    return res;
  }

  if (arr[row + 1][col + 2] === 0) {
    //1,2
    res.push(row + 1);
    res.push(col + 2);
    return res;
  }
  if (arr[row][col + 2] === 0) {
    //0,2
    res.push(row);
    res.push(col + 2);
    return res;
  }

  if (arr[row + 2][col + 2] === 0) {
    //2,2
    res.push(row + 2);
    res.push(col + 2);
    return res;
  }
  if (arr[row + 1][col] === 0) {
    //1,0
    res.push(row + 1);
    res.push(col);
    return res;
  }
};

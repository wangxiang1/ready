function Find(target, array) {
  // write code here
  const len = array.length;
  if (len === 0) {
    return false;
  }
  var leftRow = 0;
  var rightRow = len - 1;

  var minlen = Math.floor((len - 1) / 2);
  var middle = array[minlen][minlen];

  while (minlen > 0) {
    if (target === middle) {
      return true;
    } else if (target < middle) {
      rightRow = minlen;
      minlen = Math.floor((minlen - 1) / 2);
      middle = array[minlen][minlen];
    } else if (target > middle) {
      leftRow = minlen;
      minlen = Math.floor((len - minlen - 1) / 2) + leftRow;
      middle = array[minlen][minlen];
    }
  }

  for (let i = leftRow; i < rightRow + 1; i++) {
    for (let j = leftRow; j < rightRow + 1; j++) {
      if (array[i][j] == target) {
        return true;
      }
    }
  }
  return false;
}

function test(func) {
  var start = new Date().getTime(); //起始时间

  func(7, [
    [1, 2, 8, 9],
    [2, 4, 9, 12],
    [4, 7, 10, 13],
    [6, 8, 11, 15]
  ]); //执行待测函数

  var end = new Date().getTime(); //接受时间

  return end - start + "ms"; //返回函数执行需要时间
}

// console.log('test:',test(Find1));

function add() {
  var sum = 0;
  for (var i = 0; i < 1000000; i++) {
    sum += i;
  }
  return sum;
}

// console.log(test(add));

function Find1(target, array) {
  const len = array.length > 0 ? array[0].length : 0;
  let row = 0;
  let col = len - 1;

  while (col > -1 && row < len) {
    console.log("find1===========", row, col);
    if (target === array[row][col]) {
      return true;
    } else if (target > array[row][col]) {
      row++;
    } else if (target < array[row][col]) {
      col--;
    }
  }

  return false;
}

console.log(
  Find1(15, [
    [1, 2, 8, 9],
    [2, 4, 9, 12],
    [4, 7, 10, 13],
    [6, 8, 11, 15]
  ])
); //执行待测函数

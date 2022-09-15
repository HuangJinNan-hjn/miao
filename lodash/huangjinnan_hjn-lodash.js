var huangjinnan_hjn = {
  chunk: function (arr, size) {
    let a = [];
    let rest = arr.length % size;
    let c = [];
    for (let i = 0; i < Math.floor(arr.length / size); i++) {
      let b = [];
      for (let j = 0; j < size; j++) {
        b.push(arr[i * size + j]);
      }
      a.push(b);
    }
    if (rest) {
      for (let i = 0; i < rest; i++) {
        c.push(arr[arr.length - rest + i]);
      }
      a.push(c);
    }
    return a;
  },

  compact: function (arr) {
    let a = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i]) {
        a.push(arr[i]);
      }
    }
    return a;
  },

  difference: function () {
    let head = arguments[0];
    let rest = Array.from(arguments).slice(1).flat();
    let a = [];
    for (let i = 0; i < head.length; i++) {
      if (rest.indexOf(head[i]) == -1) {
        a.push(head[i]);
      }
    }
    return a;
  },

  drop: function (arr, num) {
    if (num > arr.length) {
      return [];
    }
    for (let i = 0; i < num; i++) {
      arr.shift();
    }
    return arr;
  },

  dropRight: function (arr,num) {
    if (num > arr.length) {
      return [];
    }
    for (let i = arr.length - 1; i > arr.length - 1 - num; i--) {
      arr.pop();
    }
    return arr;
  },

  fill: function (arr, ...values) {
    if (values.length == 1) {
      for (let i = 0; i < arr.length; i++) {
        arr[i] = values[0];
      }
      return arr;
    }
    for (let i = values[1]; i < values[2]; i++) {
      arr[i] = values[0];
    }
    return arr;
  },

  flatten: function (arr) {
    let a = [];
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        for (let j = 0; j < arr[i].length; j++) {
          a.push(arr[i][j]);
        }
      } else {
        a.push(arr[i]);
      }
    }
    return a;
  },

  flattenDeep: function (arr) {
    let a = [];
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        a = a.concat(this.flattenDeep(arr[i]));
      } else {
        a.push(arr[i]);
      }
    }
    return a;
  },

  flattenDepth: function (arr, depth = 1) {
    let a = [];
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i]) && depth > 0) {
        depth--;
        a = a.concat(this.flattenDepth(arr[i],depth));
      } else {
        a.push(arr[i]);
      }
    }
    return a;
  },

  head: function (arr) {
    if (!arr.length) {
      return undefined;
    }
    return arr[0];
  },

  indexOf: function (arr, num, fromIndex) {
    if (fromIndex > arr.length - 1) {
      return -1;
    }
    if (!fromIndex) {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] == num) {
          return i;
        }
      }
    }
    if (fromIndex) {
      for (let i = fromIndex; i < arr.length; i++) {
        if (arr[i] == num) {
          return i;
        }
      }
    }
  },

  initial: function (arr) {
    return arr.pop();
  },

  join: function (arr, str) {
    let a = "";
    for (let i = 0; i < arr.length; i++) {
      a +=`${ arr[i]}${str}`;
    }
    return a.slice(0,a.length-1);
  },

  last: function (arr) {
    return arr[arr.length - 1];
  },

  lastIndexOf: function(arr, num, fromIndex = arr.length - 1) {
    if (fromIndex < 0) {
      return -1;
    }
    for (let i = fromIndex; i > -1; i--) {
      if (arr[i] == num) {
        return i;
      }
    }
  },

  pull: function (arr, str1, str2) {
    let a = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== str1 && arr[2] !== str2) {
        a.push(arr[i]);
      }
    }
    return a;
  },

  reverse: function (arr) {
    let half = Math.floor(arr.length / 2);
    let j = arr.length - 1;
    let tem = 0;
    console.log(half , j);
    for (let i = 0; i < half; i++) {
       tem = arr[j];
      arr[j] = arr[i];
      arr[i] = tem;
      j--;
    }
    return arr;
  },

  sortIndex: function (arr, num) {
    for (let i = 0; i < arr.length - 1; i++) {
      if (num < arr[i]) return i;
    }
    return -1;
  },

  // union: function () {
  //   let a = [];
  //   for (let keys in arguments) {
  //     a.push(...arguments[keys])
  //   }
  //  return [...new Set(a)];
  // }

  union: function (...ary) {
    let arr = ary.flat();
    let unique = [];
    for (let i = 0; i < arr.length; i++) {
      if (unique.indexOf(arr[i]) == -1) {
        unique.push(arr[i]);
      }
    }
    return unique;
  }

}

console.log(huangjinnan_hjn.union([2],[1,2],[3,4]) );
console.log(huangjinnan_hjn.lastIndexOf([1,2,1,2],2,-22) );

var huangjinnan_hjn = {
  chunk: function (arr, size) {
    let a = [];
    let rest = arr.length % size;
    let c = [];
    for (let i = 0; i < Math.floor(arr.length / size); i++) {
      let b = [];
      for (let j = 0; j < size; j++) {
        b.push(arr[i *size + j]);
      }
      a.push(b);
    }
    if(rest) {
      for(let i=0;i<rest;i++) {
        c.push(arr[arr.length - rest + i]);
      }
      a.push(c);
    }
    return a;
  }
}

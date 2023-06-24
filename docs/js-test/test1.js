function deepClone(originObj, copyRes = {}) {
  for (let prop in originObj) {
    if (originObj.hasOwnProperty(prop)) {
      if (typeof originObj[prop] === "object" && originObj[prop] !== null) {
        if (Array.isArray(originObj[prop])) {
          copyRes[prop] = [];
        } else {
          copyRes[prop] = {};
        }
        deepClone(originObj[prop], copyRes[prop]);
      } else {
        copyRes[prop] = originObj[prop];
      }
    }
  }
  return copyRes;
}

const originA = [
  4,
  5,
  {
    bbb: 111,
  },
];

const copyA = deepClone(originA, []);

console.log(originA); // [ 1, { aaa: 111 } ]
console.log(copyA); // [ 1, { aaa: 111 } ]

copyA[1] = 2;
copyA[2].bbb = "222";

console.log(originA); // [ 1, { aaa: '222' } ]
console.log(copyA); // [ 2, { aaa: '222' } ]
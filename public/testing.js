

function sum(...x) {
    let total = x.reduce(fn, 1)
    function add(...y) {
        if(y.length) {
            total = y.reduce(fn, total)
            return add
        }else {
            return total;
        }
        
    }
    return add 
}

const fn = (acc,curr) => acc = acc*curr
// console.log(sum(1)(2)(3)(4)());



const parent = (fn1) => {
    return function(...x) {
        let total = x.reduce(fn1, 1)
        function add(...y) {
            if(y.length) {
                total = y.reduce(fn1, total)
                return add
            }else {
                return total;
            }
        }
        return add
    }
}
const fn1 = (acc,curr) => acc = acc*curr
// console.log(parent(fn1)(1,2)(2,3)());



const tobeFlatten = [1,[2,3],[3,4,5,[6,7]]];


function toFlatten(values){
    let op = []
    values.forEach((e) => {
        if(Array.isArray(e)) {
            op =  [...op, ...toFlatten(e)]
        }else {
            op = [...op, e];
        }
    })
    return op;
}
// c
// toFlatten(tobeFlatten)

const promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 5000, 'promise1');
  });
  
  const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 9000, 'promise2');
  });
  
  const promises = [promise1, promise2];
  
  function race(promises){
    return new Promise((resolve,reject) => {
      promises.forEach(element => {
        Promise.resolve(element)
          .then(resolve)
          .catch(reject)
      });
    });
  };
  
//   race(promises).then((data) => console.log('race', data))


  console.log("A");

for (let i = 0; i < 2; i++) {
  Promise.resolve(i).then((value) => console.log(`Promise ${value}`)); // Q
  setTimeout(() => console.log("SetTimeout", i), 1000); // Q
}

let interval = setInterval(() => {
  console.log("SetInterval");
  return clearInterval(interval);
}, 1000); // Q

setTimeout(() => {
  console.log("B");
}, 0); // Q 

new Promise((res, rej) => {
  console.log("C");
  res("D");
}).then((val) => {
  console.log(val); // Q 
});

console.log("E");


// A
// C 
// E
// Promise 0
// Promise 1
// D 
// B 
// SetTimeout 0
// SetTimeout 1 
// SetInterval


// console.log({ x: 5 } == { x: 5 });

// const fn = (function (x) {
//   delete x;
//   return x;
// })(5);
// console.log(fn);

// var length = 10;
// const lenObj = {
//   length: 11,
//   calculateLen() {
//     console.log('arguments[0]', arguments[0]);
//     arguments[0]();
//   },
// };
// function printLength() {
//   console.log('this', this);
//   console.log(this.length);
// }
// lenObj.calculateLen(printLength, "a", "b", "c");

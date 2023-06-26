console.log('script start')

async function async1() {
  await async2()
  console.log('async1 end')
}
async function async2() {
  console.log('async2 end') 
}
async1()

setTimeout(function() {
  console.log('setTimeout')
}, 0)

new Promise(resolve => {
  console.log('Promise')
  resolve()
})
  .then(function() {
    console.log('promise1')
  })
  .then(function() {
    console.log('promise2')
  })

console.log('script end')



等执行栈中的所有同步代码执行完后(这个过程中但凡遇到异步代码都会往任务队列放)
就会到任务队列中获取可以执行的异步任务放到执行栈中执行(先获取微任务队列，再看宏任务队列)
这个过程中又有异步代码产生，又放到任务队列去，等执行栈中清空后，又从任务队列获取任务执行

// script start
// Promise
// script end
// async2 end
// async1 end
// promise1
// promise2
// setTimeout
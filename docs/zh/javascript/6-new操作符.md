# new 操作符

[[toc]]

new 运算符创建一个用户定义的对象类型的实例或具有构造函数的内置对象的实例。

## new 一个构造函数发生了啥

1. 创建一个空的简单 JavaScript 对象（即 {}）；

2. 然后将空对象的 `__proto__` 指向构造函数的原型；

:::tip
它将新生成的对象的 `__proto__` 属性赋值为构造函数的 `prototype` 属性，使得通过构造函数创建的所有对象可以共享相同的原型；

这意味着同一个构造函数创建的所有对象都继承自一个相同的对象，因此它们都是同一个类的对象；
:::

3. 构造函数内部的 `this` 被赋值为这个新对象（this 指向新对象）；

4. 执行构造函数内部的代码（给新对象添加属性）；

5. 如果构造函数返回非空对象，则返回该对象；否则返回刚创建的新对象；

## 实现 myNew

```js
function myNew() {
  // arguments是一个类数组，借用数组的slice方法变成一个真数组
  const args = Array.prototype.slice.call(arguments);

  // 判断构造函数类型，必须是一个函数
  const myCotr = args.shift();
  if (typeof myCotr !== "function") {
    throw new TypeError("argument must be a function!");
  }

  // 创建实例
  const newInstance = Object.create(myCotr.prototype);

  // 将构造函数的this指向新创建的对象，执行构造函数
  const res = myCotr.apply(newInstance, args);

  // 如果返回值是对象则返回它，否则返回新创建的对象
  return res instanceof Object ? res : newInstance;
}

---------------------------------------------

function parent(name) {
  this.name = name;
}

const newParent1 = myNew(parent, "hu");
console.log(newParent1); // parent { name: 'hu' }

const newParent2 = myNew(parent, "deng");
console.log(newParent2); // parent { name: 'deng' }
```

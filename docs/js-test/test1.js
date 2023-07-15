Function.prototype.myCall = function (context, ...args) {
  // 检查函数是否是有效的可调用对象
  if (typeof this !== "function") {
    throw new TypeError(`${this} is not a function`);
  }

  // 检查上下文是否为null或未定义
  context = context || window;

  // 为函数创建唯一的键
  const key = Symbol();

  // 使用唯一键将函数分配给上下文
  context[key] = this;

  // 使用提供的上下文和参数调用函数
  const result = context[key](...args);

  // 从上下文中删除函数
  delete context[key];

  return result;
};


function greet(name) {
  console.log(`Hello, ${name}! I'm ${this.name}.`);
}

const person = {
  name: 'John'
};

greet.myCall(person, 'Alice'); // Output: Hello, Alice! I'm John.
var aaa = 'window aaa';

const obj = {
  aaa: 'obj aaa',
  bbb: {
    aaa: 'bbb aaa',
    func: function() {
      console.log(this.aaa);
    }
  }
}

obj.bbb.func();
class Transaction {
  perform(anyMethod, wrappers) {
    wrappers.forEach(w => w.initialize())
    anyMethod();
    wrappers.forEach(w => w.close())
  }
}

let transaction = new Transaction()

let oldFun = () => {
  console.log("原有的逻辑...")
}

transaction.perform(oldFun, [{
  initialize() {
    console.log("初始化1")
  },
  close() {
    console.log("关闭1")
  }
}, {
  initialize() {
    console.log("初始化2")
  },
  close() {
    console.log("关闭2")
  }
}])
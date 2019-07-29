class Transaction {
  perform(anyMethod, wrapper) {
    wrapper.initialize()
    anyMethod();
    wrapper.close();
  }
}

let transaction = new Transaction()

let oldFun = () => {
  console.log("原有的逻辑...")
}

transaction.perform(oldFun, {
  initialize() {
    console.log("初始化")
  },
  close() {
    console.log("关闭")
  }
})
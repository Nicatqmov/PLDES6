class MyClass {
    #privateField1;
    #privateField2;
    
    static instanceCount = 0;
  
    constructor(privateField1, privateField2) {
      this.setPrivateField1(privateField1);
      this.setPrivateField2(privateField2);
      MyClass.instanceCount++;
    }
  
    static getInstanceCount() {
      return MyClass.instanceCount;
    }
  
    static staticMethod1() {
      console.log('Executing staticMethod1');
    }
  
    static staticMethod2() {
      console.log('Executing staticMethod2');
    }
  
    getPrivateFields() {
      return {
        privateField1: this.#privateField1,
        privateField2: this.#privateField2
      };
    }
  
    setPrivateField1(value) {
      if (typeof value !== 'number') {
        throw new Error('privateField1 must be a number');
      }
      this.#privateField1 = value;
    }
  
    setPrivateField2(value) {
      if (typeof value !== 'string') {
        throw new Error('privateField2 must be a string');
      }
      this.#privateField2 = value;
    }
  }
  
  try {
    const instance1 = new MyClass(10, 'Hello');
    console.log('Instance 1 private fields:', instance1.getPrivateFields());
  
    const instance2 = new MyClass(20, 'World');
    console.log('Instance 2 private fields:', instance2.getPrivateFields());
  
    console.log('Instance count:', MyClass.getInstanceCount());
  
  } catch (error) {
    console.error('Error:', error.message);
  }
  
  MyClass.staticMethod1();
  MyClass.staticMethod2();
  
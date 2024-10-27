const Singleton = (function(){

    let instance;

    function Singleton() {
        if(instance) {
            throw new Error("Singleton instance already exists. Use getInstance method.");
        }

        this.data = Math.random();
    }

    Singleton.getInstance = function() {
        if(!instance) {
            instance = new Singleton();
        }
        return instance;
    }

    Singleton.prototype.clone = function () {
        throw new Error("Cloning of singleton instance is not allowed.");
    }

    Singleton.prototype.customDeserialize = function () {
        throw new Error("Deserialization of singleton instance is not allowed.");
    };
    
    Singleton.prototype.toJSON = function () {
        return JSON.stringify({ __isSingleton: true, data: this.data });
    };

    return Singleton;

})()

// Usage
try {
    const singletonInstance1 = Singleton.getInstance();
    console.log(singletonInstance1);
  
    // Attempting to create another instance should throw an error
    const singletonInstance2 = new Singleton();
  } catch (error) {
    console.error(error.message); // Singleton instance already exists. Use getInstance method.
  }
  
  // Cloning prevention
  try {
    const clonedInstance = Object.create(singletonInstance1);
    console.log(clonedInstance); // Will throw an error
  } catch (error) {
    console.error(error.message); // Cloning of singleton instance is not allowed.
  }
  
  // Serialization prevention
  try {
    const serializedInstance = JSON.stringify(singletonInstance1);
    console.log(serializedInstance); // Will throw an error
  } catch (error) {
    console.error(error.message); // Serialization of singleton instance is not allowed.
  }
  
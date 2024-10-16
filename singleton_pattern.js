class Singleton {

    //The instance property that holds the singleton instance
    static instance = null;

    //Private constructor to prevent direct class instantiation
    constructor() {
        if(Singleton.instance){
            // If instance exists return it
            return Singleton.instance 
        }

        //Initialize the property that you need.
        this.data = 'Singleton instance';

        //Store the instance for future use;
        Singleton.instance = this;
        // Return the instance
        return this;
    }

    //Example method
    getData() {
        return this.data;
    }

    setData(newData) {
        this.data = newData;
    }
}

const instance1 = new Singleton();
const instance2 = new Singleton();
const clonedInstance = Object.assign({}, new Singleton());

console.log(instance1 === instance2); // true, both are same instance

instance1.setData('Updated singleton instance')

console.log(instance2.getData()); // Updated singleton instance

console.log(instance1 === clonedInstance); // SIngleton is broken when you create a cloned instance.

/**** ==================================== *****/

// How this breaks the Singleton:
    // 1. Direct Instantiation:
    // 2. Object Cloning:

// How to prevent breaking:
    // 1. Make constructor truly private
    // 2. Freeze the instance
    // 3. Prevent object cloning

const trueSingleton = (function() {
    let instance;

    function SingletonClass () {
        if(instance) {
            throw new Error('Use exposed public methos getInstance instead');
        }

        let data = 'Singleton instance';

        return Object.freeze({
            getData: function() {
                return data;
            },
            setData: function(newData) {
                data = newData
            },
        })
    }

    return ({
        getInstance: function() {
            if(!instance) {
                instance = new SingletonClass();
            }
            return instance;
        }
    })
})();
console.log("/**** ==================================== *****/");
const inst1= trueSingleton.getInstance();
console.log(inst1.getData())

const inst2= trueSingleton.getInstance();
console.log(inst1 === inst2);

inst2.setData('Updated Singleton')
console.log(inst1.getData())

const clonedInst = Object.assign({}, inst1);
console.log(clonedInst.getData())




/**
 * The Strategy Pattern is a behavioral design pattern that allows you to define a family of algorithms or strategies, 
 * encapsulate each one as a separate class, and make them interchangeable. This pattern lets you vary the behavior 
 * of a class based on which strategy is used, without changing the client code.
 * 
 */

// Step1: Define Different Strategies

class GroundShipping {
    calculate(weight) {
        weight * 1.5 // $1.5 per kg    
    }
}

class AirShipping {
    calculate(weight) {
        weight * 3 // $3 per kg    
    }
}

class ExpressShipping {
    calculate(weight) {
        weight * 5 // $3 per kg    
    }
}

//Create the Strategy Context
/**
 * The ShippingContext class will use a strategy (which can be changed dynamically) to calculate the shipping cost.
 */

class ShippingContext {
    constructor(strategy) {
        this.strategy = strategy;
    }

    setStrategy(newStrategy) {
        this.strategy = newStrategy;
    }

    calculateCost(pkgWeight) {
        return this.strategy.calculate(pkgWeight);
    }
}

//Step 3: Using the Strategy Pattern

const groundShipping = new GroundShipping();
const airShipping = new AirShipping();
const expressShipping = new ExpressShipping();

const pkgWeight = 10;

const shippingContext = new ShippingContext(groundShipping)
console.log(shippingContext.calculateCost(pkgWeight));

shippingContext.setStrategy(airShipping);
console.log(shippingContext.calculateCost(pkgWeight));

shippingContext.setStrategy(expressShipping)
console.log(shippingContext.calculateCost(pkgWeight));

/**
 * 
 * 1. Encapsulation of Algorithms: Each strategy encapsulates a specific algorithm (e.g., ground, air, or express shipping).
 * 2. Interchangeable Strategies: The ShippingContext can switch between different strategies dynamically without modifying 
 * its own logic.
 * 3. Loose Coupling: The ShippingContext is decoupled from specific strategy implementations, following 
 * the open/closed principle (open for extension, closed for modification).
 */
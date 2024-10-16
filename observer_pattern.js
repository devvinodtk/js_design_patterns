class Observer {
    update(temp) {
        throw new Error('This method needs to be overriden');
    }
}

class WeatherStation {
    constructor() {
        this.observers = [];
        this.temp = 0;
    }

    subscribe(observer) {
        this.observers.push(observer);
    }

    unsubscribe(observer) {
        this.observers = this.observers.filter(ob=> ob != observer)
    }

    notify() {
        this.observers.forEach(obs => obs.update(this.temp))
    }

    setTemp (temp) {
        this.temp = temp;
        this.notify();
    }
}

class PhoneDisplay extends Observer {
    update(temp) {
        console.log(`Phone Display: The current temperature is ${temp}°C`);
    }
}

class WindowDisplay extends Observer {
    update(temp) {
        console.log(`Window Display: The current temperature is ${temp}°C`);
    }
}

const weatherStation = new WeatherStation();

const phoneDisplay = new PhoneDisplay();
const windowDisplay = new WindowDisplay();

weatherStation.subscribe(phoneDisplay);
weatherStation.subscribe(windowDisplay);

weatherStation.setTemp(40);

weatherStation.setTemp(50);

weatherStation.unsubscribe(phoneDisplay);

weatherStation.setTemp(30);
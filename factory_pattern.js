class Developer {
    constructor(name) {
        this.name = name;
        this.role = "Developer";
    }
}

class Tester {
    constructor(name) {
        this.name = name;
        this.role = "Tester";
    }
}

const list = function() {
    console.log('Hello I am ', this.name, 'and I am a ', this.role)
}


class EmployeeFactory {
    constructor() {
        this.create = (name, role) => {
            switch (role) {
                case 'dev':
                    return new Developer(name);
                case 'test':
                    return new Tester(name);
            }
        };
    }
}

const empFactory = new EmployeeFactory();

const employees = [];

employees.push(empFactory.create('Patrick', 'dev'));
employees.push(empFactory.create("John", 'test'))
employees.push(empFactory.create("Jamie", 'dev'))
employees.push(empFactory.create("Taylor", 'dev'))
employees.push(empFactory.create("Tim", 'test'))

employees.forEach(emp => {
    list.call(emp);
})


/*class Developer {
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
*/

/** =============================================================================== */

const createUser = (role, userInfo) => {
    const user = {
        name: userInfo.name,
        password: userInfo.password
    };

    const specificInfo = {
        admin: ()=> ({ role: 'Admin', key: userInfo.key}),
        customer: () => ({ role: 'Customer', address: userInfo.address}),
        seller: () => ({role: 'Seller', shopeAddress: userInfo.address, contact: userInfo.contact })
    };

    const additionalInfo = specificInfo[role] ? specificInfo[role]() : null;

    if(!additionalInfo) {
        throw Error('Invalid role specified');
    }

    return {...user, ...additionalInfo };

}

const adminUser = createUser('admin', {
    name: 'Abhishek',
    password: 'Abhi1233',
    key: '#1244534-fadsv34'
});

const customerUser = createUser('customer', {
    name: 'John Doe',
    password: 'Password123',
    address: '123 Main St'
});

const sellerUser = createUser('seller', {
    name: 'Jane Smith',
    password: 'SellerPass',
    shopAddress: '456 Market St',
    contact_No: '123-456-7890'
});

console.log('Admin User:', adminUser);

console.log('Customer User:', customerUser);

console.log('Seller User:', sellerUser);
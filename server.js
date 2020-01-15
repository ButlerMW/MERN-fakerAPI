// import faker from 'faker';
const express = require("express");
const faker = require("faker");
const app = express();

app.get("/", (req, res) => {
    res.send("Our express api server is now sending this over to the browser");
});
app.get("/", (req, res) => {
    res.send("Our express api server is now sending this over to the browser");
});

class User {
    constructor() {
        this._id = faker.random.uuid();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}

class Company {
    constructor() {
        this._id = faker.random.uuid();
        this.name = faker.company.companyName();
        this.street = faker.address.streetName();
        this.city = faker.address.city();
        this.state = faker.address.state();
        this.zipCode = faker.address.zipCode();
        this.country = faker.address.country();
    }
}
console.log(new User());
console.log(new Company());

const server = app.listen(8000, () =>
    console.log(`server is locked and loaded on port ${server.address().port}!`)
    );
app.get("/user", (req, res) => {
    res.send(new User());
});
app.get("/company", (req, res) => {
    res.send(new Company());
});
app.get("/user/company", (req, res) => {
    res.send(new Company());
});
app.get("/user/company/new", (req, res) => {
    res.send(new Company());
});
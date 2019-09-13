const {Given, When, Then} = require('cucumber');
const LoginPage = require('./Page/LoginPage.js');
const CustomersInfoPage = require('./Page/CustomersInfoPage');
const CustomersDataPage = require('./Page/CustomersDataPage');
const chai = require('chai');
const expect = chai.expect;

const newLoginPage = new LoginPage();
const customersInfoPage = new CustomersInfoPage();

Given('I open page', async function () {
    await newLoginPage.open();
});

When('I choose manager account', async function () {
    await newLoginPage.login('manager')
});

When('I choose Add Customer', async function () {
    await customersInfoPage.clickAddCustomerMain()
});


When('I enter {string} in First name field', async function (string) {
    await customersInfoPage.addFirstName(string)
  })

When('I enter {string} in Last name field', async function (text) {
    await customersInfoPage.addLastName(text)
});

When('I enter {string} in Post code field', async function (text) {
    await customersInfoPage.addPostCode(text)
});

When('Click add customer btn', async function () {
    await customersInfoPage.clickAddCustomer()
});

Then('I check {string} text in alert message', async checkAlertText => {
    const alertText = await customersInfoPage.checkAlertText();
    expect(alertText).to.include(checkAlertText)
})

When('Close alert message', async function () {
    await customersInfoPage.closeAlertMessage();
})

When('Click customer button', async function () {
    await customersInfoPage.clickCustomers()
})

Then('Check user in table', async function () {
    await customersInfoPage.findCustomer(CustomersDataPage.name).then(function (text) {
        expect(text).to.equal(true)
    })
})

When('Delete user', async function () {
    await customersInfoPage.deleteByName(CustomersDataPage.name)
})

Then('Check user not in table', async function () {
    await customersInfoPage.findCustomer(CustomersDataPage.name).then(function (text) {
        expect(text).to.equal(false)
    })
})

// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require('./Employee')

class Manager extends Employee {
  constructor(name, id, email, role, office number) {
    super(name, role, id, email)
    this.officenum = officenum,
      this.role = 'Manager'
  }

  getofficenum() {
    return this.officenum
  }
}

module.exports = Manager
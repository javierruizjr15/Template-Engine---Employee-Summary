// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require('./Employee')

class Intern extends Employee {
  constructor(name, id, email, role, school) {
    super(name, role, id, email)
    this.school = school,
      this.role = 'Intern'
  }

  getschool() {
    return this.school
  }
}

module.exports = Intern
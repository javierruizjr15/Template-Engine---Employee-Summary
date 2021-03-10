const inquirer = require('inquirer')
const fs = require('fs')

let userarray = []

const User = () => {

  inquirer.prompt([
    {
      type: 'prompt',
      name: 'name',
      message: 'Enter your name:'
    },
    {
      type: 'prompt',
      name: 'id',
      message: 'Enter your id:'
    },
    {
      type: 'prompt',
      name: 'email',
      message: 'Enter your email:'
    },
    {
      type: 'prompt',
      name: 'role',
      message: 'Enter your role:'
    }
  ])
    .then(res => {
      console.log(res)
      userarray.push(res)

    })
    .catch(err => console.log(err))
}

User()

console.log(userarray)

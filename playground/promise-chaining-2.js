require('../src/db/mongoose')
const Task = require('../src/models/task')

Task.findByIdAndDelete('61e70a2eaa3eb35d58cad99d').then((task) => {
    console.log('deleted: ' + task)
    return Task.countDocuments({completed: false})
}).then((result) => {
    console.log('remaining incomplete: ' + result)
}).catch((e) => {
    console.log(e)
})


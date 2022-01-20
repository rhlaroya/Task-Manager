require('../src/db/mongoose')
const { update } = require('../src/models/user')
const User = require('../src/models/user')
const Task = require('../src/models/task')
// User.findByIdAndUpdate('61e7237c96700c05d82a28a6, {age: 18}).then((user)=> {
//     console.log(user)
//     return User.countDocuments({ age : 18})
// }).then((result)=> {
//     console.log(result)
// }).catch((e)=>{
//     console.log(e)
// })

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age })
    const count = await User.countDocuments({ age })
    return count
}

updateAgeAndCount('61e7237c96700c05d82a28a6', 19).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndRemove(id)
    const count = await Task.countDocuments({complete: false})
    return count
}

deleteTaskAndCount('61e76a20cd90fa40f85c1e8d').then((count) => {
    console.log(count)
}).catch((err) =>{
    console.error(err)
})
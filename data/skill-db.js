const skills = [
  {text: 'three.js', acquired: false, _id: 125223},
  {text: 'express.js', acquired: true, _id: 127904},
  {text: 'node.js', acquired: true, _id: 139608},
  {text: 'blendr', acquired: false, _id: 139608},
  {text: 'functions', acquired: true, _id: 139608},
  {text: 'arrays', done: true, _id: 139608},
  {text: 'objects', done: true, _id: 139608},
  {text: 'sadness.js', acquired: false, _id: 139608},
]

const find = (conditions, callback) => {
  // see if this works, if not, execute the code in the catch block
  try {
    // make sure that conditions is an object - if not throw a TypeError
    if (!(conditions instanceof Object)){
      throw new TypeError('Please pass in an object')
    }
    // If the object is empty, return all the skills
    if (Object.keys(conditions).length === 0) return callback(null, skills)
	// deal with errors
  } catch (error) {
    console.log(error)
    callback(error, [])
  }
}

const findById = (id, callback) =>{
  try {
    const skill = skills.find(skill => skill._id === parseInt(id))
    if (!skill) throw new Error ('No skill was found')
    return callback(null, skill)
  } catch (error) {
    console.log(error)
    return callback(error, null)
  }
}

function create (skill, callback) {
  skill._id = Date.now() % 1000000
  skill.acquired = false
  skills.push(skill)
  return callback(null, skill)
}

function findByIdAndDelete(id, callback) {
  try { 
    const idx = skills.findIndex(skill => skill._id == parseInt(id))
    const deletedSkill = skills.splice(idx, 1)
    if (!deletedSkill.length ) throw new Error ('No skill was deleted')
    return callback(null, deletedSkill[0])
  } catch(error) {
    return callback(error, null)
  }
}

export { 
	find, 
  findById,
  create,
  findByIdAndDelete
}
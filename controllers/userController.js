const User = require('../models/UserModel')

exports.createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body
    const user = await User.create({ name, email, password })
    res.json(user)
  } catch (error) {
    console.error('Error creating user:', error)
    res.status(500).json({ error: 'An error occurred while creating user' })
  }
}

exports.getUserById = async (req, res) => {
  try {
    const { id } = req.params
    const user = await User.findByPk(id)
    if (!user) {
      return res.status(404).json({ error: 'User not found' })
    }
    res.json(user)
  } catch (error) {
    console.error('Error getting user:', error)
    res.status(500).json({ error: 'An error occurred while getting user' })
  }
}

exports.getUsers = async (req, res) => {
  try {
    const users = await User.findAll()
    if (!users) {
      return res.status(404).json({ error: 'User not found' })
    }
    res.json(users)
  } catch (error) {
    console.error('Error getting user:', error)
    res.status(500).json({ error: 'An error occurred while getting user' })
  }
}

exports.updateUserById = async (req, res) => {
  try {
    const { id } = req.params
    const { name, email, password } = req.body
    const user = await User.findByPk(id)
    if (!user) {
      return res.status(404).json({ error: 'User not found' })
    }
    user.name = name
    user.email = email
    user.password = password
    await user.save()
    res.json(user)
  } catch (error) {
    console.error('Error updating user:', error)
    res.status(500).json({ error: 'An error occurred while updating user' })
  }
}

exports.deleteUserById = async (req, res) => {
  try {
    const { id } = req.params
    const user = await User.findByPk(id)
    if (!user) {
      return res.status(404).json({ error: 'User not found' })
    }
    await user.destroy()
    res.json({ message: 'User deleted successfully' })
  } catch (error) {
    console.error('Error deleting user:', error)
    res.status(500).json({ error: 'An error occurred while deleting user' })
  }
}

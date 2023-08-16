import user from '../../models/userModel.js'

const createUser = async (req, res) => {

    try {
        const user = req.body
        const result = await user.create(user)

    } catch(err) {
        console.log(err)
        res.status(500).json({message: 'Server error'})
    }

}

export default createUser
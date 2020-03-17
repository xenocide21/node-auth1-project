// const bcrypt = require('bcryptjs')
// const Users = require('../users/uMod')

const sessions = {}

function restrict() {
    const aErr = {
        msg: 'Invalid'
    }

    return async (r, re, n) => {
        try {
            // const { username, password} = r.headers
            //     console.log(username, password)
            // if (!username || !password) {
            //     return re.status(401).json(aErr)
            // }
            // const user = await Users.findBy({username}).first()
            //     console.log(user)
            // if(!user) {
            //
            //     return re.status(401).json(aErr)
            // }
            //
            // const pValid = await bcrypt.compare(password, user.password)
            //     console.log(pValid)
            // if (!pValid) {
            //
            //     return re.status(401).json(aErr)
            // }

            if(!r.session || !r.session.user){
                return re.status(401).json(aErr)
            }

            n()
        } catch (e) {
            n(e)
        }
    }
}

module.exports = restrict
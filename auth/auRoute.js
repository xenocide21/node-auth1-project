const express = require('express')
const bcrypt = require('bcryptjs')
const Users = require('../users/uMod')

const router = express.Router()

router.post('/register', async (r, re, n)=>{
    try {
        const {username} = r.body
        const user = await Users.findBy({username}).first()

        if (user) {
            return re.status(409).json({msg:'Username Unavailable'})
        }

        re.status(201).json(await Users.add(r.body))
     } catch (e) {
        n(e)
    }
})

router.post('/login', async (r, re, n)=>{
    try {
        const {username, password} = r.body
        const user = await Users.findBy({username}).first()

        const pValid = await bcrypt.compare(password, user.password)

        if(!user || !pValid) {
            return re.status(401).json({msg:'Invalid Authentication'})
        }
        re.json({msg:`Welcome ${user.username}`})
    } catch (e) {
        n(e)
    }
})

module.exports = router
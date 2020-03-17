const express = require("express")
const Users = require("./uMod")
const restrict = require("../mw/restrict")

const router = express.Router()

router.get("/", restrict(), async (r, re, n) => {
    try {
        r.json(await Users.find())
    } catch(err) {
        n(err)
    }
})

module.exports = router
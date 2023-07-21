const { createUser } = require("./user.contoller");
const router = require('express').Router()

router.post("/", createUser);

// router.get('/' , (req , res)=>{
//     // router code here
// })


// router.get('/another-route' , (req , res)=>{
//     // router code here
// })

module.exports  = router;
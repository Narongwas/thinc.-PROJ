const bcrypt = require('bcrypt')
const User = require('../models/User')


module.exports = (req,res) => {
    const {email,password} = req.body

    User.findOne({ email:email}).then((user) => {
        console.log(user)

        if(user){
            let cmp = bcrypt.compare(password , user.password).then((match) => {
                if (match){
                    req.session.userId = user._id
                    res.redirect(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/main`)
                }
                else{
                    req.flash('validationErrors', ['email or password is incorrect'])
                    req.flash('email', req.body.email)
                    return res.redirect('/login')
                }
            })
        }
        else{
            res.redirect('/login')
        }
    })
}
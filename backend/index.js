const express = require('express')
const app = express()
const ejs = require('ejs')
const mongoose = require('mongoose')
const expressSession = require('express-session')
const flash = require('connect-flash')
const path = require('path') // ใช้ path ในการเข้าถึง path ของไฟล์
const router = express.Router();

// MongoDB Connection
mongoose.connect('mongodb+srv://FujinStar:12345@cluster0.3xvbg.mongodb.net/user_info?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true
})

global.loggedIn = null

// Controllers
const loginController = require('./controllers/loginController')
const registerController = require('./controllers/registerController')
const storeUserController = require('./controllers/storeUserController')
const loginUserController = require('./controllers/loginUserController')
const logoutController = require('./controllers/logoutController')

// Middleware
const redirectIfAuth = require('./middleware/redirectIfAuth')
const authMiddleware = require('./middleware/authMiddleware')

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded())
app.use(flash())

app.use(expressSession({
    secret: "node secret"
}))
app.use("*", (req, res, next) => {
    loggedIn = req.session.userId
    next()
})
app.use((req, res, next) => {
    res.locals.flashMessages = req.flash(); // ทำให้ flash message ใช้งานได้ในทุก view
    next();
});

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'));

app.get('/', loginController)
app.get('/login', redirectIfAuth, loginController)
app.get('/register', redirectIfAuth, registerController)
app.post('/user/register', redirectIfAuth, storeUserController)
app.post('/user/login', redirectIfAuth, loginUserController)
app.get('/logout', logoutController)

app.listen(4000, () => {
    console.log("App listening on port 4000")
})

module.exports = router;
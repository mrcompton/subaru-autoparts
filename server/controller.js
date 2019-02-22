const bcrypt = require('bcryptjs')
module.exports = {
    getAllParts: (req,res) => {
        const dbInstance = req.app.get('db')

        dbInstance.allParts()
        .then(response => {
            res.status(200).send(response)
        })
        .catch(err => res.status(500).send(err))
 
    },
    getParts: async (req,res) => {
        // console.log("req.body",req.body)
        const {year,model,trim} = req.body
        const dbInstance = req.app.get('db')

        let parts = await dbInstance.getParts({year: year, model: model, trim: trim})
        res.status(200).send(parts)
    },

    register: async (req,res) => {
        let {email,password} = req.body
        let {session} = req
        let dbInstance = req.app.get('db')

        // console.log({password})
        let checkUser = await dbInstance.getUserByEmail({email: email})
        checkUser = checkUser[0]

        if (checkUser){
            return res.status(409).send('User already exists')
        }

        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password,salt)
        // console.log({hash})

        let newUser = await dbInstance.registerUser({email: email, password: hash})
        newUser = newUser[0]

        // console.log(newUser)
        session.user = {...newUser}
        // console.log('session:', session)
        res.status(201).send(session.user)
    },

    login: async (req,res) => {
        const {email,password} = req.body
        const {session} = req
        const dbInstance = req.app.get('db')

        let user = await dbInstance.getUserByEmail({email: email})
        user = user[0]
        // console.log(user)

        if(!user){
            return res.status(401).send('Invalid email address') 
        }
        // console.log("req.body", {password})
        // console.log("user.password", user.password)
        const isAuthenticated = bcrypt.compareSync(password, user.password)
        console.log('authentication happened?', isAuthenticated)
        if(!isAuthenticated){
            return res.status(401).send('Please try again')
        } 
        delete user.password
        session.user = user
        console.log("session user", session.user)
        res.status(200).send(session.user)
    },

    logout: (req,res) => {
        req.session.destroy()
        res.sendStatus(200)
    },

    getUser: (req,res) => {

    },

    addToCart: (req,res) => {

    },

    editCart: (req,res) => {

    },

    removeFromCart: (req,res) => {

    }
}
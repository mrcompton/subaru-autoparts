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

    addPart: async (req,res) => {
        const {part_num, category, name, description, price, picture} = req.body
        const dbInstance = req.app.get('db')

        let newPart = await dbInstance.addPart({part_num, category, name, description, price, picture})
        res.status(200).send(newPart)
        
    },

    editPart: async (req,res) => {
        const editId = parseInt(req.params.id)
        console.log({editId})
        console.log('req.body', req.body)
        const {part_num, name, description, price, picture} = req.body
        const dbInstance = req.app.get('db')
        let editPart = await dbInstance.editPart({part_num, name, description, price, picture, id: editId})
        console.log(editPart)
        res.sendStatus(200)
       
    },

    deletePart: async (req,res) => {
        const deleteId = parseInt(req.params.id)
        console.log({deleteId})
        const dbInstance = req.app.get('db')

        let deletePart = await dbInstance.deletePart({id: deleteId})
        res.sendStatus(200)
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

    postOrder: async (req,res) => {
      const {email, first_name, last_name, address_1, address_2, city, state, zip, total} = req.body
      dbInstance = req.app.get('db')

      let order = await dbInstance.post_order({email, first_name, last_name, address_1, address_2, city, state, zip, total})
      res.status(200).send(order)
    },
    
    getOrderNum: (req,res) => {
        dbInstance = req.app.get('db')
        dbInstance.getOrderNum()
        .then(num => {
            res.status(200).send(num)
        })
    },

    postOrderedParts: async (req,res) => {
        dbInstance = req.app.get('db')
        console.log("req.body1", req.body[0])
        console.log("req.body2", req.body[1])
        console.log("req.body3", req.body[2])
        await dbInstance.post_parts_ordered([req.body[0],req.body[1], req.body[2]])
        res.sendStatus(200)
    }

    
}
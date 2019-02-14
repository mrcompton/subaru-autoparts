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
        console.log("req.body",req.body)
        const {year,model,trim} = req.body
        const dbInstance = req.app.get('db')

        let parts = await dbInstance.getParts({year: year, model: model, trim: trim})
        res.status(200).send(parts)
    }
}
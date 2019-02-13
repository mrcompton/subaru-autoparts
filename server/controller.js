const bcrypt = require('bcryptjs')
module.exports = {
    getAllParts: (req,res) => {
        const dbInstance = req.app.get('db')

        dbInstance.get_all_parts.get_all_parts()
        .then(response => {res.status(200).send(response.data)})
        .catch(err => res.status(500).send(err))
    }
}
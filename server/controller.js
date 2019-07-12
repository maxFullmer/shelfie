module.exports = {
    getItems: (req, res) => {
        const db = req.app.get('db');

        db.get_Items()
        .then(items => {
            res.status(200).send(items)
        })
        .catch(err => console.log('Error with get_Items', err))
    },

    postItem: (req, res) => {
        const db = req.app.get('db')
        const { name, price, photo} = req.body;

        db.post_Item([name, price, photo])
        .then(item => {
            res.status(200).send(item)
        })
        .catch(err => console.log('Error with post_Item', err))
    },

    updateItem: (req, res) => {
        const db = req.app.get('db');
        const {id} = req.query;
        const { name, price, photo} = req.body;

        db.update_Item([+id, name, price, photo])
        .then(item => {
            res.status(200).send(item)
        })
        .catch(err => console.log('Error with update_Item', err))
    },

    deleteItem: (req, res) => {
        console.log(req)
        const db = req.app.get('db');
        const id = req.params.id;
        
        db.delete_Item(id)
        .then(item => {
            res.status(200).send(item)
        })
        .catch(err => console.log('Error with delete_Item', err))
    }
}
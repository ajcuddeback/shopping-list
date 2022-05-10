const { Items } = require('../models');

module.exports = {
    async getAllItems(req, res) {
        const items = await Items.find({});

        res.json(items);
    },

    async addItem(req, res) {
        const response = await Items.create(req.body);

        if(!response) {
            return res.status(500).json({ "Message": "Failed to create item" });
        }

        res.json(response); 
    },

    async updateItem(req, res) {
        const response = await Items.updateOne({ _id: req.params.id }, req.body);

        if(!response) {
            return res.status(500).json({ "Message": "Failed to update item" });
        }

        res.json(response);
    }, 
    
    async markUnMarkBought(req, res) {
        const response = await Items.updateOne({ _id: req.params.id }, { is_bought: req.body.is_bought });

        if(!response) {
            return res.status(500).json({ "Message": "Failed update bought status" });
        }

        res.json(response);
    },

    async deleteItem(req, res) {
        const response = await Items.deleteOne({ _id: req.params.id });

        if(!response) {
            return res.status(500).json({ "Message": "Failed to delete item" });
        }

        res.json(response);
    }
}
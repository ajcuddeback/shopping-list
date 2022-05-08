const { Items } = require('../models');

module.exports = {
    async getAllItems(req, res) {
        const items = await Items.find({});

        return items;
    },

    async addItem(req, res) {
        const response = await Items.create(req.body);

        if(!response) {
            return res.status(500).json({ "Message": "Failed to create item" });
        }

        return response; 
    },

    async updateItem(req, res) {
        const response = await Items.updateOne({ _id: req.params.id }, req.body);

        if(!response) {
            return res.status(500).json({ "Message": "Failed to update item" });
        }

        return response;
    }, 
    
    async markUnMarkBought(req, res) {
        const response = await Items.updateOn({ _id: req.params.id }, { is_bought: req.body.is_bought });

        if(!response) {
            return res.status(500).json({ "Message": "Failed update bought status" });
        }

        return response;
    },

    async deleteItem(req, res) {
        const response = await Items.deleteOne({ _id: req.params.id });

        if(!response) {
            return res.status(500).json({ "Message": "Failed to delete item" });
        }

        return response;
    }
}
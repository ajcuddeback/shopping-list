const router = require('express').Router();

const {
    getAllItems,
    addItem,
    updateItem,
    markUnMarkBought,
    deleteItem
} = require('../../controllers/item-controller');

router.route('/').get(getAllItems);

router.route('/').post(addItem);

router.route('/:id').put(updateItem);

router.route('/update-status/:id').put(markUnMarkBought);

router.route('/:id').delete(deleteItem);

module.exports = router;
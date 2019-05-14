const Category = require('../models/Category');

class CategoryController {
    async store(req, res) {
        const category = await Category.create(req.body);

        return res.json(category);
    }

    async show(req, res) {
        const category = await Category.findById(req.params.id);

        return res.json(category);
    }
}

module.exports = new CategoryController();
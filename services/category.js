//hi
const Category = require('../models/category');

const createCategory = async (name, promoted) => {
    const category = new Category({ name : name, promoted : promoted});
    return await category.save();
};

const getCategoryById = async (id) => { return await Category.findById(id); };

const getCategories = async () => { return await Category.find({}); };

const updateCategory = async (id, name) => {
    const category = await getCategoryById(id);
    if (!category) 
        return null;
    category.name = name;
    await category.save();
    return category;
};

const deleteCategory = async (id) => {
    const category = await getCategoryById(id);
    if (!category) return null;
    await category.deleteOne();
    return category;
};
module.exports = {createCategory, getCategoryById, getCategories, updateCategory, deleteCategory}
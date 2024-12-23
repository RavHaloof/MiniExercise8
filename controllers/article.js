const articleService = require('../services/article');

const createArticle = async (req, res) => {
    res.json(await articleService.createArticle(req.body.title));
};

const getArticles = async (req, res) => {
    res.json(await articleService.getArticles());
};

const getArticle = async (req, res) => {
    const article = await articleService.getArticleById(req.params.id);
    if (!article) {
        return res.status(404).json({ errors: ['Article not found'] });
    }
    res.json(article);
};

const updateArticle = async (req, res) => {
    res.json(await articleService.updateArticle(req.params.id, req.body.title));
}

const deleteArticle = async (req, res) => {
    res.json(await articleService.deleteArticle(req.params.id));
}

module.exports = {createArticle, getArticles, getArticle, updateArticle, deleteArticle};
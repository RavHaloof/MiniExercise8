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

module.exports = {createArticle, getArticles, getArticle, updateArticle, deleteArticle };
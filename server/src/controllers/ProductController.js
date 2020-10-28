const Product = {
    index(req, res) {
        res.status(200).json(['Array de produtos']);
    },
};

module.exports = Product;

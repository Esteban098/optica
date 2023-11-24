const db = require("../../database/models");
const { search } = require("../../utils/functions");
module.exports = {
    listHome: async (req, res) => {
        const products = await db.Product.findAll({
            where: {
                active: 1,
            },
            include: [{ association: "image" }, { association: "price" }],
            limit: 12,
        });
        let status;
        if (products) {
            status = 200;
        } else {
            status = 404;
        }
        let response = {
            meta: {
                status: status,
                total: products.length,
                url: "/",
            },
            data: products,
        };
        res.json(response);
    },
    search: async (req, res) => {
        const query = req.query.search;
        const searching = await search(query);
        let status;
        if (searching) {
            status = 200;
        } else {
            status = 404;
        }
        let response = {
            meta: {
                status: status,
                total: searching ? searching.length : null,
                url: "/api/search",
            },
            data: searching,
        };
        res.json(response);
    },
};

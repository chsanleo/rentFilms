const { Order } = require('../models');

const OrderController = {
    async addOrder(req, res) {
        try {
            await Order.create(req.body);
            res.status(201).send({ message: "Created order success." });

        } catch (error) {
            res.status(500).send({ message: "There was a problem" });
        }
    },

    async getOrder(req, res) {
        try {
            let order = await Order.findOne({
                 where: { 
                     id: req.params.id
                    },
            });
            res.status(200).send(order);

        } catch (error) { 
            res.status(500).send({ message: "There was a problem" });

        }
    },

    async updateOrder(req, res) {

    },

    async deleteOrder(req, res) {

    }
}
module.exports = OrderController;
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

    async getAllOrder(req, res) {
        try {
            let orders = await Order.findAll({ });
            res.status(200).send(orders);

        } catch (error) { 
            res.status(500).send({ message: "There was a problem" });

        }
    },

    async updateOrder(req, res) {
        try {
            await Order.update(req.body,{
                where:{
                    id:req.body.id
                }
            });
            res.send({message:`Updated correctly Order ${req.body.id}`});
        } catch (error) {
            res.status(500).send({ message: "There was a problem" });

        }
    },

    async deleteOrder(req, res) {
        try {
            const id = req.params.id;
            console.log(req.params.id);
            await Order.destroy({
                where:{
                    id:id
                },
            })
            res.send({message:`Deleted successfull Order ${req.body.id}`})
        } catch (error) {
            res.status(500).send({ message: "There was a problem" });
        }
    }
}
module.exports = OrderController;
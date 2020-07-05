const { Order } = require('../models');
const properties = require('../config/properties');
const MovieController = require('../controller/MovieController');

const OrderController = {
    async addOrder(req, res) {
        try {
            let rented = await Order.findAndCountAll({
                where: {
                    UserId: req.body.userID,
                    returnDate: null
                }
            });
            console.log("despues find all")
            if (rented.count > properties.LIMITMOVIESRENT) {
                res.status(500).send({ message: "Already rented the limit of films" });
            }
            console.log("intentamos Crear")
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
            let orders = await Order.findAll({});
            res.status(200).send(orders);

        } catch (error) {
            res.status(500).send({ message: "There was a problem" });

        }
    },

    async getAllOrdersByUser(req, res) {
        try {
            let orders = await Order.findAll({
                where: {
                    UserId: req.user.id,
                }
            });

            let ordersReturn;
            let title;

            for (let order of orders) {
                title = MovieController.getMovieById(order.MovieId);
                ordersReturn.push(new OrderFilm(order.id, order.MovieId, title, order.createAt, order.returnDate));
            }

            res.status(200).send(ordersReturn);

        } catch (error) {
            res.status(500).send({ message: "There was a problem" });

        }
    },

    async updateOrder(req, res) {
        try {
            await Order.update(req.body, {
                where: {
                    id: req.body.id
                }
            });
            res.send({ message: `Updated correctly Order ${req.body.id}` });
        } catch (error) {
            res.status(500).send({ message: "There was a problem" });

        }
    },

    async deleteOrder(req, res) {
        try {
            await Order.destroy({
                where: {
                    id: req.params.id
                },
            })
            res.send({ message: `Deleted successfull Order ${req.body.id}` })
        } catch (error) {
            res.status(500).send({ message: "There was a problem" });
        }
    }
}
module.exports = OrderController;
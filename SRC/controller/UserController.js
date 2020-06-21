const { User } = require('../models');

const UserController = {

    async getUser(req, res) {
        try {
            res.status(200).send(req.user);
        } catch (error) {
            res.status(500).send({ message: "There was a problem" });

        }
    },

    async updateUser(req, res) {
        try {
            await User.update(req.body, {
                where: {
                    id: req.body.id
                }
            });
            res.send({ message: `Updated correctly User ${req.body.id}` });
        } catch (error) {
            res.status(500).send({ message: "There was a problem" });

        }
    },

    async deleteUser(req, res) {
        try {
            await USer.destroy({
                where: {
                    id: req.params.id
                },
            })
            res.send({ message: `Deleted successfull User ${req.body.id}` })
        } catch (error) {
            res.status(500).send({ message: "There was a problem" });
        }
    }
}
module.exports = UserController;
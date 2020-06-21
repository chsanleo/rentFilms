const dbconnect = () => {

    const mongoose = require("mongoose");
    const uri = `mongodb+srv://${MONGO_USER}:${MONGO_PASS}@cluster0-20sv3.mongodb.net/${MONGO_NAMEDB}?retryWrites=true&w=majority`;
    mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        }).then(() => {
            console.log('Connection established.');
        })
        .catch(error => console.log('Error connecting:' + error));

}

module.exports = dbconnect;
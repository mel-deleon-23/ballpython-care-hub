const mongoose = require('mongoose');

const ballPythonSchema = new mongoose.Schema({
    lifespan: {
        type: String
    },
    length: {
        type: String
    },
    morph: {
        type: String
    },
});

const BallPythonModel = mongoose.model("ballpythons", ballPythonSchema);
module.exports = BallPythonModel;
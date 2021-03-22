const { DataTypes } = require('sequelize');
const sequelize = require('./db.js');

const Choices = sequelize.define("Choices", {
    id_choise: {
        type: DataTypes.STRING,
    },
    title: {
        type: DataTypes.STRING,
    },
    subtitle: {
        type: DataTypes.STRING,
    },
    contentURL: {
        type: DataTypes.STRING,
    },
    size: {
        type: DataTypes.STRING,
    },
    color: {
        type: DataTypes.STRING,
    },
}, {
    tableName: 'Choices'
});

module.exports = Choices
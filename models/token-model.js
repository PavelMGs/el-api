const { Schema, model } = require('mongoose');
const { DataTypes } = require('sequelize');
const sequelize = require('../utils/database');

const TokenSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User'},
  refreshToken: { type: String, required: true },
})

const Token = sequelize.define('Token', {
  user: { type: DataTypes.STRING, ref: 'User' },
  refreshToken: { type: DataTypes.STRING, allowNull: false },
})

// module.exports = model('Token', TokenSchema);
module.exports = Token;

const { Schema, model } = require('mongoose');
const { DataTypes } = require('sequelize');
const sequelize = require('../utils/database');

const UserSchema = new Schema({
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  isActivated: { type: Boolean, default: false },
  activationLink: { type: String},
})

const User = sequelize.define('User', {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  isActivated: {
    type: DataTypes.BOOLEAN,
    // allowNull: false,
  },
  activationLink: {
    type: DataTypes.STRING,
    allowNull: false,
  }
})

// module.exports = model('User', UserSchema);
module.exports = User;

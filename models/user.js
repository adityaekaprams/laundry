'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // user ke transaksi
      this.hasMany(models.transaksi,{
        foreignKey: "id_user",
        as: "transaksi user"
      })
      this.hasMany(models.outlet,{
        foreignKey: "id_outlet",
        as: "user"
      })
    }
  };
  user.init({
    id_user: {
       type: DataTypes.INTEGER,
       primaryKey: true,
       autoIncrement: true
    },
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user',
    tableName: 'user'
  });
  return user;
};
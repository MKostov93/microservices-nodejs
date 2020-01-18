/**
 * EXTERNAL DEPENDENCIES.
 */
import { DataTypes, Model } from "sequelize";

/**
 * INTERNAL DEPENDENCIES.
 */
import sequelize from "../../../../config/database/connection";

export default class User extends Model {}
User.init(
  {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true
    },
    password: {
      allowNull: false,
      type: DataTypes.CHAR(64)
    }
  },
  {
    sequelize,
    modelName: "users",
    defaultScope: {
      rawAttributes: { exclude: ["password"] }
    }
  }
);

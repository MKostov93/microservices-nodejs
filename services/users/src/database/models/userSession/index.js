/**
 * EXTERNAL DEPENDENCIES.
 */
import { DataTypes, Model } from "sequelize";

/**
 * INTERNAL DEPENDENCIES.
 */
import sequelize from "../../../../config/database/connection";

export default class UserSession extends Model {}
UserSession.init(
  {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID
    },
    userId: {
      allowNull: false,
      references: {
        key: "id",
        model: "users"
      },
      type: DataTypes.UUID
    },
    expiresAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  },
  {
    sequelize,
    paranoid: false,
    updatedAt: false,
    modelName: "userSessions"
  }
);

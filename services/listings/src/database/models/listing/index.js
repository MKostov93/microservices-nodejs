/**
 * EXTERNAL DEPENDENCIES.
 */
import { DataTypes, Model } from "sequelize";

/**
 * INTERNAL DEPENDENCIES.
 */
import sequelize from "../../../../config/database/connection";

export class Listing extends Model {}
Listing.init(
  {
    title: {
      allowNull: false,
      type: DataTypes.STRING
    },
    description: {
      allowNull: false,
      type: DataTypes.TEXT
    }
  },
  { sequelize, modelName: "listings" }
);

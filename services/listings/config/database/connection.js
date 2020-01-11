/**
 * EXTERNAL DEPENDENCIES.
 */
import { Sequelize } from "sequelize";

/**
 * UTILS.
 */
import accessEnv from "../../src/utils/accessEnv";

const dbURI = accessEnv("DB_URI");

const connectToDB = new Sequelize(dbURI, {
  dialectOptions: {
    charset: "utf8",
    multipleStatements: true
  },
  logging: false
});

export default connectToDB;

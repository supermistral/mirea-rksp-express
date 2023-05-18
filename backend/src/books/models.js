import { DataTypes } from "sequelize";
import sequelize from "../db";


const Book = sequelize.define("books", {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
    },
    published_at: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        defaultValue: Date.now(),
    },
    pages: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
    },
});


export default Book;

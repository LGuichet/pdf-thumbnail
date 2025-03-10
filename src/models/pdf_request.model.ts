import { DataTypes, Model } from "sequelize";
import sequelize from "../adapters/sequelize";

export class PdfRequest extends Model {
  declare id: string;
}

PdfRequest.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
  },
  {
    tableName: "thumbnail_generation_requests",
    timestamps: false,
    sequelize,
  }
);

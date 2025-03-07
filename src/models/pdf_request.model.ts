import { DataTypes, Model } from "sequelize";
import sequelize from '../db_connection';

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
    tableName: 'thumbnail_generation_requests',
    timestamps: false,
    sequelize,
  },
);
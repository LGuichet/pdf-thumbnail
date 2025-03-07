import { DataTypes, Model } from "sequelize";
import sequelize from '../db_connection';

export class CompletedGenerationJob extends Model {
  declare id: string;
}


CompletedGenerationJob.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
  },
  {
    tableName: 'completed_generation_jobs',
    timestamps: false,
    sequelize,
  },
);
import { DataTypes, Model } from "sequelize";
import sequelize from "../sequelize";

export class CompletedGenerationJob extends Model {
  declare id: string;
}

CompletedGenerationJob.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
  },
  {
    tableName: "completed_generation_jobs",
    timestamps: false,
    sequelize,
  }
);

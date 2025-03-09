import { DataTypes, Model } from "sequelize";
import sequelize from "../adapters/sequelize";
import { PdfRequest } from "./pdf_request.model";

export class CompletedGenerationJob extends Model {
  declare id: string;
}

CompletedGenerationJob.init(
  {
    id: {
      type: DataTypes.UUID,
      references: { model: PdfRequest, key: "id" },
      primaryKey: true,
    },
  },
  {
    tableName: "completed_generation_jobs",
    timestamps: false,
    sequelize,
  }
);

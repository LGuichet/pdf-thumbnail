import { CreationOptional, DataTypes, Model } from "sequelize";
import { Column, DataType, Table } from "sequelize-typescript";

@Table({ tableName: "completed_generation_jobs" })
export class CompletedGenerationJob extends Model<CompletedGenerationJob> {
  @Column({
    type: DataType.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  })
  pdf_request_id: CreationOptional<string>;
}

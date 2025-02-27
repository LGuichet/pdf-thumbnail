import { CreationOptional, DataTypes, Model } from "sequelize";
import { Column, DataType, Table } from "sequelize-typescript";

@Table({ tableName: "pdf_requests" })
export class PdfRequest extends Model<PdfRequest> {
  @Column({
    type: DataType.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  })
  id: CreationOptional<string>;
}

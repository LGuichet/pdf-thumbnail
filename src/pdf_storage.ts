import { readFile, writeFile } from 'fs/promises';
export class PdfStorage {
    constructor(){}

    async saveToFileSystem(file: Buffer, fileName: string): Promise<void> {
        await writeFile('../uploads/' + fileName, file);
    }

    async getFromFileSystem(fileName: string): Promise<Buffer> {
        return await readFile('../uploads/' + fileName);
    }
}
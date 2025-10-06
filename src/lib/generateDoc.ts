
import PizZip from "pizzip";
import Docxtemplater from "docxtemplater";
import { saveAs } from "file-saver";

export async function generateDoc(
  templatePath: string,
  formData: Record<string, string>,
  outputName: string
) {
  try {
    const response = await fetch(templatePath);
    const content = await response.arrayBuffer();

    const zip = new PizZip(content);
    const doc = new Docxtemplater(zip, { paragraphLoop: true, linebreaks: true });
    doc.render(formData);

    const blob = doc.getZip().generate({ type: "blob" });
    saveAs(blob, outputName);
  } catch (error) {
    console.error(error);
    alert("Не удалось сгенерировать документ.");
  }
}

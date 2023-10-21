import { jsPDF } from "jspdf";
import "jspdf-autotable";

const downloadPDF = () => {
    const doc = new jsPDF();
    const tableColumn = ["Vehicle Name", "Vehicle Number", "Vehicle Model","Chassy Number", "Vehicle Amount", "Purchase Date"];
    const tableRows = [];

    equipments.forEach((equipment) => {
      const equipmentData = [
        equipment.eqName,
        equipment.eqValue,
        equipment.eqQuantity,
      ];
      tableRows.push(equipmentData);
    });

    doc.autoTable(tableColumn, tableRows, { startY: 20 });
    doc.save("Equipment_List.pdf");
  };



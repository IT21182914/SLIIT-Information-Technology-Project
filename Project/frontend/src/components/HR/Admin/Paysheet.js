import React from 'react'
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { jsPDF } from "jspdf";
import "jspdf-autotable"

export default function Paysheet() {    

    const { state } = useLocation();
    const user = state?.user;

    const [empID, setEmpID] = useState(user?.empId || '');
    const [fullName, setFullName] = useState(user?.name || '');
    const [gender, setGender] = useState(user?.gender || '');
    const [phoneNo, setPhoneNo] = useState(user?.phone || '');
    const [nic, setNIC] = useState(user?.nic || '');
    const [hireDate, setHireDate] = useState(user?.hiredDate || '');
    const [basicSalary, setBasicSalary] = useState(user?.salary || 0);
    const [advance, setAdvance] = useState(user?.advance || 0);
    const [bonus, setBonus] = useState(user?.workDays > 20 ? 3000 : 0 || 0);
    const [netSalary, setNetSalary] = useState(user?.salary - user?.advance + bonus || 0);

    var arrList = [];

    var arrTitle = [
        "Employee ID", "Full Name", "Gender", "Phone No", "NIC", "Hire Date", "Basic Salary", "Advance", "Bonus", "Net Salary"
    ];
    var detailsArr = [empID, fullName, gender, phoneNo, nic, hireDate, basicSalary, advance, bonus, netSalary];


    for(var i=0;i<arrTitle.length;i++){
        arrList.push({
            title: arrTitle[i],
            details: detailsArr[i]
        })
    }

    const generatePDF=()=>{
        const doc=new jsPDF();
        const tableColumn = ["",""];

        const tableRows=[];

        arrList.map((item) => {
            const datas = [
                { content: item.title, styles: { halign: 'center' , fontStyle: 'bold'} },
                { content: item.details, styles: { halign: 'center' } }             
            ];
            tableRows.push(datas);
          });     

          doc.autoTable({
            head: [tableColumn],
            body: tableRows,
            startY: 30,
            startX: 10,
            styles: { valign: 'middle' },
            headStyles: { fillColor: [55, 71, 79] },
            bodyStyles: { fillColor: [207, 216, 220] }
          });

        doc.save("Paysheet.pdf");
    };


    return (
        <div>
            <div className="my-10 flex flex-col items-center gap-3">
                <h1 style={{ textAlign: "center", fontSize: 50 }} a>Salary Sheet</h1>
                <br></br>
                <table className="w-90 h-full text-left text-sm text-blue-100 dark:text-blue-100">
                    <thead className="bg-blue-600 text-xs text-white dark:text-white">
                        <tr>
                            <th scope="col" className="bg-blue-500 px-6 py-3 text-lg">{arrTitle[0]}</th>
                            <th scope="col" className="px-6 py-3 text-sm">{empID}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-blue-400 bg-blue-600">
                            <th scope="col" className="bg-blue-500 px-6 py-3 text-lg">{arrTitle[1]}</th>
                            <th scope="col" className="px-6 py-3 text-sm">{fullName}</th>
                        </tr>
                        <tr className="border-blue-400 bg-blue-600">
                            <th scope="col" className="bg-blue-500 px-6 py-3 text-lg">{arrTitle[2]}</th>
                            <th scope="col" className="px-6 py-3 text-sm">{gender}</th>
                        </tr>

                        <tr className="border-blue-400 bg-blue-600">
                            <th scope="col" className="bg-blue-500 px-6 py-3 text-lg">{arrTitle[3]}</th>
                            <th scope="col" className="px-6 py-3 text-sm">{phoneNo}</th>
                        </tr>

                        <tr className="border-blue-400 bg-blue-600">
                            <th scope="col" className="bg-blue-500 px-6 py-3 text-lg">{arrTitle[4]}</th>
                            <th scope="col" className="px-6 py-3 text-sm">{nic}</th>
                        </tr>

                        <tr className="border-blue-400 bg-blue-600">
                            <th scope="col" className="bg-blue-500 px-6 py-3 text-lg">{arrTitle[5]}</th>
                            <th scope="col" className="px-6 py-3 text-sm">{hireDate}</th>
                        </tr>
                        <tr className="border-blue-400 bg-blue-600">
                            <th scope="col" className="bg-blue-500 px-6 py-3 text-lg">{arrTitle[6]}</th>
                            <th scope="col" className="px-6 py-3 text-sm">{basicSalary}</th>
                        </tr>

                        <tr className="border-blue-400 bg-blue-600">
                            <th scope="col" className="bg-blue-500 px-6 py-3 text-lg">{arrTitle[7]}</th>
                            <th scope="col" className="px-6 py-3 text-sm">{advance}</th>
                        </tr>

                        <tr className="border-blue-400 bg-blue-600">
                            <th scope="col" className="bg-blue-500 px-6 py-3 text-lg">{arrTitle[8]}</th>
                            <th scope="col" className="px-6 py-3 text-sm">{bonus}</th>
                        </tr>

                        <tr className="border-blue-400 bg-blue-600">
                            <th scope="col" className="bg-blue-500 px-6 py-3 text-lg">{arrTitle[9]}</th>
                            <th scope="col" className="px-6 py-3 text-sm">{netSalary}</th>
                        </tr>
                    </tbody>
                </table>
                <button onClick={() => generatePDF()} type='submit'
                    className="btn btn-outline flex flex-row gap-3 bg-gray-600 text-white hover:bg-slate-700 hover:text-white">
                    pay sheet

                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="{1.5}" stroke="currentColor" className="h-6 w-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                        </svg>
                    </span>
                </button>
            </div>

        </div>
    )
}
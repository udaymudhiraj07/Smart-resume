import React from "react";
import { jsPDF } from "jspdf";

function ResumePreview({ resumeData }) {
    const downloadPDF = () => {
        const doc = new jsPDF();
        doc.text(`Resume: ${resumeData.name}`, 10, 10);
        doc.text(`Email: ${resumeData.email}`, 10, 20);
        doc.text(`Phone: ${resumeData.phone}`, 10, 30);
        doc.text(`Education: ${resumeData.education}`, 10, 40);
        doc.text(`Experience: ${resumeData.experience}`, 10, 50);
        doc.text(`Skills: ${resumeData.skills}`, 10, 60);
        doc.text(`AI Summary: ${resumeData.summary}`, 10, 70);
        doc.save("resume.pdf");
    };

    return (
        <div className="resume-preview">
            <h2>Resume Preview</h2>
            <p><strong>Name:</strong> {resumeData.name}</p>
            <p><strong>Email:</strong> {resumeData.email}</p>
            <p><strong>Phone:</strong> {resumeData.phone}</p>
            <p><strong>Education:</strong> {resumeData.education}</p>
            <p><strong>Experience:</strong> {resumeData.experience}</p>
            <p><strong>Skills:</strong> {resumeData.skills}</p>
            <p><strong>AI Summary:</strong> {resumeData.summary}</p>
            
            <button onClick={downloadPDF} className="download-button">
                Download PDF
            </button>
        </div>
    );
}

export default ResumePreview;

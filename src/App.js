import React, { useState } from "react";
import ResumeForm from "./ResumeForm";
import ResumePreview from "./ResumePreview";
import "./styles.css";

function App() {
    const [resumeData, setResumeData] = useState({
        name: "",
        email: "",
        phone: "",
        education: "",
        experience: "",
        skills: "",
        summary: "",
    });

    return (
        <div className="container">
            <h1 style={{ textAlign: "center", color: "#007bff" }}>AI Resume Builder</h1>
            <div className="resume-container">
                <ResumeForm resumeData={resumeData} setResumeData={setResumeData} />
                <ResumePreview resumeData={resumeData} />
            </div>
        </div>
    );
}

export default App;

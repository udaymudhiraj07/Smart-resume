import React, { useState } from "react";
import generateAIResume from "./aiResume";

function ResumeForm({ resumeData, setResumeData }) {
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setResumeData({ ...resumeData, [e.target.name]: e.target.value });
    };

    const generateAI = async () => {
        setLoading(true);
        const aiSummary = await generateAIResume(resumeData);
        setResumeData({ ...resumeData, summary: aiSummary });
        setLoading(false);
    };

    return (
        <div className="resume-form">
            <h2>Enter Your Details</h2>
            <input name="name" placeholder="Full Name" onChange={handleChange} />
            <input name="email" placeholder="Email" onChange={handleChange} />
            <input name="phone" placeholder="Phone" onChange={handleChange} />
            <textarea name="education" placeholder="Education" onChange={handleChange}></textarea>
            <textarea name="experience" placeholder="Work Experience" onChange={handleChange}></textarea>
            <textarea name="skills" placeholder="Skills" onChange={handleChange}></textarea>
            
            <button onClick={generateAI} className="ai-button" disabled={loading}>
                {loading ? "Generating..." : "Generate AI Summary"}
            </button>

            <textarea name="summary" placeholder="AI Summary" value={resumeData.summary} readOnly></textarea>
        </div>
    );
}

export default ResumeForm;

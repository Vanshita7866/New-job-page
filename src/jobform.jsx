import React, { useState } from 'react';
import ExperienceForm from './experienceform';
function JobForm() {
    const [jobType, setJobType] = useState("freelance");

    const handleJobTypeChange = (type) => {
        setJobType(type);
    }

    return (
        <main style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
            <header style={{ textAlign: 'center' }}>
                <h3 style = {{backgroundColor: '#f8f8f8',textAlign: 'left', padding: '10px'}}>New Job</h3>
            </header>

            <div className="ui form">
                <div className="inline fields">
                    <label style={{ marginRight: '10px' }}>Select Job Type:</label>
                    <div className="field">
                        <div className="ui radio checkbox">
                            <input 
                                type="radio" 
                                name="job_type" 
                                value="freelance" 
                                checked={jobType === "freelance"}
                                onChange={() => handleJobTypeChange("freelance")}
                            />
                            <label>Freelance</label>
                        </div>
                    </div>
                    <div className="field">
                        <div className="ui radio checkbox">
                            <input 
                                type="radio" 
                                name="job_type" 
                                value="employment" 
                                checked={jobType === "employment"}
                                onChange={() => handleJobTypeChange("employment")}
                            />
                            <label>Employment</label>
                        </div>
                    </div>
                </div>
            </div>

            <div className="ui form">
            <h3 style = {{backgroundColor: '#f8f8f8',textAlign: 'left', padding: '10px'}}>Describe your job</h3>
                <div class="ui form">
                    <div className="inline fields">
                            <label>Title/Position</label>
                            <input type="text" id="position" name="position" />
                        </div>
                        <div className="inline fields">
                            <label>Job description</label>
                            <textarea id="description" name="description" rows="3" cols="60" />
                        </div>
                        <div className="inline fields">
                            <label>Skills</label>
                            <input
                                type="text"
                                id="skills"
                                name="skills"
                                placeholder="Please add the required skills for your job e.g. Java"
                            />
                        </div>
                </div>
                <span style={{ fontSize: '14px', color: '#666' }} className="skills-span">Developers will find your job based on the skills you added here</span>
            </div>

            <section style={{ margin: '20px' }}>
                <h3 style = {{backgroundColor: '#f8f8f8',textAlign: 'left', padding: '10px'}}>Project Conditions</h3>
                <div className="ui form">
                        <div className="inline fields">
                            <label>Project length</label>
                            <input style={{ width: '100%' }} type="text" id="project_length" name="project_length" />
                        </div>
                        <div className="inline fields">
                            <label>Payment</label>
            <div className="ui form">
                <div className="inline fields">
                    <div className="field">
                        <label>min</label>
                        <input type="text" id="experience_field" name="experience_field" />
                    </div>
                    <div className="field">
                        <label>max</label>
                        <input type="text" id="experience_time" name="experience_time" />
                    </div>
                </div>
            </div>
                            </div>
                        <div className="inline fields">
                            <label>Working Hours</label>
                            <input style={{ width: '100%' }} type="text" id="working_hours" name="working_hours" />
                        </div>
                    </div>
                    
                
            </section>

            {jobType === "employment" ? <ExperienceForm /> : <div />}

            <footer style={{ textAlign: 'center' }}>
                <button className="ui button primary" type="submit">Post</button>
            </footer>
        </main>
    );
}

export default JobForm;

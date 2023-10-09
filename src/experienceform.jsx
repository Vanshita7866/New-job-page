import React from 'react';
function ExperienceForm() {
    return (
        <div>
            <h3 style = {{backgroundColor: '#f8f8f8',textAlign: 'left', padding: '10px'}}>Experience</h3>
            <div className="ui form">
                <div className="inline fields">
                    <div className="field">
                        <label>Experienced in</label>
                        <input type="text" id="experience_field" name="experience_field" />
                    </div>
                    <div className="field">
                        <label>For at least</label>
                        <input type="text" id="experience_time" name="experience_time" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ExperienceForm;

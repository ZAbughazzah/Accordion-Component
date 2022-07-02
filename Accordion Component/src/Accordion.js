import React, { useState } from 'react';

const Accordion = ({ title, content,image }) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <div class="accordion-item">
            <div class="accordion-title" onClick={() => setIsActive(!isActive)}>
                <div>{title}</div>
                <div>{isActive ? '↑' : '↓'}</div>
            </div>
            {isActive &&
                <div class="accordion-content">
                    <p>
                        {content}
                    </p>
                    <div class="image">
                        <img src={`${image}`} alt="Image"/>
                    </div>
                </div>
            }
        </div>
    );
};

export default Accordion;
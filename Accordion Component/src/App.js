import React from 'react';
import Accordion from './Accordion';
import { accordionData } from './utils/content';

const App = () => {
    return (
        <div>
            <h1>QUCC Summer BootCamp 2022</h1>
            <div class="accordion">
                {accordionData.map(({ title, content, image }) => (
                    <Accordion title={title} content={content} image={image} />
                ))}
            </div>
        </div>
    );
};

export default App;
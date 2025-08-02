import React from 'react';

const BayanaiPage: React.FC = () => {
    return (
        <div className="page bayanai-page" style={{
            '--bg-color': '#D4C4FC',
            '--fg-color': 'rgb(0, 0, 0)',
            '--fg-color-soft': '#013941',
            '--primary-color': '#f8ed93'
        } as React.CSSProperties}>
            {/* Header Section with Background */}
            <div className="page-top-header" style={{ padding: 0 }}>
                <img
                    className="header-img-top img-fluid"
                    style={{ width: '100%', marginLeft: 0 }}
                    src="https://github.com/fraance/portfolio-assets/blob/main/bayanai/Bandeau_Top_Bayanay.png?raw=true"
                    alt="BayanAI Header"
                />
            </div>

            <div className="page-content container-xl">
                {/* Project Info */}
                <h3>Technology Innovation, Social Impact, Climate Adaptation</h3>
                <h1>How might we empower communities to use AI to tackle the local challenges of climate change?</h1>
                <h2>Royal Society of Art x Google Deep Mind Design Award</h2>
                <h3>May 2024</h3>

                {/* Project navigation */}
                <div className="project-nav">
                    <ul>
                        <li><a href="#Context">1. Context</a></li>
                        <li><a href="#MyRole">2. My Role</a></li>
                        <li><a href="#ThePhilippines">3. The Philippines</a></li>
                        <li><a href="#Storm">4. Navigating the storm </a></li>
                        <li><a href="#Process">5. Project process</a></li>
                        <li><a href="#PredictPrepare">6. Predict prepare</a></li>
                        <li><a href="#RespondRebuild">7. Respond rebuild</a></li>
                        <li><a href="#HolisticServiceMapping">8. Holistic service mapping</a></li>
                        <li><a href="#SystemsApproach">9. BayanAI systems approach</a></li>
                    </ul>
                </div>
            </div>
            <div style={{ marginLeft: '2.5vw', marginRight: '2.5vw' }}>
                <img id="Context" src="https://github.com/fraance/portfolio-assets/blob/main/bayanai/1.jpg?raw=true" alt="Context" className="img-fluid" />
                <img id="MyRole" src="https://github.com/fraance/portfolio-assets/blob/main/bayanai/1b.jpg?raw=true" alt="My role" className="img-fluid" />
                <img id="ThePhilippines" src="https://github.com/fraance/portfolio-assets/blob/main/bayanai/2.jpg?raw=true" alt="The Philippines" className="img-fluid" />
                <div style={{ height: '100px' }}></div>
                <img id="Storm" src="https://github.com/fraance/portfolio-assets/blob/main/bayanai/3.jpg?raw=true" alt="Navigating the storm" className="img-fluid" />
                <img id="Process" src="https://github.com/fraance/portfolio-assets/blob/main/bayanai/4.jpg?raw=true" alt="Project process" className="img-fluid" />
                <div style={{ height: '100px' }}></div>
            </div>
            <div style={{ width: 'calc(100vw - (100vw - 100%))', backgroundColor: '#003940' }}>
                <div style={{ height: '200px' }}></div>

                <div style={{ marginLeft: '2.5vw', marginRight: '2.5vw' }}>
                    <img id="PredictPrepare" src="https://github.com/fraance/portfolio-assets/blob/main/bayanai/5.jpg?raw=true" alt="Predict prepare" className="img-fluid" />
                    <img id="RespondRebuild" src="https://github.com/fraance/portfolio-assets/blob/main/bayanai/6.jpg?raw=true" alt="Respond rebuild" className="img-fluid" />
                </div>
                <div style={{ height: '500px' }}></div>
            </div>

            <div style={{ marginLeft: '2.5vw', marginRight: '2.5vw', transform: 'translateY(-300px)' }}>
                <img id="HolisticServiceMapping" src="https://github.com/fraance/portfolio-assets/blob/main/bayanai/7.jpg?raw=true" alt="Holistic service mapping" className="img-fluid" />
                <img id="SystemsApproach" src="https://github.com/fraance/portfolio-assets/blob/main/bayanai/8.jpg?raw=true" alt="BayanAI systems approach" className="img-fluid" />
            </div>
        </div>
    );
};

export default BayanaiPage;

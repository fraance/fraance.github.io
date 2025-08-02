import React from 'react';

const StellantiPage: React.FC = () => {
    return (
        <div className="page stellanti-page" style={{
            '--bg-color': '#ffffff',
            '--fg-color': 'rgb(0, 0, 0)',
            '--fg-color-soft': '#2c3546',
            '--bg-color-soft': '#ABAFB7',
            '--primary-color': '#147AFA1C'
        } as React.CSSProperties}>
            {/* Header Section with Background */}
            <div className="page-top-header" style={{ padding: 0, width: '100%' }}>
                <img
                    className="header-img-top img-fluid"
                    style={{ width: '100%', marginLeft: 0 }}
                    src="https://github.com/fraance/portfolio-assets/blob/main/stellantis/hero_image00.jpg?raw=true"
                    alt="Stellantis Header"
                />
            </div>

            <div className="page-content container-xl">
                <h3>UI Design, UX Design, UX Research</h3>
                <h1>My UX Experience in a Multi-Project Landscape</h1>
                <h2>Stellantis - Paris, France</h2>
                <h3>2021 - 2023</h3>

                {/* Project navigation */}
                <div className="project-nav">
                    <ul>
                        <li><a href="#project1">e-ROUTES</a></li>
                        <li><a href="#project3">Conception Skin</a></li>
                        <li><a href="#project2">Space App</a></li>
                        <li><a href="#project4">My Ami Play</a></li>
                    </ul>
                </div>
            </div>

            {/* e-ROUTES Project */}
            <div className="mt-5" id="project1" style={{ marginInline: '10%' }}>
                <h1>e-ROUTES</h1>
                <h2>September 2022 - December 2022</h2>
                <div className="d-flex flex-wrap justify-content-between align-items-end mt-3 mb-5">
                    <div className="col-lg-6 my-3">
                        <img
                            className="img-fluid mb-5"
                            style={{ width: '97%', margin: 'auto' }}
                            src="https://github.com/fraance/portfolio-assets/blob/main/stellantis/image01.png?raw=true"
                            alt="e-ROUTES interface"
                        />
                        <hr style={{ width: '8%', height: '4px', backgroundColor: 'black', opacity: 1 }} />
                        <div className="d-flex justify-content-between">
                            <div className="col-lg-8 project-desc">
                                <p><em>Purpose</em> — Enhancing EV navigation for seamless charging experiences.</p>
                                <p>As <strong>UX Designer</strong> for the <em>Co-Pilote EV app</em>, I crafted intuitive
                                    navigation for users through <em>benchmarking</em>, <em>innovative visualisations</em>, and <em>iterative
                                        refinement</em>
                                </p>
                                <p><strong>Now live</strong>, aiding EV drivers in finding and navigating to stations
                                    efficiently.</p>
                                <div className="d-flex flex-wrap gap-3 mt-4">
                                    <a className="nav-link" href="https://apps.apple.com/fr/app/e-routes/id6449592949">
                                        <h4>→ App Store</h4>
                                    </a>
                                    <a className="nav-link"
                                        href="https://www.stellantis.com/ns_content/Video/CMD2024_Retail_eRoutes.mp4">
                                        <h4>→ Video</h4>
                                    </a>
                                    <a className="nav-link"
                                        href="https://nocache.media.stellantis.com/fr-fr/corporate-communications/press/e-routes-le-co-pilote-pour-vehicules-electriques-concu-par-stellantis-pour-des-trajets-sans-stress">
                                        <h4>→Article</h4>
                                    </a>
                                </div>
                                <div className="v-fill-lg"></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <img
                            className="img-fluid"
                            style={{ width: '97%', margin: 'auto' }}
                            src="https://github.com/fraance/portfolio-assets/blob/main/stellantis/image02.png?raw=true"
                            alt="Route planning interface"
                        />
                        <p className="img-caption my-3">
                            Detailed route planning screen, allowing users to set waypoints and view estimated charge levels
                            at each stop.
                        </p>
                        <hr style={{ width: '100%', height: '1px', backgroundColor: 'var(--fg-color-soft)', opacity: 1 }} />
                    </div>
                </div>
            </div>

            {/* Space App Project */}
            <div className="image-container">
                <img
                    className="img-fluid"
                    src="https://github.com/fraance/portfolio-assets/blob/main/stellantis/image04.png?raw=true"
                    alt="Space App background"
                />
                <div className="overlay-text">
                    <h1>Space App</h1>
                    <h2>December 2022 - July 2023</h2>
                </div>
            </div>

            <div className="mt-5" id="project2" style={{ marginInline: '10%' }}>
                <div className="d-flex flex-wrap mt-3 mb-5">
                    <div className="col-lg-6 my-3">
                        <img
                            className="img-fluid mb-5"
                            style={{ width: '97%', margin: 'auto' }}
                            src="https://github.com/fraance/portfolio-assets/blob/main/stellantis/image05.png?raw=true"
                            alt="Space App interface"
                        />
                        <hr style={{ width: '8%', height: '4px', backgroundColor: 'black', opacity: 1 }} />
                        <div className="d-flex justify-content-between">
                            <div className="col-lg-8 project-desc">
                                <p>As <em>UX Designer</em> and <em>Researcher</em>, I led <em>usability testing</em> for
                                    next gen EV vehicle mobile apps core features such as the Lancia Ypsilon.
                                </p>
                                <p>
                                    Over seven months, I conducted 40+ usability tests, generated four detailed feedback
                                    reports, and collaborated with the team to refine
                                </p>
                                <ul>
                                    <li><em>ADAS</em></li>
                                    <li><em>EV scheduling</em></li>
                                    <li><em>Remote control features</em></li>
                                    <li><em>Home Screen</em></li>
                                </ul>
                                <p>
                                    Through <em>qualitative and quantitative</em>, <em>data-driven insights</em>,
                                    continuous feedback and UX adjustments, my work contributed to a more user-centred experience.
                                </p>
                                <div className="d-flex flex-wrap gap-3 mt-4">
                                    <a className="nav-link" href="https://apps.apple.com/fr/app/mylancia/id6451106745">
                                        <h4>→ App Store</h4>
                                    </a>
                                </div>
                                <div className="v-fill-lg"></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="v-fill-lg"></div>
                        <div className="v-fill-lg"></div>
                        <div className="v-fill-lg"></div>
                        <div className="v-fill-lg"></div>
                        <div className="col-lg-9 my-3">
                            <img
                                className="img-fluid"
                                src="https://github.com/fraance/portfolio-assets/blob/main/stellantis/image06.png?raw=true"
                                alt="Lancia app interface"
                            />
                        </div>

                        <div className="col-lg-9 overlay-col">
                            <img
                                className="img-fluid"
                                src="https://github.com/fraance/portfolio-assets/blob/main/stellantis/image07.png?raw=true"
                                alt="Lancia Ypsilon features"
                            />
                            <p className="img-caption my-3">
                                <br />
                                CONNECTED TO ANY NEED
                                <br /><br />
                                With the Mobile App, you can interact remotely with the Lancia Ypsilon Edizione Limitata
                                Cassina. Manage locking and unlocking doors, identify the vehicle, and control the climate
                                and interior temperature remotely. Step into the car with your desired temperature - no more
                                summer heat or winter chills. Thanks to E-control, you can also remotely control various functions
                                based on electric charging services.
                            </p>
                            <hr style={{ width: '100%', height: '1px', backgroundColor: 'var(--fg-color-soft)', opacity: 1 }} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Conception Skin Project */}
            <div className="mt-5 inverse-colors" id="project3" style={{ padding: '10%' }}>
                <div className="d-flex flex-wrap justify-content-between align-items-center">
                    <div className="col-lg-6">
                        <h1>Conception Skin</h1>
                        <h2>September 2021 - September 2022</h2>
                    </div>
                    <div className="col-lg-6">
                        <img
                            className="img-fluid"
                            src="https://github.com/fraance/portfolio-assets/blob/main/stellantis/image%2035.png?raw=true"
                            alt="Conception Skin overview"
                        />
                    </div>
                </div>
                <div className="d-flex flex-wrap justify-content-between align-items-center mt-3">
                    <div className="col-lg-6">
                        <div className="col-lg-9 project-desc">
                            <p><em>Purpose</em> — Synchronise multiple brands in one cohesive UI Kit, <strong>
                                setting the foundation for the next generation of mobile apps
                            </strong> with a unified, future-ready design language.
                            </p>
                            <p>
                                As <strong>UI Designer</strong> for a multi-brand design system,
                                I built a clear <em>documented</em>, <em>flexible</em> component library from scratch. The
                                result is a versatile "conception skin" that maintains consistency while supporting
                                <em>brand-specific</em> needs and <em>usability</em> for all teams.
                            </p>
                            <div className="d-flex flex-wrap gap-3 mt-4">
                                <a className="nav-link"
                                    href="https://medium.com/@nozprod/embracing-multibrand-design-systems-a-stellantis-journey-8ab88417f4e6">
                                    <h4>→ Article</h4>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <img
                            className="img-fluid"
                            src="https://github.com/fraance/portfolio-assets/blob/main/stellantis/image08.png?raw=true"
                            alt="Multi-brand design system"
                        />
                        <p className="img-caption my-4">
                            These screens demonstrate the adaptable "conception skin" design system, allowing each brand to
                            retain unique colors and icons (e.g., Peugeot's blue accents) while maintaining consistent
                            structure across apps.
                        </p>
                        <hr style={{ width: '100%', height: '1px', backgroundColor: 'var(--bg-color-soft)', opacity: 1 }} />
                    </div>
                </div>
            </div>

            {/* My Ami Play Project */}
            <div className="image-container">
                <img
                    className="img-fluid"
                    src="https://github.com/fraance/portfolio-assets/blob/main/stellantis/image09.png?raw=true"
                    alt="My Ami Play background"
                />
                <div className="overlay-text" style={{ top: '10%' }}>
                    <h1>My Ami Play</h1>
                    <h2>March 2023 - July 2023</h2>
                </div>
            </div>

            <div id="project4" style={{ padding: '10%' }}>
                <div className="d-flex flex-wrap justify-content-between align-items-center">
                    <div className="col-lg-6">
                        <hr style={{ width: '8%', height: '4px', backgroundColor: 'black', opacity: 1 }} />
                        <div className="col-lg-8 project-desc">
                            <p>
                                As a <em>UX designer and Researcher</em> I led the <strong>design and interface
                                    integration</strong> of the Citroën Ami Mobile App - My Ami Play.
                            </p>
                            <p>
                                Analysed user requirements for driving mode functionality, designed <em>user flows</em> and
                                interactive <em>prototypes</em> to streamline app usage, and collaborated closely with the <em>
                                    development team
                                </em> for smooth integration with in-vehicle systems.
                            </p>
                            <p>
                                I also <em>spearheaded research</em> on incorporating haptic feedback and presented findings
                                to the entire digital factory.
                            </p>
                            <p>
                                The <em>
                                    My Ami model lacks built-in car interfaces and relies entirely on the mobile app,
                                    <strong>now</strong> successfully <strong>deployed</strong> in Citroën Ami vehicles
                                </em>.
                            </p>
                            <div className="d-flex flex-wrap gap-3 mt-4">
                                <a className="nav-link" href="https://www.youtube.com/watch?v=P-QSqtCVaLU">
                                    <h4>→ Video</h4>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="d-flex">
                            <div className="col-lg-6">
                                <img
                                    className="img-fluid p-2"
                                    src="https://github.com/fraance/portfolio-assets/blob/main/stellantis/image10.png?raw=true"
                                    alt="My Ami Play interface 1"
                                />
                            </div>
                            <div className="col-lg-6">
                                <img
                                    className="img-fluid p-2"
                                    src="https://github.com/fraance/portfolio-assets/blob/main/stellantis/image11.png?raw=true"
                                    alt="My Ami Play interface 2"
                                />
                            </div>
                        </div>
                        <img
                            className="img-fluid p-2"
                            src="https://github.com/fraance/portfolio-assets/blob/main/stellantis/image12.png?raw=true"
                            alt="My Ami Play radio interface"
                        />
                        <p className="img-caption p-2">
                            <br />
                            CHALLENGE
                            <br /><br />
                            A key challenge was translating complex radio technicalities into a user-friendly experience.
                        </p>
                        <hr style={{ width: '100%', height: '1px', backgroundColor: 'var(--fg-color-soft)', opacity: 1 }} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StellantiPage;

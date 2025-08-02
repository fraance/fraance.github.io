import React from 'react';

const ParkourPage: React.FC = () => {
    return (
        <div className="page parkour-page" style={{
            '--bg-color': '#ffffff',
            '--fg-color': 'rgb(0, 0, 0)',
            '--fg-color-soft': '#252a46',
            '--primary-color': '#8b9eff'
        } as React.CSSProperties}>
            {/* Header Section with Background */}
            <div className="page-top-header" style={{ background: '#8b9eff' }}>
                <img
                    className="header-img-top img-fluid"
                    style={{
                        maxHeight: '45vh',
                        objectFit: 'scale-down'
                    }}
                    src="https://raw.githubusercontent.com/fraance/portfolio-assets/main/parkour/image00_parkour_portfolio.gif"
                    alt="Parkour project animation"
                />
            </div>

            <div className="page-content container-xl">
                <h3>Research, UX, UI, Proactivity</h3>
                <h1>
                    From parkour to prosperity: Revitalizing TDN's website with proactive
                    research and design
                </h1>
                <h2>EDNA, Nantes, France</h2>
                <h3>November 2021 - February 2022</h3>
                <div style={{ height: '50px' }}></div>

                <div className="section">
                    <h3>My role</h3>
                    <p>
                        The project was realized with{' '}
                        <a href="https://www.linkedin.com/in/l%C3%A9a-veron-3a452020b/">Léa Veron</a>
                        {' '}and{' '}
                        <a href="https://www.linkedin.com/in/galadriel-buchou-6440721ba">Galadriel Buchou</a>.
                        All three of us participated equally on the project.
                    </p>
                </div>

                <div className="section">
                    <h3>The problem</h3>
                    <p>
                        TDN, "Traceur de Nantes" is a French club that proposes Freerunning
                        courses and workshops to beginners as well as to confirmed
                        practitioners. The objective of the club is to promote and spread
                        the practice of this urban sport. As the club develops, the volume
                        of its activities grows, the courses multiply and the audience is
                        diversifying. So, we took this opportunity to work on a new visual
                        identity and a redesign of the site to cope with those new
                        challenges.
                    </p>
                </div>

                <div className="section">
                    <h3>The solution</h3>
                    <p>
                        We worked on improving accessibility and registration, thus gaining
                        in efficiency for the user. We worked on creating dynamism for youth
                        while inspiring trust and safety for parents.
                    </p>
                </div>

                <div className="section">
                    <h3>The process</h3>
                    <ul>
                        <li>
                            We set off a sociological and anthropological research to
                            understand Parkour's community and association in order to create
                            the new website in accordance with its values, history, objectives
                            and members.
                        </li>
                        <li>
                            We experimented on various media and with different techniques to
                            chose visual working axes to tend to a visual identity
                            corresponding with the discipline's and association's values.
                        </li>
                        <li>
                            We followed a methodical approach, user scenarios, site map,
                            wireframe to create a functional prototype of the new website.
                        </li>
                        <li>
                            We tested the website's prototype with an eye tracking system to
                            make a test analysis in order to improve the interface.
                        </li>
                    </ul>
                    <img
                        className="img-fluid"
                        src="https://raw.githubusercontent.com/fraance/portfolio-assets/main/parkour/image01_mockup_parkour_portfolio.png"
                        alt="Mockup of parkour website"
                    />
                </div>

                <div className="section">
                    <h3>Understanding Parkour</h3>
                    <div className="subsection">
                        <h4>Research</h4>
                        <p>
                            We set up several methods of approaching the parkour domain. On
                            the one hand we conducted research about parkour's history,
                            social, legal and existential ecosystem. On the other hand we had
                            exchanges with traceurs which allowed us to better understand the
                            art, its own codes and values.
                        </p>
                    </div>
                    <div className="subsection">
                        <h4>Parkour's Fact</h4>
                        <ul>
                            <li>
                                Where and why?<br />
                                The course was born in the Parisian suburbs, more precisely in
                                Evry, in the 1980s. It is the investment of public spaces, the
                                reflection of the marginalization of the suburban populations.
                                Parkour enthusiasts, through their practice, reclaim the entire
                                urban space.
                            </li>
                            <li>
                                Who?<br />
                                David Belle is acknowledged as the inventor of parkour and
                                founded an original and official group of parkour practitioners
                                called Yamakasi. One day when David Belle was on a film set, he
                                showed his 'Speed Air Man' video to Hubert Koundé, who suggested
                                to change the "c" of "parcours" to a "k" because it was more
                                dynamic and stronger, and to remove the silent "s" for the same
                                reason. Belle liked the idea and officially changed the name of
                                his discipline to "parkour".
                            </li>
                            <li>
                                What?<br />
                                Parkour is an athletic training discipline, it promotes not only
                                the discipline of the body, the value of training, the importance
                                of a healthy lifestyle but also respect for the instructor and
                                others.
                            </li>
                        </ul>
                    </div>
                    <div className="subsection">
                        <h4>Analysis of the current / quantitative data</h4>
                        <ul>
                            <li>
                                If we estimate the total French community at about 2,000 - 2,500
                                practitioners, parkour although constantly increasing, remains a
                                niche sport.
                            </li>
                            <li>
                                Parkour is still practiced today by an essentially male public,
                                since 85% of French practitioners are men according to the
                                French Parkour Federation in 2018.
                            </li>
                            <li>
                                Most of the practitioners are teenagers and young adults, mostly
                                aged between 15 and 25, with a few in their 40s.
                            </li>
                        </ul>
                        <img
                            className="img-fluid"
                            src="https://raw.githubusercontent.com/fraance/portfolio-assets/main/parkour/image02_photo_parkour_portfolio.png"
                            alt="Photo taken during meeting with traceurs in Nantes"
                        />
                        <h6>
                            Photo taken during our meeting with a group of traceurs in Nantes.
                        </h6>
                    </div>
                    <div className="subsection">
                        <h4>Qualitative data</h4>
                        <p>
                            We met up with traceurs and were able to participate in a training
                            session and interact with them, it allowed us to get spontaneous
                            answers to our questions.
                        </p>
                        <p>
                            We also sent e-mails to a large number of parkour associations and
                            had the opportunity to discuss with one of the leaders of the
                            freestreet parkour association by phone which allowed us to
                            understand the main characteristics of the discipline, as well as
                            quantitative data, number of members, age, range, share of men and
                            women of each association.
                        </p>
                        <p>I selected questions that we asked frequently:</p>
                        <ul>
                            <li>"What are the values of Parkour according to you?"</li>
                            <li>"Can you describe a typical training?"</li>
                            <li>"Why do new members start parkour?"</li>
                            <li>"What are the prejudices you are confronted with?"</li>
                            <li>"How many participants do you have in your association?"</li>
                            <li>
                                "What is the proportion of men and women practicing parkour in
                                your club?"
                            </li>
                            <li>"What are the most popular places for a parkour session?"</li>
                        </ul>
                    </div>
                    <div className="subsection">
                        <h4>What we learned</h4>
                        <p>
                            Our research enabled us to confirm the values that we had
                            identified, which are the following: knowledge and surpassing
                            oneself, solidarity, adaptability to the environment,
                            open-mindedness, curiosity and creativity. Parkour is a practice
                            with few constraints because parkourers have a flexible schedule
                            and the places of expression are multiple. It is recognized as a
                            physical activity and not as a sport in France and the authorities
                            are rather tolerant when it comes to the public domain because of
                            the free appropriation of urban spaces.
                        </p>
                    </div>
                </div>

                <div className="section">
                    <h3>Understanding the club: TDN</h3>
                    <div className="subsection">
                        <h4>The club's objectives</h4>
                        <ul>
                            <li>
                                TDN trains all ages (11 years old to adults ) but the club would
                                like to attract more girls and women.
                            </li>
                            <li>
                                Make clear that it is supervised by a qualified trainer / No
                                risk.
                            </li>
                            <li>Pass on Parkour's values</li>
                        </ul>
                    </div>
                    <div className="subsection">
                        <h4>The competition</h4>
                        <p>
                            Traceur de Nantes has one main competitor, the only other Nantes
                            Parkour's club which is "Art Du Déplacement Academy Nantes": the
                            diffrence between the two is that TDN is younger and smaller but
                            it has a proximity with trainers compared to "Art Du Déplacement
                            Academy Nantes" which also is more expensive. <br />
                            Other competitors are skate and climbing clubs. The avantage of
                            climbing clubs is that they are more inclusive.
                        </p>
                    </div>
                </div>
            </div>

            <div style={{ padding: '60px', background: '#8b9eff' }}>
                <img
                    className="img-fluid"
                    src="https://raw.githubusercontent.com/fraance/portfolio-assets/main/parkour/image03_matiere_parkour_portfolio.png"
                    alt="Material exploration for parkour project"
                />
            </div>

            <div className="page-content container-xl">
                <div className="section">
                    <h3>Visual identity</h3>
                    <p>
                        With our previous research we were able to establish the challenges
                        of the visual identity:
                    </p>
                    <ul>
                        <li>
                            Take into account the rebellious spirit behind Parkour and inspire
                            trust for parents.
                        </li>
                        <li>
                            Be playful, convivial and open but convey the seriousness of the
                            structure in particular the fact that learning is done in optimal
                            safety conditions.
                        </li>
                    </ul>
                    <img
                        className="img-fluid"
                        src="https://raw.githubusercontent.com/fraance/portfolio-assets/main/parkour/image04_tramegraphique_parkour_portfolio.png"
                        alt="Graphic framework for parkour project"
                    />
                    <p>
                        We set up a plastic device with collage, paint, tape, transparency,
                        keywords, photography (We went where the club is training to collect
                        experimental photos of the site like graffiti, street and buldings)
                        to explore graphical tracks. We worked with the value of the
                        discipline in particular movement, displacement and freedom. Also,
                        we took into account the urban, "street" roots without being limited
                        to them. Then, we were able to make a graphical charter and a logo.
                    </p>
                    <img
                        className="img-fluid"
                        style={{ width: '60%', transform: 'translateX(33.3333%)' }}
                        src="https://raw.githubusercontent.com/fraance/portfolio-assets/main/parkour/image05_logogeneratif_parkour_portfolio.gif"
                        alt="Generative logo animation"
                    />
                    <p>
                        Parkour being an art of movement we took this opportunity to
                        conceive the logo in a generative way.
                    </p>
                    <img
                        className="img-fluid"
                        src="https://raw.githubusercontent.com/fraance/portfolio-assets/main/parkour/image06_charte%20graphique_parkour_portfolio.png"
                        alt="Graphic charter for parkour project"
                    />
                </div>
                <div style={{ height: '50px' }}></div>
            </div>

            <div style={{ padding: '60px', background: '#8b9eff' }}>
                <div className="container-xl">
                    <img
                        className="img-fluid"
                        src="https://raw.githubusercontent.com/fraance/portfolio-assets/main/parkour/image07_systeme_parkour_portfolio.png"
                        alt="System design for parkour project"
                    />
                </div>
            </div>

            <div className="page-content container-xl">
                <div className="section">
                    <h3>Setting up the structure</h3>
                    <p>
                        First of all we highlighted the current websites positive and
                        negative points, for example one of the main points was the
                        disjointed categories leading to scattered info. After that, we made
                        a site map. Then, we went through a few rounds of iteration using
                        hand sketching.<br />
                        We also came up with a revised and simplified information
                        architecture that focused on presentation of the club, registration
                        and easy management of accounts.
                    </p>
                    <img
                        className="img-fluid"
                        src="https://raw.githubusercontent.com/fraance/portfolio-assets/main/parkour/image08-sitemap_parkour_portfolio.png"
                        alt="Site map for parkour project"
                    />
                    <p>
                        While working on simplifying registration we divided it into two
                        parts. For a new trainee, firstly they have to choose training type
                        and fill in important information, proceed to payment and then
                        secondly they can create an account on the website.
                    </p>
                    <img
                        className="img-fluid"
                        src="https://raw.githubusercontent.com/fraance/portfolio-assets/main/parkour/image09_registartionstep_parkour_portfolio.gif"
                        alt="Registration steps animation"
                    />
                    <p>
                        Our solution is based on two propositions. <br /><br />First, the
                        redesign of the site in order to improve referencing, accessibility
                        and simplicity of registration, thus gaining in efficiency for the
                        user. <br /><br />Then in a second step, the redesign of the graphic
                        charter in order to improve visibility and dynamism which makes it
                        possible to gain the confidence and desire of the user. As part of
                        making the site more accessible, we allow easy and fast registration
                        of members, with registration that takes place through an online
                        form to fill out. Also, users will have a page where they can manage
                        their data and ask questions.
                    </p>
                </div>

                <div className="section">
                    <h3>Eye tracking</h3>
                    <p>
                        We added graphic elements in a similar style to maintain a cohesive
                        treatment across the site's elements. We organized the page so the
                        user could have access to all important information within the first
                        scroll.
                    </p>
                    <img
                        className="img-fluid"
                        src="https://raw.githubusercontent.com/fraance/portfolio-assets/main/parkour/image10_ecran_parkour_portfolio.png"
                        alt="Screen design for parkour project"
                    />
                    <div className="subsection">
                        <h4>Call to action</h4>
                        <p>
                            We made a call to action yellow on a blue background with an dark
                            hover which makes it stand out so that the user knows what to do
                            and where to go next. This eliminates confusion and allows the
                            website visitors to take the appropriate next steps to subscribe.
                        </p>
                        <img
                            className="img-fluid"
                            src="https://raw.githubusercontent.com/fraance/portfolio-assets/main/parkour/image11_cta_parkour_pourkour.gif"
                            alt="Call to action animation"
                        />
                    </div>
                    <div className="subsection">
                        <h4>Hint to see more</h4>
                        <p>
                            To inform site visitors that there is more info if they click on
                            the plus, we made a fun hint, shown here:
                        </p>
                        <img
                            className="img-fluid"
                            src="https://raw.githubusercontent.com/fraance/portfolio-assets/main/parkour/image12_plusvideo_parkour_portfolio.gif"
                            alt="Plus button hint animation"
                        />
                    </div>
                    <div className="subsection">
                        <h4>Subscribe journey</h4>
                        <p>
                            For the subscribed part, we wanted it to be an easy to use
                            interface design so we anticipated the user journey. For example:
                            we inform the user of what is absolutely necessary to complete the
                            membership at the beginning of the form and we made the
                            possibility for both the parent and the future traceurs to
                            subscribe in one go. Also, we made sure to make the graphic design
                            simple. This allowed users to easily check what they need and what
                            they are asked, making their journey throughout subscribing
                            trouble-free and smooth.
                        </p>
                        <img
                            className="img-fluid"
                            src="https://raw.githubusercontent.com/fraance/portfolio-assets/main/parkour/image13_parkour_portfolio.png"
                            alt="Subscribe journey design"
                        />
                    </div>
                </div>

                <div className="section">
                    <h3>Final design</h3>
                    <p>
                        As designers, we pre-process the page for users, organizing and
                        prioritizing content in a way that users can grasp almost instantly,
                        but there are always things that we don't anticipate and even more
                        as a student. So, we conducted an eye tracking test to find out the
                        pain points of our interface allowing us to afterwards improve the
                        user experience of our website.
                    </p>
                    <ul>
                        <li>
                            We set the user in front of our website and we followed a design
                            interview protocol leading to the user to subscribe:
                            <a href="#"> check it here.</a>
                        </li>
                        <li>
                            Then we made them fill out a satisfaction survey in order to
                            collect their feelings about their experience:
                            <a href="#"> you can check it out here.</a>
                        </li>
                        <li>
                            Finally, we met with each of them to have a discussion allowing us
                            to gauge feelings that maybe the survey didn't catch.
                        </li>
                    </ul>
                    <img
                        className="img-fluid"
                        src="https://raw.githubusercontent.com/fraance/portfolio-assets/main/parkour/image14_eyetracking_parkour_portfolio.gif"
                        alt="Eye tracking test video"
                    />
                    <h6>One of the 6 eye tracking videos we made.</h6>
                    <br /><br />
                    <div className="subsection">
                        <h4>Results</h4>
                        <ul>
                            <li>
                                All users reached the registration goal, there were no dropouts.
                            </li>
                            <li>
                                Registration time: 2'00" to 4'50" with an average of about 3 min
                                and users felt the registration was quick.
                            </li>
                            <li>
                                Almost all users agree that the website is very easy to navigate
                                with a real clarity and good hierarchy of information.The design
                                and visual identity of the site is the preferred aspect of 4 out
                                of 6 users, with others being its ergonomics and its ease of
                                navigation.
                            </li>
                        </ul>
                    </div>
                    <div className="subsection">
                        <h4>Improvements</h4>
                        <p>
                            This work highlighted important improvements to make in order to
                            create a better user experience:
                        </p>
                        <ul>
                            <li>
                                Possibility of going back, which wasn't present in our site,
                                unless you click on the logo, but only takes us back to the
                                homepage (we improved it).
                            </li>
                            <li>
                                Possibility to modify one last time the information just before
                                making the payment.
                            </li>
                            <li>Modification of the selected fields buttons.</li>
                            <li>
                                Improvement of the visual for the Facebook post-sponsored, with
                                the name of the "Traceurs of Nantes" for a more efficient
                                visibility and a better understanding at first glance.
                            </li>
                            <li>
                                Add an icon and a messaging interface in the space my account to
                                to chat with other parkour participants.
                            </li>
                        </ul>
                    </div>
                    <div className="subsection">
                        <h4>Biases on the test</h4>
                        <p>
                            Finally, from our point of view, the users had a too precise
                            instruction to allow us to observe a real user experience. It
                            would be interesting to do other tests without precise
                            instructions.
                        </p>
                    </div>
                </div>

                <div className="section">
                    <h3>What I would do differently</h3>
                    <p>
                        This project is one year old now and since then with my apprentiship
                        and side courses and readings I have improve my skills in
                        accessibility concerning colours, spacing, size as well as universal
                        design, inclusive design, and equity-focused design. For instance, I
                        would surely add audio description and change CTA's colours, the
                        black on blue first. Also, I think it would have been interesting to
                        test different user flows with users instead of one. Nevertheless I
                        think the good points of this project are our long research on
                        different mediums for the graphic charter and the research part on
                        which we spent a lot of time.
                    </p>
                </div>

                <div className="section">
                    <h3>Lessons to be learned</h3>
                    <p>
                        While working on this project I was really suprised by the
                        freerunners' willingness to help us understand their values and way
                        of doing things. It made me want to improve my skills in UX
                        research. Since then I have read up on the topic and work in UX
                        research at Stellantis. <br /><br />
                        Also, during this project, at first we thought that we were going to
                        do a website for teenagers but after our research we found that it
                        was more the parents that we wanted to convince. So it was an
                        intresting way to be put in front of our own biases.
                    </p>
                </div>

                <div className="section">
                    <h3>Thanks</h3>
                    <p>
                        Thanks to our instructor Xavier Drouaud, to Florian Butour for
                        helping us on the UX / UI part and to Amandine Delord for
                        introducing us to anthropology and of course thanks to the Traceur
                        de Nantes for allowing us participate in a training with them. Also,
                        thanks to the person who tested our prototypes and gave us feedback!
                    </p>
                </div>

                <div className="section">
                    <h3>Team</h3>
                    <p>
                        <a href="https://www.linkedin.com/in/l%C3%A9a-veron-3a452020b/">Léa Veron</a>, Air France UX Designer <br />
                        <a href="https://www.linkedin.com/in/galadriel-buchou-6440721ba">Galadriel Buchou</a>, student<br />
                        <a href="https://www.linkedin.com/in/france-h%C3%A9main-10440a200/">France Hémain</a>, student
                    </p>
                </div>
            </div>
            <br /><br />
        </div>
    );
};

export default ParkourPage;

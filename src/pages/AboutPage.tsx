export function AboutPage() {
    return (
        <div className="flex flex-wrap min-h-screen">
            <div className="w-full lg:w-1/2">
                <img
                    style={{ height: "100vh", width: "100%", objectFit: "cover" }}
                    src="https://github.com/fraance/portfolio-assets/raw/e08abb405f14fd7738c8f751311765970e9d0922/portrait%20session5267.jpg"
                    alt="Portrait"
                />
            </div>
            <div className="w-full lg:w-1/2 flex flex-col items-center justify-around p-8">
                <div className="max-w-md">
                    <h1 className="text-4xl font-bold">
                        I'm a French designer who started out in UI/UX at Stellantis and never looked back.
                    </h1>
                    <h2 className="mt-5 text-2xl">
                        I'm always up for a challenge so I honed my skills in the world top design school and learned a dash of business knowledge along the way.
                    </h2>
                    <h3 className="mt-5 text-lg">
                        • 3+ years of product design experience
                        <br />
                        • 4+ years of mastering Figma and research tools
                        <br />• Master's degree in HCD
                    </h3>
                </div>
                <div className="max-w-md">
                    <hr className="w-1/12 h-1 bg-black opacity-100 mt-20" />
                    <p className="lead text-sm mt-4">
                        “France has undeniable qualities of adaptation and a sense of listening to others which allowed her to demonstrate very good collaborative work and team communication skills in projects.”
                        <br /> <strong>Pauline Renverse, UX Researcher, Stellantis</strong>
                    </p>
                </div>
            </div>
        </div>
    );
}

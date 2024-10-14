import { Analytics } from "../components/Analytics";

export const Home = ()=>{
    return (
        <>
        <main>
            <section className="section-hero">
                <div className="container grid grid-two-cols">
                    <div className="hero-content">
                        <p>We are the world's best IT company</p>
                        <h1>Welcome to SolveMinds</h1>
                        <p>
                            Are you ready to take your business to the next level with cutting-edge IT solutions? Look no further! At SolveMinds, we specialize in providing IT services and solutions tailored to meet your business needs.   
                        </p>
                        <div className="btn btn-group">
                            <a href="/contact"><button className="btn">connect now</button></a>
                            <a href="/services"><button className="btn secondary-btn">learn more</button></a>
                        </div>
                    </div>
                    <div className="hero-images">
                        <img src="/images/home.png" alt="coding together" width="400" height="500"/>
                    </div>
                </div>
            </section>
        </main>

        <Analytics/>
        <section className="section-hero">
                <div className="container grid grid-two-cols">
                <div className="hero-images">
                        <img src="/images/design.png" alt="coding together" width="400" height="500"/>
                    </div>
                    <div className="hero-content">
                        <p>We are here to help you</p>
                        <h1>Get started today</h1>
                        <p>
                            Ready to take the first step towards a more efficient and secure IT infrastructure? Contact us today for a free consultation and lets discuss how SolveMinds can help your business thrive in the digital age.
                        </p>
                        <div className="btn btn-group">
                            <a href="/contact"><button className="btn">connect now</button></a>
                            <a href="/services"><button className="btn secondary-btn">learn more</button></a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
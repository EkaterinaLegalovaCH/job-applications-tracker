import { CheckLastApplications } from "./components/CheckLastApplications";
import { Carousel } from "./components/Carousel";
import { Heros } from "./components/Heros";
import { Services } from "./components/Services";
import "./HomePage.css";



export const HomePage = () => {
    return (
        <div className="homepage">
            <section className="homepage_section homepage_recent-apps">
                <CheckLastApplications/>
            </section>

            <section className="homepage_section homepage_carousel">
                <Carousel/>
            </section>

            <section className="homepage_section homepage_heros">
                <Heros/>
            </section>
            
            <section className="homepage_section homepage_services">
                <Services/>
            </section>
            
        </div>
    );
}

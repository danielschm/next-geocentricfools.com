import MusicPage from "./MusicPage";
import Title from "../components/includes/Title";

import Container from "react-bootstrap/Container";
import SocialIcon from "../components/SocialIcon";

const Index = () => (
    <MusicPage>
        <Title page="Sonntag auf dem Mond"/>
        <Container>
            <h1>Sonntag auf dem Mond</h1>
            <h2 className="subtitle">9th August 2020</h2>
            <div className="description">
                <img src="/img/albums/sonntagaufdemmond.jpg"/>
                <div className="socialIcons">
                    <SocialIcon
                        spotify="https://open.spotify.com/track/1OYCm5FVdjmCbHH2D5Nhwv?si=f8k2wiTwT6emBMX_nOne9g"
                        size="2x"/>
                    <SocialIcon
                        soundcloud="https://soundcloud.com/geocentricfools/sets/sonntag-auf-dem-mond"
                        size="2x"/>
                </div>
                <br/>
                Ever found yourself between two languages. Guess we have… Our single “Sonntag auf dem Mond” is an ode to
                the language of poets and philosophers and an indirect translation of our song “Moon Lagoon”. It
                describes the mental state of pure and untainted happiness, which most of us want to reach sometime in
                life, but mostly that emotion just pops up on the way and that goal we set ourselves seems only like an
                untold and unknown fantasy. So let’s just imagine the wildest things, that could make us happy. Flying
                to the moon perhaps? Let your toes touch the cool water of a sunny lagoon? Just be creative, cause there
                are no boundaries to your imagination and there are non in this song either.
            </div>
        </Container>
    </MusicPage>
);

export default Index;
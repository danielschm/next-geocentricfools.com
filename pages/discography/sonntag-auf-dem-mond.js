import MusicPage from "./MusicPage";
import Title from "../components/includes/Title";

import Container from "react-bootstrap/Container";
import SocialIcon from "../components/SocialIcon";

const Index = () => (
    <MusicPage title="Sonntag auf dem Mond" sub="9th August 2020" cover="/img/albums/sonntagaufdemmond.jpg">
        <div className="socialIcons">
            <SocialIcon
                spotify="https://open.spotify.com/track/1OYCm5FVdjmCbHH2D5Nhwv?si=f8k2wiTwT6emBMX_nOne9g"
                size="2x"/>
            <SocialIcon
                apple="https://music.apple.com/album/sonntag-auf-dem-mond-single/1524334523"
                size="2x"/>
            <SocialIcon
                youtube="https://music.youtube.com/playlist?list=OLAK5uy_kDxsX21OLMqtCZwW_mR8F9DPBn8ptUVTk&feature=share"
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
    </MusicPage>
);

export default Index;
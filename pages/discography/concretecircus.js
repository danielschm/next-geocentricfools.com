import MusicPage from "./MusicPage";
import SocialIcon from "../components/SocialIcon";

const Index = () => (
    <MusicPage title="Concrete Circus" sub="6th December 2019" cover="/img/albums/concretecircus.jpg">
        <div className="socialIcons">
            <SocialIcon
                spotify="https://open.spotify.com/album/2PohzzLZHwkopgLJbIIT0Q?si=aYvfnbL8R2WPdklnYXHNZw"
                size="2x"/>
            <SocialIcon
                apple="https://music.apple.com/album/concrete-circus-single/1489757688"
                size="2x"/>
            <SocialIcon
                youtube="https://music.youtube.com/playlist?list=OLAK5uy_kwwPGxVp4bY2PBgWVHlyTcHhy5EyhfECs&feature=share"
                size="2x"/>
            <SocialIcon soundcloud="https://soundcloud.com/geocentricfools/sets/concrece-circus" size="2x"/>
        </div>
        <br/>
        Now that's a big bad buddy! Full of mean and dirty sounds, this single drifts into a more dark synth
        type style and deals with emotions like anger and fear. It brings that dark futuristic and dystopian
        club feel and will shake up your ears. Dive into it but don't drown! To be continued?
    </MusicPage>
);

export default Index;
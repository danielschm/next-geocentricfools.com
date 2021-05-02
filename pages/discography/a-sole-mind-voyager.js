import MusicPage from "./MusicPage";
import SocialIcon from "../components/SocialIcon";

const Index = () => (
    <MusicPage title="A Sole Mind Voyager" sub="6th December 2019" cover="/img/albums/a-sole-mind-voyager.jpg">
        <div className="socialIcons">
            <SocialIcon
                spotify="https://open.spotify.com/album/4ZPBYw4H7t0zbBqgsQk2ym?si=-4jes9PJSYubi0JNQeFcmg"
                size="2x"/>
            <SocialIcon
                apple="https://music.apple.com/album/a-sole-mind-voyager/1563765972"
                size="2x"/>
            <SocialIcon
                youtube="https://music.youtube.com/playlist?list=OLAK5uy_lbpAzxQe2ehy5L8WMzFWDz2W6OSbGzCmo&feature=share"
                size="2x"/>
            <SocialIcon
                bandcamp="https://geocentricfools.bandcamp.com/album/a-sole-mind-voyager"
                size="2x"/>
            <SocialIcon soundcloud="https://soundcloud.com/geocentricfools/sets/a-sole-mind-voyager" size="2x"/>
        </div>
        <br/>
        Can you smell the upcoming breeze of spring, the sweet slices of Watermelon awaiting your senses at the peak of
        dopamine production? 🍃🍉The best way of starting a sentence sometimes is to ask a question. And the best cure
        for unavoidable sadness in life sometimes is to appreciate exactly these moments of excitement and happiness
        that will most definitely follow everytime until someday you dive into the unknown.

        On a long way home I felt this appreciation of the short life we have and had the urge to put ink to paper. 🖋️

        Imagine a ghost with the ability to live a whole life in a person witnessing all feelings, thoughts and
        perspectives of this being, only to eternally move on and experience even more minds. Oh how jealous would that
        ghost be of our transience and appreciation for a minute of happiness, a real moment in paradise. 🌞

    </MusicPage>
);

export default Index;
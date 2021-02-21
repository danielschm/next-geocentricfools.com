import Banner from "./components/Banner";
import Title from "./components/includes/Title";
import IndexPage from "./components/IndexPage";

const Index = ({slogan, background}) => (
    <IndexPage background={background}>
        <Title/>
        <Banner slogan={slogan}/>
    </IndexPage>
);

Index.getInitialProps = async function () {
    const aSlogans = [
        ["We will have a large", "bowl of pasta afterwards"],
        ["Kilroy was here"],
        ["Actually this is only a side project","and we play Worms professionally"],
        ["Dan is the man and", "Matt is the bat"],
        ["Dan is the man and", "Matt is the rat"],
        ["Feed me Seymour!"],
        ["The sun shall kiss y'all"],
        ["Synth-Pop Duo who loves to suprise"],
        ["Platypus and Chameleons rule"],
        ["Swearing is caring"],
        ["We programed happiness", "on your computer"],
        ["Suh dude?"],
        ["And we are so fresh and so clean","and also we are frisch und sauber"],
        ["But the world is a globe"]
    ];

    let iIndex = Math.random() * (aSlogans.length - 0.001);
    iIndex = parseInt(iIndex, 10);

    const sBackground = Math.random() > 0.1 ? "background3.mp4" : "background4.mp4";

    return {
        slogan: aSlogans[iIndex],
        background: sBackground
    };
};

export default Index;
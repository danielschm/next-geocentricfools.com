import Banner from "./components/Banner";
import Title from "./components/includes/Title";
import IndexPage from "./components/IndexPage";

const Index = ({slogan}) => (
    <IndexPage>
        <Title/>
        <Banner slogan={slogan}/>
    </IndexPage>
);

Index.getInitialProps = async function () {
    const aSlogans = [
        "We will have a large bowl of pasta afterwards",
        "Kilroy was here",
        "Actually this is only a side project and we play Worms professionally",
        "Dan is the man and Matt is the bat",
        "Feed me Seymour!",
        "The sun shall kiss y'all",
        "Synth-Pop Duo who loves to suprise",
        "Platypus and Chameleons rule",
        "Gan-Pau-Da-Ti und Frühlingsrolle bitte!",
        "TurnbackDreh... Hahaha nope",
        "Swearing is caring"
    ];

    let iIndex = Math.random() * (aSlogans.length - 0.001);
    iIndex = parseInt(iIndex, 10);
    console.log(iIndex);

    return {
        slogan: aSlogans[iIndex]
    };
};

export default Index;
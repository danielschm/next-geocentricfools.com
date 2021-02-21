import AboutPage from "./AboutPage";
import Row from "react-bootstrap/Row";
import Link from "next/link";
import Button from "react-bootstrap/Button";

const Matt = ({age, aka}) => (
    <AboutPage name={"Matt Platypus"} age={age} aka={aka} skills={"Vocals, Songwriting"} video={"matt.mp4"}>
        <p>
            The mind behind the rhymes - when he starts writing you won't be able to stop him from emitting
            pure originality with a scent of twisted mindfuck.
        </p>
        <p>
            Since he was a child he found his heart and passion in creating poems and later on lyrics. He
            loves the magic of metaphors, sometimes even two layered, although he might not always be too
            aware of this.
        </p>
        <p>
            Don't you dare to come up with generic ideas - he will modify, cut and reassemble them til he is
            completely satisfied.
        </p>
        <br/>
        <Row>
            <div className={"bottom-buttons"}>
                <div/>
                <div/>
                <Link href="/about/us" passHref>
                    <a>
                        <Button variant="secondary">About Us</Button>
                    </a>
                </Link>
                <Link href="/about/dan" passHref>
                    <a>
                        <Button variant="secondary">About Dan</Button>
                    </a>
                </Link>
                <div/>
                <div/>
            </div>
        </Row>
    </AboutPage>
);

const aMatt = [
    "Matt Platypus",
    "Platypussy",
    "Matt the Bat",
    "Mattael Jackson",
    "Mad Matt",
    "Platypus",
    "Ne Brot",
    "Lord of Ants",
    "Matt the Rat",
    "Matt the Cat",
    "Matt the Hat",
    "Platt Matypus",
    "Mad Platybus",
    "M-A-Double-T",
    "The Barkeeper",
    "Ben Rich"
];

function getRandomValue(a) {
    const i = parseInt(Math.random() * (a.length - 0.001), 10);
    return a[i];
}

Matt.getInitialProps = function () {
    return {
        aka: getRandomValue(aMatt),
        age: new Date().getFullYear() - 1996 - (new Date().getMonth() < 5 ? 1 : 0)
    };
};

export default Matt;
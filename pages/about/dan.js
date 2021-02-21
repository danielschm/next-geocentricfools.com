import AboutPage from "./AboutPage";
import Link from "next/link";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";

const Dan = ({age, aka}) => (
    <AboutPage name={"Dan Leo"} age={age} aka={aka} skills={"Keys, Guitar, Production"} video={"dan.mp4"}>
        <p>
            A soft smile on his face, like a marshmallow bouncing around on a trampoline in a palace filled
            of wool, and a concentrated persistent stare like a chameleon watching a winged insect at the
            screen of our creations.
        </p>
        <p>
            He seems like the devil in disguise, cause he makes some mean beats as Disc Jockey and has been
            producing electronic music for nearly a decade now. The tunes hit you hard and they'll stay in
            your head even harder.
        </p>
        <p>
            This atypical nerd loves everything concerning technology and embodies the technical brain
            behind all of our productions.
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
                <Link href="/about/matt" passHref>
                    <a>
                        <Button variant="secondary">About Matt</Button>
                    </a>
                </Link>
                <div/>
                <div/>
            </div>
        </Row>
    </AboutPage>
);

const aDan = [
    "Dan Leo",
    "Lion King",
    "Marshmallow face",
    "Dan the Man",
    "Dan Outside of a Can",
    "Leo Dan",
    "Dab Dan Cause He Dabs",
    "Chameleon",
    "Not so Smooth Criminal",
    "Lein Ad",
    "DJan",
    "Danthesizer",
    "Dan-Ce",
    "Daddy"
];

function getRandomValue(a) {
    const i = parseInt(Math.random() * (a.length - 0.001), 10);
    return a[i];
}

Dan.getInitialProps = function () {
    return {
        aka: getRandomValue(aDan),
        age: new Date().getFullYear() - 1998 - (new Date().getMonth() < 2 ? 1 : 0)
    };
};

export default Dan;
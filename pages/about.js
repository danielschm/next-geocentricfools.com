import Page from "./components/Page";
import Title from "./components/includes/Title";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Index = props => (
    <Page>
        <Title page="About"/>
        <Container>
            <Row>
                <Col>
                    <h2>Matt Platypus</h2>
                    <h4>aka {props.matt}</h4>
                    <div className="avatar">
                        <img alt="Matt" src="/img/potraits/website-matt.jpg"/>
                    </div>
                    <h3>Vocals, Songwriting</h3>
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
                </Col>
                <Col>
                    <h2>Dan Leo</h2>
                    <h4>aka {props.dan}</h4>
                    <div className="avatar">
                        <img alt="Dan" src="/img/potraits/website-dan.jpg"/>
                    </div>
                    <h3>Keys, Guitar, Production</h3>
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
                        This atypical nerd studies computer science and embodies the technical brain behind all of our
                        productions.
                    </p>
                </Col>
            </Row>
        </Container>
        <br/>
        <style jsx>{`
            h2 {
                text-transform: uppercase;
                letter-spacing: 0.2rem;
                font-size: 1.7rem;
                margin-bottom: 0;
            }
            
            h3 {
                text-transform: uppercase;
                letter-spacing: 0.4rem;
                font-size: 0.8rem;
                font-weight: 300;
                padding: 0;
                margin-top: 0;
                margin-bottom: 1rem;
            }
            
            h4 {
                letter-spacing: 0rem;
                font-size: 1rem;
                font-style: italic;
                font-weight: 400;
                color: var(--text);
            }
            
            p {
                color: var(--text);
            }
            
            img {
                width: 100%;
                min-width: 10rem;
                min-height: 10rem;
                float: left;
                margin-right: 2rem;
                margin-bottom: 1.5rem;
                border: 1px solid rgba(255,255,255,0.1);
            }
        `}</style>
    </Page>
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

function getFunName() {
    return {
        dan: getRandomValue(aDan),
        matt: getRandomValue(aMatt)
    }
}

function getOldName() {
    return {
        dan: getRandomValue(["Klaus", "Winfried", "Wolfgang", "Fritz", "Rudi", "Anton"]),
        matt: getRandomValue(["Robert", "Hagen", "Hermann", "Waldemar", "Gottfried"])
    }
}

Index.getInitialProps = function () {
    return Math.random() > 0.2 ? getFunName() : getOldName();
};

export default Index;
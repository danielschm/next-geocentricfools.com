import Page from "../components/Page";
import Container from "react-bootstrap/Container";
import "./music.css";
import Title from "../components/includes/Title";

export default props => (
    <Page>
        <div className="musicPage">
            <Container>
                <Title page={props.title}/>
                <h1>{props.title}</h1>
                <h2 className="subtitle">{props.sub}</h2>
                <div className="description">
                    <img alt="Album Cover" src={props.cover}/>
                    {props.children}
                </div>
            </Container>
        </div>
        <br/>
        <br/>
        <style jsx>{`
            .musicPage img {
                float: left;
                height: 18rem;
                width: 18rem;
                margin-right: 2rem;
                margin-bottom: 1.5rem;
            }
            
            .musicPage .description {
                line-height: 1.8;
                color: var(--text);
            }
            
            .musicPage .subtitle {
                text-transform: uppercase;
                font-weight: 400;
                color: var(--primary);
                margin: -0.6rem 0 1rem 0;
                font-size: 1rem;
                letter-spacing: 0.2rem;
            }
        `}</style>
    </Page>
)
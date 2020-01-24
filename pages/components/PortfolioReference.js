import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default props => {

    return (
            <Card>
                <Card.Img variant="top" src={props.image}/>
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <h2>#{props.tag}</h2>
                    <Card.Text>
                        {props.text}
                    </Card.Text>
                    <a href={props.link} target="_blank">
                        <Button>{props.button}</Button>
                    </a>
                </Card.Body>
                <style jsx>{`
                h2 {
                    font-size: 1rem;
                    color: #4582EC;
                    margin-top: -0.8rem;
                }
            
                a {
                    color: inherit;
                }
                
                a:hover {
                    text-decoration: none;
                }
            `}</style>
            </Card>
    )
}
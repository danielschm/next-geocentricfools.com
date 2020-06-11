import Page from "./components/Page";
import Title from "./components/includes/Title";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Merch = props => (
    <Page>
        <Title page="Merch"/>
        <div id="dialog">
            <div className="inner">
                <div className="content">
                    Please contact us via Instagram or Facebook! ♥
                </div>
                <div className="button">
                    <button onClick={closeDialog}>X</button>
                </div>
            </div>
        </div>

        <Container>
            <h1>Merch</h1>
            <Row>
                <Col>
                    <div className="picture" onClick={toggleZoom}>
                        <img alt="Matt" src="/img/merch/masks/black2.jpg"/>
                    </div>
                    <div className="text">
                        <span>Mask [black] - female</span>
                        <button onClick={openDialog}>Buy</button>
                    </div>
                </Col>
                <Col>
                    <div className="picture" onClick={toggleZoom}>
                        <img alt="Matt" src="/img/merch/masks/white2.jpg"/>
                    </div>
                    <div className="text">
                        <span>Mask [white] - male</span>
                        <button onClick={openDialog}>Buy</button>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className="picture" onClick={toggleZoom}>
                        <img alt="Matt" src="/img/merch/masks/black1.jpg"/>
                    </div>
                    <div className="text">
                        <span>Mask [black] - male</span>
                        <button onClick={openDialog}>Buy</button>
                    </div>
                </Col>
                <Col>
                    <div className="picture" onClick={toggleZoom}>
                        <img alt="Matt" src="/img/merch/masks/white1.jpg"/>
                    </div>
                    <div className="text">
                        <span>Mask [white] - female</span>
                        <button onClick={openDialog}>Buy</button>
                    </div>
                </Col>
            </Row>
        </Container>
        <style jsx>{`
            .picture {
                width: 100%;
                cursor: pointer;
            }
            
            .zoom {
                display: flex;
                align-items: center;
                position: fixed;
                top: 0;
                left: 0;
                z-index: 10;
                height: 100%;
            }
            
            .picture img {
                width: 100%;
            }
            
            .text {
                text-transform: uppercase;
                letter-spacing: 0.3rem;
                font-size: 0.8rem;
                padding: 2rem 0 2rem 0;
                display: flex;
                justify-content: space-between;
            }
            
            .text button {
                border: 1px solid rgba(0,0,0,0);
                background: rgba(255,255,255,0.2);
                color: white;
                transition: all ease 300ms;
                font-weight: 500;
                height: 2rem;
                width: 7rem;
                letter-spacing: 0.3rem;
                text-transform: uppercase;
                
            }
            
            .text button :hover {
                border: 1px solid var(--primary);
                color: var(--primary);
            }
            
            #dialog {
                display: none;
                align-items: center;
                justify-content: center;
                position: fixed;
                top: 0;
                left: 0;
                z-index: 10;
                height: 100%;
                width: 100%;
                background: rgba(0,0,0,0.7);
            }
            
            #dialog.show {
                display: flex;
            }
            
            #dialog .inner {
                background: rgba(0,0,0,0.9);;
                max-width: 100%;
                width: 30rem;
            } 
            
            #dialog .content {
                padding: 2rem 2rem 0 2rem;
                text-align: center;
            }
            
            #dialog .button {
                width: 100%;
                display: flex;
                justify-content: flex-end;
            }
            
            #dialog button {
                width: 3rem;
                height: 2rem;
                border: none;
                background: rgba(0,0,0,0.7);
                color: white;
                transition: all ease 500ms;
            }
            
            #dialog button :hover {
                border: 1px solid white;
            }
        `}</style>
    </Page>
);

function toggleZoom(oEvent) {
    if (!(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))) {
        oEvent.currentTarget.classList.toggle("zoom");
    }
}

function openDialog() {
    window.document.getElementById("dialog").classList.toggle("show");
}

function closeDialog() {
    window.document.getElementById("dialog").classList.toggle("show");
}


export default Merch
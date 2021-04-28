import Link from "next/link";
import Button from 'react-bootstrap/Button';
import "./banner.css";

const Banner = (props) => (
    <div className="bannerContainer">
        <div className="container">
            <div className="banner">
                <div>We are</div>
                <h1>Geocentric Fools</h1>
                <div className="slogan">
                    {props.slogan ? props.slogan.map((e, i) => {
                        return (
                            <div key={i} className={"typewriter"}>
                                <div className={"typewriter-text-" + i}>{e}</div>
                            </div>
                        )
                    }) : ""}
                </div>
            </div>
            <a style={{"marginLeft": 0}}
               href={"https://open.spotify.com/artist/0w1oFjdkV5h4OQG8q8htZK?si=WKvyS7E4R3m2tiWEyRdaJQ"}
               // href={"https://open.spotify.com/track/0PVy1QQzvTJIRVCCQ4xSJl?si=mul4nmzOQMCsFcYGU5zmdQ"}
               target={"_blank"}>
                <Button id="mainButton">
                    {/*<span>New Single Fatal Foolness</span>*/}
                    <span>> Spotify</span>
                </Button>
            </a>
            <Link href="/about/us" passHref>
                <a>
                    <Button variant="secondary">
                        <span>About</span>
                    </Button>
                </a>
            </Link>
        </div>
        <style jsx>{`
            .textMargin {
                margin-right: 0.5rem;
            }
            
            .bannerContainer {
                flex: 1;
            }
            
            .banner {
                padding-top: 15%;
            }
            
            @media only screen and (max-height: 800px) and (max-width: 436px) {
                .banner {
                    padding-top: 0;
                }
            }
            
            @media only screen and (max-height: 690px) {
                .slogan {
                    background: rgba(0,0,0,0.3);
                }
            }
            
            h1 {
                text-transform: uppercase;
            }
            
            .typewriter {
                display: inline-block;
            }
            
            .slogan {
                display: table-caption;
                line-height: 1.3;
                font-size: 1.3rem;
                padding: 0.5rem 0 0.5rem 1rem;
                margin-bottom: 1rem;
                margin-left: -1rem;
                overflow: hidden;
                border-top: 1px solid rgba(255,255,255,0.1);
                border-bottom: 1px solid rgba(255,255,255,0.1);
                transition: color 1000ms ease;
            }

            .typewriter-text-0 {
                overflow: hidden;
                letter-spacing: 0.1rem;
                animation: typing 4s steps(40, end), blink 0.80s step-end 5 forwards;
                white-space: nowrap;
                font-size: 1rem;
                border-right: 4px solid white;
                box-sizing: border-box;
            }
            
            .typewriter-text-1 {
                width: 0%;
                overflow: hidden;
                letter-spacing: 0.1rem;
                animation: typing 4s steps(40, end) 4s forwards, blink 0.9s step-end 4s infinite;
                white-space: nowrap;
                font-size: 1rem;
                border-right: 4px solid transparent;
                box-sizing: border-box;
            }
            
            @keyframes typing {
                from { 
                    width: 0% 
                }
                to { 
                    width: 100%
                }
            }
            
            @keyframes blink {
                from, to { 
                    border-color: transparent; 
                }
                50% { 
                    border-color: white 
                }
            }
            
            p:hover {
                color: lightgray;
            }
            
            a {
                color: var(--gray);
                margin: 0 12px;
                transition: color 600ms ease;
            }
            
            a:hover {
                color: var(--primary);
            }
        `}</style>
    </div>
);

export default Banner;
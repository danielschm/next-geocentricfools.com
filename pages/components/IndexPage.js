import '../../css/litera.css';
import '../../css/custom.css';
import '@fortawesome/fontawesome-svg-core/styles.css'
import Header from "./Header";
import Includes from './includes/Includes';
import Footer from "./Footer";

function Page(props) {
    return (
        <div className="page">
            <Includes/>
            {/*<video autoPlay muted loop id="backgroundVideo">*/}
            {/*    <source src={"/video/" + props.background} type="video/mp4"/>*/}
            {/*</video>*/}
            <div className="backdrop"/>
            <div className="bg"/>
            <div id="content">
                <Header className="transparent"/>
                <div className="padding-top">
                    {props.children}
                </div>
                <div className="footerWrapper">
                    <Footer background="rgba(0,0,0,0.15)"/>
                </div>
            </div>
            <style jsx>{`
            #backgroundVideo {
                z-index: -2;
                position: fixed;
                right: 0;
                bottom: 0;
                min-width: 100%;
                min-height: 100%;
                transform: translateX(calc((100% - 100vw) / 2)) translateY(calc(100% - 100vh));
             }
             
            .backdrop {
                z-index: -1;
                background: rgba(0,0,0,0.2);
                height: 100%;
                width: 100%;
                position: fixed;
            }
            
            #content {
                display: flex;
                flex-direction: column;
                height: 100%;
            }
            
            .footerWrapper {
                flex: 1;
                display: flex;
                align-items: flex-end;
            }
            
            .padding-top {
                padding-top: 2rem;
            }
            
            .page {
                height: 100%;
            }
            
            .bg {
                z-index: -2;
                height: 100%;
                width: 100%;
                position: fixed;
                background-image: url("/img/bg/bg-2020.jpg");
                background-position: 38%;
                background-size: cover;
                background-repeat: no-repeat;
                background-color: black;
                background-attachment: fixed;
            }
        `}</style>
        </div>
    )
}

export default Page;
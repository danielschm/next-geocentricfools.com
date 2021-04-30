import '../../css/litera.css';
import '../../css/custom.css';
import '@fortawesome/fontawesome-svg-core/styles.css'
import Header from "./Header";
import Includes from './includes/Includes';
import Footer from "./Footer";

const Page = props => (
    <div className="page">
        <Includes/>
        <div className="bg"/>
        <div className="bg-blur"/>
        <div className="backdrop"/>
        <div id="content">
            <Header/>
            <div className="padding-top">
                {props.children}
            </div>
            <div className="footerWrapper">
                <Footer/>
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
                -webkit-filter: blur(5px);
                -moz-filter: blur(5px);
                -o-filter: blur(5px);
                -ms-filter: blur(5px);
                filter: blur(5px);
             }
        
             #content {
                display: flex;
                flex-direction: column;
                height: 100%;
            }
            
            .footerWrapper {
                display: flex;
                align-items: flex-end;
            }
        
            .padding-top {
                padding-top: 2rem;
                overflow: auto;
                height: 100%;
            }
            
            .page {
                height: 100%;
                display: flex;
                flex-direction: column;
            }
            
            .backdrop {
                z-index: -1;
                background: rgba(0,0,0,0.6);
                height: 100%;
                width: 100%;
                position: fixed;
            }
            
            .bg {
                z-index: -3;
                height: 100%;
                width: 100%;
                position: fixed;
                background-image: url("/img/bg/bg-2021.jpg");
                background-position: 38%;
                background-size: cover;
                background-repeat: no-repeat;
                background-color: black;
                background-attachment: fixed;
            }
            
            .bg-blur {
                z-index: -2;
                height: 100%;
                width: 100%;
                position: fixed;
                background-image: url("/img/bg/bg-2021.jpg");
                background-position: 38%;
                background-size: cover;
                background-repeat: no-repeat;
                background-color: black;
                background-attachment: fixed;
                -webkit-filter: blur(5px);
                -moz-filter: blur(5px);
                -o-filter: blur(5px);
                -ms-filter: blur(5px);
                filter: blur(5px);
            }
        `}</style>
    </div>
);

export default Page;
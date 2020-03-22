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
        <Header className="transparent"/>
        <div className="padding-top">
            {props.children}
        </div>
        <Footer/>
        <style jsx>{`
            .padding-top {
                padding-top: 2rem;
            }
            
            .page {
                height: 100%;
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
                background-image: url("/img/background.jpg");
                background-position: 53%;
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
                background-image: url("/img/background.jpg");
                background-position: 53%;
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
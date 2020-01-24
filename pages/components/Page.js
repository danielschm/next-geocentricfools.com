import '../../css/litera.css';
import '../../css/custom.css';
import '@fortawesome/fontawesome-svg-core/styles.css'
import Header from "./Header";
import Includes from './includes/Includes';

const Page = props => (
    <div className="page">
        <Includes/>
        <Header className="transparent"/>
        <div className="padding-top">
            {props.children}
        </div>
        <style jsx>{`
            .padding-top {
                padding-top: 2rem;
            }
            
            .page {
                height: 100%;
            }
        `}</style>
    </div>
);

export default Page;
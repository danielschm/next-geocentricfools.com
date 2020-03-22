import Page from "../components/Page";
import "./music.css";

export default props => (
    <Page>
        <div className="musicPage">
        {props.children}
        </div>
    </Page>
)
export default props => {
    return (
        <div className={"item"}>
            <div className={"vertical"}>
                <img src={"/img/gallery/vertical/" + props.vertical}/>
            </div>
            <div className={"horizontal"}>
                <img src={"/img/gallery/horizontal/" + props.horizontal}/>
            </div>
        </div>
    )
}
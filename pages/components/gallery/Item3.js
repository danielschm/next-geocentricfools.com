export default props => {
    return (
        <div className={"item"}>
            <div className={"horizontal"}>
                <img src={"/img/gallery/horizontal/" + props.horizontal}/>
            </div>
        </div>
    )
}
export default props => {
    return (
        <div>
            <div id="footer">
                <span>
                    © ℗ 2020 GEOCENTRIC FOOLS
                </span>
            </div>
            <style jsx>{`
                #footer {
                    width: 100%;
                    position: fixed;
                    bottom: 0.4rem;
                    display: flex;
                    justify-content: center;
                    padding: 0.2rem 0 0.2rem 0;
                }
                
                #footer span {
                    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
                    letter-spacing: 0.1rem;
                    font-size: 0.7rem;
                    color: rgba(255,255,255,0.4);
                }
            `}</style>
        </div>
    )
}
const MainContent = (props) =>{
    return (
        <div style={props.style} className={"MainContent " + props.className}>
            {props.children}
        </div>
    )
}
export default MainContent;
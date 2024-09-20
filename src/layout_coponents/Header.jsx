import Hero from "../sections/Hero";

const Header = (props) =>{
    return (
        <div style={props.style} className={"Header " + props.className}>
            <Hero></Hero>
        </div>
    )
}
export default Header;
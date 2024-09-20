import Button from "../base_components/button/Button";
import { navigate, sections } from "../constants";

const Footer = (props) =>{
    return (
        <div id={sections[3]} 
            style={props.style} className={"Footer " + props.className}>
            <div style={{display:'flex', flexDirection:'column', gap:'5px'}}>
                <span>Joao Ramos DR1 TP3 </span> 
                <span> Mobile First, professor Cidcley Oliveira </span> 
                <span> Instituto Infnet, 2024</span>
            </div>
        <div style={{display:'flex', flexDirection:'column', gap:'5px'}}>
            <Button onClick={()=>navigate("https://github.com/jvcmtr")}>Github</Button>
            <Button onClick={()=>navigate("https://www.linkedin.com/in/joao-cicero/")}>LinkedIn</Button >
        </div>
        </div>
    )
}
export default Footer;
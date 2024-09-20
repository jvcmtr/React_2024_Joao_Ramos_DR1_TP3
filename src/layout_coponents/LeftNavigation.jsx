import NavItem from "../base_components/nav-item/NavItem";
import { sections, navigate } from "../constants";

const LeftNavigation = (props) =>{
    return (
        <div className={"LeftNavigation " + props.className}>
          {
            sections.map(i =>(
                <NavItem 
                    className={props.className} 
                    name={i}
                    onClick={()=>navigate("#"+i)}/>
            ))
          }  
        </div>
    )
}
export default LeftNavigation;
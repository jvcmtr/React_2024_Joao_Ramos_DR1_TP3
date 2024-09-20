import Card from "../base_components/card/Card";
import CardsSection from "../sections/Cards";
import { sections } from "../constants";
import Hero from "../sections/Hero";
import Sobre from "../sections/Sobre";

const Content = (props) =>{
    return (
        <div style={props.style} className={"Content " + props.className}>
            <Sobre id={sections[1]}></Sobre>
            <CardsSection id={sections[2]}/>
        </div>
    )
}

export default Content;
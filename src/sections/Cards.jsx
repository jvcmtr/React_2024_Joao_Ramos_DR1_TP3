import Card from "../base_components/card/Card.jsx";
import { navigate } from "../constants.js";


export default function CardsSection(props){
    return(
        <div style={divStyle} id={props.id}>
            {
                cards.map(i => (
                    <Card 
                        className=" primary "
                        img = {i.img}
                        title={i.title} 
                        action={i.action}
                        text={i.text}
                        onClick={()=> navigate(i.href)}
                    />
                ))
            }
        </div>
    )
}
// https://www.infnet.edu.br/infnet/wp-content/uploads/sites/6/2023/03/Design-sem-nome-1-3.png
const divStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: "5vh"
}

const cards = [
    {
        title:"Mobile First TP2",
        img: "https://www.infnet.edu.br/infnet/wp-content/uploads/sites/6/2023/03/Design-sem-nome-1-3.png",
        action: "Acesse o Github",
        text: "Trabalho de João Cicero no Instituto Infnet",
        href: "https://github.com/jvcmtr/React2024_Joao_Ramos_DR1_TP2"
    },
    {
        title:"Mobile First TP1",
        img: "https://www.infnet.edu.br/infnet/wp-content/uploads/sites/6/2023/03/Design-sem-nome-1-3.png",
        action: "Acesse o Github",
        text: "Trabalho de João Cicero no Instituto Infnet",
        href: "https://github.com/jvcmtr/React_2024_DR1_TP1"
    },
    {
        title:"Projeto de Bloco (2023)",
        img: "https://www.infnet.edu.br/infnet/wp-content/uploads/sites/6/2023/03/Design-sem-nome-1-3.png",
        action: "Acesse o Github",
        text: "Trabalho de João Cicero no Instituto Infnet",
        href: "https://github.com/jvcmtr/react_PB"
    },
    {
        title:"Fundamentos de React TP1",
        img: "https://www.infnet.edu.br/infnet/wp-content/uploads/sites/6/2023/03/Design-sem-nome-1-3.png",
        action: "Acesse o Github",
        text: "Trabalho de João Cicero no Instituto Infnet",
        href: "https://github.com/jvcmtr/React2024_Joao_Ramos_DR2_TP1"
    },
    {
        title:"Fundamentos de React TP2.2",
        img: "https://www.infnet.edu.br/infnet/wp-content/uploads/sites/6/2023/03/Design-sem-nome-1-3.png",
        action: "Acesse o Github",
        text: "Trabalho de João Cicero no Instituto Infnet",
        href: "https://github.com/jvcmtr/React_2024_Joao_Ramos_DR2_TP2.2"
    },
    {
        title:"Fundamentos de React TP3",
        img: "https://www.infnet.edu.br/infnet/wp-content/uploads/sites/6/2023/03/Design-sem-nome-1-3.png",
        action: "Acesse o Github",
        text: "Trabalho de João Cicero no Instituto Infnet",
        href: "https://github.com/jvcmtr/React_2024_Joao_Ramos_DR2_TP3"
    },
]
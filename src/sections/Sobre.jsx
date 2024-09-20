
export default function Sobre(props){
    return(
        <div
        id={props.id} 
        className={props.className}
         style={sectionStyle}>
            <h1> Sobre Este trabalho : </h1>
            <p>
                Neste trabalho diferentes componentes são estilizados de diferentes maneiras. 
                O Componente Card é estilizado com Card.module.css, enquanto os componentes de layout são estilizados usando css global.
                Os demais componentes usam React Inline Style 
            </p>
            <p>
                Isto foi feito pois no enunciado eram pedidos muitas vezes os mesmos componentes, mas estilizados de maneira diferente. 
                Este trabalho cumpre os requisitos do teste de performance no sentido em que possui os componentes exigidos e utiliza os 
                metodos de estilização pedidos, apesar de não cumprir com todas as combinações.
            </p>
        </div>
    )
}

const sectionStyle =  {
    padding: '50px',
    display: 'flex',
    flexDirection: 'column'
}
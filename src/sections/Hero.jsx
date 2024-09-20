import styles from './Hero.module.css'
import { sections } from '../constants'

export default function Hero(props){
    const img = "https://miro.medium.com/v2/resize:fit:1400/1*uc_iyOVFRAa7kvA6dOEB7Q.png"
    return(
        <div id={sections[0]} 
        style={{
            position: 'relative',
            width: '100vw',
            backgroundImage: 'linear-gradient(#000 , transparent, var(--t)) , url("https://miro.medium.com/v2/resize:fit:1400/1*uc_iyOVFRAa7kvA6dOEB7Q.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            overflow: 'hidden',
        }}>
            <div style={{paddingTop: "10vh"}}>
                <h1 style={textStyle}>João Cicero</h1>
                <p style={textStyle}>Mobile First Teste de Performance 3</p>
                <p style={textStyle}>Instituto Infnet 2024</p>
            </div>
        </div>
    )
}

const textStyle = {
    position: 'relative',
    color: '#fff', 
    textAlign: 'center'
}
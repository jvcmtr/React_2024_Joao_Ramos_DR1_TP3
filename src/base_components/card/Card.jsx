import styles from'./Card.module.css'
import Button from '../button/Button.jsx'

export default function Card(props){
    console.log(props.action)


    return(
        <div className={styles.container + " "+ props.className} >
            <img
            className={styles.img}
            src={props.img}
            />
            <div className={styles.textContainer} >
                <h1 className={styles.heading}> {props.title} </h1>
                <p className={styles.text}>
                    {props.text}
                </p>
                {
                    props.action?
                    <Button onClick={props.onClick} className={props.className}> {props.action} </Button>
                    : ""
                }
            </div>
        </div>
    )
}
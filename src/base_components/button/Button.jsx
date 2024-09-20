import React from "react"

export default function Button(props){
    const [hover, setHover] = React.useState(false)
    return(
        <div
            onMouseLeave={()=>setHover(false)}
            onMouseEnter={()=>setHover(true)}
            onClick={props.onClick} 
            className={"action " + props.className }
            style={{
                padding: hover? '7px': '5px',
                backgroundColor: hover? 'var(--highlight)': 'var(--inactiveHighlight)',
                fontWeight: '800',
                transitionDuration: '0.1s'
            }}
        >
            {props.children}
        </div>
    )
}
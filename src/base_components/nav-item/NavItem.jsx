import React from "react";

export default function NavItem(props){
    const [hover, setHover] = React.useState(false);
    return(
        <div
            onClick={props.onClick} 
            onMouseEnter={()=>setHover(true)}
            onMouseLeave={()=>setHover(false)}
            className={props.className}
            style={{
                display:'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                padding: hover? '15px': '10px',
                backgroundColor: hover? 'var(--highlight)': 'var(--inactiveHighlight)',
                fontWeight: '800',
                transitionDuration: '0.1s',
                boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
            }}
        >
            {props.name}
        </div>
    )
}
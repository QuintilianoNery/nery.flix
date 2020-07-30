import React from 'react';

function ButtonLink(props ) {
    //  props => { className: "valor que a pessoa passar" , href: "/"}
    return (        
        <a  href= {props.href} className={props.className}>
            {props.children}
        </a>
    );
}

//Exportação do ButtonLink padrão
export default ButtonLink; 
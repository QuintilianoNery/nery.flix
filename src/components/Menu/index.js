import React from 'react';
import Logo from '../../assets/img/logo.png';
import '../Menu/menu.css';
import Button from '../Button';

//import ButtonLink from "./components/ButtonLink";

function Menu( ) {
    return (        
        <nav className="Menu">
            <a href="/">
            <img className="Logo" src={Logo} alt="ReactFlix" />
            </a>
            <Button as="a" className="ButtonLink" href="/">
                Novo vídeo
            </Button> 
        <!-- Begin Inspectlet Asynchronous Code -->
        <script type="text/javascript">
        (function() {
        window.__insp = window.__insp || [];
        __insp.push(['wid', 939756037]);
        var ldinsp = function(){
        if(typeof window.__inspld != "undefined") return; window.__inspld = 1; var insp = document.createElement('script'); insp.type = 'text/javascript'; insp.async = true; insp.id = "inspsync"; insp.src = ('https:' == document.location.protocol ? 'https' : 'http') + '://cdn.inspectlet.com/inspectlet.js?wid=939756037&r=' + Math.floor(new Date().getTime()/3600000); var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(insp, x); };
        setTimeout(ldinsp, 0);
        })();
        </script>
        <!-- End Inspectlet Asynchronous Code -->                      
        </nav>
    );
}

//Exportação do menu padrão
export default Menu; 
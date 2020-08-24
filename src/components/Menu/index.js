import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../../assets/img/logo.png';
import '../Menu/menu.css';
import Button from '../Button';

//import ButtonLink from "./components/ButtonLink";

function Menu( ) {
    return (        
        <nav className="Menu">
            <Link to="/">
                // Como configurar o link com comportamento de SPA      
            <img className="Logo" src={Logo} alt="ReactFlix" />
            </Link>


            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo vídeo
            </Button>   
        </nav>
    );
}

//Exportação do menu padrão
export default Menu; 
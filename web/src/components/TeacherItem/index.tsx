import React from 'react';

import './styles.css';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

function TeacherItem(){
  return(
    <article className="teacher-item">
    <header>
      <img src="https://ci5.googleusercontent.com/proxy/jP6YkOOJ3UYyjVsnWlnTbqj37iEz9RtaY8bhD3G07ZfTFb7DecFuJYiAltWQTrKVcA=s0-d-e1-ft#https://i.ibb.co/WBVdCBS/o.jpg" alt="Gustavo Ferreira"/>
      <div>
        <strong>
        Gustavo Ferreira
        </strong>
        <span>
        Informatica
        </span>
      </div> 
    </header>
    <p>
      Desenvolvedor apaixonado por tecnologia e buscando sempre inovação.<br /><br />
      Formado em Engenharia da computação e atualmente desenvolvedor Java e ReactNative.
    </p>
    <footer>
      <p>
        Preço/hora
        <strong>
          R$ 15,00
        </strong>
      </p>
      <button type="button">
        <img src={whatsappIcon} alt="WhatsApp"/>
        Entrar em contato
      </button>
    </footer>          
  </article>
  );
}

export default TeacherItem;
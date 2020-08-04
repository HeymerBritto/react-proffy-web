import React from "react";

import whatsAppIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.css";

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars3.githubusercontent.com/u/57685034?s=460&u=d7e8b2205d343124bd70c0733a9d0429d63d63f0&v=4"
          alt="Imagem Perfil"
        />
        <div>
          <strong>Heymer Britto</strong>
          <span>Desenvolvimento de Software</span>
        </div>
      </header>
      <p>
        Nerd, Gamer, Fã de Breaking Bad e PS4 e Desenvolvedor nas horas vagas.{" "}
        <br></br> Apaixonado por escrever código que ninguem entende e deixar as
        pessoas malucas.
      </p>
      <footer>
        <p>
          Preço/hora
          <strong>R$ 100,00</strong>
        </p>
        <button type="button">
          <img src={whatsAppIcon} alt="WhatsApp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;

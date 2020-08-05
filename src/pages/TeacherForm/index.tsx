import React from "react";
import PageHeader from "../../components/PageHeader";
import Input from "../../components/Input";

import warningIcon from "../../assets/images/icons/warning.svg";

import "./styles.css";

function TeacherForm() {
  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        title="Que incrível que você quer dar aulas."
        description="O primeiro passo para começar a ensinar."
      ></PageHeader>
      <main>
        <fieldset>
          <legend>Seus Dados</legend>
          <Input name="name" label="Nome Completo"></Input>
          <Input name="avatar" label="Avatar"></Input>
          <Input name="whatsapp" label="WhatsApp"></Input>
        </fieldset>
        <fieldset>
          <legend>Sobre a Aula</legend>
          <Input name="subject" label="Matéria"></Input>
          <Input
            name="cost"
            label="Custo da sua hora por aula"
            type="currency"
          ></Input>
        </fieldset>
        <footer>
          <p>
            <img src={warningIcon} alt="Aviso Importante" />
            Importante! <br />
            Preencha todos os dados
          </p>
          <button type="button">Salvar Cadastro</button>
        </footer>
      </main>
    </div>
  );
}

export default TeacherForm;

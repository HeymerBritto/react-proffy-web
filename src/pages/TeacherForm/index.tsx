import React, { useState, FormEvent } from "react";
import { useHistory } from "react-router-dom";
import PageHeader from "../../components/PageHeader";

import Input from "../../components/Input";
import Select from "../../components/Select";
import TextArea from "../../components/TextArea";

import warningIcon from "../../assets/images/icons/warning.svg";

import "./styles.css";
import api from "../../services/api";

function TeacherForm() {
  const history = useHistory();
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [whatsapp, setWhatsApp] = useState("");
  const [bio, setBio] = useState("");

  const [subject, setSubject] = useState("");
  const [cost, setCost] = useState("");

  const [schedule, setScheduleItems] = useState([
    { week_day: 0, from: "", to: "" },
  ]);

  function addNewScheduleItem() {
    setScheduleItems([
      ...schedule,
      {
        week_day: 0,
        from: "",
        to: "",
      },
    ]);
  }

  function setScheduleItemValue(pos: number, field: string, value: string) {
    const newArray = schedule.map((scheduleItem, index) => {
      if (index === pos) {
        return { ...scheduleItem, [field]: value };
      }
      return scheduleItem;
    });

    setScheduleItems(newArray);
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    api
      .post("classes", {
        name,
        avatar,
        whatsapp,
        bio,
        subject,
        cost: Number(cost),
        schedule,
      })
      .then(() => {
        alert("Cadastro realizado com sucesso!");
        history.push("/");
      })
      .catch(() => {
        alert("Erro no cadastro!");
      });
  }

  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        title="Que incrível que você quer dar aulas."
        description="O primeiro passo para começar a ensinar."
      ></PageHeader>
      <main>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>Seus Dados</legend>
            <Input
              name="name"
              label="Nome Completo"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            ></Input>
            <Input
              name="avatar"
              label="Avatar"
              value={avatar}
              onChange={(e) => {
                setAvatar(e.target.value);
              }}
            ></Input>
            <Input
              name="whatsapp"
              label="WhatsApp"
              value={whatsapp}
              onChange={(e) => {
                setWhatsApp(e.target.value);
              }}
            ></Input>
            <TextArea
              name="bio"
              label="Biografia"
              value={bio}
              onChange={(e) => {
                setBio(e.target.value);
              }}
            />
          </fieldset>
          <fieldset>
            <legend>Sobre a Aula</legend>
            <Select
              name="subject"
              label="Matéria"
              value={subject}
              onChange={(e) => {
                setSubject(e.target.value);
              }}
              options={[
                { value: "Artes", label: "Artes" },
                { value: "Biologia", label: "Biologia" },
                { value: "Ciências", label: "Ciências" },
                { value: "Educação Física", label: "Educação Física" },
                { value: "Geografia", label: "Geografia" },
                { value: "História", label: "História" },
                { value: "Matemática", label: "Matemática" },
                { value: "Portguês", label: "Portguês" },
                { value: "T. I.", label: "T. I." },
                { value: "Química", label: "Química" },
              ]}
            ></Select>
            <Input
              name="cost"
              label="Custo da sua hora por aula"
              type="currency"
              value={cost}
              onChange={(e) => {
                setCost(e.target.value);
              }}
            ></Input>
          </fieldset>
          <fieldset>
            <legend>
              Horários disponíveis
              <button onClick={addNewScheduleItem}>+ Novo Horário</button>
            </legend>
            {schedule.map((scheduleItem, index) => {
              return (
                <div key={scheduleItem.week_day} className="schedule-item">
                  <Select
                    name="week_day"
                    label="Dia da semana"
                    value={scheduleItem.week_day}
                    onChange={(e) =>
                      setScheduleItemValue(index, "week_day", e.target.value)
                    }
                    options={[
                      { value: "0", label: "Domingo" },
                      { value: "1", label: "Segunda-Feira" },
                      { value: "2", label: "Terça-Feira" },
                      { value: "3", label: "Quarta-Feira" },
                      { value: "4", label: "Quinta-Feira" },
                      { value: "5", label: "Sexta-Feira" },
                      { value: "6", label: "Sábado" },
                    ]}
                  ></Select>
                  <Input
                    name="from"
                    label="Das"
                    type="time"
                    value={scheduleItem.from}
                    onChange={(e) =>
                      setScheduleItemValue(index, "from", e.target.value)
                    }
                  />
                  <Input
                    name="to"
                    label="Até"
                    type="time"
                    value={scheduleItem.to}
                    onChange={(e) =>
                      setScheduleItemValue(index, "to", e.target.value)
                    }
                  />
                </div>
              );
            })}
          </fieldset>
          <footer>
            <p>
              <img src={warningIcon} alt="Aviso Importante" />
              Importante! <br />
              Preencha todos os dados
            </p>
            <button type="submit">Salvar Cadastro</button>
          </footer>
        </form>
      </main>
    </div>
  );
}

export default TeacherForm;

import React, { useState } from "react";
import Formulario from "../components/Formulario/Formulario";
import { ITarefa } from "../types/tarefa";
import Lista from "../components/Lista/Lista";
import style from "./App.module.scss";
import Cronometro from "../components/Cronometro/Cronometro";

function App() {
  const [tarefas, setTarefas] = useState<ITarefa[]>([]);
  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas} />
      <Lista tarefas={tarefas} />
      <Cronometro />
    </div>
  );
}

export default App;


import React, { useState } from 'react';
import Formulario from '../componentes/Formulario';
import Lista from '../componentes/Lista';
import style from './styles.module.scss';
import Cronometro from '../componentes/Cronometro';
import { ITarefa } from '../types/tarefa';

function App() {

  const [tarefas, setTarefas] = useState<ITarefa[]>([]);
  return (
      <div className={style.AppStyle}>
        <Formulario setTarefas={setTarefas}/>
        <Lista tarefas={tarefas}/> 
        <Cronometro />
      </div>
    );
  }
// Componente principal que renderiza a estrutura da aplicação. 
// Inclui o formulário para adicionar tarefas, a lista de tarefas já cadastradas 
// e o cronômetro para gerenciar o tempo das tarefas. 
// As tarefas são passadas como propriedade para o componente Lista, 
// e a função setTarefas é passada para o componente Formulario para atualizar o estado.

export default App;

import React from 'react'
import Item from './item';
import Style from './Lista.module.scss';
import { ITarefa } from '../../types/tarefa';

function Lista({tarefas}: {tarefas: ITarefa[]}) {
    return(
        <aside className={Style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {tarefas.map((item, index) => (
                    <Item 
                    key={index}
                    {...item}
                    />    
                ))} 
            </ul>
        </aside>
    )
} 

export default Lista;
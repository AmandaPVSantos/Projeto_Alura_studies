import React from 'react'
import Item from './item';
import Style from './Lista.module.scss';
import { ITarefa } from '../../types/tarefa';

interface Props {
    tarefas: ITarefa[],
    selecionaTarefa: (tarefaSelecionada: ITarefa) => void // void pois nao retornar nenum valor
}

function Lista({tarefas, selecionaTarefa}: Props) {
    return(
        <aside className={Style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {tarefas.map(item => (
                    <Item 
                    selecionaTarefa={selecionaTarefa}
                    key={item.id}
                    {...item}
                    />    
                ))} 
            </ul>
        </aside>
    )
} 

export default Lista;
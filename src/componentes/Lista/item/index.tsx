import React from 'react';
import Style from '../Lista.module.scss';
import { ITarefa } from '../../../types/tarefa';

// Estende uma interface para outra,
// permitindo a comunicação de informações entre interfaces.
interface Props extends ITarefa {
    selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}


export default function Item(
    {
        tarefa, 
        tempo, 
        selecionado, 
        completado, 
        id, 
        selecionaTarefa
    }: Props) {
    console.log('item atual: ', {tarefa, tempo, selecionado, completado, id});
    return (
        <li 
            className={Style.item} 
            onClick={() => selecionaTarefa(
                {
                    tarefa,
                    tempo,
                    selecionado,
                    completado,
                    id
                }
            )}
        >
            <h3>{tarefa}</h3>
            <span>{tempo}</span>
        </li>
    )
}
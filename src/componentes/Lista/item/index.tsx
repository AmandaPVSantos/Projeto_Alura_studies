import React from 'react';
import Style from '../Lista.module.scss';

export default function Item({tarefa, tempo}: {tarefa: string, tempo: string}) {
    // outra forma seria>> const {tarefa, tempo} = props;

    return (
        <li className={Style.item}>
            <h3>{tarefa}</h3>
            <span>{tempo}</span>
        </li>
    )
}
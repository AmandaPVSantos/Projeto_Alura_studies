import React from 'react'
import Botao from "../Botao"
import Style from './cronometro.module.scss'
import Relogio from './Relogio/index';

export default function Cronometro() {
    return (
        <div className={Style.cronometro}>
            <p className={Style.titulo}>
                Escolha um card e inicie o cronômetro
            </p>

            <div className={Style.relogioWrapper}>
                <Relogio />
            </div>

            <Botao>
                Começar
            </Botao>
        </div>
    )
}



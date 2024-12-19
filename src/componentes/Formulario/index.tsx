import React from 'react'; 
import Style from './Formulario.module.scss' 
import Botao from '../Botao/index';

class Formulario extends React.Component {
    render() {
        return (
            <form className={Style.novaTarefa}>
                <div className={Style.inputContainer}>
                    <label htmlFor={Style.tarefa}>
                        Adicione um novo estudo
                    </label>
                    <input 
                        type="text"
                        name="tarefa"
                        id="tarefa"
                        placeholder="O que você quer estudar?"
                        required
                     />
                </div>

                <div className={Style.inputContainer}>
                    <label htmlFor="tempo">
                        Tempo
                    </label>

                    <input 
                        type="time"
                        step="1"
                        name="tempo"
                        id="tempo"
                        min="00:00:00"
                        max="01:30:00"
                        required 
                    />
                </div>

                <Botao>
                    Adicionar
                </Botao>
            </form>
        )
    }
}

export default Formulario;

// estilando uma class que possui - hífem
// coloca entre [""] assim,
// <div className={Style["novaTarefa__-container"]}></div>

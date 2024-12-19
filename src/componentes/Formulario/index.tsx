import React from 'react'; 
import Style from './Formulario.module.scss' 
import Botao from '../Botao/index';
import { ITarefa } from '../../types/tarefa';
import {v4 as uuidv4}  from 'uuid' // Importa a função uuidv4 da biblioteca 'uuid' para gerar identificadores únicos universais (UUIDs),
                                  // que são amplamente utilizados para criar valores únicos, como chaves em listas ou identificadores de recursos.



// Componente Formulario que recebe a propriedade setTarefas, que é uma função 
// para atualizar o estado de uma lista de tarefas. Cada tarefa é um objeto 
// com as propriedades 'tarefa' (descrição) e 'tempo' (tempo atribuído à tarefa).
class Formulario extends React.Component <{
    setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>
}> {
    state = {
        tarefa: "",
        tempo: "00:00"
    }

    // criando uma função dentro do class component e é acessado através de <this.nomeDafunção>
    adicionarTarefa(evento: React.FormEvent<HTMLFormElement>) {
        evento.preventDefault(); // Impede o comportamento padrão do evento (ex.: recarregar a página ao enviar o formulário)
        this.props.setTarefas(tarefasAntigas =>
            [
                ...tarefasAntigas, 
                {
                    ...this.state,
                    selecionado: false,
                    completado:false,
                    id: uuidv4()
                }
            ]
        );
        // setState para resetar o formulário
        this.setState({
            tarefa: "",
            tempo: "00:00"
        })
    }
    
    render() {
        return (
            // Associa um estilo ao formulário e define uma função para executar quando o formulário for enviado.
            <form className={Style.novaTarefa} onSubmit={this.adicionarTarefa.bind(this)}>
                <div className={Style.inputContainer}>
                    <label htmlFor={Style.tarefa}>
                        Adicione um novo estudo
                    </label>
                    <input 
                        type="text"
                        name="tarefa"
                        id="tarefa"
                        value={this.state.tarefa}
                        onChange={evento => this.setState({...this.state ,tarefa: evento.target.value})}
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
                        value={this.state.tempo}
                        onChange={evento => this.setState({...this.state, tempo: evento.target.value})}
                        id="tempo"
                        min="00:00:00"
                        max="01:30:00"
                        required 
                    />
                </div>

                <Botao type="submit">
                    Adicionar
                </Botao>
            </form>
        )
    }
}

export default Formulario;
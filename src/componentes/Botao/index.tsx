import React, { Component } from 'react';
import Style from './Botao.module.scss';

interface BotaoProps {
  type?: "button" | "submit" | "reset";
  children: React.ReactNode;  // Definir o tipo de 'children'
}

class Botao extends Component<BotaoProps> {
  type?: "button" | "submit" | "reset" | undefined

  render() {
    const { type = "button" } = this.props;  // valor padrão para o tipo
    return (
      <button type={type} className={Style.botao}>
        {this.props.children}  {/* Acessando children corretamente */}
      </button>
    );
  }
}

export default Botao;

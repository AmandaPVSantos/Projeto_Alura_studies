import React from 'react'; //Importa a biblioteca React, que é essencial para criar componentes em React.
import Style from './Botao.module.scss'; //Importa o arquivo CSS (usando CSS Modules) para aplicar estilos ao componente.

// Declara uma classe chamada Botao que estende React.Component. Isso significa que ela é um componente de classe do React.
//React.Component<React.PropsWithChildren<{}>>:
    // Especifica que o componente pode aceitar props (propriedades) e que essas props incluem a propriedade especial children.
class Botao extends React.Component<React.PropsWithChildren<{}>> {
    render() {
        return (
            <button className={Style.botao}>
                {this.props.children} {/* Representa as propriedades que foram passadas para o componente Botao. */}

            </button>
        );
    }
}

export default Botao; //Exporta o componente Botao para que ele possa ser usado em outros arquivos.


// ----------------------------------------------------------------------------------------------------------------------------
// funcao render() é obrigatória dentro do class component
// ----------------------------------------------------------------------------------------------------------------------------
            // class Botao extends React.Component {
            //     render() {
            //         //outra forma de aplicar o style é atraves de uma variavel.
            //         // const color = 'red';
            
            //         //outra forma...
            //         // const backgroundColor = "pink"
            
            //         //outro modo -> "line style = "definir estilos diretamente nos elementos, utilizando a propriedade style em JSX"
            //         // const backgroundColor = "pink"
            //         // const styles = {
            //         //     backgroundColor
            //         // }
            
            //         //outro modo aplicar o style;
            //         // const estaAtivo = true;
            //         // const styles = {
            //         //     backgroundColor: estaAtivo ? "green" : "red"
            //         // }
                    
            //         return (
            //             <button></button>
            //         )
            //     }
            // }            

                // {/* // style={styles} */}
            

            // <button style={styles}>
            // {/* // {
            // //     // backgroundColor: color  //FORMA 1 DE STYLE> lembrete: Para chamar a variavel, nao precisa de aspas

            // //     backgroundColor // FORMA 2 DE STYLE > essa é outra demonstração                
            // // }} aqui seria o fechamento da tag*/}
            //     Botão
            // </button>
// ----------------------------------------------------------------------------------------------------------------------------            
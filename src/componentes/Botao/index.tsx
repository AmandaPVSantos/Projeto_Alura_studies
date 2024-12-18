import React from 'react';
import './style.scss';

class Botao extends React.Component {
    render() {
        return (
            <button className="botao">
                Botão
            </button>
        )
    }
}

export default Botao;


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
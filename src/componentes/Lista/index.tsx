import React, { useState } from 'react';
import Item from './item';
import Style from './Lista.module.scss';


function Lista() {
    //  hook useState que retorna um array com 2 itens
    const [tarefas, setTarefas] = useState ([{
        tarefa: 'React',
        tempo: '02:00:00'
    },{
        tarefa: 'Javascript',
        tempo: '01:00:00'
    },{
        tarefa: 'Typescript',
        tempo: '03:00:00'
    }]);

    return(
        <aside className={Style.listaTarefas}>
            <h2 onClick={() => {
                setTarefas([...tarefas, {tarefa: "Estudar estado", tempo: "05:00:00"}])
            }}>Estudos do dia</h2>
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



// () => significa que o código vai retornar automaticamente, útil em arrow functions de linha única.
// {} => é usado para delimitar um escopo ou para retornar explicitamente no JSX.


// exemplo>> const name = "Amanda";
// return <h1>{name}</h1>; // Interpola o valor de `name` no JSX.

// - O `()` após a seta da função é usado para retornar o conteúdo JSX automaticamente.
// - O `{}` no JSX é usado para interpolar valores ou executar expressões JavaScript.


// para fazer de forma manual seria assim

//                 {/*Fazendo de forma manual 
//                     <li>
//                         <h3>
//                             React
//                         </h3>
//                         <span>
//                             02:00:00
//                         </span>
//                     </li>

//                     <li>
//                         <h3>
//                             Javascript
//                         </h3>
//                         <span>
//                             01:00:00
//                         </span>
//                     </li> */}

// mas nao é considerado boas praticas                    
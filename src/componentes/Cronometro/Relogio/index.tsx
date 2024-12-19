import React from "react";
import Style from './relogio.module.scss'

export default function Relogio() {
    return (
        <React.Fragment>
            <span className={Style.relogioNumero}>0</span>
            <span className={Style.relogioNumero}>0</span>
            <span>:</span>
            <span className={Style.relogioNumero}>0</span>
            <span className={Style.relogioNumero}>0</span>
        </React.Fragment>
    )
}



// Segunda forma de fazer o codigo acima, incluindo tags vazias <>
// export function Relogio() {
//     return (
//         <>
//             <span>0</span>
//             <span>0</span>
//             <span>:</span>
//             <span>0</span>
//             <span>0</span>
//         </>
//     )
// }
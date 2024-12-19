import React from "react";
export function Relogio() {
    return (
        <>
            <span>0</span>
            <span>0</span>
            <span>:</span>
            <span>0</span>
            <span>0</span>
        </>
    )
}



// Segunda forma de fazer o codigo acima, incluindo <React.Fragment>
// export function Relogio() {
//     return (
//         <React.Fragment>
//             <span>0</span>
//             <span>0</span>
//             <span>:</span>
//             <span>0</span>
//             <span>0</span>
//         </React.Fragment>
//     )
// }
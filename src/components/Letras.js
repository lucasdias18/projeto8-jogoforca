import styled from "styled-components";

const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
// alfabeto.map((letra) => )
export default function Letras() {
    // const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    let botoes;
    // return (
    //     <>
    //         <Botao />
    //     </>
    // )
    for (let i=0; i<alfabeto.length; i++) {
        // botoes += <Botao>{alfabeto[i]}</Botao>
        return Botao(i)
    }

    // return botoes
}

function Botao(i) {
    // console.log(alfabeto)
    return (
        <button>{alfabeto[i]}</button>
    )
}

// const Botao = styled.div`
// width: 20px
// heigth: 20px
// background-color: red
// `
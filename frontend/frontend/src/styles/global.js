import {createGlobalStyle} from "styled-components"

const Global= createGlobalStyle`

*{
    margin:0;
    padding: 0;
    font-family:'poppins',sans-serif
}

body{
    width:100vw;
    heigth:100vw;
    display:flex;
    justify-content:center;
    backgroud-color:#f2f2f2;
}
`
export default Global
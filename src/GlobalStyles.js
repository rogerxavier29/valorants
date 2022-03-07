import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

body {
    margin: 0;
    padding: 0;
    font-family:'Poppins';
}

div.MuiFormControl-root.select-agent{
    width:310px;
    height:53px;
    background:#fff;
    border-radius:4px;
}

.MuiModal-root.agents-add.css-79ws1d-MuiModal-root{
    display:flex;
    justify-content: center;
    align-items:center;
   
}

.MuiModal-root.agents-skill.css-79ws1d-MuiModal-root{
    display:grid;
    justify-content: center;
    align-items:center;
   
}

div.sc-bBHxTw{
    display:grid;
    gap:15px;

}

div.MuiFormControl-root.select-function-agent{
width: 300px;
height: 40px;
background: #FFFFFF 0% 0% no-repeat padding-box;
border: 1px solid #133052;
border-radius: 5px;
}


div.MuiFormControl-root.input-skill{
width: 300px;
height: 40px;
background: #FFFFFF 0% 0% no-repeat padding-box;
border: 1px solid #133052;
border-radius: 5px;
}

div.MuiInputBase-root.MuiOutlinedInput-root.MuiInputBase-formControl{
width: 300px;
height: 40px;

}

`;

export default GlobalStyle;

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

body {
    margin: 0;
    padding: 0;
    font-family:'Poppins';
    background:#0d161f;
}

div.MuiFormControl-root.select-agent{
    width:310px;
    height:40px;
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

div.MuiFormControl-root.input-agent{
    width: 300px;
    height: 40px;
    background:#fff;
    border-radius:4px;

}



div.MuiInputBase-root.MuiInput-root.MuiInput-underline.MuiInputBase-formControl.MuiInput-formControl{
    position: unset;
    border-bottom:0;
}

div#demo-simple-select-helper.MuiSelect-root.MuiSelect-select.MuiSelect-selectMenu.MuiInputBase-input.MuiInput-input{
    padding-left:10px;
    padding-top:11px;
}

svg.MuiSvgIcon-root.MuiSvgIcon-fontSizeMedium.css-i4bv87-MuiSvgIcon-root{
 padding-top:10px;
}

  div.MuiTabs-scroller.MuiTabs-hideScrollbar.MuiTabs-scrollableX .css-69z67c-MuiTabs-scroller{
    display: flex;
    justify-content: space-between;
    gap: 20px;
  }

.MuiSvgIcon-root.MuiSvgIcon-fontSizeSmall.css-ptiqhd-MuiSvgIcon-root {
    color: #E13157
    }

`;

export default GlobalStyle;

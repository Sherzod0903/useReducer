import styled,{css} from "styled-components";
import {ReactComponent as home} from'../Assets/icon/home.svg'
import {ReactComponent as group} from'../Assets/icon/group.svg'
import {ReactComponent as search} from'../Assets/icon/search.svg'



const Common =css`
display:flex;
justify-content:center;
align-items:center;
`

export const Container=styled.div`
display:flex;
justify-content:space-evenly;


`
export const Input=styled.input`
width: 829px;
height: 44px;
padding-left:30px;
`


export const Icon=styled.div`
padding:10px;
`
Icon.Home=styled(home)`

position:absolute;
/* width:100%; */
/* padding-left:10px; */
text-align:center;
left:77px;
top:78px;

`

Icon.Group=styled(group)`

`
Icon.Search=styled(search)`

`


export const Advanced=styled.div`
${Common}
border: 1px solid #E6E9EC;
border-radius: 2px;

`

export const Searc=styled.div`
${Common}

width: 180px;
height: 44px;
background: #0061DF;
`
import styled from 'styled-components';
import { ReactComponent as logo } from '../Assets/icon/logo.svg';


export const Container=styled.div`
display:flex;
width: 1440px;
height: 64px;
background: #0D263B;
justify-content:space-evenly;
align-items:center;
@media (max-width:100px){
    display:none;
}
`

export const Icon=styled.div`


`
Icon.Logo=styled(logo)`

`


export const Option=styled.div`
display:flex;
width:350px;
justify-content:space-between;
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: #FFFFFF;
`

export const Login=styled.div`
width: 120px;
height: 44px;

display:flex;
justify-content:center;
align-items:center;
border: 1px solid #FFFFFF;
border-radius: 2px;
:active{
    transform: scale(0.9)
}
cursor: pointer;
@media (max-width:400px){
    display:none;
}


`
Login.P=styled.p`
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 20px;
color: #FFFFFF;
`

import styled from "styled-components";

const Button = styled.a`
    max-width:230px;
    text-align: center;
    padding: .7em 2em;
    margin: 0 10px 10px 0;
    background-color: ${({ theme }) => theme.colors.main};
    color: ${({ theme }) => theme.colors.light};
    font-size: 1em;
    text-decoration: none;
    text-transform: uppercase;
    border-radius: .4em;
    border: none;
    transition: background-color 500ms ease, color 500ms ease;

    &:hover{
        background-color: ${({ theme }) => theme.colors.light};
        color: ${({ theme }) => theme.colors.main};
    }

    &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
    }
`
const LightButton = styled(Button)`
    background-color: ${({ theme }) => theme.colors.light};
    color: ${({ theme }) => theme.colors.main};
`

const Title = styled.h2`
    color:  ${({ theme }) => theme.colors.main};
	position: relative;
	width: max-content;
	text-transform: uppercase;
    z-index: 1;

    &:before{
        content: "";
        position: absolute;
        z-index: -1;
        width: 100%;
        height:10px;
        bottom: 1px;
        background-color: ${({ theme }) => theme.colors.light};
        opacity: .5;
    } 
	
`
const WhiteTitle = styled(Title)`
    color:  ${({ theme }) => theme.colors.white};
`;

const Figure = styled.figure`
    padding:20px;
    border-radius: 20px;
    margin-top: 80px;
    background-color: ${({ theme }) => theme.colors.accent};
    width: 100%;

    img{
        border-radius: 10px;
        margin-top: -80px;
        box-shadow: 0 0 30px rgba(8,57,73, .3);
        width: 100%;
    }
        
`
const Loader = styled.div`
/**
  * Building blocks
  *
  * @author jh3y - jheytompkins.com
*/
@-webkit-keyframes building-blocks {
0%,
20% {
    opacity: 0;
    -webkit-transform: translateY(-300%);
            transform: translateY(-300%); }
30%,
70% {
    opacity: 1;
    -webkit-transform: translateY(0);
            transform: translateY(0); }
90%,
100% {
    opacity: 0;
    -webkit-transform: translateY(300%);
            transform: translateY(300%); } }
@keyframes building-blocks {
0%,
20% {
    opacity: 0;
    -webkit-transform: translateY(-300%);
            transform: translateY(-300%); }
30%,
70% {
    opacity: 1;
    -webkit-transform: translateY(0);
            transform: translateY(0); }
90%,
100% {
    opacity: 0;
    -webkit-transform: translateY(300%);
            transform: translateY(300%); } }

.building-blocks {
position: relative; }
.building-blocks div {
    height: 20px;
    position: absolute;
    width: 20px; }
    .building-blocks div:after {
    -webkit-animation: building-blocks 2.1s ease infinite backwards;
            animation: building-blocks 2.1s ease infinite backwards;
    background: ${({ theme }) => theme.colors.accent};
    content: '';
    display: block;
    height: 20px;
    width: 20px; }
    .building-blocks div:nth-child(1) {
    -webkit-transform: translate(-50%, -50%) translate(60%, 120%);
            transform: translate(-50%, -50%) translate(60%, 120%); }
    .building-blocks div:nth-child(2) {
    -webkit-transform: translate(-50%, -50%) translate(-60%, 120%);
            transform: translate(-50%, -50%) translate(-60%, 120%); }
    .building-blocks div:nth-child(3) {
    -webkit-transform: translate(-50%, -50%) translate(120%, 0);
            transform: translate(-50%, -50%) translate(120%, 0); }
    .building-blocks div:nth-child(4) {
    -webkit-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%); }
    .building-blocks div:nth-child(5) {
    -webkit-transform: translate(-50%, -50%) translate(-120%, 0);
            transform: translate(-50%, -50%) translate(-120%, 0); }
    .building-blocks div:nth-child(6) {
    -webkit-transform: translate(-50%, -50%) translate(60%, -120%);
            transform: translate(-50%, -50%) translate(60%, -120%); }
    .building-blocks div:nth-child(7) {
    -webkit-transform: translate(-50%, -50%) translate(-60%, -120%);
            transform: translate(-50%, -50%) translate(-60%, -120%); }
.building-blocks div:nth-child(1):after {
    -webkit-animation-delay: 0.15s;
            animation-delay: 0.15s; }
.building-blocks div:nth-child(2):after {
    -webkit-animation-delay: 0.3s;
            animation-delay: 0.3s; }
.building-blocks div:nth-child(3):after {
    -webkit-animation-delay: 0.45s;
            animation-delay: 0.45s; }
.building-blocks div:nth-child(4):after {
    -webkit-animation-delay: 0.6s;
            animation-delay: 0.6s; }
.building-blocks div:nth-child(5):after {
    -webkit-animation-delay: 0.75s;
            animation-delay: 0.75s; }
.building-blocks div:nth-child(6):after {
    -webkit-animation-delay: 0.9s;
            animation-delay: 0.9s; }
.building-blocks div:nth-child(7):after {
    -webkit-animation-delay: 1.05s;
            animation-delay: 1.05s; }
`

export { Button, LightButton, Title, WhiteTitle, Figure, Loader }
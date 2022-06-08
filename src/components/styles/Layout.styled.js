import styled from "styled-components";

const StyledMain = styled.main`
    width: 100%;
    overflow: hidden;
`
const ContainerFluid = styled.section`
    width:100%;
    background-color: ${({ theme }) => theme.colors.main};

    p{
        color: ${({ theme }) => theme.colors.white};
    }
    `
const Container = styled.div`
        width:100%;
        max-width:1200px;
        margin: 0 auto;
        display: grid;
        grid-gap: 20px;
        padding:80px 20px;
    `
const StyledHero = styled.section`
    width:100%;
    max-width:1200px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
`
const ColumnHero = styled.div`
    padding:30px;
    flex:1;

    h4{
        color:${({ theme }) => theme.colors.secondary};
    }
    h1 span{
        color:${({ theme }) => theme.colors.secondary};
    }
    h3{
        color:${({ theme }) => theme.colors.neutral};
    }

    @media (max-width: 660px){
        flex: 1 1 100%;
        h4{
            font-size: 1em;
        }
        h1{
            font-size: 2.7em;
        }
        h3{
            font-size: 1.3em;
        }
    }
`
const Flex = styled.div` 
    display: grid;
    grid-gap: 20px;
    grid-template-columns: 1fr 1fr 1fr;

    article{
        display: grid;
            grid-gap: 20px;
            margin-bottom:40px;

        figure{
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
        }

        div{
            padding: 0 20px;
            li{
                display: inline-block;
                padding: 5px;
                margin-bottom: 40px;
            }
        }

        &:first-child{
            grid-column: span 3;
            display: grid;
            grid-template-columns: 2fr 3fr;
            grid-gap: 20px;

            align-items: center;
        }

    }
    @media (max-width: 920px){
        grid-template-columns: 1fr 1fr;
        
        article{
            &:first-child{
            grid-column: span 1;
            grid-template-columns: 1fr;
        }
        }
    }
    @media (max-width: 768px){
        grid-template-columns: 1fr;
        
    }
`

export { Container, ContainerFluid, StyledMain, ColumnHero, StyledHero, Flex }
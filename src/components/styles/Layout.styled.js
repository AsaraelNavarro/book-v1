import styled from "styled-components";

const StyledMain = styled.main`
    width: 100%;
    overflow: hidden;
`
const ContainerFluid = styled.section`
    width:100%;
    background-color: ${({ theme }) => theme.colors.main};
    padding: 60px 0;

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
        padding: 30px;
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


export { Container, ContainerFluid, StyledMain, ColumnHero, StyledHero }
import styled from "styled-components";


const StyledHeader = styled.header`
    color: ${({ theme }) => theme.colors.main};
	background-color: ${({ theme }) => theme.colors.white};
	border-bottom: 1px solid ${({ theme }) => theme.colors.neutral};
	width: 100%;
	position: sticky;
	top: 0;
	z-index: 10;
`;

const StyledNav = styled.nav`
	width: 100%;
	margin:0 auto;
    padding:0 20px;
	display: flex;
	align-items: center;
	justify-content: space-between;

	img {
		height: 40px;
	}
`;

export { StyledHeader, StyledNav }
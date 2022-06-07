import styled from "styled-components";


const StyledHeader = styled.header`
    color: ${({ theme }) => theme.colors.main};
	background-color: ${({ theme }) => theme.colors.white};
	border-bottom: 1px solid ${({ theme }) => theme.colors.neutral};
	width: 100%;
`;

const StyledNav = styled.nav`
	width: 100%;
	max-width: 1200px;
	margin:0 auto;
    padding:0 20px;
	display: flex;
	align-items: center;
	justify-content: space-between;

	img {
		height: 40px;
	}
	ul {
		width: 30%;
		display: flex;
		justify-content: flex-end;

		a {
            padding:30px 15px;
            color: ${({ theme }) => theme.colors.main};
            border-bottom: 3px solid transparent;
            transition: all 500ms ease;
			text-decoration: none;
			text-transform: uppercase;

			&:hover {
				border-bottom: 3px solid ${({ theme }) => theme.colors.accent};
				color: ${({ theme }) => theme.colors.accent};
			}
		}
	}
`;

export { StyledHeader, StyledNav }
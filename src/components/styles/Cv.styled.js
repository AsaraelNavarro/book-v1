import styled from "styled-components";

const StyledTitle = styled.h2`
    color: $light-green-color;
	position: relative;
	width: 100%;
	text-align: center;
	text-transform: uppercase;
	display: grid;
	grid-template-columns: auto 1fr;
	grid-template-rows: 10px 0;
	grid-gap: 20px;

	&:after {
		content: " ";
		display: block;
		border-bottom: 1px solid $light-green-color;
	}
`;

export { StyledTitle }
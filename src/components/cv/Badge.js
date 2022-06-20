import styled from "styled-components";

const Span = styled.span`
    display: inline-block;
	font-weight: 400;
	line-height: 1.5;
	color: $main-color;
	text-align: center;
	text-decoration: none;
	vertical-align: middle;
	-webkit-user-select: none;
	-moz-user-select: none;
	user-select: none;
	background-color: transparent;
	border: 1px solid ${({ theme }) => theme.colors.main};
	padding: 0.375rem 0.75rem;
	font-size: 1rem;
	border-radius: 0.25rem;
	margin: 0.25rem 0.125rem;
`;

const Badge = (props) => <Span>{props.badgeTitle}</Span>

export default Badge
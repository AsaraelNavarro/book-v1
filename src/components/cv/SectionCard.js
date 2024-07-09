import styled from "styled-components";

const Card = styled.article`
    width: 100%;
	padding: 30px 20px;
	margin-bottom: 10px;
	transition: all ease-out 0.2s;
	&:hover {
		background: ${({ theme }) => theme.colors.light};
		box-shadow: 0 5px 18px rgba(8,57,73, 0.2);
		transform: translateY(-5px);
	}
	div {
		margin-bottom: 20px;

		h4 {
			color: ${({ theme }) => theme.colors.main};
		}

		small {
			color: ${({ theme }) => theme.colors.main};
		}
	}

	p {
		line-height: 1.5;
		color: ${({ theme }) => theme.colors.main};
	}

	&:last-child {
		border-bottom: 1px solid transparent;
	}
`;

const SectionCard = (props) => {
	return (
		<Card>
			<div>
				<h4>{props.cardTitle}</h4>
				<small>{props.dateStart} - </small>
				<small>{props.dateFinished}</small>
			</div>
			<p>{props.cardContent}</p>
		</Card>
	)
}

export default SectionCard
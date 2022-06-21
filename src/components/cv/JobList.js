import useFetch from "../../hooks/useFetch";

import { TitleCv } from "../../components/styles/Elements.styled";
import { TileContainer } from '../../components/styles/Layout.styled';

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

export default function JobList() {
	const qs = require('qs');
	const query = qs.stringify({
		sort: ['id:desc'],
	}, {
		encodeValuesOnly: true,
	});

	const contentType = 'jobs'
	/* const apiUrl = 'http://localhost:1337/api/jobs/' */
	const apiUrl = `https://strapi-mycv.herokuapp.com/api/${contentType}?${query}`;
	const { loading, error, data } = useFetch(apiUrl)

	/* console.log(data); */

	if (loading) return <p>Loading...</p>
	if (error) return <p>Error</p>
	return (
		<TileContainer>
			<TitleCv>Experiencia profesional</TitleCv>
			{data.data.map((jobs) => (
				<Card key={jobs.id}>
					<div>
						<h4>{jobs.attributes.position} en {jobs.attributes.company} </h4>
						<small>{jobs.attributes.start_date} - </small>
						<small>{jobs.attributes.exit_date}</small>
					</div>
					<p>{jobs.attributes.activities}</p>
				</Card>
			))}
		</TileContainer>
	)
}

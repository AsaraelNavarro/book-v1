import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch';
import { Title, BlogFigure } from '../components/styles/Elements.styled';
import { Container, BlogArticle } from '../components/styles/Layout.styled';

export default function Post() {
    const { id } = useParams();
    const baseUrl = `https://strapi-mycv.herokuapp.com`;
    const contentType = 'posts'
    const apiUrl = `${baseUrl}/api/${contentType}/${id}?populate=*`;
    const { loading, error, data } = useFetch(apiUrl);
    /* console.log(data); */


    if (loading) return <Container>Loading...</Container>
    if (error) return <Container><p>Error</p></Container >
    return (
        <Container>
            <BlogArticle >
                <BlogFigure>
                    <img src={`${data.data.attributes.featured_image.data.attributes.url}`} alt="Avatar Asarael Navarro Beltrán" />
                </BlogFigure>
                <div>
                    <Title>{data.data.attributes.title}</Title>
                    <ReactMarkdown>{data.data.attributes.content}</ReactMarkdown>
                </div>
            </BlogArticle>
        </Container>
    )
}

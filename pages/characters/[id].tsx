import {API} from "assets/api/api";
import {CharacterCard} from "components/Card/CharacterCard/CharacterCard";
import {CharacterType} from "assets/api/rick-and-morty-api";
import {PageWrapper} from "components/PageWrapper/PageWrapper";
import {getLayout} from "components/Layout/BaseLayout/BaseLayout";
import {GetStaticProps} from "next";
import {useRouter} from "next/router";
import styled from "styled-components";


export const getStaticPaths = async () => {
    const {results} = await API.rickAndMorty.getCharacters();

    const paths = results.map(result => ({
        params: {
            id: String(result.id)
        }
    }));
    return {
        paths,
        fallback: 'blocking'
    }
}

export const getStaticProps: GetStaticProps = async ({params}) => {
    const {id} = params || {}

    const character = await API.rickAndMorty.getCharacter(id as string);

    if (!character) return {notFound: true}

    return {props: {character}}
}

type Props = {
    character: CharacterType
}

const Character = (props: Props) => {
    const {character} = props;

    const router = useRouter()

    const characterId = router.query.id

    if (router.isFallback) return <h1>Loading...</h1>

    const goToCharacters = () => router.push(`/characters`)

    return (
        <PageWrapper>
            <Container>
                <IdText>ID:{characterId}</IdText>
                <CharacterCard character = {character} key = {character.id}/>
                <Button onClick = {goToCharacters}>GO TO CHARACTERS →</Button>
            </Container>
        </PageWrapper>
    )
}

Character.getLayout = getLayout
export default Character;


const IdText = styled.div`
    font-size: 38px;
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 20px;
`

const Button = styled.button`
    font-size: 25px;
    width: 330px;
    height: 60px;
    border-radius: 4px;
    border: none;
    background: #facaff;

    &:hover {
        color: white;
        background: #fa52d3;

    }
`

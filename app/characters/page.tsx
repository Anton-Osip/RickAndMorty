import {CharacterType, ResponseType} from '../../assets/api/rick-and-morty-api';
import {PageWrapper} from '../../components/PageWrapper/PageWrapper';
import {CharacterCard} from '../../components/Card/CharacterCard/CharacterCard';


const getCharacter = async (): Promise<ResponseType<CharacterType>> => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_RICK_API_URL}/character`)
    return await res.json()
}

export default async function Characters() {
    const results = await getCharacter()
    const charactersList = results.results.map(character => (
        <CharacterCard key = {character.id} character = {character}/>
    ))

    return (
        <PageWrapper>
            {charactersList}
        </PageWrapper>
    )
}



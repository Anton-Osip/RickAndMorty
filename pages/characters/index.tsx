import {API} from "assets/api/api";
import {CharacterType, ResponseType} from "assets/api/rick-and-morty-api";
import {PageWrapper} from "components/PageWrapper/PageWrapper";
import {getLayout} from "components/Layout/BaseLayout/BaseLayout";
import dynamic from "next/dynamic";
import {Redirect} from "../../hoc/Redirect";

const CharacterCard = dynamic(() => import("components/Card/CharacterCard/CharacterCard")
        .then(m => m.CharacterCard),
    // {ssr:false,
    // loading:()=><h1>LOADING...</h1>}
)

export const getStaticProps = async () => {
    const characters = await API.rickAndMorty.getCharacters();
    return {props: {characters}, revalidate: 60}
}

type Props = {
    characters: ResponseType<CharacterType>
}

const Characters = (props: Props) => {
    const {characters} = props;

    const charactersList = characters.results.map(character => (
        <CharacterCard character = {character} key = {character.id}/>
    ))

    return (
        <PageWrapper>
            {charactersList}
        </PageWrapper>
    )
}

Characters.getLayout = getLayout
export default Characters;

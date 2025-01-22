import {CharacterType, ResponseType} from '../../../assets/api/rick-and-morty-api';
import {PageWrapper} from '../../../components/PageWrapper/PageWrapper';

import s from '../../../styles/styles.module.css'
import {Metadata} from "next";

const getCharacter = async (): Promise<ResponseType<CharacterType>> => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_RICK_API_URL}/character`)
    return await res.json()
}


export async function generateStaticParams() {
    const {results} = await getCharacter()

    return results.map(character => ({id: String(character.id)}))
}

export async function generateMetadata({params}: { params: { id: string } }) {
    return {
        title: `Character ${params.id}`
    }
}

const Character = ({params}: { params: { id: string } }) => {
    return (
        <PageWrapper>
            <div className = {s.container}>
                <div className = {s.text}>ID: {params.id}</div>
            </div>
        </PageWrapper>
    )
}

export default Character

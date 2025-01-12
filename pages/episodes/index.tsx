import {API} from "assets/api/api";
import {EpisodeType, ResponseType} from "assets/api/rick-and-morty-api";
import {PageWrapper} from "components/PageWrapper/PageWrapper";
import {Card} from "components/Card/Card";
import {getLayout} from "components/Layout/BaseLayout/BaseLayout";
import {GetServerSideProps} from "next";

export const getServerSideProps: GetServerSideProps = async ({res}) => {

    res.setHeader('Cache-Control', 'public, s-maxage=31557600, stale-while-revalidate=100')
    const episodes = await API.rickAndMorty.getEpisodes();
    const isAuth = false
    if (!episodes) {
        return {notFound: true}
    }
    if (!isAuth) {
        return {
            redirect: {
                destination: '/test',
                permanent: false
            }
        }
    }
    return {props: {episodes}}
}

type Props = {
    episodes: ResponseType<EpisodeType>
}

const Episodes = (props: Props) => {
    const {episodes} = props;

    const episodesList = episodes.results.map(episode => (
        <Card key = {episode.id} name = {episode.name}></Card>
    ))

    return (
        <PageWrapper>
            {episodesList}
        </PageWrapper>
    )
}

Episodes.getLayout = getLayout
export default Episodes;

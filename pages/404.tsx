import {getLayout} from "../components/Layout/BaseLayout/BaseLayout";
import {PageWrapper} from "../components/PageWrapper/PageWrapper";

const NotFound = () => {
    return (
        <PageWrapper>
            404 PAGE NOT FOUND
        </PageWrapper>
    )
}
NotFound.getLayout = getLayout
export default NotFound;

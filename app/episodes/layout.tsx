import {PropsWithChildren} from "react";
import {BaseLayout} from "../../components/BaseLayout/BaseLayout";
import {Metadata, NextPage} from "next";

export const metadata: Metadata = {
    title: "Episodes",
}

const Layout: NextPage<PropsWithChildren> = ({children}) => {
    return <BaseLayout>{children}</BaseLayout>
}

export default Layout

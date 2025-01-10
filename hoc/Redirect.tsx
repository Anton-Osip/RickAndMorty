import {FC, PropsWithChildren} from "react";
import {useRouter} from "next/router";


export const Redirect: FC<PropsWithChildren<{}>> = ({children}) => {
    const router = useRouter()

    const isAuth = false

    if (!isAuth) router.push('/test')

    return <>{children}</>
}

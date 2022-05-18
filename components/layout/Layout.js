//import { Fragment } from 'react'
import MainNavigation from "./MainNavigation"

export default function Layout({children}) {
    return (

            <MainNavigation>
                {children}
            </MainNavigation>

    )
}
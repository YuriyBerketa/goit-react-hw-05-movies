import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import AppMenu from "./AppMenu/AppMenu";


const Layout = () => {
    
    return (
        <>
            <AppMenu />
            <Suspense fallback={null}>
                <Outlet />
            </Suspense>
        </>
    )
}


export default Layout
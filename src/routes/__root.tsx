import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import LogoutButton from '../components/auth/logout-button'

export const Route = createRootRoute({
    component: () => (
        <>
            <div>
                <div className="container mx-auto flex flex-row gap-5 *:py-2 items-center justify-center">
                    <Link to="/">
                        <h1 className='text-xl font-bold text-lightText/60'>
                            Deadlock Comdraft
                        </h1>
                    </Link>
                    <span className="flex text-lightText/60">A player & hero draft tool for Deadlock communities.</span>
                    <div className="ml-auto">
                        <LogoutButton />
                    </div>
                </div>
            </div>
            <Outlet />
            <TanStackRouterDevtools />
        </>
    ),
})
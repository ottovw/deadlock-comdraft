import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { Button } from '../components/ui/button'
import LogoutButton from '../components/auth/LogoutButton'

export const Route = createRootRoute({
    component: () => (
        <>
            <div>
                <div className="container mx-auto flex flex-row gap-5 p-5 items-start">
                    <Link to="/">
                        <h1 className='text-xl font-bold'>
                            Deadlock Comdraft
                        </h1>
                    </Link>
                    <span className="flex">A player & hero draft tool for Deadlock communities.</span>
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
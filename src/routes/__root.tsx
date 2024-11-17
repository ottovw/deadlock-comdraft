import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

export const Route = createRootRoute({
    component: () => (
        <>
            <div>
                <div>
                    <div>Deadlock Comdraft</div>
                    <span>A player & hero draft tool for Deadlock communities.</span>
                </div>
                <div className="p-2 flex gap-2">
                    <Link to="/" className="[&.active]:font-bold">
                        Home
                    </Link>{' '}
                    <Link to="/foo" className="[&.active]:font-bold">
                        About
                    </Link>
                </div>
            </div>
            <hr />
            <Outlet />
            <TanStackRouterDevtools />
        </>
    ),
})
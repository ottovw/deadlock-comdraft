import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

export const Route = createRootRoute({
    component: () => (
        <>
            <div className="p-5">
                <div>Deadlock Comdraft</div>
                <span>A player & hero draft tool for Deadlock communities.</span>
            </div>
            <Outlet />
            <TanStackRouterDevtools />
        </>
    ),
})
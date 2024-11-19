import { logout, useSession } from "../../supabase"
import { Button } from "../ui/button"

const LogoutButton = () => {
    const { session } = useSession()

    if (!session) {
        return null
    }


    return <Button onClick={() => logout()}>Logout</Button>
}

export default LogoutButton

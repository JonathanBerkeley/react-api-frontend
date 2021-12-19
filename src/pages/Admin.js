import { BaseStyles, Heading } from "@primer/react"
import { lazy, Suspense } from "react"
import CustomSpinner from "../components/CustomSpinner"

import { HeaderStyle } from "../styles/Styles"

// Lazy imports, if the loading takes a long time a spinner can be shown instead
const AdminPanel = lazy(() => import("../components/AdminPanel"))

const Admin = props => {
    return (
        <BaseStyles>
            <Heading sx={HeaderStyle}> Admin panel </Heading>
            <Suspense fallback={<CustomSpinner />}>
                <AdminPanel onAuthenticated={props.onAuthenticated} />
            </Suspense>
        </BaseStyles>
    )
}

export default Admin
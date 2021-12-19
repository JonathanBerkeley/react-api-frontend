import { BaseStyles, Heading } from "@primer/react"
import { lazy, Suspense } from "react"
import CustomSpinner from "../../components/CustomSpinner"

import { HeaderStyle } from "../../styles/Styles"

// Lazy imports, if the loading takes a long time a spinner can be shown instead
const Accountcard = lazy(() => import("../../components/Accountcard"))

const Account = props => {
    return (
        <BaseStyles>
            <Heading sx={HeaderStyle}> Account </Heading>
            <Suspense fallback={<CustomSpinner />}>
                <Accountcard onAuthenticated={props.onAuthenticated} />
            </Suspense>
        </BaseStyles>
    )
}

export default Account
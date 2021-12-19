import { BaseStyles } from "@primer/react"
import { lazy, Suspense } from "react"
import CustomSpinner from "../components/CustomSpinner"

// Lazy imports, if the loading takes a long time a spinner can be shown instead
const Playercard = lazy(() => import("../components/Playercard"))

const Player = () => {
    return (
        <BaseStyles>
            <Suspense fallback={<CustomSpinner />}>
                <Playercard />
            </Suspense>
        </BaseStyles>
    )
}

export default Player
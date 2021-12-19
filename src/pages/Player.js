import { BaseStyles } from "@primer/react"
import { lazy, Suspense } from "react"
import CustomSpinner from "../components/CustomSpinner"

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
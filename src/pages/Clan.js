import { BaseStyles } from "@primer/react"
import { lazy, Suspense } from "react"
import CustomSpinner from "../components/CustomSpinner"

// Lazy imports, if the loading takes a long time a spinner can be shown instead
const Clancard = lazy(() => import("../components/Clancard"))

const Clan = () => {
    return (
        <BaseStyles>
            <Suspense fallback={<CustomSpinner />}>
                <Clancard />
            </Suspense>
        </BaseStyles>
    )
}

export default Clan
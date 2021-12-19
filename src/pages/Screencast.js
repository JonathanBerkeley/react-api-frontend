import { BaseStyles } from "@primer/react"
import { lazy, Suspense } from "react"
import CustomSpinner from "../components/CustomSpinner"

// Lazy imports, if the loading takes a long time a spinner can be shown instead
const VideoEmbed = lazy(() => import("../components/VideoEmbed"))

const Screencast = () => {
    return (
        <BaseStyles>
            <Suspense fallback={<CustomSpinner />}>
                <VideoEmbed />
            </Suspense>
        </BaseStyles>
    )
}

export default Screencast
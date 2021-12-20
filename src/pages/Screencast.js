import { BaseStyles, Heading } from "@primer/react"
import { lazy, Suspense } from "react"
import CustomSpinner from "../components/CustomSpinner"

import { HeaderStyle } from "../styles/Styles"

// Lazy imports, if the loading takes a long time a spinner can be shown instead
const VideoEmbed = lazy(() => import("../components/VideoEmbed"))

const Screencast = () => {
    return (
        <BaseStyles>
            <Heading sx={HeaderStyle}> Screencast </Heading>
            <Suspense fallback={<CustomSpinner />}>
                <VideoEmbed />
            </Suspense>
        </BaseStyles>
    )
}

export default Screencast
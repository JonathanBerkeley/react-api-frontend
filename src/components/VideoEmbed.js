import { BaseStyles, Box } from "@primer/react"

import "../styles/App.css"
import "../styles/Signup.css"
import "../styles/Clan.css"

// Shows embedded screencast video, when it's ready
const VideoEmbed = () => {
    return (
        <BaseStyles>
            <section className="content">
                <Box m={5}>
                    <iframe
                        width="1120"
                        height="630"
                        src="https://www.youtube.com/embed/nFaZnGhwbQA"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </Box>
            </section>
        </BaseStyles>
    )
}

export default VideoEmbed
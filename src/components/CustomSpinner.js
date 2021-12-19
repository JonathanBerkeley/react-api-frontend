import { BaseStyles, Spinner } from "@primer/react"

import "../styles/App.css"

// Standardised spinner for this application
const CustomSpinner = () => {
    return (
        <BaseStyles>
            <section className="content">
                <Spinner className="center-spin" size="large" />
            </section>
        </BaseStyles>
    )
}

export default CustomSpinner
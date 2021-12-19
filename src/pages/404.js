import { BaseStyles, Box, Heading } from '@primer/react';
import { useLocation } from 'react-router-dom'

import { HeaderStyle } from "../styles/Styles"

// Displayed on invalid routes
const PageNotFound = () => {
    let location = useLocation();

    // Cut off abnormally long paths
    if (location.pathname.length > 40) 
        location.pathname = location.pathname.slice(0, 35) + "..."

    return (
        <BaseStyles>
            <section className="content">
                <Box className="center">
                    <Heading sx={{marginTop: 10, fontSize: 72}}> 404 </Heading>
                    <Heading sx={HeaderStyle}> <span className="italic red">"{location.pathname}"</span> not found </Heading>
                </Box>
            </section>
        </BaseStyles>
    )
}

export default PageNotFound
import React from 'react'
import { StyledEngineProvider } from "@mui/material/styles";
import Header from './Header/Header'

const Main = () => {
    return (
        <div>
            <StyledEngineProvider injectFirst>
                <Header />
            </StyledEngineProvider>
        </div>
    )
}

export default Main

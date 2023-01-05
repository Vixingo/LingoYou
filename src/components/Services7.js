import { Box, Container, Typography } from "@mui/material";
import React from "react";
import Head from "./Head";

function Services7() {
    return (
        <>
            <Head />
            <Container>
                <Box>
                    <Typography
                        variant="h3"
                        sx={{
                            color: "#2EA3F2",
                        }}
                    >
                        SERVIZI LINGUISTICI A 360°{" "}
                    </Typography>
                </Box>
                <br />
                <br />
            </Container>
            <Box>
                <img src="/img/ss3.png" alt="" width={"100%"} />
            </Box>
        </>
    );
}

export default Services7;

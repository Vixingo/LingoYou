import React from "react";
import { Container, Typography } from "@mui/material";
import Head from "./Head";

function CyberSecurity12() {
    return (
        <>
            <Head />
            <Container>
                <Typography
                    variant="h3"
                    sx={{
                        color: "#2EA3F2",
                    }}
                >
                    PRIVACY & CYBER SECURITY
                </Typography>
                <br />
                <img
                    style={{ width: "100%" }}
                    src="/img/cybersteps.png"
                    alt=""
                />
            </Container>
            <img style={{ width: "100%" }} src="/img/cyberbg.png" alt="" />
        </>
    );
}

export default CyberSecurity12;

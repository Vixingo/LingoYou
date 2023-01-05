import { Box, Container, Typography } from "@mui/material";
import React from "react";

function Cover() {
    return (
        <>
            <Box
                sx={{
                    backgroundImage: "url(/img/coverBack.png)",
                    backgroundSize: "100% 100%",
                    height: "100vh",
                    paddingTop: "500px",
                    pl: "20px",
                }}
            >
                <Container>
                    <Typography
                        variant="h3"
                        sx={{ color: "#AC34E3", fontWeight: "bold" }}
                    >
                        Presentazione Dedicata a Test
                    </Typography>
                    <br />
                    <Typography sx={{ fontWeight: "bold", fontSize: "18px" }}>
                        All'attenzione di test test
                        <br />
                        <br />
                        Documento realizzato da Paolo Di Girolamo
                    </Typography>
                </Container>
            </Box>
        </>
    );
}

export default Cover;

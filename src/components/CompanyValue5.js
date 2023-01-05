import { Box, Container, Typography } from "@mui/material";
import React from "react";
import Head from "./Head";

function CompanyValue5() {
    return (
        <>
            <Head />
            <Box>
                <Container>
                    <Typography
                        variant="h3"
                        sx={{
                            color: "#2EA3F2",
                        }}
                    >
                        PERCHE' NOI?
                    </Typography>
                    <br />
                    <br />
                    <Box sx={{ textAlign: "center" }}>
                        <img src="/img/ss.png" alt="" width={"70%"} />
                    </Box>
                    <br />
                    <br /> <br />
                    <Typography
                        variant="h3"
                        sx={{
                            color: "#2EA3F2",
                        }}
                    >
                        VALORI DELL'AZIENDA
                    </Typography>
                    <br />
                    <Typography>
                        Noi di LingoYou crediamo fermamente nella nostra cultura
                        aziendale. Sono i nostri valori a renderci unici:
                        guidano i nostri comportamenti, orientano le nostre
                        scelte e definiscono le nostre priorità. Ci impegniamo
                        pertanto a preservare e a salvaguardare con ogni mezzo i
                        principi e gli ideali su cui fondiamo le nostre
                        strategie, garantendo ai nostri Clienti professionalità,
                        qualità dei servizi e attenzione ai dettagli.
                    </Typography>
                </Container>
                <Box sx={{ textAlign: "center" }}>
                    <img src="/img/ss2.png" alt="" width={"100%"} />
                </Box>
            </Box>
        </>
    );
}

export default CompanyValue5;

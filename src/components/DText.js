import { Box, Container, Typography } from "@mui/material";
import React from "react";

function DText() {
    return (
        <>
            <Box
                sx={{
                    padding: "50px 0",
                    textAlign: "center",
                    background:
                        "linear-gradient(0deg, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), url(/img/st_img_1.jpg)",
                    backgroundSize: "cover",
                    backgroundPosition: "20%",
                }}
            >
                {" "}
                <Typography
                    variant="h3"
                    sx={{
                        color: "#2EA3F2",
                        background: "#fff",
                    }}
                >
                    CHI SIAMO
                </Typography>
                <br />
                <Container>
                    <Typography>
                        LingoYou è stata fondata per fornire traduzioni accurate
                        a prezzi convenienti a clienti da tutto il mondo. Fin
                        dalla nostra istituzione, siamo diventati un attore
                        chiave nel settore della traduzione in più continenti.
                        <br />
                        <br />
                        Per questo la nostra mission è sempre stata quella di
                        abbattere ogni barriera linguistica e di garantire la
                        comunicazione e l'interazione tra parlanti di lingue
                        diverse.
                        <br />
                        <br />
                        Il nostro Team di esperti lavora nel settore delle
                        traduzioni e dell'interpretariato da più di dieci anni e
                        crediamo che sia arrivato il momento di aprire le porte
                        all'innovazione. Con questo obiettivo abbiamo creato il
                        nostro portale clienti e la piattaforma Rafiky!
                        <br />
                        <br />
                    </Typography>
                </Container>
            </Box>
        </>
    );
}

export default DText;

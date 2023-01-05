import { Box, Container, Typography } from "@mui/material";
import React from "react";

function PPLetter2() {
    return (
        <>
            <Box
                sx={{
                    backgroundImage: "url(/img/btm.svg)",
                    backgroundSize: "100% 120%",
                    paddingBottom: "150px",
                }}
            >
                <Container>
                    <Typography
                        variant="h3"
                        sx={{
                            color: "#2EA3F2",
                        }}
                    >
                        Lettera Introduttiva
                    </Typography>
                    <br />
                    <Typography>
                        Gentile test,
                        <br />
                        <br />
                        La ringraziamo per aver scelto di collaborare con
                        LingoYou. Per avere maggiori informazioni riguardanti la
                        nostra realtà, La preghiamo di sfogliare le pagine di
                        questa presentazione che abbiamo dedicato a Test.
                        <br />
                        <br />
                        Come richiesto, Le inviamo di seguito il nostro
                        preventivo.
                        <br />
                        <br />
                        La nostra notevole esperienza nel settore, insieme alla
                        nostra flessibilità e precisione, rendono LingoYou la
                        migliore scelta per importanti aziende come{" "}
                        <b>
                            Sky, Google, BMW, Unilever, MAC Cosmetics,
                            McDonald's, Boeing, Unicredit, Gucci, Dior, Gruppo
                            Angelini{" "}
                        </b>{" "}
                        e molte altre, per le quali abbiamo fornito servizi di
                        traduzione e di interpretariato e organizzato conferenze
                        on-site e online.
                        <br />
                        <br />
                        Qui a LingoYou ogni cliente è unico e speciale, e ci
                        terremmo particolarmente ad iniziare una lunga e
                        proficua collaborazione con Test.
                        <br />
                        <br />
                        La qualità è da sempre il nostro punto di forza. Per
                        questo, selezioniamo traduttori iscritti ad una delle
                        maggiori associazioni di categoria (AITI,
                        AssoInterpreti, AIIC, etc.), con almeno cinque anni di
                        esperienza lavorativa nel Vostro settore.
                        <br />
                        <br />
                        La contatteremo telefonicamente per concordare insieme i
                        prossimi step.
                        <br />
                        <br />
                        <ul style={{ listStyle: "none" }}>
                            <li>Cordiali saluti,</li>
                            <li>
                                <b>Dott. Paolo Di Girolamo</b>
                            </li>
                            <li>Senior Account Manager – LingoYou</li>
                            <li>Languages:</li>
                            <li>Email: paolo@lingoyou.com</li>
                            <li>Phone: +39 3757441330</li>
                        </ul>
                    </Typography>
                </Container>
            </Box>
        </>
    );
}

export default PPLetter2;

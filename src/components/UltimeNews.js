import React from "react";
import { Box, Container, Typography } from "@mui/material";

function UltimeNews() {
    return (
        <>
            <Container sx={{ marginTop: "100px" }}>
                <Typography
                    variant="h3"
                    sx={{
                        color: "#fff",
                        padding: "10px",
                        backgroundColor: "#ac34e3",
                        fontWeight: "bold",
                        textAlign: "center",
                    }}
                >
                    LE NOSTRE ULTIME NEWS
                </Typography>
                <img
                    style={{ width: "100%" }}
                    src="/img/newspaper.png"
                    alt=""
                />
                <br /> <br />
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                    <ul
                        style={{
                            backgroundColor: "#d6d6d6",
                            width: "48%",
                            padding: "30px",
                        }}
                    >
                        <li>
                            <Typography sx={{ textDecoration: "underline" }}>
                                {" "}
                                <a style={{ color: "#0027f7" }} href="#">
                                    Settore tecnologico e traduzione dei manuali
                                    tecnici: l’importanza della localizzazione
                                    dei testi
                                </a>{" "}
                            </Typography>
                        </li>
                        <li>
                            <Typography sx={{ textDecoration: "underline" }}>
                                {" "}
                                <a style={{ color: "#0027f7" }} href="#">
                                    Corsi di inglese da remoto per tutti, dallo
                                    studente al manager che ambisce a ruoli
                                    internazionali o a un posto di lavoro
                                    all’estero
                                </a>{" "}
                            </Typography>
                        </li>
                        <li>
                            <Typography sx={{ textDecoration: "underline" }}>
                                {" "}
                                <a style={{ color: "#0027f7" }} href="#">
                                    Traduzione e localizzazione – Cos’è il DTP e
                                    a quali aziende interessa
                                </a>{" "}
                            </Typography>
                        </li>
                    </ul>
                    <ul
                        style={{
                            backgroundColor: "#d6d6d6",
                            width: "48%",
                            padding: "30px",
                        }}
                    >
                        <li>
                            <Typography sx={{ textDecoration: "underline" }}>
                                {" "}
                                <a style={{ color: "#0027f7" }} href="#">
                                    Traduzione del bilancio per le aziende che
                                    si muovono nell’economia globale
                                </a>{" "}
                            </Typography>
                        </li>
                        <li>
                            <Typography sx={{ textDecoration: "underline" }}>
                                {" "}
                                <a style={{ color: "#0027f7" }} href="#">
                                    Traduzioni tecniche – In che modo i nostri
                                    traduttori gestiscono le traduzioni tecniche
                                </a>{" "}
                            </Typography>
                        </li>
                        <li>
                            <Typography sx={{ textDecoration: "underline" }}>
                                {" "}
                                <a style={{ color: "#0027f7" }} href="#">
                                    Traduzione e localizzazione siti web –
                                    E-commerce: traduzione o localizzazione del
                                    sito web?
                                </a>{" "}
                            </Typography>
                        </li>
                    </ul>
                </Box>
                <br /> <br />
                <Typography
                    variant="h4"
                    sx={{
                        padding: "20px",
                        backgroundColor: "#2ca5f4",
                        fontWeight: "bold",
                        textAlign: "center",
                    }}
                >
                    {" "}
                    <a
                        style={{ color: "#fff", textDecoration: "none" }}
                        href="#"
                    >
                        Clicca qui per visitare il nostro blog
                    </a>{" "}
                </Typography>
                <br />
                <br />
                <img style={{ width: "100%" }} src="/img/tiktok.png" alt="" />
            </Container>
        </>
    );
}

export default UltimeNews;

import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import Head from "./Head";

function Portal8() {
    return (
        <>
            <Head />
            <Box
                sx={{
                    backgroundImage: "url(/img/wave.png)",
                    backgroundSize: "100%",
                    backgroundPositionY: "-100%",
                }}
            >
                <Container>
                    <Box>
                        <Typography
                            variant="h3"
                            sx={{
                                color: "#2EA3F2",
                            }}
                        >
                            Tecnologia - Portale LingoYou
                        </Typography>
                    </Box>
                    <br />
                    <br />
                    <Typography sx={{ marginLeft: "50px", mb: 30 }}>
                        <ul>
                            <li> Ricevi preventivi e offerte immediati.</li>
                            <li> Carica e scarica file.</li>
                            <li>
                                Controlla i report completi sullo status dei
                                progetti con gli elenchi di attività e
                                calendari.
                            </li>
                            <li>
                                Ricevi i progetti, in qualsiasi momento e
                                ovunque.
                            </li>
                            <li>
                                Importa ed esporta le informazioni dei fogli di
                                calcolo.
                            </li>
                            <li>
                                Iscriviti per ricevere informazioni sullo status
                                del progetto e aggiornamenti e-mail automatici.
                            </li>
                            <li>
                                Applica sistemi di sicurezza basati sui ruoli a
                                tutti gli utenti.
                            </li>
                            <li>
                                Collabora con i membri del team virtuale
                                selezionato.
                            </li>
                        </ul>
                    </Typography>

                    <Box sx={{ textAlign: "center", mb: 5 }}>
                        {" "}
                        <Button
                            variant="contained"
                            size="large"
                            sx={{
                                borderRadius: "20px",
                                fontWeight: "bold",
                            }}
                        >
                            RICHIEDI UNA DEMO
                        </Button>
                    </Box>
                    <Box sx={{ position: "relative", textAlign: "center" }}>
                        <img
                            src="/img/laptop.png"
                            alt=""
                            style={{ scale: "1" }}
                        />{" "}
                        <Box
                            sx={{
                                position: "absolute",
                                left: "51%",
                                top: "50%",
                                transform: "translate(-51%, -50%)",
                            }}
                        >
                            <iframe
                                width="540"
                                height="325"
                                src="https://www.youtube.com/embed/_x5KCDcJft4"
                                title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowfullscreen
                            ></iframe>
                        </Box>
                    </Box>
                </Container>
            </Box>
            <img src="/img/bottom.svg" alt="" width={"100%"} />
        </>
    );
}

export default Portal8;

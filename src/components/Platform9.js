import { Box, Container, Typography, Button } from "@mui/material";
import React from "react";

function Platform9() {
    return (
        <>
            <Box
                sx={{
                    mt: 20,
                    backgroundImage: "url(/img/wave.png)",
                    backgroundSize: "100%",
                    backgroundPositionY: "500px",
                }}
            >
                <img src="/img/ss4.png" alt="" width={"100%"} />
                <Container>
                    <Typography sx={{ mt: 10 }}>
                        Uniamo la potenza della tecnologia cloud con i moderni
                        dispositivi per agevolare la tecnica
                        dell'interpretariato.
                    </Typography>
                    <Typography sx={{ marginLeft: "50px", mb: 30, mt: 5 }}>
                        <ul>
                            <li>Qualsiasi lingua in tempo reale</li>
                            <li>
                                Video di altissima qualità & Audio cristallino
                            </li>

                            <li>Personalizzazione branding</li>
                            <li>
                                Compatibilità con tutti i software di Web
                                Conferencing
                            </li>
                            <li>Upload PPT &Video</li>
                            <li>
                                Traduzione in + di 60 lingue per i contenuti
                                interfaccia
                            </li>
                            <li>Sottopancia Relatore</li>

                            <li>Video Box con lingua dei segni</li>

                            <li>Sistema di votazione virtuale</li>
                            <li>Reportistica post-evento</li>
                            <li>... E tanto altro ancora!</li>
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

export default Platform9;

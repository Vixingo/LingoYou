import {
    Box,
    Container,
    List,
    ListItem,
    Grid,
    Typography,
} from "@mui/material";
import React from "react";

function Quality6() {
    return (
        <>
            <Box>
                <Container>
                    <Typography
                        variant="h3"
                        sx={{
                            color: "#2EA3F2",
                            padding: "100px 0 50px 0",
                        }}
                    >
                        QUALITA
                    </Typography>

                    <Typography>
                        Ponendoci come obiettivo il raggiungimento di un elevato
                        grado di soddisfazione del Cliente, in LingoYou ci
                        impegniamo a garantire i più alti standard di qualità
                        nella fornitura dei servizi di traduzione ed
                        interpretariato.
                        <br />
                        <br />
                    </Typography>

                    <List>
                        <ListItem>
                            • Ci conformeremo e risponderemo alle esigenze e ai
                            tempi del Cliente attraverso una comunicazione
                            chiara e trasparente.
                        </ListItem>

                        <ListItem>
                            • Risponderemo ad ogni richiesta entro massimo 8 ore
                            lavorative
                        </ListItem>

                        <ListItem>
                            • Garantiremo coerenza e accuratezza in ogni fase
                            del progetto.
                        </ListItem>
                        <ListItem>
                            • Terremo in considerazione feedback e suggerimenti
                            per monitorare il livello di soddisfazione del
                            Cliente e migliorarci ogni giorno.
                        </ListItem>
                        <ListItem>
                            • Garantiremo massima professionalità e alti
                            standard di qualità.
                        </ListItem>
                        <ListItem>
                            • Faremo in modo che gli obiettivi di qualità siano
                            compatibili con la direzione strategica
                            dell'azienda.
                        </ListItem>
                        <ListItem>
                            • Valuteremo costantemente rischi e opportunità al
                            fine di migliorare le nostre procedure e di
                            conseguenza la soddisfazione dei clienti.
                        </ListItem>
                    </List>

                    <Typography>
                        La nostra politica della qualità viene rivista
                        periodicamente per garantirne l’adeguamento con il
                        contesto e in direzione del miglioramento continuo delle
                        nostre azioni, procedure ed operazioni attraverso
                        l'implementazione di sistemi di amministrazione coerenti
                        con i requisiti ISO 9001.
                    </Typography>

                    <Grid
                        container
                        spacing={1}
                        sx={{
                            marginTop: "50px",
                            marginBottom: "100px",
                        }}
                    >
                        <Grid
                            item
                            xs={4}
                            spacing={3}
                            sx={{
                                border: "3px solid #333",
                                borderTop: "0",
                                borderRight: "0",
                                borderLeft: "0",
                            }}
                        >
                            <img src="/img/quality1.png" alt="" />
                        </Grid>
                        <Grid
                            item
                            xs={4}
                            spacing={3}
                            sx={{
                                border: "3px solid #333",
                                borderTop: "0",
                            }}
                        >
                            <img src="/img/quality2.png" alt="" />
                        </Grid>
                        <Grid
                            item
                            xs={4}
                            spacing={3}
                            sx={{
                                border: "3px solid #333",
                                borderTop: "0",
                                borderRight: "0",
                                borderLeft: "0",
                            }}
                        >
                            <img src="/img/quality3.png" alt="" />
                        </Grid>

                        <Grid item xs={4} spacing={3}>
                            <img src="/img/quality4.png" alt="" />
                        </Grid>
                        <Grid
                            item
                            xs={4}
                            spacing={3}
                            sx={{
                                border: "3px solid #333",
                                borderTop: "0",
                                borderBottom: "0",
                            }}
                        >
                            <img src="/img/quality5.png" alt="" />
                        </Grid>
                        <Grid item xs={4} spacing={3}>
                            <img src="/img/quality6.png" alt="" />
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    );
}

export default Quality6;

import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

function Customers17() {
    return (
        <>
            <Box textAlign={"center"}>
                <Container>
                    <Typography
                        variant="h3"
                        sx={{
                            color: "#2EA3F2",
                            textAlign: "center",
                            padding: "50px 0",
                        }}
                    >
                        I NOSTRI CLIENTI
                    </Typography>
                </Container>
                <Grid container spacing={1}>
                    <Grid
                        item
                        xs={4}
                        spacing={3}
                        sx={{
                            border: "3px solid #333",
                            borderTop: "0",
                            borderRight: "0",
                        }}
                    >
                        <img src="/img/savetheshildren.png" alt="" />
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
                        <img src="/img/mercedes.png" alt="" />
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
                        <img src="/img/clarins.png" alt="" />
                    </Grid>

                    <Grid item xs={4} spacing={3}>
                        <img src="/img/lafeltrinelli.png" alt="" />
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
                        <img src="/img/glorglo.png" alt="" />
                    </Grid>
                    <Grid item xs={4} spacing={3}>
                        <img src="/img/telepass.png" alt="" />
                    </Grid>

                    <Grid
                        item
                        xs={4}
                        spacing={3}
                        sx={{
                            border: "3px solid #333",
                            borderBottom: "0",
                            borderLeft: "0",
                        }}
                    >
                        <img src="/img/whirpool.png" alt="" />
                    </Grid>
                    <Grid
                        item
                        xs={4}
                        spacing={3}
                        sx={{
                            border: "3px solid #333",
                            borderBottom: "0",
                            borderRight: "0",
                            borderLeft: "0",
                        }}
                    >
                        <img src="/img/banca.png" alt="" />
                    </Grid>
                    <Grid
                        item
                        xs={4}
                        spacing={3}
                        sx={{
                            border: "3px solid #333",
                            borderBottom: "0",
                            borderRight: "0",
                        }}
                    >
                        <img src="/img/toyota.png" alt="" />
                    </Grid>

                    <Grid
                        item
                        xs={4}
                        spacing={3}
                        sx={{
                            border: "3px solid #333",
                            borderLeft: "0",
                        }}
                    >
                        <img src="/img/atm.png" alt="" />
                    </Grid>
                    <Grid
                        item
                        xs={4}
                        spacing={3}
                        sx={{
                            border: "3px solid #333",

                            borderRight: "0",
                            borderLeft: "0",
                        }}
                    >
                        <img src="/img/takeda.png" alt="" />
                    </Grid>
                    <Grid
                        item
                        xs={4}
                        spacing={3}
                        sx={{
                            border: "3px solid #333",
                            borderRight: "0",
                        }}
                    >
                        <img src="/img/enel.png" alt="" />
                    </Grid>

                    <Grid
                        item
                        xs={4}
                        spacing={3}
                        sx={{
                            border: "3px solid #333",
                            borderTop: "0",
                            borderLeft: "0",
                            borderBottom: "0",
                        }}
                    >
                        <img src="/img/honda.png" alt="" />
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
                            borderBottom: "0",
                        }}
                    >
                        <img src="/img/derrari.png" alt="" />
                    </Grid>
                    <Grid
                        item
                        xs={4}
                        spacing={3}
                        sx={{
                            border: "3px solid #333",
                            borderTop: "0",
                            borderRight: "0",
                            borderBottom: "0",
                        }}
                    >
                        <img src="/img/generali.png" alt="" />
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}

export default Customers17;

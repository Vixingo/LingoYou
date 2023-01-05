import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

function Testimonial18() {
    return (
        <>
            <Box>
                <Container>
                    <Typography
                        variant="h3"
                        sx={{
                            color: "#2EA3F2",

                            padding: "100px 0",
                        }}
                    >
                        Testimonials
                    </Typography>
                </Container>
                <Grid container spacing={1}>
                    <Grid
                        item
                        xs={6}
                        spacing={2}
                        sx={{
                            border: "3px solid #333",
                            borderTop: "0",
                            borderRight: "0",
                            textAlign: "center",
                        }}
                    >
                        <img src="/img/review1.png" alt="" />
                    </Grid>
                    <Grid
                        item
                        xs={6}
                        spacing={2}
                        sx={{
                            border: "3px solid #333",
                            borderTop: "0",
                            borderRight: "0",
                            textAlign: "center",
                        }}
                    >
                        <img src="/img/review2.png" alt="" />
                    </Grid>

                    <Grid
                        item
                        xs={6}
                        spacing={2}
                        sx={{
                            border: "3px solid #333",
                            borderTop: "0",
                            borderRight: "0",
                            borderLeft: "0",
                            textAlign: "center",
                        }}
                    >
                        <img src="/img/review3.png" alt="" />
                    </Grid>

                    <Grid
                        item
                        xs={6}
                        spacing={2}
                        sx={{
                            border: "3px solid #333",
                            borderTop: "0",
                            borderRight: "0",
                            textAlign: "center",
                        }}
                    >
                        <img src="/img/review4.png" alt="" />
                    </Grid>

                    <Grid
                        item
                        xs={6}
                        spacing={2}
                        sx={{
                            border: "3px solid #333",
                            borderTop: "0",
                            borderBottom: "0",
                            borderRight: "0",
                            borderLeft: "0",
                            textAlign: "center",
                        }}
                    >
                        <img src="/img/review5.png" alt="" />
                    </Grid>
                    <Grid
                        item
                        xs={6}
                        spacing={2}
                        sx={{
                            border: "3px solid #333",
                            borderTop: "0",
                            borderBottom: "0",
                            textAlign: "center",
                            borderRight: "0",
                        }}
                    >
                        <img src="/img/review6.png" alt="" />
                    </Grid>

                    <Grid
                        item
                        xs={6}
                        spacing={2}
                        sx={{
                            border: "3px solid #333",
                            borderBottom: "0",
                            borderLeft: "0",
                            borderRight: "0",
                            textAlign: "center",
                        }}
                    >
                        <img src="/img/review7.png" alt="" />
                    </Grid>
                    <Grid
                        item
                        xs={6}
                        spacing={2}
                        sx={{
                            border: "3px solid #333",
                            borderBottom: "0",
                            borderRight: "0",
                            textAlign: "center",
                        }}
                    >
                        <img src="/img/review8.png" alt="" />
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}

export default Testimonial18;

import {
    Typography,
    Box,
    Card,
    Container,
    Button,
    CardMedia,
    CardActions,
    CardContent,
    Grid,
} from "@mui/material";
import React from "react";
import NavigateNextRoundedIcon from "@mui/icons-material/NavigateNextRounded";
const cardData = [
    {
        name: "LingoYou",
        img: "/img/logo.png",
        detail: "Con una visione globale e un approccio locale al servizio clienti, LingoYou, grazie ad una rete di oltre 20.000 traduttori professionisti, fornisce soluzioni linguistiche a 360 gradi, per tutte le esigenze di traduzione e localizzazione. Combiniamo le ultime tecnologie con le competenze di traduttori esperti al fine di stabilire, in modo rapido e efficace, partnership di lavoro a lungo termine e di garantire traduzioni di alta qualità a prezzi convenienti.",
        link: "#",
    },
    {
        name: "LingoYou Academy",
        img: "/img/logo_a.png",
        detail: "Istituto di riferimento nell'ambito della formazione professionale, LingoYou Academy offre una vasta gamma di corsi e servizi: corsi di lingua per aziende, certificazioni linguistiche, corsi di recupero, ripetizioni scolastiche, preparazione esami universitari e corsi di italiano per stranieri. Grazie all’esperienza pluriennale sul campo e alle competenze acquisite nel tempo, il nostro team di esperti è in grado di rispondere a qualsiasi tipo di richiesta.",
        link: "",
    },
    {
        name: "Congressi Internazionali",
        img: "/img/Congressi.jpg",
        detail: "Congressi Internazionali è preposta alla gestione della parte hardware (con tecnici in loco su Roma - per la copertura di tutto il Centro Italia, del Sud e delle Isole - e Milano - per la copertura del Nord Italia) e alla selezione di interpreti altamente specializzati.        ",
        link: "",
    },
    {
        name: "Rafiky",
        img: "/img/Rafiky.png",
        detail: "Rafiky rappresenta oggi la tecnologia più avanzata nel settore dell’interpretariato. Una piattaforma rivoluzionaria di interpretariato da remoto che coniuga esigenze di praticità, qualità ed efficacia: fornisce servizi di interpretariato da remoto attraverso un software creato interamente dal nostro team di esperti.",
        link: "",
    },
];

function UniCards() {
    return (
        <>
            <Box
                sx={{
                    padding: "50px 0",
                    background:
                        "linear-gradient(104.58deg, #A61473 2.1%, #05F2F2 100.64%);",
                }}
            >
                <Container>
                    {" "}
                    <Typography
                        variant="h3"
                        sx={{
                            color: "#fff",
                            textAlign: "center",
                        }}
                    >
                        UN GRUPPO SOLIDO PER UNA COPERTURA LINGUISTICA A 360
                        GRADI
                    </Typography>
                    <br />
                    <br />
                    <Grid container>
                        {cardData.map((data) => {
                            return (
                                <Grid item xs={12} md={3}>
                                    <Card
                                        sx={{
                                            margin: "10px",
                                            padding: "10px",
                                            height: "100%",
                                            position: "relative",
                                            paddingBottom: "20px",
                                        }}
                                    >
                                        <CardMedia
                                            sx={{
                                                backgroundPosition: "center",
                                                height: 140,
                                                backgroundSize: "100%",
                                            }}
                                            image={data.img}
                                            title={data.name}
                                        />

                                        <br />

                                        <Typography variant="body2">
                                            {data.detail}
                                        </Typography>

                                        <CardActions
                                            sx={{
                                                p: "0",
                                                position: "absolute",
                                                bottom: "5px",
                                                right: "5px",
                                            }}
                                        >
                                            <Button
                                                size="small"
                                                sx={{ color: "#8b20bb" }}
                                            >
                                                Learn More{" "}
                                                <NavigateNextRoundedIcon />
                                            </Button>{" "}
                                        </CardActions>
                                    </Card>
                                </Grid>
                            );
                        })}
                    </Grid>
                </Container>
            </Box>
        </>
    );
}

export default UniCards;

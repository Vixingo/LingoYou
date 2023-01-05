import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
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
function SolidGroup4() {
    return (
        <>
            <Box
                sx={{
                    padding: "50px 0",
                    backgroundImage: "url(/img/qualityBg.png)",
                    backgroundSize: "100%",

                    height: "2000px",
                }}
            >
                <Container>
                    <Box sx={{ display: "flex" }}>
                        <Typography
                            variant="h2"
                            sx={{
                                flex: "1",
                                color: "#fff",
                            }}
                        >
                            UN GRUPPO SOLIDO PER UNA COPERTURA LINGUISTICA A 360{" "}
                            <br />
                            GRADI
                        </Typography>
                        <img
                            src="/img/w_logo.png"
                            alt=""
                            width={"100px"}
                            height={"100px"}
                            style={{ marginTop: "30px" }}
                        />
                    </Box>
                    <br />
                    {cardData.map((data) => {
                        return (
                            <Grid
                                container
                                sx={{
                                    pt: "150px",
                                    alignItems: "center",
                                    pb: "130px",
                                }}
                            >
                                {" "}
                                <Grid item xs={3} sx={{ pl: 8 }}>
                                    <img src={data.img} alt="" width={"80%"} />
                                </Grid>
                                <Grid item xs={1}></Grid>
                                <Grid item xs={8}>
                                    <Box
                                        sx={{
                                            backgroundColor: "#fff",
                                            borderRadius: "70px",
                                            borderTopRightRadius: "-70px",
                                            maxWidth: "700px",
                                        }}
                                    >
                                        {" "}
                                        <Typography sx={{ minHeight: "140px" }}>
                                            {data.detail}
                                        </Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                        );
                    })}
                </Container>
            </Box>
        </>
    );
}

export default SolidGroup4;

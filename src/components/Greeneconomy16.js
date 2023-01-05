import React from "react";
import { Box, Container, Typography } from "@mui/material";
import Head from "./Head";

function Greeneconomy16() {
    return (
        <>
            <Head />

            <Container>
                <Typography
                    variant="h3"
                    sx={{
                        color: "#2EA3F2",
                    }}
                >
                    Green Economy
                </Typography>
                <br />
                <Typography>
                    Sempre più aziende, dalle più piccole alle più grandi,
                    stanno introducendo politiche per ridurre la propria
                    impronta ecologica, incoraggiando il personale a stampare
                    meno o a spegnere tutte le apparecchiature elettroniche e le
                    luci quando non sono in uso. Per molte aziende, la cosa più
                    difficile da ridurre è viaggiare.
                </Typography>{" "}
                <br />
                <Typography>
                    Viaggiare produce l’8% delle emissioni di carbonio globali,
                    ma per molti manager è difficile rinunciare all’abitudine di
                    discutere un affare faccia a faccia. Ciò che si può
                    certamente evitare è che altre persone oltre a quelle che
                    devono effettivamente stringere l’accordo partecipino alla
                    riunione. Stiamo parlando degli interpreti. Gli interpreti
                    sono figure chiave nelle riunioni, ma non devono
                    necessariamente trovarsi nella stessa stanza per fare il
                    proprio lavoro.
                </Typography>
                <Typography>
                    Oggi c’è un modo più ecologico per beneficiare dei loro
                    servizi: <b>l’interpretazione da remoto.</b>
                </Typography>{" "}
                <br />
                <Typography>
                    Il video interpretariato da remoto è la soluzione che
                    garantisce:
                </Typography>{" "}
                <br />
                <br />
                <Box sx={{ textAlign: "center" }}>
                    <img src="/img/greenstep.png" alt="" />
                </Box>
                <br />
                <br />
                <Typography>
                    Che ne dite, quindi, di iniziare a usare l’interpretazione
                    da remoto? E se anche i manager alla fine si convinceranno a
                    discutere di affari in videoconferenza, potranno facilmente
                    integrare Rafiky con le soluzioni più note e altamente
                    affidabili di videoconferenze, come Skype for Business,
                    Cisco WebEx, GoToMeeting, Zoom e molte altre.
                </Typography>
            </Container>
            <Box
                sx={{
                    backgroundImage: "url(/img/green_footerbanner.png)",
                    height: "500px",
                    backgroundSize: "cover",
                }}
            >
                <Typography
                    variant="h3"
                    sx={{
                        color: "#fff",
                        fontWeight: "bold",
                        position: "relative",
                        top: "40%",
                        left: "15%",
                    }}
                >
                    Partner ufficiali
                </Typography>{" "}
                <br /> <br />
                <Box
                    sx={{
                        display: "flex",
                        position: "relative",
                        alignItems: "center",
                        justifyContent: "space-around",
                        top: "45%",
                    }}
                >
                    <img
                        style={{ height: "110px" }}
                        src="/img/savethechildren.png"
                        alt=""
                    />
                    <img
                        style={{ height: "110px" }}
                        src="/img/treevotion.png"
                        alt=""
                    />
                </Box>
            </Box>
        </>
    );
}

export default Greeneconomy16;

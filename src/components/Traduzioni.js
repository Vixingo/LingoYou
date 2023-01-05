import React from 'react'
import { Box, Container, Typography } from "@mui/material";
import Head from './Head';

function Traduzioni() {
    return (
        <>
            <Head />
            <Box>
                <Container>
                    <Typography
                        variant="h3"
                        sx={{
                            color: "#2EA3F2",
                        }}
                    >
                        Traduzioni bilanci
                    </Typography>
                    <br />
                    <Typography>
                        <br />
                        <Typography>
                            Come agenzia professionale di servizi di traduzione, LingoYou applica le sue competenze in vari
                            ambiti. Uno di questi è il settore finanziario e assicurativo che si occupa soprattutto di <b>traduzioni
                                bilanci.</b>
                        </Typography>
                        <br />
                        <Typography>La traduzione bilanci è la pratica di raccogliere i documenti, rendiconti, tutta una serie di dati
                            sensibili e offrire a chi d’interesse il bilancio della propria azienda. Il motivo economico dietro questa
                            scelta è molto semplice: far scoprire al mercato estero e non solo la propria esistenza ed il proprio
                            valore attraverso i propri dati, successi e progetti.</Typography>
                    </Typography>
                    <br />
                    <Typography>Nello specifico, la richiesta dei documenti da parte degli investitori e dello stato coinvolge spesso:</Typography>
                    <br /><br />
                    <img style={{ width: "100%" }} src="/img/traduzioni_bilancy.png" alt="" />
                    <br /><br />
                    <Typography
                        variant="h4"
                        sx={{
                            color: "#2EA3F2",
                        }}
                    >
                        La traduzione dei bilanci non può essere improvvisata per due
                        motivi principali:
                    </Typography> <br />
                    <ul style={{ paddingLeft: "30px" }}>
                        <li><Typography>Tradurre questi report è di fondamentale importanza per le aziende, perché è sulla base
                            delle informazioni contenute all’interno di questi documenti che le società prendono decisioni
                            strategiche circa il loro futuro.</Typography></li> <br />
                        <li><Typography>Nelle organizzazioni di respiro internazionale, i bilanci devono essere tradotti in più lingue
                            per essere condivisi con soci, amministratori e manager. Pertanto, la traduzione finale di un
                            bilancio non dovrà soltanto essere comprensibile e pertinente, ma impeccabile.</Typography></li>


                    </ul>
                </Container>
            </Box>
            flow
        </>
    )
}

export default Traduzioni

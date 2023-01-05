import React from 'react'
import { Box, Container, Typography } from "@mui/material";

function Perche() {
    return (
        <>
            <Container sx={{ marginTop: "100px" }}>
                <Typography
                    variant="h4"
                    sx={{
                        color: "#2EA3F2",
                        fontWeight: "bold"
                    }}
                >
                    Perché scegliere LingoYou?
                </Typography>
                <br /><br />
                <Typography>LingoYou adotta una filosofia di collettività e non cerca mai una soluzione immediata e facile. I
                    clienti si fidano di noi perché amiamo fare gruppo, perché crediamo nelle competenze dei nostri
                    specialisti, lavorando per raggiungere un solo obiettivo: ottenere un ottimo risultato.</Typography>
                <br /><br />

                <Typography
                    variant="h3"
                    sx={{
                        color: "#2EA3F2",
                        fontWeight: "bold"
                    }}
                >
                    I nostri punti di forza:
                </Typography>
            </Container>
            <br />
            <ul>
                <Box sx={{ backgroundColor: "#d6d6d6", padding: "10px 0" }}><Container> <li> <Typography> LingoYou è un’agenzia di traduzione leader in Europa che offre servizi di traduzione
                    finanziaria e contabile di alta qualità. </Typography> </li></Container></Box>
                <Box><Container> <li> <Typography> Le traduzioni finanziarie e contabili sono altamente specializzate; richiedono pertanto
                    un'elevata esperienza e una perfetta conoscenza della terminologia specifica del settore per
                    evitare errori linguistici e danni di tipo economico o legale. </Typography> </li></Container></Box>
                <Box sx={{ backgroundColor: "#d6d6d6", padding: "10px 0" }}><Container> <li> <Typography> Con LingoYou, il vostro documento è affidato a traduttori professionisti specializzati in materie
                    economiche e finanziarie o supportati da figure esperte nei suddetti settori. </Typography> </li></Container></Box>
                <Box><Container> <li> <Typography> I nostri professionisti traducono esclusivamente a partire dalla loro lingua madre e vivono in
                    paesi in cui viene ufficialmente parlata la lingua di destinazione in cui andranno ad effettuare
                    la traduzione. Ciò garantisce che abbiano una comprensione profonda e aggiornata del
                    vocabolario, delle norme del settore e della cultura locale. </Typography> </li></Container></Box>

            </ul>
            <br /><br />
            <Typography variant="h4" sx={{ width: "60%", backgroundColor: "#2EA3F2", color: "#000", padding: "10px 0 10px 370px", fontWeight: "bold" }}>Processo di traduzione bilanci:</Typography>
            <Container>
                <br />
                <Typography>La traduzione di bilanci è un compito complesso, per termini, espressioni, parole, cifre, che
                    richiedono una squadra di traduttori composta da specialisti linguistici ed esperti in materie
                    finanziarie ed economiche.</Typography>
                <br /><br />
                <ul style={{ paddingLeft: "30px" }}>
                    <li> <Typography>Uno dei primi passi per la traduzione di un bilancio è la scelta del traduttore. Per questo
                        servizio LingoYou seleziona per i suoi clienti solo professionisti qualificati che superano
                        rigorosi processi di recruitment e dimostrano di possedere i requisiti indispensabili per
                        eseguire traduzioni finanziarie di questo tipo</Typography> </li>
                    <li> <Typography>Seguono molteplici fasi di controllo, come la revisione e il proofreading, che richiedono altri
                        specialisti lungo il ciclo di lavoro, come previsto dalla norma ISO 17100</Typography> </li>
                    <li> <Typography>Con il coordinamento di uno o più Project Manager che gestiscono la commessa e si
                        interfacciano con il cliente, il bilancio viene sottoposto alle varie fasi di controllo da parte di
                        revisori e proofreader esperti, rendendo più rapido ed efficacie il servizio.</Typography> </li>
                </ul>
                <br /><br />
                <Typography>
                    È solo grazie all’organizzazione e al lavoro di tutto il team di professionisti che si può ottenere un
                    bilancio perfettamente congruente a quello in lingua originale.
                </Typography>
            </Container>
            flow///
        </>
    )
}

export default Perche

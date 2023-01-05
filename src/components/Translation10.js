import React from "react";
import { Box, Container, Typography } from "@mui/material";
import Head from "./Head";

function Translation10() {
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
                        Translation Memory
                    </Typography>
                    <br />
                    <Typography>
                        La Translation Memory (TM) è uno strumento fondamentale
                        nel lavoro quotidiano di un’agenzia di traduzioni e
                        interpretariato. Si tratta di un tipo di database
                        linguistico utilizzato per memorizzare testi in una
                        lingua sorgente (source) e le relative traduzioni in
                        un'altra (target). L'idea fondamentale dei sistemi
                        basati sulla memoria di traduzione è che consente al
                        traduttore o al team di traduzione di riutilizzare
                        segmenti precedentemente tradotti, così da rendere il
                        processo di traduzione più veloce, agile ed efficiente.
                    </Typography>
                    <br />
                    <Box sx={{ marginLeft: "20px" }}>
                        <Typography>
                            <b>
                                Quali sono i vantaggi della Translation Memory?
                            </b>
                        </Typography>
                        <br />
                        <ul style={{ paddingLeft: "30px" }}>
                            <li>
                                <Typography>
                                    Uniformità terminologica e interpretazione
                                    coerente
                                </Typography>
                            </li>
                            <li>
                                <Typography>
                                    Risparmio sui costi per il cliente
                                </Typography>
                            </li>
                            <li>
                                <Typography>
                                    Preferenza terminologica o stilistica
                                </Typography>
                            </li>
                            <li>
                                <Typography>
                                    Tempi di traduzioni più rapidi con il
                                    conseguente aumento del numero di progetti
                                    completati e del fatturato.
                                </Typography>
                            </li>
                            <li>
                                <Typography>
                                    Coerenza e qualità delle traduzioni a
                                    beneficio della soddisfazione del cliente.
                                </Typography>
                            </li>
                            <li>
                                <Typography>
                                    Elaborazione di glossari personalizzati su
                                    misura di ogni singolo cliente
                                </Typography>
                            </li>
                            <li>
                                <Typography>
                                    Facile esportazione del formato
                                </Typography>
                            </li>
                        </ul>
                        <br />
                        <Typography>
                            Esistono tanti <b>C.A.T.</b> per la Translation
                            Memory, i migliori utilizzati dalla maggior parte
                            delle agenzie di traduzioni e dei traduttori
                            professionisti, sono SDL Trados Studio, Déjà Vu X3,
                            MemoQ e Wordfast.
                        </Typography>
                    </Box>
                </Container>
                <br />
                <br />
                <Typography
                    sx={{
                        backgroundColor: "#2EA3F2",
                        width: "60%",
                        textAlign: "center",
                        padding: "10px 0",
                        color: "#fff",
                        fontWeight: "bold",
                        borderRadius: "20px",
                        borderTopLeftRadius: "0",
                        borderBottomLeftRadius: "0",
                    }}
                >
                    LA MEMORIA DI TRADUZIONE È IDEALE PER
                </Typography>
                <br />
                <br />:
                <Container>
                    <img
                        style={{ width: "100%" }}
                        src="img/translation_step.png"
                        alt=""
                    />
                    <br />
                    <br />
                    <Typography>
                        Grazie alla Translation Memories, i traduttori
                        effettuano una prima traduzione rapida con l’ausilio
                        della macchina, per poi rivedere il testo, controllarlo,
                        modificarlo e adattarlo alla lingua di destinazione
                        utilizzando tutte le competenze e l’esperienza di cui
                        dispongono.
                    </Typography>
                </Container>
            </Box>
            flow
        </>
    );
}

export default Translation10;

import { Box } from "@mui/material";
import React from "react";

function Head() {
    return (
        <>
            <Box
                sx={{
                    height: "200px",
                    backgroundImage: "url(/img/head.svg)",
                    paddingRight: "30px",
                    paddingTop: "10px",
                    textAlign: "right",
                }}
            >
                <img src="/img/w_logo.png" alt="" width={"100px"} />
            </Box>
        </>
    );
}

export default Head;

import { Box } from "@mui/material";
import React from "react";

const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: "#F5F5F5",
                width: "100%",
                height: "30vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "start",
                flexDirection: "column",
                marginTop: "7rem",
                paddingLeft: "5rem",
            }}
        >
            <ul
                style={{
                    display: "flex",
                    listStyle: "none",
                    fontSize: "17px",
                    gap: "50px",
                    color: "#8e8e93",
                    // maxWidth: "1144px",
                }}
            >
                <li>Biz haqimizda</li>
                <li>Aloqa uchun</li>
                <li>Foydalanuvchi shartnomasi</li>
            </ul>
            <Box display={"flex"} gap={"35rem"}>
                <p
                    style={{
                        color: "#8e8e93",
                        fontSize: "21px",
                        maxWidth: "1144px",
                        textAlign: "center",
                        paddingLeft: "40px",
                        paddingTop: "50px",
                    }}
                >
                    Qollab Quvvatlash xizmati:+998 71 200 40 01
                </p>
                <p
                    style={{
                        color: "#8e8e93",
                        fontSize: "15px",
                        maxWidth: "1144px",
                        textAlign: "center",
                        paddingLeft: "40px",
                        paddingTop: "50px",
                    }}
                >
                    Ⓒ 2024 Express24
                </p>
            </Box>
        </Box>
    );
};

export default Footer;

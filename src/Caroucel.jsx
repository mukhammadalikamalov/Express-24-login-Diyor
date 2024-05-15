import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Button } from "@mui/material";
import { useState } from "react";

const styles = {
    cardCarousel: {
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        marginBottom: "20px",
    },
    cardContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        flexGrow: 1,
        margin: "0 auto",
        maxWidth: "1144px",
    },
    card: {
        margin: "8px",
        borderRadius: "8px",
        width: "186px",
        height: "120px",
        maxWidth: "lg",
    },
    button: {
        margin: "-40px",
        height: "60px",
        borderRadius: "50%",
        boxShadow: "0 0 15px rgba(65,65,65,.1)",
    },
    carouselTitle: {
        textAlign: "center",
    },
};

const stylesForDoKonlar = {
    ...styles,
    cardCarousel: {
        ...styles.cardCarousel,
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        marginBottom: "20px",
    },
    card: {
        ...styles.card,
        width: "226px",
        margin: "8px",
        borderRadius: "8px",
        height: "130px",
        maxWidth: "lg",
    },
};

const CardCarousel = ({ cards, title, customStyles, maxCardsToShow }) => {
    const [startIndex, setStartIndex] = useState(0);

    const nextCard = () => {
        const nextIndex = startIndex + 1;
        if (nextIndex <= cards.length - maxCardsToShow) {
            setStartIndex(nextIndex);
        }
    };

    const prevCard = () => {
        const prevIndex = startIndex - 1;
        if (prevIndex >= 0) {
            setStartIndex(prevIndex);
        }
    };

    return (
        <div style={customStyles.cardCarousel}>
            <div style={styles.cardContainer}>
                <Button style={styles.button} onClick={prevCard} disabled={startIndex === 0}>
                    <ArrowBackIosIcon />
                </Button>
                {cards.slice(startIndex, startIndex + maxCardsToShow).map((card, index) => (
                    <div key={index} className="active">
                        <img
                            src={card.imageUrl}
                            alt={card.title}
                            style={{
                                ...customStyles.card,
                            }}
                        />
                    </div>
                ))}
                <Button style={styles.button} onClick={nextCard} disabled={startIndex + maxCardsToShow >= cards.length}>
                    <ArrowForwardIosIcon />
                </Button>
            </div>
        </div>
    );
};

const cards = [
    {
        title: "Card 1",
        description: "Description for Card 1",
        imageUrl: "https://media.express24.uz/r/567/385/R_aaB0phKV098UwDToro4.jpg",
    },
    {
        title: "Card 2",
        description: "Description for Card 2",
        imageUrl: "https://media.express24.uz/r/567/385/LzYBM-UsUDl61DdUfFc1N.jpg",
    },
    {
        title: "Card 3",
        description: "Description for Card 3",
        imageUrl: "https://media.express24.uz/r/567/385/Pi8u9QkPOYqpvUXKnkrqH.jpg",
    },
    {
        title: "Card 4",
        description: "Description for Card 4",
        imageUrl: "https://media.express24.uz/r/567/385/lNuHeyO53tPP_VZGlC1G7.jpg",
    },
    {
        title: "Card 5",
        description: "Description for Card 5",
        imageUrl: "https://media.express24.uz/r/567/385/k5-hhzjHJVcaBra_U_2cK.jpg",
    },
    {
        title: "Card 6",
        description: "Description for Card 6",
        imageUrl: "https://media.express24.uz/r/567/385/oQmtRo2f1XlUPzr6kzI7Z.jpg",
    },
    {
        title: "Card 7",
        description: "Description for Card 7",
        imageUrl: "https://media.express24.uz/r/567/385/1Bm-FmbYYsCefUEjN7kyR.jpg",
    },
    {
        title: "Card 8",
        description: "Description for Card 8",
        imageUrl: "https://media.express24.uz/r/567/385/LzYBM-UsUDl61DdUfFc1N.jpg",
    },
    {
        title: "Card 9",
        description: "Description for Card 9",
        imageUrl: "https://media.express24.uz/r/567/385/Pi8u9QkPOYqpvUXKnkrqH.jpg",
    },
];

const doKonlarCards = [
    {
        title: "Do'kon 1",
        description: "Description for Do'kon 1",
        imageUrl: "https://cdn.express24.uz/i/700/700/lPn1QcFACCII0oQT-Y_Cc.jpg",
    },
    {
        title: "Do'kon 2",
        description: "Description for Do'kon 2",
        imageUrl: "https://cdn.express24.uz/i/700/700/cpqAhjWqY-5jlMOwdKK3g.jpg",
    },

    {
        title: "Do'kon 1",
        description: "Description for Do'kon 1",
        imageUrl: "https://cdn.express24.uz/i/700/700/uuSOZDF8V83bBf06cBXnZ.jpg",
    },
    {
        title: "Do'kon 2",
        description: "Description for Do'kon 2",
        imageUrl: "https://cdn.express24.uz/i/700/700/Bt0IAmwpX3Vugv3tbh8HA.jpg",
    },
    {
        title: "Do'kon 1",
        description: "Description for Do'kon 1",
        imageUrl: "https://cdn.express24.uz/i/700/700/WcBK7_pNxcyanU5bij2m-.jpg",
    },
    {
        title: "Do'kon 2",
        description: "Description for Do'kon 2",
        imageUrl: "https://cdn.express24.uz/i/:w/:h/XL-rGrNx4AfpDsVtX6h6g.jpg",
    },

    {
        title: "Do'kon 1",
        description: "Description for Do'kon 1",
        imageUrl: "https://cdn.express24.uz/i/:w/:h/Cu2WJ3ybqmBXJ2MViR3zd.jpg",
    },
    {
        title: "Do'kon 2",
        description: "Description for Do'kon 2",
        imageUrl: "https://cdn.express24.uz/i/700/700/cpqAhjWqY-5jlMOwdKK3g.jpg",
    },
];

const App = () => {
    return (
        <div>
            <CardCarousel cards={cards} title="Cards" customStyles={styles} maxCardsToShow={6} />
            <h1
                style={{
                    marginLeft: "5rem",
                    flexGrow: 1,
                    margin: "0 auto",
                    maxWidth: "1144px",
                }}
            >
                Do'konlar
            </h1>
            <CardCarousel cards={doKonlarCards} title="Do'konlar" customStyles={stylesForDoKonlar} maxCardsToShow={5} />
        </div>
    );
};

export default App;

import { Box, Typography, Grid } from "@mui/material";
import React, { useState } from "react";
import TradeSectionCard from "./TradeSectionCard";
import Ethereum from "../assets/EthereumCircle.png";
import Bitcoin from "../assets/BitcoinCircle.png";
import Litecoin from "../assets/LitecoinCircle.png";

const container = {
  width: "100%",
  backgroundColor: "aliceblue",
  paddingTop: "10rem",
  marginTop: "-10rem",
};

const itemsContainer = {
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  marginTop: "3rem",
  padding: "1rem 0px",
};
const gridStyle = {
  display: "flex",
  width: { md: "90%", sm: "85%", xs: "80%" },
  alignItems: "center",

  justifyContent: { md: "space-between", sm: "center" },
};

function TradeSection() {
  const [isActive, setIsActive] = useState({
    activeObject: 0,
    objects: [
      {
        image: Bitcoin,
        title: "Bitcoin",
        subtitle: "BTC",
        text: "Digital currency in which a record of transactions is maintained.",
      },
      {
        image: Ethereum,
        title: "Ethereum",
        subtitle: "ETH",
        text: "Blockchain technology to create and run decentralized digital applications.",
      },
      {
        image: Litecoin,
        title: "Litecoin",
        subtitle: "LTC",
        text: "Cryptocurrency that enables instant payments to anyone in the world.",
      },
    ],
  });
  const [showButton, setShowButton] = useState(false);
  const toggleActive = (index) => {
    setIsActive({ ...isActive, activeObject: isActive.objects[index] });
  };
  const bgColor = (index) => {
    if (isActive.objects[index] === isActive.activeObject) {
      return "#130637";
    } else {
      return "white";
    }
  };
  const color = (index) => {
    if (isActive.objects[index] === isActive.activeObject) {
      return "white";
    } else {
      return "black";
    }
  };
  return (
    <>
      <Box sx={container}>
        <Box sx={itemsContainer}>
          <Typography
            variant="p"
            fontSize="24px"
            color="black"
            mt={6}
            mb={9}
            fontWeight="bold"
            textAlign="center"
            p={3}
          >
            Trade Securely And Market The High Growth Cryptocurrencies.
          </Typography>

          <Grid container width="95%" sx={gridStyle} p={0.2} columnSpacing={3}>
            {isActive.objects.map((element, index) => (
              <TradeSectionCard
                key={index}
                image={element.image}
                title={element.title}
                subtitle={element.subtitle}
                text={element.text}
                className="box inactive"
                toggleActive={toggleActive}
                index={index}
                isActive={isActive}
                bgColor={bgColor(index)}
                color={color(index)}
                showButton={showButton}
              />
            ))}

            {/* <TradeSectionCard />
            <TradeSectionCard /> */}
          </Grid>
        </Box>
      </Box>
    </>
  );
}

export default TradeSection;

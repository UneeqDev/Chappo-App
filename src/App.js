import { Box, styled } from "@mui/material";
import { AnimatePresence } from "framer-motion";
import "./App.css";
import {
  Hero,
  SectionOne,
  WhySection,
  HowSection,
  TradeSection,
  FeaturesSection,
  MiningSection,
  Footer,
} from "./components";

const StyledContainer = styled(Box)({
  width: "100vw",
  backgroundImage: "url(/hero-bg.png)",
  height: "auto",
  backgroundRepeat: "repeat-y",
  backgroundSize: "cover",
});
function App() {
  return (
    <>
      <AnimatePresence>
        <StyledContainer>
          <Hero />
          <SectionOne />
          <WhySection />
          <HowSection />
          <TradeSection />
          <FeaturesSection />
          <MiningSection />
          <Footer />
        </StyledContainer>
      </AnimatePresence>
    </>
  );
}

export default App;

import { motion } from "framer-motion";
import styled from "styled-components";
import Footer from "../../components/Footer";
import Gallery from "../../components/Gallery";
import Contact from "../Contact/Contact";
import Gallary from "../Gallary/Gallary";

function Home() {
  return (
    <Container>
      <Banner>
        <Heading
          as={motion.div}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 30 }}
          transition={{ duration: 1.5 }}
        >
          <Image alt="sufc" src={process.env.PUBLIC_URL + "sufc.png"} />
        </Heading>
        <div>
          <Title
            as={motion.h1}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 0.2 }}
          >
            Soccer United FC
          </Title>
          <Intro
            as={motion.div}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 0.2 }}
          >
            - We are STRENGTH.
          </Intro>
        </div>
        <motion.img
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
          src={process.env.PUBLIC_URL + "soccer.svg"}
          style={{ width: "40%" }}
          alt=""
        />
      </Banner>

      <Gallary />
      {/* <Gallery /> */}

      <Contact />
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const Banner = styled.div`
  width: 95%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 1rem;
  flex-wrap: wrap;
`;

const Heading = styled.div``;

const Title = styled.h1`
  font-size: 3rem;
  // font-weight: 800;
  // letter-spacing: 0.1em;
  margin-bottom: 1rem;
`;

const Intro = styled.div`
  font-size: larger;
  font-weight: 600;
`;

const Image = styled.img`
  width: 80%;
  height: 80%;
  object-fit: contain;
  filter: drop-shadow(8px 8px 10px black);
`;

export default Home;

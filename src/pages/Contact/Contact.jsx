import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

function Contact() {
  return (
    <Wrapper>
      <h1 style={{ margin: "4rem 0 1rem 0" }}>Contact Us</h1>
      <Container>
        <div style={{ flex: 1 }}>
          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.8 }}
          >
            <h2>#SoccerUnited Sports Zone. </h2>
            <span>
              <span style={{ fontWeight: 700, textDecoration: "underline" }}>
                Shop no:
              </span>
              11(Ground floor)
            </span>
            <p>
              <span style={{ fontWeight: 700, textDecoration: "underline" }}>
                Address:
              </span>{" "}
              Diganta kaja shopping Centre,Bahaddarhat, Chittagong.
            </p>
            <p>
              Phone no: <a href="tel:+8801775383324">+8801775383324</a>
            </p>
          </motion.h3>
        </div>

        <iframe
          style={{ flex: 1 }}
          title="shop map"
          width="100%"
          height="60%"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          src="https://maps.google.com/maps?q=soccer%20united%20sports%20zone&t=&z=13&ie=UTF8&iwloc=&output=embed"
        >
          <a href="https://www.gps.ie/sport-gps/">bike gps</a>
        </iframe>
      </Container>
    </Wrapper>
  );
}

const Container = styled.div`
  width: 80vw;
  height: 70vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: white;
  padding: 3rem;
  border-radius: 1rem;
  flex-wrap: wrap;
  gap: 1rem;
`;

const Wrapper = styled.div`
  width: 100vw;
  display: grid;
  place-items: center;
`;

export default Contact;

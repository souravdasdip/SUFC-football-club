import { motion } from "framer-motion";
import styled from "styled-components";

const images = [
  {
    img: process.env.PUBLIC_URL + "/teambluejersey.jpg",
  },
  {
    img: process.env.PUBLIC_URL + "/teamblueblackjersey.jpg",
  },
  {
    img: process.env.PUBLIC_URL + "/teamredseniorjersey.jpg",
  },
  {
    img: process.env.PUBLIC_URL + "/teamgrayblackjersey.jpg",
  },
  //   {
  //     img: process.env.PUBLIC_URL + "/teamtrophy.jpg",
  //   },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const listItem = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

function Loading() {
  return (
    <motion.div variants={container} initial="hidden" animate="show">
      {images.map((image) => (
        <motion.img variants={listItem} alt="sufc" src={image.img} />
      ))}
    </motion.div>
  );
}

// eslint-disable-next-line no-unused-vars
const Container = styled.div`
  display: grid;
  place-items: center;
`;
const Image = styled.img`
  width: 100%;
  object-fit: contain;
  opacity: 0.8;
`;

export default Loading;

import { motion } from "framer-motion";
import React, { useState } from "react";
import InfiniteScroll from 'react-infinite-scroll-component';
import { Link } from "react-router-dom";
import styled from "styled-components";
import useStoreItemsHook from "../../hooks/useStoreItemsHook";

function Store() {
  const [page, setpage] = useState(1)
  const {loading, error, items, hasmore} = useStoreItemsHook(page)

  return (
    <Container >
      <motion.h1 initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1.8}}>
        { items.length > 0 && (
          <InfiniteScroll
            dataLength={items.length}
            hasMore={hasmore}
            next={() => setpage(page + 8) }
             >
            {
              items.map((item) => (
                <Link to="/item" key={item.id}>
                  <div>
                    Item
                  </div>
                </Link>
              ))
            }
          </InfiniteScroll>
        )
          
        }

        {!loading && items.length === 0 && (
          <div className="">
            {/* No data Found! */}
          </div>
        )}
        {error && (
          <div className="">
            Store will be launched soon..
            {/* There was an error! Please try again later.  */}
          </div>
        )}
        {loading && (
          <div className="">
            Loading... 
          </div>
        )}
      </motion.h1>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Store;

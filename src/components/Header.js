import { Button } from '@mui/material';
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useAuth } from "../contexts/AuthContext";
import AvatarOptions from "./AvaterOptions";

export const Header = () => {
  const {currentuser} = useAuth()
  let username;
  currentuser && (username = currentuser.displayName)
  
  return(
  <Container>
      <Link to="/">
        <Logo>
            <LogoImage src={process.env.PUBLIC_URL + '/sufc.png'}/>
            <LogoTitle>SUFC</LogoTitle> 
        </Logo>
      </Link>

    <StyledMenu>
      <Button>
        <Link to="/">Home</Link>
      </Button>
      <Button>
        <Link to="/store">Store</Link> 
      </Button>
      <Button>
        <Link to="/contact">Contact Us</Link>
      </Button>
     
    </StyledMenu>

    <StyledMenu style={{gap: "10px"}}>
    {
      !username && 
      <Button>
        <Link to="/signin">Sign In</Link>
      </Button>
      }
      {/* <IconButton aria-label="cart">
        <Badge badgeContent={4} color="success">
          <ShoppingCartIcon />
        </Badge>
    </IconButton> */}

    {/* avatar options */}
    {
      username && <AvatarOptions />    
    }
    </StyledMenu>
  </Container>
  )
  }

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  // background-color: rgb(236, 240, 242);
  padding: 5px 0;
  position: sticky;
  top: 0;
`
const Logo = styled.h2`
  display: flex;
  align-items: center;
  // font-weight: 100;
`

const StyledMenu = styled.div`
  font-weight: 800;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

// const MenuItem =styled.div`
//   cursor: pointer;
//   transition: all .2s ease-in-out;
//   &:hover{
//     transform: scale(1.2);
//   }
// `

const LogoImage = styled.img`
  object-fit: cover;
  width: 40px;
`

const LogoTitle = styled.div`
  font-weight: 400;
`
import styled from "styled-components";

export const Home = styled.div`
  padding: 0px;
  margin: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--textColor);
  text-align: center;

`;

export const Navbar = styled.div`
  padding: 10px;
  margin: 0px;
  display: grid;
  grid-template-columns: 1fr 3fr;
  background-color: var(--white);
  text-align: center;
  box-shadow: 2px 50px 50px rgb(0 38 119 / 2%), 2px 5px 20px rgb(0 38 119 / 5%);
`;

export const FormBox = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
`;

export const Card = styled.div`
/*   width: 300px;
  min-height: 100vh; */
  width: 80%;
  height: 100%;
  background: #fff;
  margin: 0 auto;
  box-shadow: 5px 5px 19px #ccc;
  padding: 10px;
  border: 1px solid var(--mainColor);
  margin: 10px;
`;
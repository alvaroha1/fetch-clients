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
  grid-template-columns: 1fr 2fr;
  background-color: var(--white);
  text-align: center;
  box-shadow: 2px 50px 50px rgb(0 38 119 / 2%), 2px 5px 20px rgb(0 38 119 / 5%);

  p {
    text-align: left;
    padding: 6px 16px;
    margin: 0px;
  }
`;

export const FormBox = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  justify-items: stretch;
  align-content: center;
`;

export const Results = styled.div`
  width: 80%;
  height: 100%;
  margin: 0 auto;
  padding: 10px;
  text-align: left;
  p {
    margin: 10px;
  }
`;
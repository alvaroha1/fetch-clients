import styled from "styled-components";

export const Box = styled.div`
  box-shadow: 0 0px 1px rgba(0, 0, 0, 0.10), 0 2px 2px rgba(0, 0, 0, 0.10);
	background: #fff;
  border-radius: 5px;
  display:flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 10px;
`;

export const CardBody = styled.div`
  display:flex;
  padding: 30px;
  flex-direction: column;
`;

export const Image = styled.img`
  background-size: cover;
  background-position: center;
        background-repeat: no-repeat;

        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
        overflow:hidden;
      
`;

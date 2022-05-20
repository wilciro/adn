import styled from 'styled-components';

export const AboutDiv = styled.section`
  width: 96%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 40%;
  }

  @media (max-width: 768px) {
    width: 100%;
    display: block;
    img {
      width: 70%;
      margin: auto;
      display: block;
    }
  }
`;

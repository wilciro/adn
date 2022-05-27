import styled from 'styled-components';

export const CheckoutDiv = styled.section`
  width: 300px;
  margin: auto;
  border: solid 1px rgb(230, 230, 230);
  border-radius: 10px;
  padding: 5px 25px;
  position: fixed;
  right: 10px;
  top: 100px;
  z-index: 10;
  background: white;

  @media (max-width: 1000px) {
    width: 100%;
    display: block;
    bottom: 0px;
    top: auto;
    right: auto;
    left: 0px;
    z-index: 3;
    background: rgba(255, 255, 255, 0.6);
    backdrop-filter: blur(5px);
  }
`;

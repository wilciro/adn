import styled from 'styled-components';

interface BodyProps {
  dark: boolean;
}

export const Body = styled.div<BodyProps>`
  width: 80%;
  padding: 80px 15px;
  border-radius: 10px;
  margin: 20px auto;
  min-height: 100vh;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

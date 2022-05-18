import styled from "styled-components";

export const Header = styled.header`
    width: 90%;
    padding: 10px 15px;
    border-radius: 10px;
    box-shadow: 0 0 2px rgba(10, 10, 10, 0.5);
    background: rgba(10, 10, 10, 0.7);
    backdrop-filter: blur(5px);
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 5px;
    left: 5%;
    z-index: 5;
`;

export const ButtonsSeparator = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;
import styled from "styled-components";

const Container = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 43px;
    min-width: 43px;
    border-radius: 5px;
    padding: 0 5px;
    color: ${({ theme }) => theme.color};
    background: ${({ theme }) => theme.borderColor};
    border: 1px solid ${({ theme }) => theme.background};

    :hover {
        border: 1px solid ${({ theme }) => theme.contrast.background};
    }

    > svg {
        fill: ${({ theme }) => theme.color};
        width: 20px;
        height: 20px;
    }
`;

export const Styles = {
    Container,
};

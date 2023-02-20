import styled, { css } from "styled-components";

const BULL_WIDTH = "30px";

const right = css`
    transform: translateX(calc((${BULL_WIDTH} * 2.5) - ${BULL_WIDTH} - 3px));
`;

const left = css`
    transform: translateX(3px);
`;

const Container = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid ${({ theme }) => theme.borderColor};
    width: calc(${BULL_WIDTH} * 2.5);
    height: calc(${BULL_WIDTH} + 6px);
    border-radius: ${BULL_WIDTH};
    position: relative;
    cursor: pointer;
`;

const Icon = styled.span`
    display: flex;
    transition: transform 0.5s ease-in-out;

    ${({ theme }) => (theme.name === "dark" ? right : "")};

    > svg {
        width: calc(${BULL_WIDTH} - 4px);
        height: calc(${BULL_WIDTH} - 4px);
        margin: 2px;
        fill: ${({ theme }) => theme.color};
    }
`;

const Bull = styled.span`
    width: ${BULL_WIDTH};
    height: ${BULL_WIDTH};
    border-radius: ${BULL_WIDTH};
    background: ${({ theme }) => theme.contrast.background};
    border: 1px solid ${({ theme }) => theme.borderColor};
    position: absolute;
    transition: transform 0.5s ease-in-out;

    ${({ theme }) => (theme.name === "light" ? right : left)};
`;

export const Styles = {
    Container,
    Bull,
    Icon,
};
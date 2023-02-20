import styled from "styled-components";

const Container = styled.div`
display: flex;
border-bottom: 1px solid ${({ theme }) => theme.borderColor};
margin-bottom: 30px;

.container {
    display: flex;
    align-items: center;
    height: 60px;

    h1 {
        flex: 1;
        color: ${({ theme }) => theme.color};
        font-size: 1.4rem;
    }

    > button {
        margin-right: 15px;
    }
}
`;

export const Styles = {
    Container,
};
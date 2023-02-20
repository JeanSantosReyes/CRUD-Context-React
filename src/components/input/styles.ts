import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

const Label = styled.label`
    margin-bottom: 15px;
    color: ${({ theme }) => theme.color};
    font-weight: bold;
`;

const Input = styled.input`
    border: 1px solid ${({ theme }) => theme.borderColor};
    color: ${({ theme }) => theme.color};
    padding: 13px 10px;
    border-radius: 5px;
    background: ${({ theme }) => theme.background};

    :focus {
        border: 1px solid ${({ theme }) => theme.color};
    }
`;

export const Styles = {
    Container,
    Label,
    Input,
};
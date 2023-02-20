import styled from "styled-components";

import { Styles as InputStyles } from "../input/styles";

const Container = styled.div`
    display: flex;
    align-items: center;
    padding: 15px 10px;
    border-bottom: 1px solid ${({ theme }) => theme.borderColor};

    > strong {
        width: 40px;
        color: ${({ theme }) => theme.color};
    }

    > p {
        flex: 1;
        color: ${({ theme }) => theme.color};
    }

    > ${InputStyles.Container} {
        flex: 1;

        :not(:last-child) {
            margin-right: 30px;
        }
    }
`;

const GroupButtons = styled.div`
    display: flex;

    > button {
        :not(:last-child) {
            margin-right: 10px;
        }
    }
`;

export const Styles = {
    Container,
    GroupButtons,
};

import styled, { css } from 'styled-components';

export const StyledHeader = styled.p`
    ${props => css`
        color: ${props.theme.color.red};
    `}
`;
import styled, { css } from "styled-components";
import { Container } from "components/container";
import { gapsColumn, gapsRow } from "styles/mixins";
import { Link } from "gatsby";
import { Button } from "components/button";
import theme from "theme";

export const StyledNavigation = styled.nav`
    background-color: ${theme.colors["solid"]};
    
    z-index: 1;

    @media (max-width: 720px) {
        display: flex;
        align-items: center;

        opacity: 0;
        pointer-events: none;

        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;

        background-color: rgba(0, 0, 0, 0.5);

        ${(props) => props.show && css`
            opacity: 1;
            pointer-events: initial;
        `}
    }
`;

export const StyledNavigationContainer = styled(Container)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: stretch;

    ${gapsRow("1rem")}

    padding: 0.5rem 1rem;

    @media (max-width: 720px) {
        flex-direction: column;
        align-items: center;

        ${gapsColumn("1rem")}

        padding: 1rem;
        border-radius: 1rem;
        width: auto;

        background-color: ${theme.colors["solid"]};

        [theme="dark"] & {
            border: 2px solid ${theme.colors["text-disabled"]};
        }
    }
`;

export const StyledLogoContainer = styled(Link)`
    display: flex;
    align-items: center;

    @media (max-width: 720px) {
        margin-right: 0;
    }
`;

export const StyledLogo = styled.img`
    height: 2rem;

    [theme="dark"] & {
        filter: invert();
    }
`;

export const StyledMobileToggle = styled(Button)`
    position: fixed;
    bottom: 1rem;
    right: 1rem;
    
    padding: 1rem;
    z-index: 2;

    @media (min-width: 721px) {
        display: none;
    }
`;

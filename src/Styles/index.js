import styled from 'styled-components';
import flex from './flex';

export const Header = styled.div`
    background-color: #563635;
    color: white;
    padding: 1em;
`;

export const Main = styled.section`
    background-color: #78C091;
    color: white;
    padding: 1em;
    flex: 1 0  auto;
`;

export const Footer = styled.div`
    background-color: #5B6057;
    color: white;
    padding: 1em;
    ${flex.horizontalCenter}
`;

export const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    height: 100%;
    min-height: 100vh;
    width: 100%;
`;

import styled from 'styled-components';

interface IProps {
    scrollDown: number
}

interface BarProps {
    different: number
}

const NavBar = styled.div<BarProps>`
    background-color: #1E1E1E;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 75px;
    width: 100vw;
    font-weight: 500;
    position: fixed;
    top: ${props => (props.different > 0 ? 0 : props.different)}px;
    transition: .1s ease-out;
    z-index: 100;
`;

function Nav({scrollDown} : IProps) {
    return(
        <NavBar different={scrollDown}>

        </NavBar>
    );
}

export default Nav;
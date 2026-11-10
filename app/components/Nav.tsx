import Link from "next/link";
import styled from "styled-components";

const NavStyled = styled.nav`
    width: 20%;
    display: block;
    background-color: #34403A;
`;

const UlStyled = styled.ul`
    list-style: none;
    padding-left: 0;
`;

const LiStyled = styled.li`
    margin: 4%;
    border: 2px solid #AED9E0;
    text-align: center;
    padding: 2%;

    &:hover {
        background-color: #172b20;
    }
`;

const LinkStyled = styled(Link)`
    text-decoration: none;
    color: #AED9E0;
    font: calc(2px + 1.4vw) monospace;

    &:hover {
        color: #75adb6;
    }
`;



export default function Nav(){

    return (
        <NavStyled>
            <UlStyled>
                <LiStyled><LinkStyled href = "/">Home</LinkStyled></LiStyled>
                <LiStyled><LinkStyled href = "/about">About</LinkStyled></LiStyled>
                <LiStyled><LinkStyled href = "/created-urls">Created URLS</LinkStyled></LiStyled>
            </UlStyled>
        </NavStyled>
    )
}
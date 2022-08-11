import React from 'react'
import styled from 'styled-components';

function Header() {
  return (
    <Nav>
        <Logo src="/images/logo.svg" />
        <NavMenu>
            <a>
                <img src="images/home-icon.svg" alt='Home' />
                <span>Home</span>
            </a>
            <a>
                <img src="images/search-icon.svg" alt='Home' />
                <span>Search</span>
            </a>
            <a>
                <img src="images/watchlist-icon.svg" alt='Home' />
                <span>Watchlist</span>
            </a>
            <a>
                <img src="images/original-icon.svg" alt='Home' />
                <span>Originals</span>
            </a>
            <a>
                <img src="images/movie-icon.svg" alt='Home' />
                <span>Movies</span>
            </a>
            <a>
                <img src="images/series-icon.svg" alt='Home' />
                <span>Series</span>
            </a>
        </NavMenu>
        <UserImg src='https://media-exp1.licdn.com/dms/image/C4D03AQHcsf-TIEqA-Q/profile-displayphoto-shrink_800_800/0/1657743343832?e=1665619200&v=beta&t=pU2X8ECwrPKSIiCQ9jNVvucIP5KpVqwS5u3iJ4jicCY' />
    </Nav>
  )
}

export default Header;

const Nav = styled.nav`
    height: 70px;
    background: #090b13;
    display: flex;
    align-items: center;
    padding: 0 36px;
`
const Logo = styled.img`
    width: 80px;

`
const NavMenu = styled.div`
    display: flex;
    flex: 1;
    margin-left: 25px;
    align-items: center;

    a {
        display: flex;
        align-items: center;
        padding: 0 12px;
        cursor: pointer;

        img {
            height: 20px;
        }

        span {
            font-size: 13px;
            letter-spacing: 1.42px;
        }
    }
`
const UserImg = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    cursor: pointer;
`
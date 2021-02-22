import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const RecNav = styled.nav`
  background: #010606;
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  transition: 0.5s all ease;
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const RecNavbarSup = styled.sup`
  font-size: 0.8rem;
  margin-left: 3px;
  top: 2;
  &:hover {
    transition: all 0.2s ease-in-out;
    font-size: 0.9rem;
  }
`;

export const RecNavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

// react-scroll
export const RecNavLogo = styled(LinkR)`
  color: #ff5500;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 36px;
  font-weight: bold;
  text-decoration: none;
  &:hover {
    text-decoration: none;
    transition: all 0.4s ease-in-out;
    color: #fff;
  }
`;

export const RecMobileIcon = styled.div`
  display: none;
  //   display only on certain breakpoints
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`;
export const RecNavMenu = styled.ul`
  margin-top: 15px;
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: 48px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const RecNavItem = styled.li`
  height: 80px;
`;

//this is for trial recipe link
export const RecNavLinkZ = styled(LinkR)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    border-bottom: 3px solid #ff5500;
    font-size: 1.03rem;
    color: #ff5500;
  }
  &:hover {
    text-decoration: none;
    transition: all 0.3s ease-in-out;
    font-size: 1.1rem;
    color: #ff5500;
  }
`;

export const RecNavLinks = styled(LinkS)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    border-bottom: 3px solid #ff5500;
    font-size: 1.03rem;
    color: #ff5500;
  }
  &:hover {
    text-decoration: none;
    transition: all 0.3s ease-in-out;
    font-size: 1.1rem;
    color: #ff5500;
  }
`;

export const RecNavBtn = styled.nav`
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const RecNavBtnLink = styled(LinkR)`
  border-radius: 50px;
  background: #ff5500;
  white-space: nowrap;
  padding: 10px 22px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    color: #000000;
    text-decoration: none;
    transition: all 0.2s ease-in-out;
    background: #fff;
  }
`;

// Filename - ./components/Navbar.js

//import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
import './navbar.css';

export const Nav = styled.nav`
	overflow: hidden;
	
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	margin-bottom: 50px;
	background-color: #232D3F;
	color: #C5E898;
	padding: 20px;
	box-shadow: 0px 2px 5px black;
	z-index: 10;
`;

export const NavLink = styled(Link)`
	color: rgb(132, 132, 132);
	display: flex;
	align-items: center;
	text-decoration: none;
	padding: 0 1rem;
	cursor: pointer;
	transition: font-size 0.3s, color 0.3s, underline 0.3s;
	&.active {
		color: #008170;
		font-size: 25px;
		text-decoration: underline;
`;


export const NavMenu = styled.div`
	display: flex;
	align-items: center;
	margin-right: -24px;
	@media screen and (max-width: 768px) {
		display: none;
	}
`;

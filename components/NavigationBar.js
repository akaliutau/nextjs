import SocialFollow from "../components/SocialFollow"

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";

export default function NavigationBar() {
  return (
           <Navbar expand="sm" bg="light" className="general_menu">
			<Nav className="container-fluid">
				<Nav.Item>
					<Navbar.Brand>ALIAKSEI KALIUTAU</Navbar.Brand>
				</Nav.Item>
				<Nav.Item>
					<Navbar.Brand href="/">Gallery</Navbar.Brand>
				</Nav.Item>
				<Nav.Item>
					<Navbar.Brand href="/about">About me</Navbar.Brand>
				</Nav.Item>
			</Nav>
			
		</Navbar>

  );
}
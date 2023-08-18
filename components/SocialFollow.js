import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import * as styles from './SocialFollow.module.css'

import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faGithub
} from "@fortawesome/free-brands-svg-icons";

export default function SocialFollow() {
  return (
    <div>
		<div className={styles.socialContainer}>
		<div> Follow me: </div>
		<span> </span>
	    <a href="https://www.twitter.com/akaliutau" className="twitter social">
			<FontAwesomeIcon icon={faTwitter} size="2x" />
		</a>
		<span> </span>
	    <a href="https://www.instagram.com/akaliutau" className="instagram social">
			<FontAwesomeIcon icon={faInstagram} size="2x" />
		</a>
		<span> </span>
		<a href="https://www.linkedin.com/in/aliaksei-kaliutau" className="linkedin social">
			<FontAwesomeIcon icon={faLinkedin} size="2x" />
		</a>
		<span> </span>
		<a href="https://github.com/akaliutau" className="github social">
			<FontAwesomeIcon icon={faGithub} size="2x" />
		</a>
		<span> </span>
		</div>
	</div>
  );
}


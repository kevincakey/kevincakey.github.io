import "./Banner.scss";
import React from 'react'
import resume from "../../assets/KevinGao'sResume.pdf";

export const Banner = () => {
  return (
	<div id="banner">
		<a href = {resume} target="_blank" rel="noreferrer">View Resume</a>
	</div>
  )
}

export default Banner;
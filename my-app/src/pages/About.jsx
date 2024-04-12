import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faAngular,
	faCss3,
	faGitAlt,
	faHtml5,
	faJsSquare,
	faReact,
	faSass,
	faPython
  } from '@fortawesome/free-brands-svg-icons'

const About = () => {
  return (
	<>
		<ul>
			<li>
				<FontAwesomeIcon icon={faHtml5} color="#F06529" />
			</li>
			<li>
				<FontAwesomeIcon icon={faCss3} color="#28A4D9" />
			</li>
			<li>
				<FontAwesomeIcon icon={faReact} color="#5ED4F4" />
			</li>
			<li>
				<FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
			</li>
			<li>
				<FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
			</li>
			<li>
				<FontAwesomeIcon icon={faSass} />
			</li>
			<li>
				<FontAwesomeIcon icon={faPython} />
			</li>
		</ul>
	</>
  )
}

export default About
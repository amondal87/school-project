import React from 'react';
import { NavLink } from 'react-router-dom';
const Home = () => {
    return (
        
<section className= "slider">
	<div className= "container">
		<div className= "row">
			<div className= "col-md-12">
				<div className= "block">
					<h1 className= "">Welcome To  <br /> Our Web Site</h1>
					<p className= "">Get your <span>Education</span> today!</p>
					<NavLink to="/about"  className= "btn btn-main">Get Start</NavLink>
				</div>
			</div>
		</div>
	</div>
</section>
    )
}

export default Home

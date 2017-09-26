import React, { PropTypes, Component } from "react";
import "../../assets/css/App/footer.css";

class Footer extends Component {
	render() {
		return (
			<footer>
				<div>
					<a href="#">About Us</a>
					<a href="#">Jobs</a>
					<a href="#">Privacy Terms</a>
					<a href="#">Support Portal</a>
					<a href="#">FAQS</a>
				</div>
				<div>
					<a href="#">Facebook</a>
					<a href="#">Instagram</a>
					<a href="#">Pinterest</a>
					<a href="#">Twitter</a>
					<a href="#">Blog</a>
				</div>
	        </footer>
        );
	}
};

export default Footer;
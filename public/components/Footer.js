import React, { Component } from 'react'

export class Footer extends Component {
  render() {
    return (
      <footer id="main-footer">
			<div class="footer-content container">
				<p>Copyright &copy; 2021. All Rights Reserved</p>
				<div class="social">
					<i class="fab fa-twitter social-icon"></i>
					<i class="fab fa-facebook social-icon"></i>
					<i class="fab fa-linkedin social-icon"></i>
					<i class="fab fa-instagram social-icon"></i>
				</div>
			</div>
		</footer>

    )
  }
}

export default Footer

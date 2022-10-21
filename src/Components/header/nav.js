import logo from '../img/Group 1.png' 
import img2 from '../img/img12.jpeg'
import img4 from '../img/img13.jpeg'
import bg1 from '../img/bg1.png'
import Container from 'react-bootstrap/Container'; 
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './nav.css'
 
export function Navigate() {
  return (
    <div className="  ">
      {/* <h1>Hello</h1> */}
      <nav class="nav gap-4 navbar gap-140 navbar-expand-lg navbar-light   ">
        <div class="container-fluid gap-140">
          <a class="navbar-brand  " href="#"> <img src={logo} className="w-50" /></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">

            <ul class="navbar-nav text-white me-auto mb-2 mb-lg-0">

              <li class="nav-item">
                <a class="nav-link active text-white h1" aria-current="page" href="#">About Us </a>
              </li>

              <li class="nav-item">
                <a class="nav-link active text-white h1" aria-current="page" href="#">Contact Us</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active text-white h1" aria-current="page" href="#">Trips   </a>
              </li>

            </ul>
          </div>
        </div>
      </nav>
  

    </div>
  );
}


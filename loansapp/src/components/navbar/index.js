import React, {Component} from 'react';
import './style.scss';
import {Auth} from 'aws-amplify';
import {Link} from 'react-router-dom';

class Navbar extends Component {
   constructor(props) {

        super(props);

        this.navigate = this.navigate.bind(this);
        this.setOpen = this.setOpen.bind(this);

    }

    setOpen() {
        this.setState({
            openOptions: !this.state.openOptions,
        })
    }

    navigate(route) {

        window.location.replace(route)
    }

    render() {

        return (
            <div className="navbar-app">
                <div className="desktop-menu">
                    <Link className="option-menu" to='/'>Home</Link>
                    <Link className="option-menu" to='/how'>How it Works?</Link>
                    <Link className="option-menu" to='/loans'>Apply for a loan</Link>
                    <Link className="option-menu" to='/about'>About Us</Link>
                    <Link className="option-menu" to='/faq'>FAQ</Link>

                    <div className="respmenu">
                        <nav>
                            <ul>
                                <li onClick={() => this.navigate("/")}><p>Home</p></li>
                                <li onClick={() => this.navigate("/how")}><p>How it Works?</p></li>
                                <li onClick={() => this.navigate("/loans")}><p>Apply for a Loan</p></li>
                                <li onClick={() => this.navigate("/about")}><p>About Us</p></li>
                                <li onClick={() => this.navigate("/faq")}><p>FAQ</p></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navbar;
import React from 'react'
import { Link } from 'react-router-dom'
import "./../css/signup.css"

const Signup = () => {
    return (
        <main className="signup">
            <section className="signup__left">
                <h1>Welcome <br /> to Munch</h1>
            </section>
            <section className="signup__right">
                <div className="signup__right__nav">
                    <ul>
                        <li>
                            <Link to="/signin">Signin</Link>
                        </li>
                        <li>or</li>
                        <li>
                            <Link to="/signup" className="active">Signup</Link>
                        </li>
                    </ul>

                </div>
               <div className="signup__right__form">
               <form>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" placeholder="Enter your username" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" placeholder="Enter your email" />
                    </div>
                    <div className="form-group">
                    <label htmlFor="password">Password</label>
                        <input type="password" placeholder="Enter your password" />
                    </div>
                    <div className="form-group"></div>
                    <div className="form-group">
                    <button>Submit</button>
                    </div>
                    
                </form>
               </div>

            </section>
        </main>
    )
}

export default Signup

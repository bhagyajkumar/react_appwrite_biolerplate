import React, { useState } from 'react';
import { useAuth } from '../AuthContext';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { signup } = useAuth();

    const handleSignup = async (e) => {
        e.preventDefault();

        try {
            await signup(email, password);
            // Redirect or perform any necessary action upon successful signup
        } catch (error) {
            // Handle error
        }
    };

    const customGradient = {
        background: "linear-gradient(to right, rgba(106, 17, 203, 1), rgba(37, 117, 252, 1))"

    }

    return (
        <section className="vh-00" style={customGradient}>
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card bg-dark text-white" style={{ borderRadius: "1rem" }}>
                            <div className="card-body p-5 text-center">

                                <div className="mb-md-5 mt-md-4 pb-5">

                                    <h2 className="fw-bold mb-2 text-uppercase">Signup</h2>
                                    <p className="text-white-50 mb-5">Please enter your login and password!</p>
                                    <form onSubmit={handleSignup}>

                                        <div className="form-outline form-white mb-4">
                                            <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" id="typeEmailX" className="form-control form-control-lg" />
                                            <label className="form-label" htmlFor="typeEmailX">Email</label>
                                        </div>
                                        <div className="form-outline form-white mb-4">
                                            <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" id="typePasswordX" className="form-control form-control-lg" />
                                            <label className="form-label" htmlFor="typePasswordX">Password</label>
                                        </div>
                                        <button className="btn btn-outline-light btn-lg px-5" type="submit">Signup</button>
                                    </form>

                                    <div className="d-flex justify-content-center text-center mt-4 pt-1">
                                        <a href="#!" className="text-white"><i className="fab fa-facebook-f fa-lg"></i></a>
                                        <a href="#!" className="text-white"><i className="fab fa-twitter fa-lg mx-4 px-2"></i></a>
                                        <a href="#!" className="text-white"><i className="fab fa-google fa-lg"></i></a>
                                    </div>

                                </div>

                                <div>
                                    <p className="mb-0">Don't have an account? <a href="#!" className="text-white-50 fw-bold">Sign Up</a>
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Signup;

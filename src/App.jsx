import React, { useState } from 'react';

const App = function() {
    
    const [formData, setFormData] = useState({ username: "", email: "", password: "", confirmPassword: "" });
    const [message, setMessage] = useState({ text: "", type: "" });
    
    const updateData = function(e) {
        const { name, value } = e.target;

        setFormData(function(previous) {
            return { ...previous, [name]: value };
        });
    };
    
    const handleSubmit = function(e) {
        
        e.preventDefault();
        const { username, email, password, confirmPassword } = formData;
        
        if (!username || !email || !password || !confirmPassword) {
            setMessage({ text: "All fields must be filled!", type: "warning" });
            return;
        }
        
        if (!email.includes("@")) {
            setMessage({ text: "Email must contain the @ symbol!", type: "danger" });
            return;
        }
        
        if (password !== confirmPassword) {
            setMessage({ text: "Password and confirmation must be the same!", type: "danger" });
            return;
        }

        if (password.length < 12) {
            setMessage({ text: "Password must be at least 12 characters long!", type: "danger" });
            return;
        }
        

        
        setMessage({ text: "Account created successfully!", type: "success" });
    
    };
    
    return (
    <div className="container mt-5">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet"></link>
        
        <div className="row">
            <div className="col-md-6 mx-auto">
                <div className="card shadow border-primary">
                    <div className="card-body">
                        <h2 className="text-center mb-3">Create Your Account</h2>
                        
                        <form onSubmit={handleSubmit}>

                            <div className="mb-3">
                                <label className="form-label fw-semibold">Your name: </label>
                                <input type="text" name="username" className="form-control mb-3 text-center" placeholder="Enter your name" value={formData.username} onChange={updateData}></input>
                            </div>
                            
                            <div className="mb-3">
                                <label className="form-label fw-semibold">Email Address: </label>
                                <input type="text" name="email" className="form-control mb-3 text-center" placeholder="example@mail.com" value={formData.email} onChange={updateData}></input>
                            </div>
                            
                            <div className="mb-3">
                                <label className="form-label fw-semibold">Password: </label>
                                <input type="password" name="password" className="form-control mb-3 text-center" placeholder="Enter a strong password" value={formData.password} onChange={updateData}></input>
                            </div>
                            
                            <div className="mb-3">
                                <label className="form-label fw-semibold">Repeat password: </label>
                                <input type="password" name="confirmPassword" className="form-control mb-3 text-center" placeholder="Repeat password" value={formData.confirmPassword} onChange={updateData}></input>
                            </div>
                            
                            <button type="submit" className="btn btn-primary w-100">Register Me</button>
                            
                        </form>
                        
                        {message.text && (
                            <div className={`mt-3 alert alert-${message.type}`} role="alert">
                                {message.text}
                            </div>
                        )}
        
                    </div>
                </div>
            </div>
        </div>
    </div>
);
};

export default App;
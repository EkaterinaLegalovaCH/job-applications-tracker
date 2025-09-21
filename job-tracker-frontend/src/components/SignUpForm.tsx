import React, { useState, FormEvent } from "react";


interface SignUpResponse {
    message: string;
}

export const SignUp: React.FC = () => {
    
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        const res = await fetch("http://localhost:8080/api/auth/register", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({userName, userEmail, password}),
        });

        if (res.ok) {
            const data: SignUpResponse = await res.json();
            alert(data.message || "REgistration Succesfull")
        } else {
            alert("Registration Failed")
        }
    };



    return (
       <form onSubmit={handleSubmit}>
            <h2>Sign Up</h2>
            <input
                type="text"
                placeholder="Username"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                required
            />
            <input
                type="email"
                placeholder="Email"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                required
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <button type="submit">Sign Up</button>

       </form>
    );
};


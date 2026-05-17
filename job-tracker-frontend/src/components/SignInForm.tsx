import React, {useState, FormEvent} from "react";


export const SignIn: React.FC = () => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        const apiUrl = process.env.REACT_APP_API_BASE_URL || "http://localhost:8080";
        
        const res = await fetch(`${apiUrl}/api/auth/login`, {
            method: "POST",
            headers: {"Content-Type": "application/x-www-form-urlencoded"},
            credentials: "include",
            body: new URLSearchParams({
                username: userName,  
                password: password,
            }),
        });

        if (res.ok) {

            const data = await res.json();

            //Temporary store the user object, later to change tot token
            localStorage.setItem("user", JSON.stringify(data));

            alert("Login Successfull");

            window.location.href = "/applications";

        } else {
            alert("Invalid credentials");
        }

    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Sign In</h2>
            <input
                type="text"
                placeholder="Username"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                required
            />

            <input
                type="password"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <button type="submit">Sign In</button>

        </form>
    );
};



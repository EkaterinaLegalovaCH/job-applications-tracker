import React, {useState, FormEvent} from "react";


export const SignIn: React.FC = () => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e: FormEvent) => {
        

        const res = await fetch("http://localhost:8080/api/auth/login", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({userName, password}),
        });

        if (res.ok) {
            const data = await res.json();
            localStorage.setItem("token", data.token);
            alert("Login Successfull");
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



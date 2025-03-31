import React from "react";

function Footer() {
    return (
        <footer className="bg-light text-center py-3">
            <p>© {new Date().getFullYear()} Job Tracker</p>
        </footer>
    );
}

export default Footer;
import '../App.css';
import React, { useState, useEffect } from 'react';
import Navbar from "../components/Navbar.jsx";
import BlogsDesktop from "../components/BlogsDesktop.jsx";
import BlogsMobile from "../components/BlogsMobile.jsx";

function BlogsPage() {
    const [matches, setMatches] = useState(
        window.matchMedia("(min-width: 768px)").matches
    )
    useEffect(() => {
        window
            .matchMedia("(min-width: 768px)")
            .addEventListener('change', e => setMatches( e.matches ));
    }, []);

    if (matches) {
        return (
            <div>
                <Navbar callingPage="blogs"></Navbar>
                <BlogsDesktop/>
            </div>
        )
    } else {
        return (
            <div>
                <Navbar callingPage="blogs"></Navbar>
                <BlogsMobile />
            </div>
        )
    }
}

export default BlogsPage;
import '../App.css';
import React, { useState, useEffect } from 'react';
import NavbarDesktop from "../components/Navbar/NavbarDesktop.jsx";
import BlogsDesktop from "../components/Blogs/BlogsDesktop.jsx";
import BlogsMobile from "../components/Blogs/BlogsMobile.jsx";

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
                <NavbarDesktop left="Home" right="Contact">
                    <BlogsDesktop/>
                </NavbarDesktop>
            </div>
        )
    } else {
        return (
            <div>
                <BlogsMobile />
            </div>
        )
    }
}

export default BlogsPage;
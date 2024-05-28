import '../App.css';
import BlogsPageDesktop from "./BlogsPageDesktop";
import BlogsPageMobile from "./BlogsPageMobile";
import React, { useState, useEffect } from 'react';

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
        return (<BlogsPageDesktop />)
    } else {
        return (<BlogsPageMobile />)
    }
}
export default BlogsPage;
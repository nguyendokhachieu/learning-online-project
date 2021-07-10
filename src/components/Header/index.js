import "./header.scss";

import Logo from "./Logo";
import Navigation from "./Navigation";
import Search from "./Search";
import IconGroup from "./IconGroup";
import { useState } from "react";

export default function Header() 
{
    const [showSideNav, setShowSideNav] = useState(false);
    const [showSearchBar, setShowSearchBar] = useState(false);

    return (
        <header className="header">
            <div className="container">
                <Logo />
                <Navigation 
                    showSideNav={ showSideNav } 
                    onHideSideNav={ () => setShowSideNav(false) }
                />
                <IconGroup 
                    showSideNav={ () => setShowSideNav(true) } 
                    onShowSearchBar={ () => setShowSearchBar(true) }
                />
                <Search 
                    showSearchBar={ showSearchBar } 
                    onHideSearchBar={ () => setShowSearchBar(false) }
                />
            </div>
        </header>
    )
}
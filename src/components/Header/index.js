import "./header.scss";

import Logo from "./Logo";
import Navigation from "./Navigation";
import Search from "./Search";
import IconGroup from "./IconGroup";

export default function Header() {
    return (
        <header className="header">
            <div className="container">
                <Logo />
                <Navigation />
                <IconGroup />
                <Search />
            </div>
        </header>
    )
}
import ClassNames from "./Header.module.scss";
function Header() {
    return (
        <header className = {ClassNames.Header}>
            <h1 className = {ClassNames.Title}>todos</h1>
        </header>
    )
}

export default Header;
import ClassNames from "./Footer.module.scss"
function Footer() {
    return (
        <footer className={ClassNames.Footer}>
            <p>Double-click to edit a todo</p>
            <address>
                Created by 
                <strong>Mohamed Ahmed Ali Haroon</strong> based on React example
                <a href="mailto:mohamedharoon286@gmail.com"> mohamedharoon286@gmail.com </a>
            </address>
        </footer>
    )
}

export default Footer;
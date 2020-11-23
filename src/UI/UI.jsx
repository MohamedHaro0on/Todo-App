import ClassNames from "./UI.module.scss";


const SubTitle = (props) => <h2 className={ClassNames.SubTitle}> {props.children} </h2>;


const HorizontalLine = () => <hr className={ClassNames.HorizontalLine} />;

const Layout = ({ close }) => <div className={ClassNames.Layout} onClick={close}></div>;


const BlockQoute = () => {
    return (
        <>
            <blockquote className={ClassNames.BlockQuote}>
                <p>
                    React is a JavaScript library for creating user interfaces. Its core principles are declarative code, efficiency, and flexibility.
                    Simply specify what your component looks like and React will keep it up-to-date when the underlying data changes.
            </p>
                <footer> <a href="https://reactjs.org/" target = "_blank" rel="noreferrer"> React</a></footer>
            </blockquote>
            <HorizontalLine />
        </>
    )
}


const Button = (props) => {
    return (
        <button className = {ClassNames.Button} {...props}>{props.children}</button>
    )
}
export { SubTitle, HorizontalLine, Layout, BlockQoute, Button }
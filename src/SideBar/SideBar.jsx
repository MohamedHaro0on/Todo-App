import ClassNames from "./SideBar.module.scss";
import { ExamplesList, officialResources, community } from "./Links";
import React , { useState } from "react";
import { SubTitle, HorizontalLine, Layout, BlockQoute } from "../UI/UI";
function List({ argument, title }) {
    return (
        <>
            <SubTitle>{title}</SubTitle>
            <ul>
                {argument.map((element, index) => {
                    return (
                        <li key={index}> <a href={element.url}> {element.title}</a></li>
                    )
                })}
            </ul>
            <HorizontalLine />
        </>
    )
}

function SideBar() {

    const [isOpen, setIsOpen] = useState(false);
    let AppliedClasses = [ClassNames.SideBar];
    if (isOpen) {
        AppliedClasses.push(ClassNames.SideBarOpened);
    }
    else {
        AppliedClasses.push(ClassNames.SideBarClosed)
    }
    function ToggleSideBar() {
        setIsOpen(prevState => !prevState);
    }
    return (
        <>
            {/* Layout Displayed when the side bar is opened in smart phones . */}
            {isOpen && <Layout close={ToggleSideBar} />}

            {/* The Side Bar . */}
            <aside className={AppliedClasses.join(' ').trim()}>
                <SubTitle> React </SubTitle>
                <ul className={ClassNames.ExamplesList}>
                    {ExamplesList.map((element, index) => {
                        return (
                            <li key={index}>
                                <p>{element.title}</p>
                                {element.links.map((link, idx) => {
                                    return (
                                        <React.Fragment key = {idx}>
                                            <a href={link.url} key={link.title + index} className={ClassNames.Links}> {link.title}</a>
                                            {idx === 0 ? " , " : null}
                                        </React.Fragment>
                                    )
                                })}
                            </li>
                        )
                    })}
                </ul>

                <BlockQoute />


                {/* The resources Links , and the Community. */}
                <List argument={officialResources} title="Official Resources" />
                <List argument={community} title="Community" />
                <button className={ClassNames.ToggleSideBarButton} onClick={ToggleSideBar}><i className="fas fa-arrow-right"></i></button>
            </aside>


            {/* End of the side Bar . */}
        </>
    )
}

export default SideBar
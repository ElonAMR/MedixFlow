import {useState} from "react";

export function HeaderConnect(){

        const [isHover,setIsHover]=useState(false);

        return (

        <header style={{display: "flex", justifyContent: "center",}}>
            <nav>
                <ul style={{display: "flex", flexDirection: "row", gap: "20px"}}>
                    <li>Home</li>
                    <li
                        onMouseEnter={() => setIsHover(true)}
                        onMouseLeave={() => setIsHover(false)}
                        style={{position:"relative",cursor:"pointer"}}
                    >Actions
                        {isHover && (
                            <ul
                                style={{
                                    position: "absolute",
                                    top: "100%",
                                    left: 0,
                                    backgroundColor: "white",
                                    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                                    padding: "10px",
                                    listStyle: "none",
                                }}>
                                <li>Medical Tests</li>
                                <li>Medical Questionnaire</li>
                            </ul>
                        )}
                    </li>
                    <li>Setting</li>
                    <li>Log Out</li>
                </ul>
            </nav>
        </header>
    );
}
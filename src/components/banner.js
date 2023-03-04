import * as style from "./banner.module.css"
import React from "react"

const Banner = () => {
    const [marginTop, setMarginTop] = React.useState("6rem")

    const getWindowHeight = () => {
        const distanceY = window.pageYOffset || document.documentElement.scrollTop
        const shrinkOn = 200
        setMarginTop(distanceY > shrinkOn ? "3.2rem" : "6rem")
    }

    React.useEffect(() => {
        window.addEventListener("scroll", getWindowHeight)
        return function cleanup() {
        window.removeEventListener("scroll", getWindowHeight)
        }
    },[])

    return (
        <div
            className={style.banner}
            style={{ top: marginTop }}
        >
            <div className={style.bannerInner}>
                <div className={style.textContainer}>
                    <span className={style.text}>
                        Sat 25th March, 9am-5pm&nbsp;
                    </span>
                    <span className={style.text}>
                        @ University of Portsmouth
                    </span>
                </div>
                <div>
                    <a
                        className={style.bookButton}
                        href="https://hackerfest.co.uk/e/4812fe6b-1dc7-4ec4-9e53-feb54a0f6ded"
                        target="_blank" rel="noopener noreferrer"
                    >
                        Book your FREE ticket
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Banner
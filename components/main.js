function JobBoard() {
    return (
        <>
            <MainHome />
            <HideNav />
        </>
    )
}
function MainHome() {
    return (
        <>
            <main className="main-home">
                <div className="overlay"></div>
                <header className="header-main">
                    <div className="div-header">
                        <div className="logo-header"><a href="#">meslej</a></div>
                        <nav className="navigation-header">
                            <ul>
                                <li> <a href="#home">home</a></li>
                                <li> <a href="#about">about</a></li>
                                <li> <a href="#jobListiong">job listiong</a></li>
                                <li> <a href="#pages">pages</a></li>
                                <li> <a href="#blog">blog</a></li>
                                <li> <a href="#contact">contact</a></li>
                            </ul>
                        </nav>
                        <div className="btns-header">
                            <div className="links-header">
                                <a href="" className="post-job">post a job</a>
                                <a href="" className="log">log in</a>
                            </div>
                            <div className="ham">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="mai-home">
                    <div className="container-main-home">
                      <h1 className="h1-container-main-home">The Easiest Way To Get Your Dream Job</h1>
                      <p className="para-container-main-home">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate est, consequuntur perferendis.</p>
                    <div className="inputs">
                     <form>
                        <input type="text" placeholder="Job title, Company"/>
                        <select className="sele1">
                            <option value="Anywhere">Anywhere</option>
                            <option value="1">San francisco</option>
                            <option value="1">palo alto</option>
                            <option value="1">new york</option>
                            <option value="1">manhattan</option>
                            <option value="1">ontario</option>
                            <option value="1">toronto</option>
                            <option value="1">kansas</option>
                            <option value="1">Montain view</option>
                        </select>
                        <select className="sele1">
                            <option value="Anywhere">select job title</option>
                            <option value="1">part time</option>
                            <option value="1">full time</option>
                        </select>
                        <button className="sea-job" >Search Job</button>
                     </form>
                    </div>
                    </div>
                </div>
            </main>
        </>
    )
}

function HideNav() {
    return (
        <>
            <div className="hide-nav">
                <div className="ex">
                    <div className="ix">
                        Close
                    </div>
                </div>
                <nav className="hid-nav">
                    <ul>
                        <li> <a href="#home">home</a></li>
                        <li> <a href="#about">about</a></li>
                        <li> <a href="#jobListiong">job listiong</a></li>
                        <li> <a href="#pages">pages</a></li>
                        <li> <a href="#blog">blog</a></li>
                        <li> <a href="#contact">contact</a></li>
                    </ul>
                </nav>
            </div>
        </>
    )
}








ReactDOM.render(<JobBoard />, document.getElementById("root"))

let btnNav = document.querySelector(".ham");
let hideNav = document.querySelector(".hide-nav");
let ix = document.querySelector(".ix")

btnNav.onclick = () => {
    hideNav.style.right = "0";
    hideNav.style.transition = "all .7s";
}
ix.onclick = () => {
    hideNav.style.right = "-600px";
    hideNav.style.transition = "all .7s";
}

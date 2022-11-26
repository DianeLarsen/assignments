function Header() {
    return (
        <header>
            <nav className="nav">
                <img src="1460px-React_logo-1024x704.png" className="nav-logo"/>
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}
function Footer() {
    return (
        <footer className="footer">
                <small>© 2022 Larsen development. All rights reserved.</small>
        </footer>
    )
}
function MainContent() {
    return (
        <div>
            <h1>Reasons I'm excited to learn React</h1>
            <ol>
                <li>It's a popular library, so I'll be 
                able to fit in with the cool kids!</li>
                <li>I'm more likely to get a job as a developer
                if I know React</li>
            </ol>
        </div>
    )
}
function TemporaryName() {
    return (
        <div>
           <Header />
            <MainContent />
            <Footer />
                
        </div>
    )
}

ReactDOM.render(<TemporaryName />, document.getElementById("root"))
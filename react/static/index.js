const page = (<nav>
    <h1>Brand Name</h1>
    <ul>
    <li>Pricing</li>
    <li>About</li>
    <li>Contact</li>
    </ul>
    </nav>)
const root = document.getElementById("root")
root.append(JSON.stringify(page))
// ReactDOM.render(
//     page, document.getElementById("root"))
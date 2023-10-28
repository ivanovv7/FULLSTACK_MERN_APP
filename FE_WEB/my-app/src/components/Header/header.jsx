import { Link } from "react-router-dom"
import "./header.css"

export const Header = () => {

const routes = [
    {
        to:'/',
        label: "Home"
    },
    {
        to:'/about',
        label: "About"
    },
    {
        to:'/create_product',
        label: "Create Product"
    },
    {
        to:'/products',
        label: "Products"
    }
]

    return(

        <>
        <header>
            <nav className="navigation">
                <h3>LOGO</h3>

                <ul>
                    {routes.map((route) => (
                        <Link key={route.label} to = {route.to}>
                        <li>{route.label}</li>
                        </Link>
                    ))}
                </ul>
            </nav>
        </header>
        </>
    )
}
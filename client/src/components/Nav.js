import {Link} from 'react-router-dom'

function Nav() {
    return (
        <div>
            <Link to="/">
                <button>home</button>
            </Link>

            <Link to="/map">
                <button>map</button>
            </Link>
        </div>
    )
}

export default Nav

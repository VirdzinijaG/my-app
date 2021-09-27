import { Link } from 'react-router-dom';

function LinkuMiskas() {

    return (<nav>
        <Link to={'home'}><h1>Linku miskas</h1></Link>
        <Link to={'road'}><h1>Misko plentas</h1></Link>
        <Link to={'street'}><h1>Misko gatve</h1></Link>
    </nav>
    )
}

export default LinkuMiskas;
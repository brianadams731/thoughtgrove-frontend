import {Link} from "react-router-dom"
import { UnderConstruction } from "../components/UnderConstruction";

const FindGroups = ():JSX.Element =>{

    return (
        <div>
            <UnderConstruction>
                <div>
                    <h4>...although you can view a fully working group created <Link to="/dashboard/group/1">here</Link></h4>
                </div>
            </UnderConstruction>
        </div>
    )
}

export { FindGroups };
import {Link} from "react-router-dom"
import { UnderConstruction } from "../components/UnderConstruction";

const CreateGroup = ():JSX.Element =>{

    return (
        <div>
            <UnderConstruction>
                <div style={{
                    fontSize: "var(--fs-standard-large)",
                    color: "var(--c-dark-gray)"
                }}>
                    <h4>...but there is a fully working group already created <Link to="/dashboard/group/1">here</Link></h4>
                </div>
            </UnderConstruction>
        </div>
    )
}

export { CreateGroup };
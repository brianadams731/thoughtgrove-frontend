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
                    ...but there is a fully working group already created <Link to="/dashboard/group/1">Here</Link>!
                </div>
            </UnderConstruction>
        </div>
    )
}

export { CreateGroup };
import {Link} from "react-router-dom"
import { UnderConstruction } from "../components/UnderConstruction";

const UserGroups = ():JSX.Element =>{

    return (
        <div>
            <UnderConstruction>
                <div style={{
                    fontSize: "var(--fs-standard-large)",
                    color: "var(--c-dark-gray)"
                }}>
                    ...Although you can view a fully working group <Link to="/dashboard/group/1">Here</Link>!
                </div>
            </UnderConstruction>
        </div>
    )
}

export { UserGroups };
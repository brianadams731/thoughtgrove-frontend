import { UnderConstruction } from "../components/UnderConstruction";

const Profile = ():JSX.Element =>{

    return (
        <div>
            <UnderConstruction>
            <div style={{
                    fontSize: "var(--fs-standard-large)",
                    color: "var(--c-dark-gray)"
                }}>
                    TODO: Make awesome user profiles
                </div>
            </UnderConstruction>
        </div>
    )
}

export { Profile };
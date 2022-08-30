import { useState } from "react";

import homeStyles from "../styles/Home.module.css";
import searchStyles from "../styles/SearchDeck.module.css";

import { LoadingSpinner } from "../components/LoadingSpinner";

interface Props{
    children?: JSX.Element;
    onFormSubmitAsync: (inputValue: string)=>Promise<void>;
    isSearching: boolean;
}

const TopSearchBar = ({children, onFormSubmitAsync, isSearching}: Props): JSX.Element => {
    const [inputVal, setInputVal] = useState<string>("");

    return (
        <div>
            <div className={homeStyles.wrapper}>
                <div>
                    <form className={searchStyles.searchForm} onSubmit={async (e) => {
                        e.preventDefault();
                        await onFormSubmitAsync(inputVal);
                    }}>
                        <input type="text" value={inputVal} onChange={(e) => {
                            setInputVal(e.target.value)
                        }} onKeyDown={async (e) => {
                            if (e.key === "Enter") {
                                await onFormSubmitAsync(inputVal);
                            }
                        }} />
                        <button type="submit">Search</button>
                    </form>
                </div>
                {isSearching ? <LoadingSpinner /> : children}
            </div>
        </div>
    )
}

export { TopSearchBar };
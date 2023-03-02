import { useEffect, useState } from "react";
import SearchResults from "./SearchResults";

const SearchBar = () => {
  const [userInput, setUserInput] = useState("");
  // const [sentInput, setSentInput] = useState("");

  const userInputChangeHandler = (e) => {
    setTimeout(() => {
      setUserInput(e.target.value);
    }, 800);
  };

  return (
    <>
      <input
        onChange={userInputChangeHandler}
        type="text"
        name="input"
        placeholder="Search"
        className="input input-xs bg-accent"
      />
      {userInput != "" && (
        <SearchResults
          input={userInput}
          userInputState={{ userInput, setUserInput }}
        ></SearchResults>
      )}
    </>
  );
};

export default SearchBar;

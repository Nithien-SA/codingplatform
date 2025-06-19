import React from "react";
import Select from "react-select";
import "../styles/LanguagesDropdown.css"; // Make sure path is correct
import { customStyles } from "../constants/customStyles";
import { languageOptions } from "../constants/languageOptions";

const LanguagesDropdown = ({ onSelectChange }) => {
  return (
    <div className="language-dropdown-wrapper">
      <Select
        classNamePrefix="react-select"
        placeholder={`Filter By Category`}
        options={languageOptions}
        styles={customStyles}
        defaultValue={languageOptions[0]}
        onChange={(selectedOption) => onSelectChange(selectedOption)}
      />
    </div>
  );
};

export default LanguagesDropdown;

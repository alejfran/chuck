import React, { useState, useEffect } from "react";
import Select from "react-select";
import styled from "styled-components";

const SelectContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SelectBar = ({ url, onChange }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [categories, setCategories] = useState();
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (url) {
      fetch(url)
        .then((response) => response.json())
        .catch((error) => setHasError(error))
        .then((categories) => {
          const categoriesUpperCase = categories.map(
            (category) => category.charAt(0).toUpperCase() + category.slice(1)
          );
          let categoriesSorted = [];
          categoriesUpperCase.forEach((category) => {
            categoriesSorted.push({ value: category, label: category });
          });
          setCategories(categoriesSorted);
        })
        .then(setIsLoading(false));
    }
  }, [url]);

  return (
    <>
      {isLoading ? (
        <p>isLoading...</p>
      ) : (
        <SelectContainer>
          <Select
            placeholder="Categories"
            options={categories}
            isClearable
            onChange={onChange}
            theme={(theme) => ({
              ...theme,
              colors: {
                ...theme.colors,
                primary: "#F7971E",
                primary25: "#F7971E66",
              },
            })}
          />
        </SelectContainer>
      )}
    </>
  );
};

export default SelectBar;

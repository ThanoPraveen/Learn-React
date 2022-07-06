import React from "react";

// inline style
function InlineStyle() {
  // step 1 / create object of heading style properties name write to camelCase and properties values inside of double quotes
  const heading = {
    fontSize: "80px",
    color: "blue",
  };
  return (
    <div>
      {/* step 2 / used style attribute and pass the values object heading */}
      <h2 style={heading}>InlineStyle</h2>

      {/* Normally imported in the appStyles.css access to parent and all child component */}
      <h1 className="error">Error</h1>

      {/* appStyles.module.css -> is only access for this parent component but not allowed by any child component then write a code you get error in this component */}
      {/* 👇😲👆 */}
      {/* Line 14:22: 'styles' is not defined no-undef */}
      {/* <h1 className={styles.success}>success</h1> */}
    </div>
  );
}

export default InlineStyle;

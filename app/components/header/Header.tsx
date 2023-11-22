import React from "react";

import st from "./header.module.css";

const Header = () => {
  return (
    <div className={st.header}>
      <h2>Flexbox 4 Lyfe</h2>

      <button className={st.button}>Login</button>
    </div>
  );
};

export default Header;

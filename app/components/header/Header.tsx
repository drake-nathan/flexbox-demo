"use client";

import { useState } from "react";

import st from "./header.module.css";

const Header = () => {
  const [login, setLogin] = useState(false);

  return (
    <div className={st.header}>
      <h2>Flex 4 Lyfe</h2>
      <button className={st.button} onClick={() => setLogin((prev) => !prev)}>
        {login ? "Logout" : "Login"}
      </button>
    </div>
  );
};

export default Header;

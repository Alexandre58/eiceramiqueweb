import React, { useContext, useState } from "react";
import styles from "../../styles/_auth.module.scss";
import { UserContext } from "@/context/UserContext";
import { useRouter } from "next/router";
const Auth = () => {
  //pour recup l'utilisateur
  const [username, setUsername] = useState("");
  //recup de l'utilisateur du context
  const { setUser } = useContext(UserContext);
  //router poue rediriger l'user en cas de deconnection de l'utilisateur
  const router = useRouter();
  const onSumitForm = (e) => {
    e.preventDefault();
    if (username) {
      setUser(username);
      router.push("/");
    }
  };
  const handleChange = (e) => {
    setUsername(e.target.value);
  };
  return (
    <form
      action=""
      onSubmit={onSumitForm}
      className={styles.auth_form_container}
    >
      <input type="text" onChange={handleChange} />
      <button>Entrer</button>
    </form>
  );
};

export default Auth;

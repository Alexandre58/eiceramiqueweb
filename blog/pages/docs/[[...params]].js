import { useRouter } from "next/router";
import React from "react";

const Doc = () => {
  const router = useRouter();
  const { params = [] } = router.query;
  console.log(params);

  if (params.length === 2) {
    return (
      <h2>
        affichage des documents pour les parametres de fonctionnalités de 0 à 1.{" "}
      </h2>
    );
  } else if (params.length === 1) {
    return <h2>affichage des documents pour le parametre {params[0]}</h2>;
  }
  return (
    <div>
      <h1>Docs Home page</h1>
      <h1>Docs Home page</h1>
      <h1>Docs Home page</h1>
    </div>
  );
};

export default Doc;

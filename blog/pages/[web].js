import AsideNav from "@/components/AsideNav";
import React from "react";
import styles from "../styles/_atelier.module.scss";
import LinkRetour from "@/components/Linkretour";
import Image from "next/image";
import img6 from "../public/images/img6.PNG";

const Web = () => {
  return (
    <section className={styles.atelier_section_container}>
      <div className={styles.atelier_div_container}>
        <h1 className={styles.atelier_section_h1}>Les sites Web</h1>
        <LinkRetour retour="Retour" />
      </div>
      <article className={styles.atelier_section_article}>
        <Image
          className={styles.web_Images}
          src={img6}
          alt="Picture of the author"
          width={1847}
          height={876}
        />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          incidunt ratione autem quaerat! Omnis at possimus accusamus ab ea
          fugiat excepturi labore! Ex minus optio non consequuntur, tenetur
          cupiditate provident! Facere nobis odit asperiores officia qui ducimus
          illum consequatur ut suscipit repudiandae? Vero beatae aut, eaque
          nobis cumque ullam optio, facere corporis natus at, repellendus quam
          repudiandae nisi labore dolor! Corporis quae non blanditiis impedit
          dolor dignissimos maiores saepe commodi nam libero ratione eos,
          aspernatur deserunt quo in
        </p>
      </article>
      <AsideNav />
      <LinkRetour retour="Retour" />
    </section>
  );
};

export default Web;

import AdresseAteliers from "@/components/AdresseAteliers";
import AsideNav from "@/components/AsideNav";
import LinkRetour from "@/components/Linkretour";
import React from "react";
import styles from "../../styles/_atelier.module.scss";
import img9 from "../../public/images/img9.jpg";
import Image from "next/image";
import Head from "next/head";
const Atelier = () => {
  return (
    <section className={styles.atelier_section_container}>
      <Head>
        <title>Les ateliers de votre région</title>
        <meta
          name="description"
          content="Les ateliers de votre région sont diponibles. Chaque atelier vous invite à visiter virtuellement leurs endroit de fabrication et de vente. Les potiers et céramiste vous attendent pour une visite réel dans leurs ateliers lors de votre passage en France."
        />
      </Head>
      <div className={styles.atelier_div_container}>
        <h1 className={styles.atelier_section_h1}>Les Ateliers</h1>
        <div className={styles.atelier_section_div_link}>
          <LinkRetour retour="Retour" />
          <AdresseAteliers title={"Adresse des Ateliers"} />
        </div>
      </div>
      <article className={styles.atelier_section_article}>
        <p>
          <Image
            className={styles.atelier_Images}
            src={img9}
            alt="Picture of the author"
            width={2400}
            height={3408}
            placeholder="blur"
          />
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

export default Atelier;

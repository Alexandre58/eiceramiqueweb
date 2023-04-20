import AsideNav from "@/components/AsideNav";
import LinkArticles from "@/components/LinkArticles";
import LinkRetour from "@/components/Linkretour";
import RetourneAdresse from "@/components/RetourneAdresse";
import React from "react";
import styles from "../../styles/_atelier.module.scss";
import img9 from "../../public/images/img9.jpg";
import Image from "next/image";
//RECUP DE TOUT LES ARTICLES  POUR CREER DES PAGES POUR CHAQUE ARTICLE AVEC [ARTICLE];JS
//ne pas oublier de mettre les props dans***const Article = (props) => {...
export async function getStaticProps(context) {
  const id = context.params.article;
  //attention backtick dans le fetch
  const data = await fetch(`http://localhost:3000/api/users/${id}`);
  const article = await data.json();
  return {
    props: {
      article,
    },
  };
}
//getStaticPaths pour pouvoir creer des pages pour chaque article
// params: {
//     article: item.id.toString(), VOIR INDEX DE ARTICLE POUR le mot article
//   },
// }));
export async function getStaticPaths() {
  const data = await fetch("http://localhost:3000/api/users");
  const articles = await data.json();

  const paths = articles.map((item) => ({
    params: {
      article: item.id.toString(),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}
const Article = (props) => {
  console.log(props.article[0].username);
  return (
    <section className={styles.atelier_section_container}>
      <div className={styles.atelier_div_container}>
        <h1 className={styles.atelier_section_h1}>
          {props.article[0].username}
        </h1>
      </div>
      <article className={styles.atelier_section_article}>
        <p>Découvrez l'article de l'atelier = {props.article[0].username}</p>
        <p>
          {props.article[0].name} {props.article[0].firstname}
        </p>
        <p>{props.article[0].comment}</p>
        <Image
          className={styles.atelier_Images}
          src={img9}
          alt="Picture of the author"
          width={2400}
          height={3408}
          placeholder="blur"
        />
      </article>
      <LinkArticles retour="Retour  liste d'article" />
      <AsideNav />
    </section>
  );
};

export default Article;

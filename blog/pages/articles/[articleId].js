import AsideNav from "@/components/AsideNav";
import LinkArticles from "@/components/LinkArticles";
import React from "react";
import styles from "../../styles/_atelier.module.scss";
import img9 from "../../public/images/img9.jpg";
import Image from "next/image";
import Head from "next/head";
const Article = (props) => {
  console.log(props.article[0].username);
  console.log(props.article);
  return (
    <section className={styles.atelier_section_container}>
      <Head>
        <title>article personnel</title>
        <meta
          name="description"
          content="Articles de chaques potier rédigés par leurs propre mots et leurs propre images.Leurs adresses est également disonible si vous passez dans leurs régions."
        />
      </Head>
      <div className={styles.atelier_div_container}>
        <h1 className={styles.atelier_section_h1}>
          {props.article[0].username}
        </h1>
      </div>
      <article className={styles.atelier_section_article}>
        <p>Découvrez l'article de l'atelier = {props.article[0].username}</p>
        <p>
          {props.article[0].name}&nbsp;{props.article[0].firstname}
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
export async function getStaticPaths() {
  return {
    paths: [{ params: { articleId: "74" } }],
    fallback: true,
  };
}
//RECUP DE TOUT LES ARTICLES  POUR CREER DES PAGES POUR CHAQUE ARTICLE AVEC [ARTICLE];JS
//ne pas oublier de mettre les props dans***const Article = (props) => {...
export async function getStaticProps(context) {
  //const id = context.params.article;
  const { params } = context;
  //attention backtick dans le fetch
  const res = await fetch(
    `http://localhost:3000/api/users/${params.articleId}`
  );
  const data = await res.json();
  return {
    props: {
      article: data,
    },
    revalidate: 10,
  };
}

//getStaticPaths pour pouvoir creer des pages pour chaque article
// params: {
//     article: item.id.toString(), VOIR INDEX DE ARTICLE POUR le mot article
//   },
// }));
// export async function getStaticPaths() {
//   const data = await fetch("http://localhost:3000/api/users");
//   const articles = await data.json();

//   const paths = articles.map((item) => ({
//     params: {
//       article: item.id.toString(),
//     },
//   }));
//   return {
//     paths,
//     fallback: false,
//   };
// }

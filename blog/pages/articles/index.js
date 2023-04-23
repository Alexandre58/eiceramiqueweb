import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import LinkRetour from "@/components/Linkretour";
import styles from "../../styles/_articles.module.scss";
import AsideNav from "@/components/AsideNav";
//images
import Image from "next/image";
import img8 from "../../public/images/img8news.jpg";
//import uuid
import { v4 as uuidv4 } from "uuid";
const Articles = ({ articles }) => {
  const router = useRouter();

  return (
    <section className={styles.article_section_container}>
      <div className={styles.article_div_container}>
        <h1 className={styles.article_section_h1}>Articles</h1>
        <LinkRetour retour="Retour" />
      </div>
      <div
        className={styles.article_section_article_div}
        style={{ backgroundImage: `url(${img8.src})` }}
      >
        {articles.map((article) => (
          <article key={uuidv4()}>
            <Link
              className={styles.article_section_article}
              href={`/articles/${article.id.toString()}`}
              passHref
            >
              <p>ARTICLE {article.id} sur 100</p>
              <p>{article.username.slice(0, 130) + " ..."}</p>

              <u> Lire la suite</u>
            </Link>
          </article>
        ))}
      </div>
      <LinkRetour retour="Retour" />
      <AsideNav />
    </section>
  );
};
//appel api jsonplaceholder
export async function getStaticProps() {
  const data2 = await fetch("http://localhost:3000/api/users");
  const articles = await data2.json();
  return {
    props: {
      articles,
    },
  };
}
export default Articles;

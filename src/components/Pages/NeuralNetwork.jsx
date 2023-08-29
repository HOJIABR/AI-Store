import React, { useEffect, useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import Cartes from "../Cartes";
import Pagination from "./Pagination";
import axios from "axios";

const src = "http://64.226.102.92:8000/api/v1/neauralnetwork/list/";

export default function NeuralNetwork() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [articlesPage, setArticlesPage] = useState(1);
  const [articlesParPage] = useState(12);
  console.log(articles);
  useEffect(() => {
    const getCarts = async () => {
      setLoading(true);
      const res = await axios.get(src);
      setArticles(res.data);
      setLoading(false);
    };
    getCarts();
  }, []);

  const lastArticlesIndex = articlesPage * articlesParPage;
  const firstArticlesIndex = lastArticlesIndex - articlesParPage;
  const currentArticles = articles.slice(firstArticlesIndex, lastArticlesIndex);
  const paginate = (pageNummber) => setArticlesPage(pageNummber);

  return (
    <>
      <div className="page__Promty">
        <div className="rang">
          <Header />
        </div>
        <div className="container ">
          <p className="navigation__strel">Главная --Нейросетм</p>
          <p className="name__Page">Нейросети</p>
          <p></p>
        </div>
      </div>
      <Cartes articles={currentArticles} loading={loading} />

      <Pagination
        articlesParPage={articlesParPage}
        totalArticles={articles.length && articles.length}
        paginate={paginate}
      />
      <Footer />
    </>
  );
}

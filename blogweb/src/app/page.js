"use client";
import { AllBlogPost } from "@/components/AllBlogPost";
import { Footer } from "@/components/Footer";
import { LandingPage } from "@/components/LandingPage";
import { Trending } from "@/components/Trending";
import { useEffect, useState } from "react";

const getArticle = async () => {
  const res = await fetch("https://dev.to/api/articles");
  const articles = res.json();
  return articles;
};

export default function Home() {
  const [articles, setArticles] = useState([]);
  const getData = async () => {
    const data = await getArticle();
    setArticles(data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <div className="">
        <LandingPage articles={articles} />
        <Trending articles={articles} />
        <AllBlogPost articles={articles} />
        <Footer />
      </div>
    </div>
  );
}

import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home({ data }) {
  return (
    <div className="flex flex-col relative items-center min-h-screen">
      <h2 className="font-bold text-6xl text-secondary pt-20 pb-6 md:text-3xl">
        Weather <span className="text-active">News</span> App
      </h2>
      <h3 className="text-danger text-2xl font-bold uppercase tracking-wide mb-16 md:text-base md:px-4 md:text-center">
        Get All Your Weather-related News at one place
      </h3>
      {data.articles.map((news) => {
        return (
          <div
            className="flex items-center text-lg px-10 py-4 mb-10 font-light h-auto w-3/6 rounded-sm border-2 border-active text-secondary cursor-pointer transition duration-300 hover:border-secondary hover:text-active md:w-80"
            key={data.articles.indexOf(news)}
          >
            <Link href={news.url}>
              <a>
                <h3>{news.title}</h3>
                <p className="text-sm pt-4">Source: {news.source}</p>
              </a>
            </Link>
          </div>
        );
      })}

      <div className="flex flex-col mt-10 justify-end h-36">
        <p className="block mb-10 text-center text-secondary text-xs">
          RapidAPI weather app{" "}
          <a
            className="hover:text-active"
            href="https://github.com/RapidAPI/DevRel-Examples-External"
          >
            See more examples like this
          </a>
        </p>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await axios.get(process.env.VERCEL_URL);
  const { data } = res;

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data,
    },
  };
}

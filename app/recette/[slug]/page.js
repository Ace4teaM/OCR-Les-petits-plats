import Banner from "@/components/Banner/Banner";
import Footer from "@/components/Footer/Footer";
import Recipe from "@/components/Recipe/Recipe";
import styles from './page.module.css';
import recipes from '@/private/recipes.json'
import { notFound } from "next/navigation";

export default async function Home({params}) {
  const { slug } = await params
  const recipe = recipes.find(r => r.slug === slug);
  if(recipe === undefined)
    notFound();

  return (
    <>
      <Banner></Banner>
      <main>
        {recipe && <Recipe {...recipe}></Recipe>}
      </main>
      <Footer></Footer>
    </>
  );
}

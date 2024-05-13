import Loading from "@/components/loading";
import styles from "./meals.module.css";

import MealsGrid from "@/components/meals/meals-grid"
import { getMeals } from "@/lib/getMeals";

import Link from "next/link"
import { Suspense } from "react";

async function Meals() 
{
    const meals = await getMeals();
    return <MealsGrid meals={meals} />
}

export default function MealsPage() 
{
    return (
      <>
      <header className={styles.header}>
          <h1>
            Delicious meals made <span className={styles.highlight}>by you</span>
          </h1>
          <p>
            Choose your favourite recipe and cook it yourself.
            It is easy and fun!
          </p>
          <p className={styles.cta}>
            <Link href={'/meals/share'}>
              Share Your Favourite Recipes
            </Link>
          </p>
      </header>
      <main>
        <Suspense fallback={<Loading />}>
          <Meals />
        </Suspense>
      </main>
      </>
    )
}

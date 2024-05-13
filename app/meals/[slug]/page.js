import styles from "./page.module.css"

import Image from "next/image"
import { Suspense } from "react";

import { getMeal } from "@/lib/getMeals"
import Loading from "@/components/loading";
import { notFound } from "next/navigation";

async function GetMealDetails({ slug })
{
    const meal = await getMeal(slug);
    if (!meal)
    {
      notFound();
    }
  
    meal.instructions = meal.instructions.replace(/\n/g, '<br />');

    return (
      <>
      <header className={styles.header}>
        <div className={styles.image}>
          <Image 
          src={meal.image}
          alt={meal.title}
          fill 
          />
        </div>
        <div className={styles.headerText}>
          <h1>{meal.title}</h1>
          <p className={styles.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={styles.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p 
        className={styles.instructions}
        dangerouslySetInnerHTML={{
          __html: meal.instructions
        }}></p>
      </main>
      </>
    )
}

export default function MealDetailsPage({ params }) 
{
    return (
      <Suspense fallback={<Loading />}>
          <GetMealDetails slug={params.slug} />
      </Suspense>
    )
}

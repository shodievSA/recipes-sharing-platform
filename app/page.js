import styles from "./page.module.css";
import Link from "next/link";
import ImageSlideshow from "@/components/images/image-slideshow.js";

export default function Home() 
{
  return (
    <>
    <header className={styles.header}>
      <div className={styles.slideshow}>
        <ImageSlideshow />
      </div>
      <div className={styles.headerText}>
        <div className={styles.hero}>
          <h1>NextLevel Food for NextLevel Foodies</h1>
          <p>Taste & share food from all over the world.</p>
        </div>
        <div className={styles.cta}>
          <Link href="/community">Join The Community</Link>
          <Link href="/meals">Explore Meals</Link>
        </div>
      </div>
    </header>
    {/* <main>
      <section className={styles.section}>
        <h2>How it works</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          A itaque dolorem odio magni consequatur? Inventore 
          distinctio, provident sequi eius, quo qui vero tenetur.
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
          Sed assumenda maiores suscipit consectetur in magnam.
        </p>
      </section>
      <section className={styles.section}>
        <h2>Why NextLevel Food?</h2>
        <p>
          NextLevel Food is a platform for foodies to share their favorite
          recipes with the world. It&apos;s a place to discover new dishes, and to
          connect with other food lovers.
        </p>
        <p>
          NextLevel Food is a place to discover new dishes, and to connect
          with other food lovers.
        </p>
      </section>
    </main> */}
    </>
  )
}

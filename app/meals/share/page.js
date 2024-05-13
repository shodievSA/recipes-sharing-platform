'use client';

import { useFormState } from "react-dom";
import styles from "./page.module.css";
import ImagePicker from "@/components/meals/image-picker";
import SubmitButton from "@/components/submit-button";

import { handleSubmit } from "@/lib/actions";

export default async function MealsShare() 
{    
    const [state, formAction] = useFormState(handleSubmit, { message: null });

    return (
        <>
        <header className={styles.header}>
            <h1>
            Share your <span className={styles.highlight}>favorite meal</span>
            </h1>
            <p>Or any other meal you feel needs sharing!</p>
        </header>
        <main className={styles.main}>
            <form className={styles.form} action={formAction}>
                <div className={styles.row}>
                    <p>
                        <label htmlFor="name">Your name</label>
                        <input type="text" name="name" id="name" required />
                    </p>
                    <p>
                        <label htmlFor="email">Your email</label>
                        <input type="email" name="email" id="email" required />
                    </p>
                </div>
                <p>
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" name="title" required />
                </p>
                <p>
                    <label htmlFor="summary">Short Summary</label>
                    <input type="text" name="summary" id="summary" required />
                </p>
                <p>
                    <label htmlFor="instructions">Instructions</label>
                    <textarea 
                    name="instructions" 
                    id="instructions" 
                    rows="10"></textarea>
                </p>
                <ImagePicker label="Your image" name="image" />
                {
                    state.message && <p>{state.message}</p>
                }
                <p className={styles.actions}>
                    <SubmitButton />
                </p>
            </form>
        </main>
        </>
    )
}

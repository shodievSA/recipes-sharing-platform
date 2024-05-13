"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import styles from "./image-picker.module.css";

export default function ImagePicker({ label, name }) 
{
    const [preview, setPreview] = useState();

    const imageInput = useRef();

    function handleClick()
    {
        imageInput.current.click();
    }

    function handleChange(event) 
    {
        const file = event.target.files[0];

        if (!file)
        {
            setPreview(null);
            return;
        }

        const fileReader = new FileReader();

        fileReader.onload = () => {
            setPreview(fileReader.result)
        }

        fileReader.readAsDataURL(file);
    }

    return (
        <div className={styles.picker}>
            <label htmlFor={name}>{label}</label>
            <div className={styles.controls}>
                <div className={styles.preview}>
                {
                    preview ? 
                    <Image 
                    src={preview} 
                    alt="The image selected by the user" 
                    fill 
                    /> 
                    :
                    <p>No image picked yet.</p>
                }
                </div>
                <input 
                className={styles.input}
                type="file"
                id={name}
                name={name}
                accept="image/png, image/jpeg"
                ref={imageInput}
                onChange={handleChange}
                />
                <button 
                onClick={handleClick}
                type="button" 
                className={styles.button}
                >
                Pick an Image
                </button>
            </div>
        </div>
    )
}

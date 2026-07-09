import React, { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { TaglineTxt } from "../styles/splash.styles"

// const words = ["Developer", "Designer", "Tinkerer", "Photographer", "Audiophile", "Ordained Minister", "Pinewood Derby State Champ (2007-09)", "Plant Dad", "Sudoku Enthusiast"]

// Separated into two arrays to ensure that the initial words are always shown first, then the other words are shuffled
const initialWords = ["Designer", "Developer", "Tinkerer"];
const otherWords = ["Photographer", "Audiophile", "Ordained Minister", "Pinewood Derby State Champ (2007-09)", "Plant Dad", "Sudoku Enthusiast"];


const shuffleArray = (array: string[]) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

export default function Tagline() {
    const [index, setIndex] = useState(0)
    const [shuffledWords] = useState(() => [...initialWords, ...shuffleArray(otherWords)])

    useEffect(() => {
        const intervalId = setInterval(() => setIndex((index) => index + 1), 2800)
        return () => {
            clearInterval(intervalId)
        }
    }, [])

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={index}
                animate={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 12 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ ease: "easeInOut", duration: 0.5 }}
            >
                <TaglineTxt>{shuffledWords[index % shuffledWords.length]}</TaglineTxt>
            </motion.div>
        </AnimatePresence>
    )
}
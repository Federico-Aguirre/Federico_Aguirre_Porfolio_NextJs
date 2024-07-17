"use client"

import homeStyle from "@/pages/home.module.scss"
import TextSpan from "./_homeComponents/TextSpan";
import CallToAction from "./_homeComponents/CallToAction";
import { contextStore } from "@/store/Context"
import "@/animations/globalAnimations.scss"
import { ParticlesBackground } from "@/app/components/(particlejsConfig)/ParticlesBackground";
import { useRef, useEffect } from "react";

const HomePage = () => {

  const sentence = "Federico Aguirre Web Developer".split("");
  const homeSectionRef = useRef();
  const { changeSectionVisible } = contextStore()
  const { darkMode } = contextStore()
  let toggleLetterClass = darkMode ? "darkModeLetterClass" : "brightModeLetterClass";

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      entry.isIntersecting &&
      changeSectionVisible({ sectionVisibleValue: "home" })
    })
    observer.observe(homeSectionRef.current)
  }, [])

  return (
    <section className={homeStyle.homePage} id="home">
      <ParticlesBackground />
      <div className={`${homeStyle.homePage__title} ${toggleLetterClass}`} ref={homeSectionRef}>
        {sentence.map((letter, index) =>
          <TextSpan key={index}>
            <div>
            {letter === " " ? "\u00A0" : letter}
            </div>
          </TextSpan>
        )}
      </div>
      <CallToAction />
    </section>
  )
}

export default HomePage;
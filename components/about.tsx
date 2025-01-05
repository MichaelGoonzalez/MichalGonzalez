"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
    ref={ref}
    className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.175 }}
    id="about"
  >
    <SectionHeading>Sobre Mi</SectionHeading>
    <p className="mb-3">
      Soy un <span className="font-medium">desarrollador web apasionado</span> con mas de 2 años de experiencia en{" "}
      <span className="font-medium">desarrollo Frontend y Backend</span>. Durante este tiempo, he trabajado en la{" "}
      <span className="font-medium">implementación de proyectos innovadores</span> para diversos clientes,{" "}
      <span className="font-medium">entregando</span> {" "}
      <span className="font-medium">soluciones eficientes</span>. Mi conocimiento integral del{" "}
      <span className="italic">ciclo de vida del desarrollo de software</span> me permite abordar proyectos desde la planificación
      hasta la entrega con un enfoque orientado a resultados.
    </p>
  
    <p className="mb-3">
      Estoy en constante aprendizaje para mantenerme actualizado con las{" "}
      <span className="font-medium">últimas tendencias y tecnologías</span>, asegurándome de aportar valor a cada proyecto.
      Mi objetivo es superar las expectativas de los clientes y contribuir al éxito de proyectos futuros con{" "}
      <span className="font-medium">mi experiencia y habilidades técnicas</span>.
    </p>
  
    <p>
  Además de mi experiencia en desarrollo web, dedico tiempo a proyectos personales de{" "}
  <span className="font-medium">desarrollo de videojuegos</span>. Me apasiona todo el proceso creativo, desde el{" "}
  <span className="font-medium">arte y la animación</span> hasta la <span className="font-medium">música</span>, 
  integrando estas disciplinas para crear experiencias únicas. Estos proyectos no solo enriquecen mis habilidades técnicas, 
  sino que también potencian mi creatividad y visión multidisciplinaria.
</p>

  </motion.section>
  
  );
}

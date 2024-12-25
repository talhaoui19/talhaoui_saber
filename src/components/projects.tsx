"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { projectsData } from "../contents/projects_data";
import useHover from "../hooks/useHover";
import { DateIcon } from "@/assets/icons";
import Image from "next/image";

export default function Projects() {
  const t = useTranslations("projects");
  const { isHovered, handleMouseEnter, handleMouseLeave } = useHover();
  return (
    // START PROJECTS SECTION
    <section id="projects" className="grid gap-3 md:grid-cols-2">
      <div>
        <h3 className="label-text font-semibold">{t("title")}</h3>
        <div>
          {projectsData.map((project) => {
            return (
              <div key={project.id} className="relative">
                -{/* */}{" "}
                <Link
                  target="_blank"
                  className="link"
                  data-state="closed"
                  href={project.href}
                  onMouseEnter={() => handleMouseEnter(project.id)}
                  onMouseLeave={() => handleMouseLeave(project.id)}
                >
                  {project.title}
                </Link>
                {isHovered[project.id] && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                    }}
                    className="motion_div absolute flex items-start gap-3 bg-white py-4 px-4 rounded shadow-lg z-20"
                  >
                    <section>
                      {project.img ? (
                        <Image
                          alt="next auth"
                          width={project.width}
                          height={project.height}
                          style={{ color: "transparent" }}
                          src={project.img}
                        />
                      ) : (
                        <div className="bg-black w-10 h-10 rounded-full flex items-center justify-center"></div>
                      )}
                    </section>
                    <div className="flex flex-col items-start justify-start space-y-1">
                      <h2 className="text-sm font-semibold text-black">
                        {project.title}
                      </h2>
                      <p className="text-sm"> {t(project.descriptionKey)}</p>
                      <div className="flex items-center pt-2 gap-1">
                        <DateIcon />
                        <span className="text-muted-foreground text-xs">
                          {t(project.dateKey)}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
    // END PROJECTS SECTION
  );
}

// components/Experience.tsx
import { FC, useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Briefcase, ArrowRight, Calendar, MapPin } from "lucide-react";
import Image from "next/image";

const Experience: FC = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const experienceData = [
    {
      id: 1,
      company: "Technology Business Incubator",
      position: "Full Stack Developer",
      location: "Remote",
      period: "Nov 2024 - Feb 2025",
      description: [
        "Developed and optimized the frontend of an Employee Management System using React.js, improving UI/UX and data visualization; achieved 30% faster load times, 25% lower bounce rate, and 15% higher engagement",
        "Implemented 5+ core features including an interactive dashboard, dynamic employee profiles, task tracking, and leave management using 15+ reusable React components, increasing development efficiency by 40%",
      ],
      technologies: [
        "React.js",
        "UI/UX Design",
        "Data Visualization",
        "Component Architecture",
        "Performance Optimization",
        "Dashboard Development",
        "Frontend Development",
        "JavaScript (ES6+)",
      ],
      logoUrl:
        "data:image/png;base64,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",
      color: "blue",
    },
  ];

  return (
    <div
      className="bg-gray-900 min-h-screen text-white py-12 px-4 md:py-16 md:px-8"
      id="experience"
    >
      <div className="container mx-auto max-w-5xl">
        {" "}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-center mb-4">
            Professional Journey
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">
            Work Experience
          </h1>

          <p className="text-gray-300 text-center max-w-2xl mx-auto mb-12 md:mb-16 px-4">
            Building innovative solutions and gaining valuable industry
            experience through hands-on development roles at leading technology
            companies.
          </p>
        </motion.div>
        <div className="relative" ref={containerRef}>
          {/* Main timeline line with gradient and glow */}
          <motion.div
            className="absolute left-6 md:left-1/2 md:transform md:-translate-x-px top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-500 via-teal-500 to-blue-400 rounded-full shadow-[0_0_15px_0_rgba(16,185,129,0.5)]"
            style={{
              scaleY: useTransform(scrollYProgress, [0, 1], [0, 1]),
              originY: 0,
            }}
          />

          {experienceData.map((item, index) => {
            const itemRef = useRef(null);
            const isItemInView = useInView(itemRef, {
              once: false,
              margin: "-100px",
            });

            const colorClasses = {
              emerald: {
                bg: "bg-emerald-900/30",
                border: "border-emerald-700/50",
                text: "text-emerald-300",
                glow: "shadow-emerald-500/30",
                pill: "bg-emerald-900/50 border-emerald-700/50",
              },
              blue: {
                bg: "bg-blue-900/30",
                border: "border-blue-700/50",
                text: "text-blue-300",
                glow: "shadow-blue-500/30",
                pill: "bg-blue-900/50 border-blue-700/50",
              },
            };

            const colors =
              colorClasses[item.color as keyof typeof colorClasses];

            return (
              <motion.div
                key={item.id}
                ref={itemRef}
                className={`relative z-10 mb-12 md:mb-16 flex flex-col ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                initial={{ opacity: 0, y: 50 }}
                animate={
                  isItemInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                }
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {/* Timeline node */}
                <div className="absolute left-6 md:left-1/2 top-0 transform -translate-x-1/2 flex justify-center items-center">
                  <motion.div
                    className={`w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-800 border-2 ${
                      index === 0 ? "border-emerald-500" : "border-blue-500"
                    } flex items-center justify-center z-10 shadow-lg ${
                      colors.glow
                    }`}
                    initial={{ scale: 0 }}
                    animate={isItemInView ? { scale: 1 } : { scale: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.4,
                      type: "spring",
                      stiffness: 200,
                    }}
                  >
                    <Briefcase
                      className={
                        index === 0 ? "text-emerald-400" : "text-blue-400"
                      }
                      size={16}
                    />
                  </motion.div>
                </div>

                {/* Content card - Mobile: Full width to the right of timeline | Desktop: Alternating sides */}
                <div
                  className={`ml-12 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-8 lg:pr-12" : "md:pl-8 lg:pl-12"
                  }`}
                >
                  <motion.div
                    className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-gray-700/50 shadow-xl"
                    whileHover={{
                      y: -5,
                      boxShadow: `0 20px 40px -10px rgba(${
                        index === 0 ? "16,185,129" : "59,130,246"
                      }, 0.3)`,
                      transition: { duration: 0.3 },
                    }}
                  >
                    {/* Horizontal connecting line on hover - desktop only */}
                    <motion.div
                      className={`hidden md:block absolute top-4 md:top-1/2 transform md:-translate-y-1/2 h-0.5 ${
                        index % 2 === 0
                          ? "right-0 left-auto"
                          : "left-0 right-auto"
                      } ${
                        index === 0
                          ? "bg-gradient-to-r from-transparent to-emerald-500/80"
                          : "bg-gradient-to-r from-transparent to-blue-500/80"
                      }`}
                      style={{
                        width: useTransform(
                          scrollYProgress,
                          [0, 1],
                          [0, index % 2 === 0 ? "3rem" : "3rem"]
                        ),
                        opacity: useTransform(
                          scrollYProgress,
                          [0, 0.1 + index * 0.3, 0.2 + index * 0.3],
                          [0, 0, 1]
                        ),
                      }}
                    />

                    <div className="flex flex-col md:flex-row items-start gap-4">
                      <div
                        className={`flex-shrink-0 ${colors.bg} rounded-lg p-2 flex items-center justify-center`}
                      >
                        <div className="w-12 h-12 md:w-16 md:h-16 relative flex items-center justify-center">
                          {/* Option 1: Next.js Image with proper configuration */}
                          <Image
                            src={item.logoUrl}
                            alt={`${item.company} logo`}
                            width={64}
                            height={64}
                            className="object-contain"
                            unoptimized // Add this prop to bypass optimization if needed
                          />

                          {/* Option 2: Regular img tag as fallback */}
                          {/* <img 
                            src={item.logoUrl}
                            alt={`${item.company} logo`} 
                            className="w-full h-full object-contain"
                          /> */}
                        </div>
                      </div>

                      <div className="flex-1">
                        <motion.div
                          className="flex flex-wrap items-center gap-2 mb-2"
                          initial={{ opacity: 0 }}
                          animate={
                            isItemInView ? { opacity: 1 } : { opacity: 0 }
                          }
                          transition={{ duration: 0.6, delay: 0.2 }}
                        >
                          <h3
                            className={`text-lg md:text-xl font-bold ${colors.text}`}
                          >
                            {item.position}
                          </h3>
                          <span className="text-gray-400">@</span>
                          <span className="font-semibold text-white">
                            {item.company}
                          </span>
                        </motion.div>

                        <motion.div
                          className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-4 text-sm text-gray-400"
                          initial={{ opacity: 0 }}
                          animate={
                            isItemInView ? { opacity: 1 } : { opacity: 0 }
                          }
                          transition={{ duration: 0.6, delay: 0.3 }}
                        >
                          <div className="flex items-center gap-1">
                            <Calendar size={14} />
                            <span>{item.period}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin size={14} />
                            <span>{item.location}</span>
                          </div>
                        </motion.div>

                        <motion.div
                          className="space-y-2 mb-4"
                          initial={{ opacity: 0 }}
                          animate={
                            isItemInView ? { opacity: 1 } : { opacity: 0 }
                          }
                          transition={{ duration: 0.6, delay: 0.4 }}
                        >
                          {item.description.map((desc, i) => (
                            <div key={i} className="flex items-start gap-2">
                              <ArrowRight
                                size={16}
                                className={`mt-1 ${colors.text}`}
                              />
                              <p className="text-gray-300 text-sm md:text-base">
                                {desc}
                              </p>
                            </div>
                          ))}
                        </motion.div>

                        <motion.div
                          className="flex flex-wrap gap-2 mt-4"
                          initial={{ opacity: 0 }}
                          animate={
                            isItemInView ? { opacity: 1 } : { opacity: 0 }
                          }
                          transition={{ duration: 0.6, delay: 0.5 }}
                        >
                          {item.technologies.map((tech, i) => (
                            <span
                              key={i}
                              className={`px-2 py-1 rounded-full text-xs font-medium ${colors.pill} ${colors.text} border`}
                            >
                              {tech}
                            </span>
                          ))}
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Experience;

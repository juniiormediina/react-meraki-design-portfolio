import { motion } from 'motion/react';
import { Language, translations } from '../utils/translations';
import aboutImg from "../../assets/images/about.jpg";

interface AboutProps {
  language: Language;
}

export function About({language}: AboutProps) {
  const t = translations[language].about;

  return (<section id="about" className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{opacity: 0, x: -50}}
          whileInView={{opacity: 1, x: 0}}
          viewport={{once: true}}
          transition={{duration: 0.6}}
        >
          <h2
            className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">
            {t.title}
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            {t.description}
          </p>
        </motion.div>

        <motion.div
          initial={{opacity: 0, x: 50}}
          whileInView={{opacity: 1, x: 0}}
          viewport={{once: true}}
          transition={{duration: 0.6}}
          className="relative"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img src={aboutImg} alt="Creative workspace"
                 className="w-full h-[500px] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 to-transparent" />
          </div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-400 rounded-full blur-3xl opacity-50" />
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-purple-600 rounded-full blur-3xl opacity-30" />
        </motion.div>
      </div>
    </div>
  </section>);
}

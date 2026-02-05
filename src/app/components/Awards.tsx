import { motion } from 'motion/react';
import { Award } from 'lucide-react';
import { Language, translations } from '../utils/translations';

interface AwardsProps {
  language: Language;
}

export function Awards({language}: AwardsProps) {
  const t = translations[language].awards;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">
            {t.title}
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-6">
          {t.items.map((award, index) => (
            <motion.div
              key={award}
              initial={{opacity: 0, x: -30}}
              whileInView={{opacity: 1, x: 0}}
              viewport={{once: true}}
              transition={{delay: index * 0.1}}
              className="flex items-center gap-6 bg-gradient-to-r from-purple-50 to-white p-6 rounded-xl border border-purple-100 hover:border-purple-300 transition-colors"
            >
              <div
                className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-400 rounded-full flex items-center justify-center flex-shrink-0">
                <Award className="w-7 h-7 text-white" />
              </div>
              <p className="text-lg text-gray-700 font-medium">{award}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from 'motion/react';
import { ClipboardList, Eye, Lightbulb, MessageSquare, RefreshCw, Wrench } from 'lucide-react';
import { Language, translations } from '../utils/translations';

interface SkillsProps {
  language: Language;
}

const iconMap = [Lightbulb, Wrench, Eye, MessageSquare, ClipboardList, RefreshCw];

export function Skills({language}: SkillsProps) {
  const t = translations[language].skills;

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-purple-50 to-white">
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.items.map((skill, index) => {
            const Icon = iconMap[index];
            return (
              <motion.div
                key={skill.name}
                initial={{opacity: 0, y: 30}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{delay: index * 0.1}}
                whileHover={{scale: 1.05}}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-purple-100"
              >
                <div
                  className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-400 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {skill.name}
                </h3>
                <p className="text-gray-600">
                  {skill.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

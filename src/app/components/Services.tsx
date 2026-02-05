import { motion } from 'motion/react';
import { Camera, Package, Palette, RefreshCcw, User } from 'lucide-react';
import { Language, translations } from '../utils/translations';

interface ServicesProps {
  language: Language;
}

const iconMap = [Package, Camera, RefreshCcw, User, Palette];

export function Services({language}: ServicesProps) {
  const t = translations[language].services;

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-purple-50 to-white">
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
          <p className="text-lg text-gray-600">{t.subtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.items.map((service, index) => {
            const Icon = iconMap[index];
            return (
              <motion.div
                key={service.name}
                initial={{opacity: 0, y: 30}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{delay: index * 0.1}}
                whileHover={{y: -10}}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-purple-100 group"
              >
                <div
                  className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  {service.name}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

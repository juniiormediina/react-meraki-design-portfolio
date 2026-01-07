import { motion } from 'motion/react';
import { Language, translations } from '../utils/translations';

interface ClientsProps {
  language: Language;
}

export function Clients({ language }: ClientsProps) {
  const t = translations[language].clients;

  const clients = [
    'Client A',
    'Client B',
    'Client C',
    'Client D',
    'Client E',
    'Client F',
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">
            {t.title}
          </h2>
          <p className="text-lg text-gray-600">{t.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {clients.map((client, index) => (
            <motion.div
              key={client}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center border border-purple-100"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-400 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">{client.slice(-1)}</span>
                </div>
                <p className="text-sm font-medium text-gray-700">{client}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

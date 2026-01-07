import { motion } from 'motion/react';
import { Language, translations } from '../utils/translations';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface GalleryProps {
  language: Language;
}

export function Gallery({ language }: GalleryProps) {
  const t = translations[language].gallery;

  const artworks = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1658887024151-be5592427653?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHB1cnBsZSUyMGFydHxlbnwxfHx8fDE3Njc3OTczNTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      span: 'md:col-span-2',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1668775589938-58517ad578b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZGluZyUyMHBhY2thZ2luZyUyMGRlc2lnbnxlbnwxfHx8fDE3Njc3NzYyNDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      span: '',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1764601841377-2fd86c9fd8bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aXN1YWwlMjBpZGVudGl0eSUyMGRlc2lnbnxlbnwxfHx8fDE3Njc4MTExOTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      span: '',
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1633383179570-84486a2b34c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmFsb2clMjBwaG90b2dyYXBoeSUyMGNhbWVyYXxlbnwxfHx8fDE3Njc4MTExOTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      span: 'md:col-span-2 md:row-span-2',
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1554774853-aae0a22c8aa4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb25hbCUyMGJyYW5kaW5nfGVufDF8fHx8MTc2NzgxMTE5NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      span: '',
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
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

        <div className="grid md:grid-cols-3 gap-4">
          {artworks.map((artwork, index) => (
            <motion.div
              key={artwork.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className={`relative overflow-hidden rounded-xl shadow-lg cursor-pointer group ${artwork.span}`}
            >
              <ImageWithFallback
                src={artwork.image}
                alt={`Artwork ${artwork.id}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

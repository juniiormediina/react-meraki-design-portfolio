import { motion } from 'motion/react';
import { Heart, Instagram, Linkedin, Mail } from 'lucide-react';
import { Language, translations } from '../utils/translations';

interface FooterProps {
  language: Language;
}

export function Footer({ language }: FooterProps) {
  const t = translations[language].footer;

  return (
    <footer className="bg-gradient-to-br from-purple-900 to-purple-700 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Meraki Design</h3>
            <p className="text-purple-200">
              {language === 'es' 
                ? 'Creando identidades visuales con alma.' 
                : 'Creating visual identities with soul.'}
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{language === 'es' ? 'Contacto' : 'Contact'}</h4>
            <div className="space-y-2 text-purple-200">
              <p>hello@merakidesign.com</p>
              <p>+1 (555) 123-4567</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{language === 'es' ? 'Sígueme' : 'Follow Me'}</h4>
            <div className="flex gap-4">
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </motion.a>
            </div>
          </div>
        </div>

        <div className="border-t border-purple-600 pt-8 text-center text-purple-200">
          <p className="flex items-center justify-center gap-2">
            © 2026 Meraki Design. {t.rights} {t.made} <Heart className="w-4 h-4 text-purple-400" /> 
          </p>
        </div>
      </div>
    </footer>
  );
}

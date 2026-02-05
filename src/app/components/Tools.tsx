import { motion } from 'motion/react';
import { Language, translations } from '../utils/translations';

interface ToolsProps {
  language: Language;
}

// Custom SVG icons for Adobe and Figma tools
const ToolIcons = {
  Premiere: () => (
    <svg viewBox="0 0 240 234" className="w-full h-full">
      <path fill="#00005B"
            d="M42.5 0h155C221 0 240 19 240 42.5v149c0 23.5-19 42.5-42.5 42.5h-155C19 234 0 215 0 191.5v-149C0 19 19 0 42.5 0z" />
      <path fill="#9999FF"
            d="M100 121.5c3.7-2.3 5.7-6.1 5.7-10.5 0-8.6-5.8-14-16-14H62v68h12V130h14.9l14.4 35h13.2l-16.5-37.5c3.3-1 6-3 8-6zm-26-12.5V87h14.8c5.3 0 8.2 2.6 8.2 7 0 4.4-2.8 7-8.2 7H74zM134 96v-9h-12v68h12v-35.5c0-10.7 5.5-16.5 15.5-16.5 1.8 0 3.6.2 5.5.6V94.6c-1.5-.3-2.7-.5-3.7-.5-8.8 0-14.7 5.5-17.3 13.9V96z" />
    </svg>
  ),
  Photoshop: () => (
    <svg viewBox="0 0 240 234" className="w-full h-full">
      <path fill="#001E36"
            d="M42.5 0h155C221 0 240 19 240 42.5v149c0 23.5-19 42.5-42.5 42.5h-155C19 234 0 215 0 191.5v-149C0 19 19 0 42.5 0z" />
      <path fill="#31A8FF"
            d="M54 164.1V61.2c0-.7.3-1.1 1-1.1 1.7 0 3.3 0 5.6-.1 2.4-.1 4.9-.1 7.6-.2 2.7-.1 5.6-.1 8.7-.2 3.1-.1 6.1-.1 9.1-.1 8.2 0 15 1 20.6 3.1 5 1.7 9.6 4.5 13.4 8.2 3.2 3.2 5.7 7.1 7.3 11.4 1.5 4.2 2.3 8.5 2.3 13 0 8.6-2 15.7-6 21.3-4 5.6-9.6 9.8-16.1 12.2-6.8 2.5-14.3 3.4-22.5 3.4-2.4 0-4 0-5-.1s-2.4-.1-4.3-.1V164c.1.7-.4 1.3-1.1 1.4H55.2c-.8 0-1.2-.4-1.2-1.3zm21.8-84.5V113c1.4.1 2.7.2 3.9.2H85c3.9 0 7.8-.6 11.5-1.8 3.2-1.1 5.9-3.2 7.9-5.9 2-3 3-7.1 3-12.3 0-5.5-1.4-9.9-4.2-13.2-2.7-3.2-7.3-4.8-13.6-4.8-2.7 0-4.9 0-6.5.1-1.6.1-3.1.1-4.3.2zM192 106.9c-3-1.6-6.2-2.7-9.6-3.4-3.7-.8-7.4-1.3-11.2-1.3-2-.1-4 .2-5.9.6-1.3.3-2.4 1-3.1 2-.5.8-.8 1.8-.8 2.7 0 1.1.4 2.2 1.1 3.1 1.4 1.5 3.2 2.7 5.2 3.6 3.5 1.5 7 2.9 10.5 4.1 5 1.6 9.9 3.5 14.6 5.9 3.9 2 7.4 4.9 10.1 8.4 2.6 3.6 3.9 8.2 3.8 12.9.1 4.8-1.2 9.5-3.7 13.6-2.6 4-6.5 7.1-11 8.9-5.2 2.2-12.1 3.3-20.8 3.3-4.1 0-8.3-.3-12.4-.9-3.9-.6-7.8-1.5-11.5-2.9-3.4-1.2-6.7-2.9-9.8-4.9-.8-.5-1.2-1.2-1.1-2.1v-17.4c0-.5.2-1 .5-1.2.4-.2.7-.1 1.2.2 3.7 2.6 7.9 4.7 12.2 6.2 4.1 1.6 8.5 2.4 12.9 2.5 3.4 0 6.1-.4 8.1-1.2 1.6-.6 2.9-1.9 3.4-3.6.2-.9.3-1.9.3-2.8 0-1.4-.4-2.7-1.2-3.9-1.5-1.8-3.5-3.3-5.7-4.3-3.9-1.8-7.9-3.6-12-5.1-4.9-1.6-9.7-3.5-14.4-5.9-3.9-2-7.3-5-9.9-8.7-2.5-3.7-3.8-8.4-3.7-13.2-.1-4.8 1.2-9.4 3.6-13.5 2.5-4.1 6.2-7.3 10.5-9.4 5-2.5 11.4-3.7 19.5-3.7 4.5 0 8.7.3 12.7.8 3.5.5 7 1.2 10.3 2.4 2.7.9 5.1 2.4 7.2 4.3.6.6.9 1.3.9 2.1v16.3c0 .6-.2.9-.6 1.1-.3.2-.7.3-1.1.1z" />
    </svg>
  ),
  InDesign: () => (
    <svg viewBox="0 0 240 234" className="w-full h-full">
      <path fill="#49021F"
            d="M42.5 0h155C221 0 240 19 240 42.5v149c0 23.5-19 42.5-42.5 42.5h-155C19 234 0 215 0 191.5v-149C0 19 19 0 42.5 0z" />
      <path fill="#FF3366"
            d="M54 164.1V61.2c0-.7.4-1.1 1.2-1.1h17.6c.7 0 1.1.4 1.1 1.1v102.9c0 .7-.4 1.1-1.1 1.1H55.2c-.8 0-1.2-.4-1.2-1.1zm82.9-47.5c-5.2 0-9.4 1.8-12.6 5.4-3.2 3.6-4.8 8.9-4.8 16v25.9c0 .7-.4 1.1-1.1 1.1h-17.4c-.7 0-1.1-.4-1.1-1.1V87.6c0-.7.4-1.1 1.1-1.1h16.6c.7 0 1.1.4 1.1 1.1v8.6c2.8-3.5 6.4-6.3 10.5-8.2 3.8-1.8 8-2.7 12.3-2.7 1.2 0 2.4.1 3.5.2.7.1 1.1.5 1.1 1.2v16.1c0 .7-.4 1.1-1.1 1.1-1.1-.1-2.2-.2-3.3-.2z" />
    </svg>
  ),
  Illustrator: () => (
    <svg viewBox="0 0 240 234" className="w-full h-full">
      <path fill="#300"
            d="M42.5 0h155C221 0 240 19 240 42.5v149c0 23.5-19 42.5-42.5 42.5h-155C19 234 0 215 0 191.5v-149C0 19 19 0 42.5 0z" />
      <path fill="#FF9A00"
            d="M116.2 140.6H78.3l-7.6 23.5c-.2.9-.9 1.4-1.8 1.4H50.5c-1.2 0-1.6-.6-1.3-1.8l32-100.9c.3-1.1.6-2.2.9-3.5.6-2.7.9-5.5.8-8.3 0-.7.4-1.1 1.1-1.1h24.6c.8 0 1.2.3 1.3.8l36.5 113c.3 1 0 1.5-1 1.5h-20.9c-.8.1-1.4-.4-1.7-1.2l-7.6-23.4zm-31.4-63.4c-.5-2-1-4.3-1.7-6.9-.6-2.5-1.2-5-1.7-7.3-.6 2.6-1.2 5.1-1.8 7.6-.6 2.5-1.2 4.8-1.7 6.7l-9.2 29.7h25.3l-9.2-29.8zm81.5 5.9c-5.2 0-9.4 1.8-12.6 5.4-3.2 3.6-4.8 8.9-4.8 16v25.9c0 .7-.4 1.1-1.1 1.1h-17.4c-.7 0-1.1-.4-1.1-1.1V87.6c0-.7.4-1.1 1.1-1.1h16.6c.7 0 1.1.4 1.1 1.1v8.6c2.8-3.5 6.4-6.3 10.5-8.2 3.8-1.8 8-2.7 12.3-2.7 1.2 0 2.4.1 3.5.2.7.1 1.1.5 1.1 1.2v16.1c0 .7-.4 1.1-1.1 1.1-1.1-.1-2.2-.2-3.3-.2z" />
    </svg>
  ),
  Figma: () => (
    <svg viewBox="0 0 200 300" className="w-full h-full">
      <path fill="#0ACF83" d="M50 300c27.6 0 50-22.4 50-50v-50H50c-27.6 0-50 22.4-50 50s22.4 50 50 50z" />
      <path fill="#A259FF" d="M0 150c0-27.6 22.4-50 50-50h50v100H50c-27.6 0-50-22.4-50-50z" />
      <path fill="#F24E1E" d="M0 50C0 22.4 22.4 0 50 0h50v100H50C22.4 100 0 77.6 0 50z" />
      <path fill="#FF7262" d="M100 0h50c27.6 0 50 22.4 50 50s-22.4 50-50 50h-50V0z" />
      <path fill="#1ABCFE" d="M200 150c0 27.6-22.4 50-50 50s-50-22.4-50-50 22.4-50 50-50 50 22.4 50 50z" />
    </svg>
  ),
  Fotografía: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
         strokeLinejoin="round" className="w-full h-full">
      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
      <circle cx="12" cy="13" r="4" />
    </svg>
  ),
  Photography: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
         strokeLinejoin="round" className="w-full h-full">
      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
      <circle cx="12" cy="13" r="4" />
    </svg>
  ),
};

export function Tools({language}: ToolsProps) {
  const t = translations[language].tools;

  const tools = [
    {name: 'Premiere', color: 'from-[#00005B] to-[#9999FF]'},
    {name: 'Photoshop', color: 'from-[#001E36] to-[#31A8FF]'},
    {name: 'InDesign', color: 'from-[#49021F] to-[#FF3366]'},
    {name: 'Illustrator', color: 'from-[#300] to-[#FF9A00]'},
    {name: 'Figma', color: 'from-[#F24E1E] to-[#A259FF]'},
    {name: language === 'es' ? 'Fotografía' : 'Photography', color: 'from-purple-600 to-purple-400'},
  ];

  return (
    <section id="tools" className="py-20 bg-white">
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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {tools.map((tool, index) => {
            const IconComponent = ToolIcons[tool.name as keyof typeof ToolIcons];
            return (
              <motion.div
                key={tool.name}
                initial={{opacity: 0, y: 30}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{delay: index * 0.1}}
                whileHover={{y: -10, scale: 1.05}}
                className="flex flex-col items-center"
              >
                <div
                  className={`w-24 h-24 bg-gradient-to-br ${tool.color} rounded-2xl p-4 shadow-lg hover:shadow-2xl transition-all mb-4 flex items-center justify-center`}>
                  {IconComponent && <IconComponent />}
                </div>
                <p className="text-center font-medium text-gray-700">{tool.name}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

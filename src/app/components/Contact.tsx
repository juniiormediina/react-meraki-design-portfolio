import { motion } from 'motion/react';
import { Mail, MapPin, Phone, Send, Sparkles } from 'lucide-react';
import { Language, translations } from '../utils/translations';

interface ContactProps {
  language: Language;
}

export function Contact({language}: ContactProps) {
  const t = translations[language].contact;
  const services = translations[language].services;

  const handleContactClick = () => {
    // Create comprehensive email template
    const emailTemplate = language === 'es' ? `¡Hola Meraki Design!

Estoy interesado/a en trabajar contigo y me gustaría solicitar una cotización para mi proyecto.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📋 INFORMACIÓN DE CONTACTO
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Nombre completo: 

Email: 

Teléfono: 

Empresa/Marca (si aplica): 


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎨 SERVICIO DE INTERÉS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Selecciona el servicio que te interesa:
☐ Packaging
☐ Fotografía Análoga y Digital
☐ Rebranding
☐ Creación de Marca Personal
☐ Identidad Visual
☐ Otro: ___________


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📝 BRIEF DEL PROYECTO
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Por favor, completa la siguiente información para brindarte una cotización más precisa y personalizada:

1. ¿Cuál es el objetivo principal del proyecto?
   (Ej: Lanzar nueva marca, renovar imagen, crear packaging, etc.)




2. ¿Quién es tu público objetivo?
   (Edad, género, intereses, ubicación, etc.)




3. ¿Cómo te imaginas el resultado final? ¿Tienes referencias visuales?
   (Puedes incluir links, describir el estilo que buscas: minimalista, moderno, vintage, colorido, etc.)




4. ¿Qué entregables necesitas?
   (Ej: Logo, manual de marca, mockups, fotografías, packaging físico, archivos digitales, etc.)




5. ¿Cuál es tu presupuesto estimado para este proyecto?




6. ¿Cuál es el timeline o fecha límite del proyecto?




7. ¿Algún otro detalle importante que deba conocer?
   (Requisitos especiales, restricciones, preferencias de color, competencia, etc.)




━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

¡Gracias por tu interés en Meraki Design!
Responderé tu mensaje lo antes posible con una propuesta personalizada.

¿Tienes alguna pregunta adicional? ¡No dudes en incluirla abajo!



━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Meraki Design | Diseño con alma ✨
` : `Hello Meraki Design!

I'm interested in working with you and would like to request a quote for my project.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📋 CONTACT INFORMATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Full name: 

Email: 

Phone: 

Company/Brand (if applicable): 


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎨 SERVICE OF INTEREST
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Select the service you're interested in:
☐ Packaging
☐ Analog & Digital Photography
☐ Rebranding
☐ Personal Branding
☐ Visual Identity
☐ Other: ___________


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📝 PROJECT BRIEF
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Please complete the following information to receive a more accurate and personalized quote:

1. What is the main objective of the project?
   (E.g., Launch new brand, refresh image, create packaging, etc.)




2. Who is your target audience?
   (Age, gender, interests, location, etc.)




3. How do you envision the final result? Do you have visual references?
   (You can include links, describe the style you're looking for: minimalist, modern, vintage, colorful, etc.)




4. What deliverables do you need?
   (E.g., Logo, brand manual, mockups, photographs, physical packaging, digital files, etc.)




5. What is your estimated budget for this project?




6. What is the timeline or deadline for the project?




7. Any other important details I should know?
   (Special requirements, restrictions, color preferences, competition, etc.)




━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Thank you for your interest in Meraki Design!
I'll respond to your message as soon as possible with a personalized proposal.

Do you have any additional questions? Feel free to include them below!



━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Meraki Design | Design with soul ✨
`;

    const subject = language === 'es' ? '💌 Solicitud de Cotización | Nuevo Proyecto' : '💌 Quote Request | New Project';

    // Create mailto link
    const mailtoLink = `mailto:hello@merakidesign.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailTemplate)}`;

    // Open email client
    window.location.href = mailtoLink;
  };

  return (<section id="contact" className="py-20 bg-gradient-to-br from-purple-50 via-white to-purple-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t.subtitle}</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Main Contact Card */}
          <motion.div
            initial={{opacity: 0, y: 30}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            className="bg-white rounded-3xl shadow-xl overflow-hidden border border-purple-100"
          >
            {/* Contact Info Section */}
            <div className="grid md:grid-cols-3 gap-6 p-8 bg-gradient-to-br from-purple-50 to-white">
              <div className="flex flex-col items-center text-center space-y-3">
                <div
                  className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-400 rounded-2xl flex items-center justify-center shadow-lg">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">{t.email}</h3>
                  <a
                    href="mailto:hello@merakidesign.com"
                    className="text-purple-600 hover:text-purple-700 transition-colors text-sm"
                  >
                    hello@merakidesign.com
                  </a>
                </div>
              </div>

              <div className="flex flex-col items-center text-center space-y-3">
                <div
                  className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-400 rounded-2xl flex items-center justify-center shadow-lg">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">{t.phone}</h3>
                  <a
                    href="tel:+573123830479"
                    className="text-gray-600 hover:text-purple-600 transition-colors text-sm"
                  >
                    +57 (312) 383-0479
                  </a>
                </div>
              </div>

              <div className="flex flex-col items-center text-center space-y-3">
                <div
                  className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-400 rounded-2xl flex items-center justify-center shadow-lg">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">{t.location}</h3>
                  <p className="text-gray-600 text-sm">Villavicencio, Colombia</p>
                </div>
              </div>
            </div>

            {/* Main CTA Section */}
            <div className="p-10 text-center space-y-6">
              <div className="space-y-3">
                <div className="flex items-center justify-center gap-2 text-purple-600">
                  <Sparkles className="w-6 h-6" />
                  <span className="text-sm font-medium uppercase tracking-wider">
                    {language === 'es' ? 'Comencemos a crear' : "Let's start creating"}
                  </span>
                  <Sparkles className="w-6 h-6" />
                </div>
                <p className="text-gray-600 max-w-xl mx-auto leading-relaxed">
                  {t.contactDescription}
                </p>
              </div>

              <motion.button
                onClick={handleContactClick}
                whileHover={{scale: 1.05}}
                whileTap={{scale: 0.95}}
                className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-purple-600 to-purple-500 text-white rounded-2xl font-semibold text-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all group"
              >
                <Mail className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                {t.contactButton}
                <Send className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <p className="text-xs text-gray-500">
                {language === 'es' ? '✉️ Se abrirá tu aplicación de correo con una plantilla lista para completar' : '✉️ Your email app will open with a ready-to-fill template'}
              </p>
            </div>

            {/* Info Box */}
            <div
              className="mx-10 mb-10 bg-gradient-to-br from-purple-100 via-purple-50 to-white rounded-2xl p-6 border border-purple-200">
              <div className="flex items-start gap-4">
                <div
                  className="flex-shrink-0 w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white text-xl">
                  💡
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {language === 'es' ? 'Para una cotización más precisa' : 'For a more accurate quote'}
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {language === 'es' ? 'La plantilla de correo incluye preguntas sobre tu proyecto, público objetivo, presupuesto y timeline. Cuanto más detallada sea tu información, más personalizada será mi propuesta para ti.' : 'The email template includes questions about your project, target audience, budget and timeline. The more detailed your information, the more personalized my proposal will be for you.'}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Additional Services Info */}
          <motion.div
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{delay: 0.2}}
            className="mt-8 text-center"
          >
            <p className="text-sm text-gray-600 mb-3">
              {language === 'es' ? 'Servicios disponibles:' : 'Available services:'}
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {services.items.map((service, index) => (<span
                  key={index}
                  className="px-4 py-2 bg-white text-purple-600 rounded-full text-xs font-medium border border-purple-200 shadow-sm"
                >
                  {service.name}
                </span>))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>);
}

import { motion } from 'framer-motion';
import { ArrowUpRight, FileText, Github, Mail, Phone } from 'lucide-react';
import { useLanguage } from '../contexts/useLanguage';
import { trackEvent } from '../analytics';

const Contact = () => {
  const { t } = useLanguage();

  const contacts = [
    {
      label: 'Email',
      value: 'gwon99065@naver.com',
      href: 'mailto:gwon99065@naver.com',
      icon: Mail,
    },
    {
      label: 'GitHub',
      value: 'github.com/gwon9906',
      href: 'https://github.com/gwon9906',
      icon: Github,
    },
    {
      label: t('프로젝트 PDF', 'Project PDFs'),
      value: t('유량 예측 / LoRa 보고서', 'Valve / LoRa Reports'),
      href: '/files/lora-final-report.pdf',
      icon: FileText,
    },
    {
      label: t('휴대폰', 'Phone'),
      value: '010-3414-9906',
      href: 'tel:01034149906',
      icon: Phone,
    },
  ];

  return (
    <section id="contact" className="border-t border-slate-200 bg-slate-50/70">
      <div className="section-container py-12 lg:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.45 }}
          className="space-y-8"
        >
          <div className="max-w-3xl space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
              {t('Contact', 'Contact')}
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              {t('연락처', 'Contact')}
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {contacts.map((contact) => (
              <a
                key={contact.label}
                href={contact.href}
                target={contact.href.startsWith('http') || contact.href.startsWith('/files/') ? '_blank' : undefined}
                rel={contact.href.startsWith('http') || contact.href.startsWith('/files/') ? 'noopener noreferrer' : undefined}
                onClick={() =>
                  trackEvent('click_contact_link', {
                    contact_label: contact.label,
                    contact_href: contact.href,
                  })
                }
                className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition-transform hover:-translate-y-0.5"
              >
                <contact.icon className="h-5 w-5 text-slate-900" />
                <p className="mt-4 text-sm font-semibold text-slate-700">{contact.label}</p>
                <div className="mt-2 flex items-center justify-between gap-4">
                  <p className="text-sm text-slate-600">{contact.value}</p>
                  <ArrowUpRight className="h-4 w-4 text-slate-400" />
                </div>
              </a>
            ))}
          </div>

          <div className="border-t border-slate-200 pt-6 text-sm text-slate-500">
            © 2026 Haegwon Lee. Built with React, TypeScript, and Tailwind CSS.
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

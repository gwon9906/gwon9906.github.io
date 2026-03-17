import { motion } from 'framer-motion';
import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';
import { useLanguage } from '../contexts/useLanguage';

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
      label: 'LinkedIn',
      value: t('추가 가능', 'Add if available'),
      href: '#',
      icon: Linkedin,
      disabled: true,
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
              {t('연락처는 짧고 명확하게', 'Contact kept short and direct')}
            </h2>
            <p className="text-base leading-7 text-slate-600">
              {t(
                '채용이나 협업 관련 문의는 이메일이 가장 빠릅니다. 프로젝트 근거는 GitHub에서 바로 확인할 수 있습니다.',
                'Email is the fastest way to reach me for hiring or collaboration. GitHub is the best place to verify implementation details.'
              )}
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {contacts.map((contact) => (
              contact.disabled ? (
                <div
                  key={contact.label}
                  className="rounded-3xl border border-dashed border-slate-300 bg-white p-5 text-slate-500"
                >
                  <contact.icon className="h-5 w-5" />
                  <p className="mt-4 text-sm font-semibold text-slate-700">{contact.label}</p>
                  <p className="mt-2 text-sm">{contact.value}</p>
                </div>
              ) : (
                <a
                  key={contact.label}
                  href={contact.href}
                  target={contact.href.startsWith('http') ? '_blank' : undefined}
                  rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition-transform hover:-translate-y-0.5"
                >
                  <contact.icon className="h-5 w-5 text-slate-900" />
                  <p className="mt-4 text-sm font-semibold text-slate-700">{contact.label}</p>
                  <div className="mt-2 flex items-center justify-between gap-4">
                    <p className="text-sm text-slate-600">{contact.value}</p>
                    <ArrowUpRight className="h-4 w-4 text-slate-400" />
                  </div>
                </a>
              )
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

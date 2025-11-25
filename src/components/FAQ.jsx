import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
    {
        question: "Est-ce légal d'embaucher un hacker en France ?",
        answer: "Oui, il est parfaitement légal d'embaucher un hacker éthique (White Hat) en France, à condition que les tests soient effectués avec l'autorisation écrite du propriétaire du système. La loi pour une République numérique du 7 octobre 2016 protège même les hackers éthiques qui signalent de bonne foi des vulnérabilités à l'ANSSI. Nous respectons scrupuleusement la loi Godfrain et toutes les réglementations françaises en matière de cybersécurité."
    },
    {
        question: "Quelle est la différence entre un hacker éthique et un pirate informatique ?",
        answer: "Un hacker éthique (White Hat) travaille avec l'autorisation du propriétaire pour identifier et corriger les failles de sécurité. Il agit dans un cadre légal strict et signe des contrats de confidentialité. Un pirate informatique (Black Hat) agit illégalement, sans autorisation, dans le but de voler des données ou causer des dommages. Nos experts sont des hackers éthiques certifiés (OSCP, CEH) qui protègent votre entreprise."
    },
    {
        question: "Combien coûte un test d'intrusion pour mon entreprise ?",
        answer: "Le coût d'un test d'intrusion varie selon plusieurs facteurs : la taille de votre infrastructure, le périmètre des tests (application web, réseau, mobile), et la profondeur de l'analyse souhaitée. En moyenne, un pentest d'application web simple démarre à partir de 3 000€, tandis qu'un audit complet d'infrastructure peut atteindre 15 000€ ou plus. Nous proposons un devis gratuit personnalisé après une analyse initiale de vos besoins."
    },
    {
        question: "Combien de temps dure un test d'intrusion ?",
        answer: "La durée d'un test d'intrusion dépend de la complexité de votre système. Un test simple d'application web prend généralement 3 à 5 jours ouvrables. Un pentest complet d'infrastructure réseau peut nécessiter 2 à 4 semaines. Nous établissons un planning détaillé lors de la phase de cadrage, incluant la reconnaissance, les tests actifs, l'analyse des résultats et la rédaction du rapport avec recommandations."
    },
    {
        question: "Risquez-vous d'endommager mon système pendant les tests ?",
        answer: "Nos experts utilisent des méthodologies éprouvées (OWASP, PTES) et des outils professionnels pour minimiser tout risque. Avant chaque intervention, nous établissons un plan de test détaillé et définissons des règles d'engagement claires. Les tests sont effectués dans des environnements contrôlés quand c'est possible. En cas de découverte d'une vulnérabilité critique, nous arrêtons immédiatement les tests et vous alertons pour éviter toute exploitation accidentelle."
    },
    {
        question: "Que se passe-t-il après la découverte de failles de sécurité ?",
        answer: "Après le test d'intrusion, vous recevez un rapport détaillé classant les vulnérabilités par niveau de criticité (critique, élevé, moyen, faible). Pour chaque faille, nous fournissons une description technique, une preuve de concept, l'impact potentiel et des recommandations de correction précises. Nous offrons également un support pour vous accompagner dans la mise en œuvre des correctifs et proposons un contre-audit gratuit pour vérifier l'efficacité des corrections."
    }
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <div className="bg-cyber-black py-16" id="faq">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold font-mono text-white mb-4">
                        QUESTIONS <span className="text-cyber-green">FRÉQUENTES</span>
                    </h2>
                    <p className="text-gray-400">
                        Tout ce que vous devez savoir avant d'embaucher un hacker éthique
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="bg-cyber-dark border border-white/10 rounded-lg overflow-hidden">
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                            >
                                <span className="text-white font-medium pr-4">{faq.question}</span>
                                <ChevronDown
                                    className={`w-5 h-5 text-cyber-green shrink-0 transition-transform ${openIndex === index ? 'rotate-180' : ''
                                        }`}
                                />
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="px-6 pb-4 text-gray-300 leading-relaxed border-t border-white/5 pt-4">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQ;

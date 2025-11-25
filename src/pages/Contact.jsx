import React from 'react';

const Contact = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-20 text-center">
            <h1 className="text-4xl font-bold font-mono mb-6">CONTACTEZ UN EXPERT</h1>
            <p className="text-gray-400 mb-8">
                Discutez de vos besoins en sécurité en toute confidentialité.
            </p>
            <div className="bg-cyber-dark p-8 rounded-xl max-w-md mx-auto border border-white/10">
                <p className="text-cyber-green font-mono">contact@whitehat.fr</p>
                <p className="text-gray-500 mt-2 text-sm">+33 1 23 45 67 89</p>
            </div>
        </div>
    );
};

export default Contact;

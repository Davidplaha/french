import React from 'react';
import { ShieldAlert } from 'lucide-react';

const LegalDisclaimer = () => {
    return (
        <div className="bg-cyber-dark border-t border-cyber-green/20 p-4 text-xs text-gray-400">
            <div className="max-w-7xl mx-auto flex items-start gap-3">
                <ShieldAlert className="w-5 h-5 text-cyber-green shrink-0" />
                <div>
                    <p className="font-bold text-cyber-green mb-1">AVERTISSEMENT LÉGAL & ÉTHIQUE</p>
                    <p>
                        Ce site propose des services de <strong>cybersécurité défensive</strong> et de <strong>hacking éthique</strong> dans le strict respect de la législation française (notamment la loi Godfrain et le RGPD).
                        Toute demande visant à pirater un système sans l'autorisation écrite et explicite de son propriétaire sera systématiquement rejetée et pourra faire l'objet d'un signalement aux autorités compétentes (ANSSI, Police Nationale).
                        Nous n'effectuons aucune activité illégale (espionnage, vol de données, sabotage).
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LegalDisclaimer;

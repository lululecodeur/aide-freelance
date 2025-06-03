'use client';

// Icons as simple SVG components
const Shield = ({ size = 24, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className={className}
  >
    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

const Zap = ({ size = 24, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className={className}
  >
    <polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2" />
  </svg>
);

const FileText = ({ size = 24, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className={className}
  >
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14,2 14,8 20,8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10,9 9,9 8,9" />
  </svg>
);

const Check = ({ size = 24, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className={className}
  >
    <polyline points="20,6 9,17 4,12" />
  </svg>
);

const Sparkles = ({ size = 24, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className={className}
  >
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
    <path d="M5 3v4" />
    <path d="M19 17v4" />
    <path d="M3 5h4" />
    <path d="M17 19h4" />
  </svg>
);

const Crown = ({ size = 24, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className={className}
  >
    <path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm0 16h20" />
  </svg>
);

export default function AcheterPage() {
  const features = [
    { icon: FileText, text: 'CGV personnalisées' },
    { icon: Shield, text: 'CGU conformes' },
    { icon: FileText, text: 'Mentions légales' },
    { icon: Shield, text: 'Politique RGPD' },
    { icon: FileText, text: 'Contrat freelance' },
  ];

  const benefits = [
    '✅ Conformité juridique garantie',
    '⚡ Génération instantanée par IA',
    '🔄 Accès illimité à vie',
    '📄 5 documents essentiels',
    '💼 Professionnalise ton activité',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      </div>

      <div className="relative z-10 min-h-screen flex flex-col justify-center px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-2 rounded-full text-sm font-medium mb-6 shadow-lg">
              <Crown size={16} />
              Pack Premium
            </div>

            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6 leading-tight">
              Débloquer le Pack Complet
            </h1>

            <p className="text-xl text-slate-700 mb-8 max-w-2xl mx-auto">
              Tous tes documents juridiques essentiels, générés par IA et conformes au droit
              français
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12 max-w-3xl mx-auto">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white/80 backdrop-blur-xl rounded-2xl p-4 shadow-lg border border-white/20"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center mb-3 mx-auto">
                    <IconComponent size={20} className="text-white" />
                  </div>
                  <p className="text-sm font-medium text-slate-700">{feature.text}</p>
                </div>
              );
            })}
          </div>

          {/* Price Card */}
          <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-8 mb-8 max-w-lg mx-auto">
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
                <Sparkles size={14} />
                Offre de lancement
              </div>

              <div className="mb-4">
                <span className="text-5xl font-bold text-slate-800">19,90€</span>
                <span className="text-slate-500 ml-2 line-through text-lg">49,90€</span>
              </div>

              <p className="text-slate-600 font-medium">Accès illimité à vie</p>
            </div>

            {/* Benefits List */}
            <div className="space-y-3 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3 text-slate-700">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                    <Check size={12} className="text-emerald-600" />
                  </div>
                  <span className="text-sm">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <a
              href="https://buy.stripe.com/8x2aEW1GXgPd0tUcQh6AM04"
              target="_blank"
              rel="noopener noreferrer"
              className="group block w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white py-4 px-8 rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-center justify-center gap-3">
                <Shield size={24} />
                Débloquer maintenant
                <Zap size={20} className="group-hover:scale-110 transition-transform" />
              </div>
            </a>
          </div>

          {/* Security badges */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-600">
            <div className="flex items-center gap-2">
              <Shield size={16} className="text-emerald-500" />
              <span>Paiement sécurisé Stripe</span>
            </div>
            <div className="flex items-center gap-2">
              <Check size={16} className="text-indigo-500" />
              <span>Documents modèles conformes</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap size={16} className="text-purple-500" />
              <span>Accès immédiat</span>
            </div>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 text-center">
            <p className="text-slate-500 text-sm mb-4">
              Rejoins les freelances qui sécurisent leur activité
            </p>
            <div className="flex justify-center items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-lg">
                  ⭐
                </span>
              ))}
              <span className="text-slate-600 ml-2 text-sm">
                Nouveau produit - Sois parmi les premiers !
              </span>
            </div>
          </div>

          {/* DISCLAIMER LÉGAL DISCRET */}
          <div className="mt-8 max-w-2xl mx-auto">
            <p className="text-xs text-slate-400 leading-relaxed text-center">
              ⚠️ Les documents générés sont des modèles indicatifs ne constituant pas un conseil
              juridique personnalisé. Il est recommandé de faire relire vos documents par un
              professionnel du droit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

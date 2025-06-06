'use client';
import { useRouter } from 'next/navigation';

// Icons as simple SVG components
const Rocket = ({ size = 24, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className={className}
  >
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
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
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
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

const Clock = ({ size = 24, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className={className}
  >
    <circle cx="12" cy="12" r="10" />
    <polyline points="12,6 12,12 16,14" />
  </svg>
);

const ArrowRight = ({ size = 24, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className={className}
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12,5 19,12 12,19" />
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

const Brain = ({ size = 24, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className={className}
  >
    <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
    <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
    <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" />
    <path d="M17.599 6.5a3 3 0 0 0 .399-1.375" />
    <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" />
    <path d="M3.477 10.896a4 4 0 0 1 .585-.396" />
    <path d="M19.938 10.5a4 4 0 0 1 .585.396" />
    <path d="M6 18a4 4 0 0 1-1.967-.516" />
    <path d="M19.967 17.484A4 4 0 0 1 18 18" />
  </svg>
);

const BookOpen = ({ size = 24, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className={className}
  >
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
  </svg>
);

const Users = ({ size = 24, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className={className}
  >
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

export default function Home() {
  const router = useRouter();

  const features = [
    {
      icon: FileText,
      title: 'CGV Personnalisées',
      description: 'Conditions générales de vente adaptées à ton activité',
      color: 'from-blue-500 to-indigo-500',
    },
    {
      icon: Shield,
      title: 'Modèles Conformes',
      description: 'Documents basés sur le droit français',
      color: 'from-emerald-500 to-teal-500',
    },
    {
      icon: Zap,
      title: 'Génération Rapide',
      description: 'Créé en quelques secondes par IA',
      color: 'from-purple-500 to-pink-500',
    },
  ];

  const processSteps = [
    {
      icon: Brain,
      title: 'IA Entraînée',
      description: 'Sur le droit français et des modèles juridiques validés',
      color: 'from-blue-500 to-indigo-500',
    },
    {
      icon: BookOpen,
      title: 'Sources Fiables',
      description: 'Basé sur des templates juridiques reconnus',
      color: 'from-emerald-500 to-teal-500',
    },
    {
      icon: FileText,
      title: 'Structure Conforme',
      description: 'Respecte les obligations légales françaises',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Users,
      title: 'Relecture Recommandée',
      description: 'Conseillons une validation par un professionnel',
      color: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-gradient-to-br from-green-400 to-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 animate-bounce delay-1000">
        <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full opacity-30"></div>
      </div>
      <div className="absolute top-40 right-20 animate-bounce delay-500">
        <div className="w-6 h-6 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full opacity-40"></div>
      </div>
      <div className="absolute bottom-40 left-20 animate-bounce delay-700">
        <div className="w-4 h-4 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full opacity-50"></div>
      </div>

      <div className="relative z-10 min-h-screen flex flex-col justify-center items-center px-4 text-center">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto mb-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-medium mb-8 shadow-lg animate-pulse">
            <Sparkles size={16} />
            Propulsé par l&apos;IA
          </div>

          {/* Main Title */}
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight">
            Pack Freelance Juridique
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-slate-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Génère automatiquement tes{' '}
            <span className="font-semibold text-indigo-600">CGV, contrats, mentions légales</span>{' '}
            et plus, en quelques clics
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-12 text-slate-600">
            <div className="flex items-center gap-2">
              <Clock size={20} className="text-indigo-500" />
              <span className="font-medium">Moins de 30 secondes</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield size={20} className="text-emerald-500" />
              <span className="font-medium">Modèles conformes</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap size={20} className="text-purple-500" />
              <span className="font-medium">Alimenté par l&apos;IA</span>
            </div>
          </div>

          {/* CTA Button */}
          <button
            onClick={() => router.push('/generer')}
            className="group bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 rounded-2xl text-lg font-semibold shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 mb-16"
          >
            <div className="flex items-center gap-3">
              <Rocket size={24} />
              Commencer maintenant
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </button>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/20 hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg`}
                >
                  <IconComponent size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* How it Works Section */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl border border-white/20 p-8 max-w-6xl mx-auto mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Comment ça marche ?
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Notre IA génère des documents juridiques fiables en s&apos;appuyant sur des sources
              reconnues
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="text-center">
                  <div className="relative mb-4">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center mx-auto shadow-lg`}
                    >
                      <IconComponent size={32} className="text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-slate-800 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">{step.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <p className="text-slate-600 mb-4">Prêt à professionnaliser ton activité freelance ?</p>
          <button
            onClick={() => router.push('/generer')}
            className="text-indigo-600 hover:text-indigo-700 font-semibold hover:underline transition-colors"
          >
            C&apos;est parti ! →
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

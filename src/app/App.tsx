import { motion } from "motion/react";
import logo from "../assets/images/logo.png";
import cabanas1 from "../assets/images/cabanas-1.png";
import cabanasPortada from "../assets/images/cabanas-portada.png";
import cabanasCalendario from "../assets/images/cabanas-calendario.png";
import cabanasGastos from "../assets/images/cabanas-gastos.png";
import coaching1 from "../assets/images/coaching-1.png";
import coaching2 from "../assets/images/coaching-2.png";
import coaching3 from "../assets/images/coaching-3.png";
import {
  Code2,
  ShoppingCart,
  Calendar,
  Layers,
  Zap,
  Wrench,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  TrendingUp,
  Clock,
  Shield,
  ChevronDown,
  Mail,
  MapPin,
  Instagram,
  MonitorSmartphone,
  Settings,
  MessageCircle,
  Menu,
  X,
  Home,
  LayoutGrid,
  FolderOpen,
  Star,
  Users,
  HelpCircle,
  Phone,
  Send,
  Store,
} from "lucide-react";
import { useState, useEffect, useRef, type ElementType } from "react";
import {
  SiFirebase,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiShopify,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVite,
  SiWordpress,
} from "react-icons/si";

function CountUp({
  end,
  suffix = "",
  duration = 1600,
}: {
  end: number;
  suffix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (started.current) return;
    started.current = true;
    let startTime: number | null = null;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(animate);
      else setCount(end);
    };
    requestAnimationFrame(animate);
  }, [end, duration]);

  return (
    <>
      {count}
      {suffix}
    </>
  );
}

function ProjectImageSlider({
  images,
  alt,
}: {
  images: string[];
  alt: string;
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 2200);
    return () => window.clearInterval(intervalId);
  }, [images.length]);

  return (
    <div className="relative h-52 sm:h-56 md:h-60 rounded-xl overflow-hidden border border-white/10 mb-6 bg-[#0a0a0f]">
      {images.map((src, index) => (
        <img
          key={`${alt}-${index}`}
          src={src}
          alt={alt}
          loading="lazy"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
            index === activeIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <div className="absolute bottom-3 right-3 text-xs px-2 py-1 rounded-full bg-black/60 border border-white/15 text-white/90">
        {activeIndex + 1}/{images.length}
      </div>
    </div>
  );
}

import { AnimatedBackground } from "./components/AnimatedBackground";
import { Button } from "./components/Button";
import { GlassCard } from "./components/GlassCard";
import { SectionContainer } from "./components/SectionContainer";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";
import { SEOHead } from "./components/SEOHead";

const WHATSAPP_URL = "https://wa.me/5492644457616";
const CONTACT_EMAIL = "contacto.francodestudio@gmail.com";
const NAV_ITEMS = [
  { id: "inicio", label: "Inicio", icon: Home },
  { id: "servicios", label: "Servicios", icon: LayoutGrid },
  { id: "proyectos", label: "Proyectos", icon: FolderOpen },
  { id: "beneficios", label: "Beneficios", icon: Star },
  { id: "testimonios", label: "Testimonios", icon: Users },
  { id: "faq", label: "FAQ", icon: HelpCircle },
  { id: "contacto", label: "Contacto", icon: Phone },
] as const;

const SERVICES = [
  {
    icon: Code2,
    title: "Landing Pages Profesionales",
    description:
      "Páginas optimizadas para convertir visitantes en clientes con diseño moderno y carga ultrarrápida.",
    color: "#00d9ff",
  },
  {
    icon: ShoppingCart,
    title: "Tiendas Online y E-commerce",
    description:
      "Plataformas de venta online completas con pagos integrados, catálogo claro y gestión de inventario.",
    color: "#ff6b35",
  },
  {
    icon: Calendar,
    title: "Sistemas de Reservas y Gestión",
    description:
      "Automatización de reservas, turnos y citas con notificaciones, recordatorios y control operativo.",
    color: "#8b5cf6",
  },
  {
    icon: Layers,
    title: "Web Apps a Medida",
    description:
      "Aplicaciones web personalizadas que se adaptan a los procesos, objetivos y crecimiento de cada negocio.",
    color: "#10b981",
  },
  {
    icon: Zap,
    title: "Optimización SEO y Velocidad",
    description:
      "Mejoras técnicas y de contenido para ganar visibilidad en Google y ofrecer una experiencia más rápida.",
    color: "#f59e0b",
  },
  {
    icon: Wrench,
    title: "Mantenimiento y Soporte",
    description:
      "Actualizaciones continuas, soporte técnico y mejoras constantes para mantener la web en buen estado.",
    color: "#ec4899",
  },
] as const;

const BENEFITS = [
  "Diseños modernos y personalizados",
  "Código limpio y escalable",
  "Optimización para conversiones",
  "Soporte técnico continuo",
  "Entrega rápida y comunicación constante",
] as const;

const PROJECTS = [
  {
    title: "Reservas La Medalla",
    description:
      "Sistema integral de gestión de reservas, inventario y gastos para alojamientos. Incluye panel de calendario, control financiero y operación diaria en un solo lugar.",
    tech: ["React", "Node.js", "Firebase", "Dashboard"],
    images: [cabanasPortada, cabanasCalendario, cabanasGastos, cabanas1],
  },
  {
    title: "Landing de Coaching Profesional",
    description:
      "Landing orientada a conversión para servicios de coaching. Diseño premium, secciones de autoridad, testimonios y CTA claros para captar clientes.",
    tech: ["Next.js", "TailwindCSS", "SEO", "Copywriting"],
    images: [coaching1, coaching2, coaching3],
  },
] as const;

const TESTIMONIALS = [
  {
    name: "María González",
    role: "Dueña de Cabañas del Valle",
    text: "El sistema de reservas cambió completamente nuestro negocio. Ahora recibimos reservas las 24 horas y ya no perdemos clientes. La inversión se recuperó en 2 meses.",
    rating: 5,
  },
  {
    name: "Carlos Rodríguez",
    role: "Comerciante",
    text: "Mi tienda online superó todas las expectativas. El diseño es profesional, fácil de usar y las ventas aumentaron un 200%. Excelente trabajo y soporte.",
    rating: 5,
  },
  {
    name: "Laura Martínez",
    role: "Emprendedora",
    text: "Necesitaba automatizar mi negocio y FranCode Studio creó la solución perfecta. Ahorro 15 horas semanales y tengo todo bajo control desde mi celular.",
    rating: 5,
  },
] as const;

const FAQS = [
  {
    question: "¿Cuánto tarda el desarrollo de una web?",
    answer:
      "El tiempo depende de la complejidad del proyecto. Una landing page profesional tarda entre 1 y 2 semanas, mientras que un e-commerce o sistema personalizado puede tomar de 3 a 6 semanas. Siempre trabajamos con un cronograma claro desde el inicio.",
  },
  {
    question: "¿Incluye hosting y dominio?",
    answer:
      "Te asesoramos en la contratación de hosting y dominio, y nos encargamos de toda la configuración técnica. Trabajamos con proveedores confiables para garantizar rendimiento y seguridad.",
  },
  {
    question: "¿Se puede administrar desde el celular?",
    answer:
      "Sí. Todos los desarrollos son responsive y optimizados para dispositivos móviles. Los paneles de administración se diseñan para que puedas gestionar tu negocio desde cualquier lugar.",
  },
  {
    question: "¿Se puede agregar un sistema de reservas?",
    answer:
      "Sí, desarrollamos sistemas de reservas completos con calendario, notificaciones automáticas, confirmación de pago y recordatorios. Son ideales para cabañas, restaurantes, profesionales y servicios.",
  },
  {
    question: "¿Trabajan con pagos online?",
    answer:
      "Sí, integramos plataformas como Shopify, Tiendanube y otras alternativas según la necesidad del negocio. Dejamos la venta online configurada para operar de forma segura y automática.",
  },
] as const;

export default function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [formSent, setFormSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hola! Me contacto desde tu web.\n\nNombre: ${formData.name}\nEmail: ${formData.email}\nTeléfono: ${formData.phone}\nServicio: ${formData.service}\nMensaje: ${formData.message}`;
    window.open(`${WHATSAPP_URL}?text=${encodeURIComponent(text)}`, "_blank");
    setFormSent(true);
  };

  useEffect(() => {
    // Reemplazá TU_PROPERTY_ID con el ID de tu cuenta en tawk.to (https://tawk.to)
    const TAWK_ID = "TU_PROPERTY_ID";
    if (TAWK_ID === "TU_PROPERTY_ID") return;
    const s1 = document.createElement("script");
    s1.async = true;
    s1.src = `https://embed.tawk.to/${TAWK_ID}/default`;
    s1.charset = "UTF-8";
    s1.setAttribute("crossorigin", "*");
    document.head.appendChild(s1);
    return () => {
      document.head.removeChild(s1);
    };
  }, []);

  const technologies: Array<{
    name: string;
    color: string;
    icon: ElementType;
  }> = [
    { name: "React", color: "#61DAFB", icon: SiReact },
    { name: "TypeScript", color: "#3178C6", icon: SiTypescript },
    { name: "Next.js", color: "#e2e8f0", icon: SiNextdotjs },
    { name: "Node.js", color: "#68A063", icon: SiNodedotjs },
    { name: "TailwindCSS", color: "#06B6D4", icon: SiTailwindcss },
    { name: "Firebase", color: "#FFCA28", icon: SiFirebase },
    { name: "MongoDB", color: "#47A248", icon: SiMongodb },
    { name: "Supabase", color: "#3ECF8E", icon: SiSupabase },
    { name: "Shopify", color: "#95BF47", icon: SiShopify },
    { name: "Tiendanube", color: "#2D6CDF", icon: Store },
    { name: "WordPress", color: "#21759B", icon: SiWordpress },
    { name: "Vite", color: "#BD34FE", icon: SiVite },
  ];

  const projectTechIcons: Record<string, ElementType> = {
    React: SiReact,
    "Node.js": SiNodedotjs,
    Firebase: SiFirebase,
    Dashboard: LayoutGrid,
    "Next.js": SiNextdotjs,
    TailwindCSS: SiTailwindcss,
    Shopify: SiShopify,
    Tiendanube: Store,
    SEO: TrendingUp,
    Copywriting: Sparkles,
  };

  return (
    <div className="min-h-screen relative text-white overflow-x-hidden">
      <AnimatedBackground />
      <SEOHead
        faqs={FAQS.map((faq) => ({ ...faq }))}
        projects={PROJECTS.map((project) => ({
          title: project.title,
          description: project.description,
        }))}
        services={SERVICES.map((service) => service.title)}
      />
      <a
        href="#contenido-principal"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-lg focus:bg-[#00d9ff] focus:px-4 focus:py-2 focus:text-[#0a0a0f]"
      >
        Saltar al contenido principal
      </a>

      {/* Navbar */}
      <motion.nav
        aria-label="Navegación principal"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-40 backdrop-blur-xl bg-[#0a0a0f]/80 border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-3 md:py-4 flex items-center justify-between">
          <motion.div
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={logo}
              alt="FranCode Studio"
              className="h-28 w-auto object-contain"
            />
          </motion.div>

          <div className="hidden lg:flex items-center gap-6">
            {NAV_ITEMS.map(({ id, label, icon: Icon }) => (
              <a
                key={id}
                href={`#${id}`}
                className="flex items-center gap-1.5 text-base font-medium hover:text-[#00d9ff] transition-colors duration-300 group"
              >
                <Icon className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" />
                {label}
              </a>
            ))}
            <Button
              variant="primary"
              href="#contacto"
              className="text-sm inline-flex items-center gap-2 !px-4 !py-2"
            >
              <Send className="w-4 h-4" />
              Solicitar presupuesto
            </Button>
          </div>

          <button
            type="button"
            aria-label="Abrir menú"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="lg:hidden w-10 h-10 rounded-lg border border-white/20 bg-white/5 flex items-center justify-center"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-white/10 bg-[#0a0a0f]/95 px-4 sm:px-6 pb-5 pt-3">
            <div className="flex flex-col gap-2">
              {NAV_ITEMS.map(({ id, label, icon: Icon }) => (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 text-left px-3 py-2.5 rounded-lg text-base font-medium hover:bg-white/10 hover:text-[#00d9ff] transition-colors"
                >
                  <Icon className="w-5 h-5 opacity-70" />
                  {label}
                </a>
              ))}
              <Button
                variant="primary"
                href="#contacto"
                className="mt-2 w-full flex items-center justify-center gap-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Send className="w-4 h-4" />
                Solicitar presupuesto
              </Button>
            </div>
          </div>
        )}
      </motion.nav>

      <main id="contenido-principal">
        {/* Hero Section */}
        <SectionContainer
          id="inicio"
          className="pt-24 sm:pt-32 md:pt-40 pb-16 md:pb-20"
        >
          <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-[#00d9ff]/10 border border-[#00d9ff]/30 mb-5 sm:mb-6"
              >
                <Sparkles className="w-4 h-4 text-[#00d9ff]" />
                <span className="text-xs sm:text-sm text-[#00d9ff]">
                  Desarrollo Web Premium
                </span>
              </motion.div>

              <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-5xl lg:text-6xl leading-tight mb-5 sm:mb-6 text-balance">
                Creamos sitios web y{" "}
                <span className="bg-gradient-to-r from-[#00d9ff] to-[#00a8cc] bg-clip-text text-transparent">
                  sistemas a medida
                </span>{" "}
                para negocios que quieren crecer
              </h1>

              <p className="text-base sm:text-xl text-gray-300 mb-7 sm:mb-8 leading-relaxed max-w-xl">
                Diseñamos y desarrollamos sitios web, tiendas online y sistemas
                a medida para negocios de Argentina que necesitan vender más,
                posicionarse mejor en Google y automatizar procesos.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button
                  variant="primary"
                  href="#contacto"
                  className="w-full sm:w-auto"
                >
                  Solicitar presupuesto
                  <ArrowRight className="w-5 h-5" />
                </Button>
                <Button
                  variant="outline"
                  href="#proyectos"
                  className="w-full sm:w-auto"
                >
                  Ver proyectos
                </Button>
              </div>

              <div className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                {[
                  { end: 50, suffix: "+", label: "Proyectos" },
                  { end: 100, suffix: "%", label: "Satisfacción" },
                  { end: 24, suffix: "/7", label: "Soporte" },
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className="rounded-xl border border-white/10 bg-white/5 p-4 sm:p-0 sm:border-0 sm:bg-transparent"
                  >
                    <div className="font-display font-bold text-2xl sm:text-3xl text-[#00d9ff]">
                      <CountUp end={stat.end} suffix={stat.suffix} />
                    </div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl p-5 sm:p-8">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00d9ff] via-[#ff6b35] to-[#8b5cf6]" />

                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-4 bg-white/5 rounded-lg border border-white/10">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#00d9ff] to-[#00a8cc] rounded-lg flex items-center justify-center">
                      <MonitorSmartphone className="w-6 h-6 text-[#0a0a0f]" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm sm:text-base">
                        Diseño Responsive
                      </div>
                      <div className="text-sm text-gray-400">
                        Adaptado a todos los dispositivos
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-4 bg-white/5 rounded-lg border border-white/10">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#ff6b35] to-[#ff8c42] rounded-lg flex items-center justify-center">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm sm:text-base">
                        Optimización SEO
                      </div>
                      <div className="text-sm text-gray-400">
                        Mayor visibilidad en buscadores
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-4 bg-white/5 rounded-lg border border-white/10">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#8b5cf6] to-[#a78bfa] rounded-lg flex items-center justify-center">
                      <Settings className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm sm:text-base">
                        Panel de Administración
                      </div>
                      <div className="text-sm text-gray-400">
                        Control total del contenido
                      </div>
                    </div>
                  </div>
                </div>

                <motion.div
                  className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#00d9ff]/20 rounded-full blur-3xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>
            </motion.div>
          </div>
        </SectionContainer>

        {/* Technologies Section */}
        <section
          aria-labelledby="tecnologias-title"
          className="py-12 border-y border-white/5"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
            <h2 id="tecnologias-title" className="sr-only">
              Tecnologías para desarrollo web y sistemas a medida
            </h2>
            <p className="text-center text-xs sm:text-sm text-gray-500 uppercase tracking-widest mb-8">
              Tecnologías con las que trabajo
            </p>
            <div className="tech-marquee-wrap">
              <div className="tech-marquee-track" aria-hidden="true">
                {technologies.concat(technologies).map((tech, i) => {
                  const Icon = tech.icon;
                  return (
                    <div
                      key={`${tech.name}-${i}`}
                      className="tech-pill"
                      style={{
                        color: tech.color,
                        borderColor: `${tech.color}40`,
                        backgroundColor: `${tech.color}12`,
                      }}
                    >
                      <Icon className="tech-pill-icon" aria-hidden="true" />
                      {tech.name}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <SectionContainer
          id="servicios"
          className="bg-gradient-to-b from-transparent via-[#00d9ff]/5 to-transparent"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-6xl mb-4">
              Nuestros <span className="text-[#00d9ff]">Servicios</span>
            </h2>
            <p className="text-base sm:text-xl text-gray-300 max-w-2xl mx-auto">
              Soluciones digitales orientadas a ventas, rendimiento y
              visibilidad orgánica en buscadores.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service, i) => (
              <GlassCard key={service.title} delay={i * 0.1}>
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                  style={{
                    background: `linear-gradient(135deg, ${service.color}40, ${service.color}20)`,
                  }}
                >
                  <service.icon
                    className="w-7 h-7"
                    style={{ color: service.color }}
                  />
                </div>
                <h3 className="font-display font-semibold text-xl mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </GlassCard>
            ))}
          </div>
        </SectionContainer>

        {/* Benefits Section */}
        <SectionContainer id="beneficios">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl mb-6">
                ¿Por qué elegir{" "}
                <span className="text-[#00d9ff]">FranCode Studio</span>?
              </h2>
              <p className="text-base sm:text-xl text-gray-300 mb-8">
                Combinamos tecnología de vanguardia con un enfoque centrado en
                resultados para hacer crecer tu negocio.
              </p>

              <div className="space-y-4">
                {BENEFITS.map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="w-6 h-6 text-[#00d9ff] flex-shrink-0" />
                    <span className="text-base sm:text-lg">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <GlassCard>
                <div className="space-y-6">
                  {[
                    {
                      icon: TrendingUp,
                      label: "Crecimiento",
                      value: "+150%",
                      color: "#00d9ff",
                    },
                    {
                      icon: Clock,
                      label: "Ahorro de tiempo",
                      value: "+70%",
                      color: "#ff6b35",
                    },
                    {
                      icon: Shield,
                      label: "Seguridad",
                      value: "100%",
                      color: "#8b5cf6",
                    },
                    {
                      icon: Sparkles,
                      label: "Satisfacción",
                      value: "100%",
                      color: "#10b981",
                    },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10"
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className="w-12 h-12 rounded-lg flex items-center justify-center"
                          style={{
                            background: `linear-gradient(135deg, ${stat.color}40, ${stat.color}20)`,
                          }}
                        >
                          <stat.icon
                            className="w-6 h-6"
                            style={{ color: stat.color }}
                          />
                        </div>
                        <span className="font-medium">{stat.label}</span>
                      </div>
                      <span
                        className="font-display font-bold text-2xl"
                        style={{ color: stat.color }}
                      >
                        {stat.value}
                      </span>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </SectionContainer>

        {/* Projects Section */}
        <SectionContainer
          id="proyectos"
          className="bg-gradient-to-b from-transparent via-[#ff6b35]/5 to-transparent"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-6xl mb-4">
              Proyectos <span className="text-[#ff6b35]">Destacados</span>
            </h2>
            <p className="text-base sm:text-xl text-gray-300 max-w-2xl mx-auto">
              Casos reales de desarrollo web y automatización que mejoraron
              procesos, reservas y conversiones.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {PROJECTS.map((project, i) => (
              <GlassCard key={project.title} delay={i * 0.15}>
                <ProjectImageSlider
                  images={project.images}
                  alt={project.title}
                />
                <h3 className="font-display font-semibold text-xl mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => {
                    const TechIcon = projectTechIcons[tech] ?? Code2;
                    return (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs rounded-full bg-[#00d9ff]/10 text-[#00d9ff] border border-[#00d9ff]/30 inline-flex items-center gap-1.5"
                      >
                        <TechIcon className="w-3.5 h-3.5" aria-hidden="true" />
                        {tech}
                      </span>
                    );
                  })}
                </div>
              </GlassCard>
            ))}
          </div>
        </SectionContainer>

        {/* Testimonials Section */}
        <SectionContainer id="testimonios">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-6xl mb-4">
              Lo que dicen nuestros{" "}
              <span className="text-[#00d9ff]">clientes</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial, i) => (
              <GlassCard key={testimonial.name} delay={i * 0.1}>
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-[#f59e0b] text-xl">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#00d9ff] to-[#00a8cc] flex items-center justify-center font-display font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </SectionContainer>

        {/* FAQ Section */}
        <SectionContainer
          id="faq"
          className="bg-gradient-to-b from-transparent via-[#8b5cf6]/5 to-transparent"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-6xl mb-4">
              Preguntas <span className="text-[#8b5cf6]">Frecuentes</span>
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {FAQS.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <button
                  type="button"
                  aria-expanded={openFaq === i}
                  aria-controls={`faq-answer-${i}`}
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left p-4 sm:p-6 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-display font-semibold text-base sm:text-lg pr-5 sm:pr-8">
                      {faq.question}
                    </h3>
                    <motion.div
                      animate={{ rotate: openFaq === i ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="w-6 h-6 text-[#00d9ff]" />
                    </motion.div>
                  </div>
                  <motion.div
                    id={`faq-answer-${i}`}
                    initial={false}
                    animate={{
                      height: openFaq === i ? "auto" : 0,
                      opacity: openFaq === i ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="text-gray-400 mt-4 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                </button>
              </motion.div>
            ))}
          </div>
        </SectionContainer>

        {/* Final CTA Section */}
        <SectionContainer id="contacto">
          <GlassCard className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-6xl mb-6">
                ¿Listo para llevar tu negocio al{" "}
                <span className="text-[#00d9ff]">siguiente nivel</span>?
              </h2>
              <p className="text-base sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Pedí tu presupuesto hoy y creamos una solución digital
                profesional enfocada en posicionamiento, conversión y
                automatización.
              </p>
              <Button
                variant="secondary"
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                ariaLabel="Contactar por WhatsApp a FranCode Studio"
                className="text-base sm:text-lg px-6 sm:px-10 py-4 sm:py-5 w-full sm:w-auto"
              >
                Contactar por WhatsApp
                <ArrowRight className="w-6 h-6" />
              </Button>
              <p className="mt-6 text-sm sm:text-base text-gray-400">
                También podés escribir a{" "}
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-[#00d9ff] hover:underline"
                >
                  {CONTACT_EMAIL}
                </a>{" "}
                o consultar desde San Juan, Argentina, para proyectos en todo el
                país.
              </p>
            </motion.div>
          </GlassCard>
        </SectionContainer>
      </main>

      {/* Footer */}
      <footer className="relative py-12 px-4 sm:px-6 md:px-12 border-t border-white/10 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center mb-4">
                <img
                  src={logo}
                  alt="FranCode Studio"
                  className="h-32 w-auto object-contain"
                />
              </div>
              <p className="text-gray-400">
                Desarrollo web profesional para negocios que quieren crecer
              </p>
            </div>

            <div>
              <h4 className="font-display font-semibold mb-4">Contacto</h4>
              <div className="space-y-3 text-gray-400">
                <a
                  href={WHATSAPP_URL}
                  aria-label="Abrir contacto por WhatsApp"
                  className="flex items-center gap-2 hover:text-[#00d9ff] transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  aria-label="Enviar correo a FranCode Studio"
                  className="flex items-center gap-2 hover:text-[#00d9ff] transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  {CONTACT_EMAIL}
                </a>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  San Juan, Argentina
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-display font-semibold mb-4">Servicios</h4>
              <div className="space-y-2 text-gray-400">
                <a
                  href="#servicios"
                  className="block hover:text-[#00d9ff] transition-colors"
                >
                  Landing Pages
                </a>
                <a
                  href="#servicios"
                  className="block hover:text-[#00d9ff] transition-colors"
                >
                  E-commerce
                </a>
                <a
                  href="#servicios"
                  className="block hover:text-[#00d9ff] transition-colors"
                >
                  Sistemas de Reservas
                </a>
                <a
                  href="#servicios"
                  className="block hover:text-[#00d9ff] transition-colors"
                >
                  Web Apps
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-display font-semibold mb-4">Síguenos</h4>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/francodestudio/"
                  target="_blank"
                  rel="me noopener noreferrer"
                  aria-label="Instagram de FranCode Studio"
                  className="w-10 h-10 rounded-lg bg-white/5 hover:bg-[#00d9ff]/20 border border-white/10 flex items-center justify-center hover:border-[#00d9ff]/50 transition-all duration-300"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://www.tiktok.com/@francodestudio"
                  target="_blank"
                  rel="me noopener noreferrer"
                  aria-label="TikTok de FranCode Studio"
                  className="w-10 h-10 rounded-lg bg-white/5 hover:bg-[#00d9ff]/20 border border-white/10 flex items-center justify-center hover:border-[#00d9ff]/50 transition-all duration-300"
                >
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.95a8.17 8.17 0 0 0 4.78 1.52V7.03a4.85 4.85 0 0 1-1.01-.34z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} FranCode Studio. Todos los
              derechos reservados.
            </p>
          </div>
        </div>
      </footer>

      <FloatingWhatsApp />
    </div>
  );
}

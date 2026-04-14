import { useEffect } from "react";

const SITE_NAME = "FranCode Studio";
const SITE_TITLE =
  "FranCode Studio | Desarrollo web, landing pages y sistemas a medida";
const SITE_DESCRIPTION =
  "Desarrollo de landing pages, tiendas online, sistemas de reservas y web apps a medida para negocios que quieren crecer con una presencia digital rápida, profesional y optimizada para buscadores.";
const CONTACT_EMAIL = "contacto.francodestudio@gmail.com";
const CONTACT_PHONE = "+54 9 264 445 7616";
const SAME_AS = [
  "https://www.instagram.com/francodestudio/",
  "https://www.tiktok.com/@francodestudio",
];

type SEOHeadProps = {
  faqs: Array<{ question: string; answer: string }>;
  services: string[];
  projects: Array<{ title: string; description: string }>;
};

function upsertMeta(
  attribute: "name" | "property",
  value: string,
  content: string,
) {
  let meta = document.head.querySelector<HTMLMetaElement>(
    `meta[${attribute}="${value}"]`,
  );

  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute(attribute, value);
    document.head.appendChild(meta);
  }

  meta.setAttribute("content", content);
}

function upsertCanonical(url: string) {
  let link = document.head.querySelector<HTMLLinkElement>(
    'link[rel="canonical"]',
  );

  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }

  link.setAttribute("href", url);
}

function upsertStructuredData(data: Record<string, unknown>) {
  const scriptId = "seo-structured-data";
  let script = document.getElementById(scriptId) as HTMLScriptElement | null;

  if (!script) {
    script = document.createElement("script");
    script.id = scriptId;
    script.type = "application/ld+json";
    document.head.appendChild(script);
  }

  script.textContent = JSON.stringify(data);
}

export function SEOHead({ faqs, services, projects }: SEOHeadProps) {
  useEffect(() => {
    const pageUrl = window.location.href.split("#")[0];

    document.documentElement.lang = "es-AR";
    document.title = SITE_TITLE;

    upsertCanonical(pageUrl);
    upsertMeta("name", "description", SITE_DESCRIPTION);
    upsertMeta(
      "name",
      "robots",
      "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1",
    );
    upsertMeta("name", "author", SITE_NAME);
    upsertMeta(
      "name",
      "keywords",
      "desarrollo web, landing pages, diseño web, SEO, tiendas online, sistemas de reservas, web apps, San Juan, Argentina",
    );
    upsertMeta("name", "theme-color", "#0a0a0f");
    upsertMeta("property", "og:locale", "es_AR");
    upsertMeta("property", "og:type", "website");
    upsertMeta("property", "og:title", SITE_TITLE);
    upsertMeta("property", "og:description", SITE_DESCRIPTION);
    upsertMeta("property", "og:site_name", SITE_NAME);
    upsertMeta("property", "og:url", pageUrl);
    upsertMeta("name", "twitter:card", "summary");
    upsertMeta("name", "twitter:title", SITE_TITLE);
    upsertMeta("name", "twitter:description", SITE_DESCRIPTION);

    upsertStructuredData({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "ProfessionalService",
          "@id": `${pageUrl}#professional-service`,
          name: SITE_NAME,
          description: SITE_DESCRIPTION,
          url: pageUrl,
          email: CONTACT_EMAIL,
          telephone: CONTACT_PHONE,
          areaServed: [
            { "@type": "Country", name: "Argentina" },
            { "@type": "City", name: "San Juan" },
          ],
          address: {
            "@type": "PostalAddress",
            addressLocality: "San Juan",
            addressCountry: "AR",
          },
          sameAs: SAME_AS,
          knowsAbout: services,
          makesOffer: services.map((service) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: service,
            },
          })),
        },
        {
          "@type": "WebSite",
          "@id": `${pageUrl}#website`,
          url: pageUrl,
          name: SITE_NAME,
          inLanguage: "es-AR",
          description: SITE_DESCRIPTION,
        },
        {
          "@type": "WebPage",
          "@id": `${pageUrl}#webpage`,
          url: pageUrl,
          name: SITE_TITLE,
          description: SITE_DESCRIPTION,
          isPartOf: { "@id": `${pageUrl}#website` },
          about: projects.map((project) => ({
            "@type": "CreativeWork",
            name: project.title,
            description: project.description,
          })),
          inLanguage: "es-AR",
        },
        {
          "@type": "FAQPage",
          "@id": `${pageUrl}#faq`,
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        },
      ],
    });
  }, [faqs, projects, services]);

  return null;
}

import { Link, useLocation } from "react-router-dom";
import { footerTrustLinks, siteMeta } from "../data/sharedSiteData.js";

function renderSectionHref(pathname, href) {
  return pathname === "/" ? href : `/${href}`;
}

function resolvePlanningTopic(pathname, footerServiceAreas, selectedPlanningTopic) {
  if (selectedPlanningTopic) {
    return selectedPlanningTopic;
  }

  const matchedArea = footerServiceAreas.find((item) => item.to !== "/sehirler" && pathname.startsWith(item.to));
  if (matchedArea) {
    return matchedArea.label;
  }

  if (pathname.startsWith("/sehirler")) {
    return "şehirlerarası nakliyat";
  }

  return "";
}

export default function Footer({ sectionLinks, pageLinks, contactInfo, contactMeta, footerServiceAreas }) {
  const location = useLocation();
  const planningTopic = resolvePlanningTopic(location.pathname, footerServiceAreas, location.state?.selectedPlanningTopic);
  const whatsappMessage = planningTopic
    ? `Merhaba, ${planningTopic} için nakliyat planlaması yapmak istiyorum.`
    : "Merhaba, nakliyat için planlama yapmak istiyorum.";
  const whatsappHref = `https://wa.me/${contactInfo.whatsappRaw}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <>
      <footer className="site-footer">
        <div className="section-shell footer-layout">
          <div className="footer-column">
            <img className="footer-logo" src={siteMeta.logoPath} alt="AZR Evden Eve Nakliyat logosu" width="280" height="184" loading="lazy" decoding="async" />
            <span className="footer-kicker">Kayseri'den çıkan düzenli taşıma operasyonları</span>
            <div className="footer-brand">AZR Evden Eve Nakliyat</div>
            <p className="footer-text">
              Ev taşıma, ofis taşıma, asansörlü sistem ve şehirlerarası nakliyatta saha planını öne alan daha görünür bir hizmet akışı sunuyoruz.
            </p>
            <div className="footer-contact-list">
              <a href={`tel:+${contactInfo.callRaw}`}>{contactInfo.callDisplay}</a>
              <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
              <span>{contactMeta.addressLine}</span>
              <span>{contactMeta.hours}</span>
            </div>
            <p className="footer-note">Kat bilgisi, bina erişimi ve teslim sırası netleşmeden süreci başlatmıyoruz.</p>
          </div>

          <div className="footer-column">
            <strong className="footer-heading">Sayfalar</strong>
            <div className="footer-links">
              {sectionLinks.map((link) => (
                <a key={link.href} href={renderSectionHref(location.pathname, link.href)}>
                  {link.label}
                </a>
              ))}
              {pageLinks.map((link) => (
                <Link key={link.to} to={link.to}>
                  {link.label}
                </Link>
              ))}
            </div>
            <strong className="footer-heading">Kurumsal</strong>
            <div className="footer-links">
              {footerTrustLinks.map((link) => (
                <Link key={link.to} to={link.to}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="footer-column">
            <strong className="footer-heading">Hizmet Alanı</strong>
            <div className="footer-chip-grid">
              {footerServiceAreas.map((item) => (
                <Link key={item.to} to={item.to} state={{ selectedPlanningTopic: item.label }} className="footer-chip footer-chip-link">
                  {item.label}
                </Link>
              ))}
            </div>
            <a className="footer-whatsapp" href={whatsappHref} target="_blank" rel="noreferrer">
              WhatsApp ile planlama yap
            </a>
          </div>
        </div>
        <div className="section-shell footer-credit">
          <div className="footer-credit-inner">
            <span>© 2026 AZR Evden Eve Nakliyat. Tüm hakları saklıdır.</span>
            <a className="software-credit" href="https://barbarossoft.com.tr/" target="_blank" rel="noreferrer" aria-label="BarbarosSoft web sitesine git">
              <span className="software-credit-code" aria-hidden="true">
                &lt;/&gt;
              </span>
              <span>Software:</span>
              <span className="software-credit-badge">BarbarosSoft</span>
            </a>
          </div>
        </div>
      </footer>

      <div className="floating-cta-stack" aria-label="Hızlı iletişim kısayolları">
        <a className="floating-call" href={`tel:+${contactInfo.callRaw}`} aria-label="Doğrudan arama yap">
          Ara
        </a>
        <a className="floating-whatsapp" href={whatsappHref} target="_blank" rel="noreferrer" aria-label="WhatsApp üzerinden iletişime geç">
          WA
        </a>
      </div>

      <div className="mobile-cta-bar">
        <a href={`tel:+${contactInfo.callRaw}`}>Ara</a>
        <a href={whatsappHref} target="_blank" rel="noreferrer">
          WhatsApp
        </a>
        <a href={renderSectionHref(location.pathname, "#teklif")}>Planla</a>
      </div>
    </>
  );
}

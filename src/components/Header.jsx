import { Link, useLocation } from "react-router-dom";
import { siteMeta } from "../data/sharedSiteData.js";

function renderSectionHref(pathname, href) {
  return pathname === "/" ? href : `/${href}`;
}

export default function Header({ sectionLinks, pageLinks, mobileMenuOpen, onToggleMenu, onCloseMenu, scrolled }) {
  const location = useLocation();

  return (
    <>
      <header className={`site-header${scrolled ? " scrolled" : ""}`} id="top">
        <Link to="/" className="brand" aria-label="AZR Evden Eve Nakliyat ana sayfa">
          <span className="brand-mark image-brand-mark">
            <img src={siteMeta.logoPath} alt="AZR Evden Eve Nakliyat logosu" width="104" height="68" fetchPriority="high" decoding="async" />
          </span>
          <span className="brand-text">
            <span className="brand-title">AZR Evden Eve Nakliyat</span>
            <span className="brand-subtitle">Kayseri merkezli planlı taşıma operasyonu</span>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Ana menü">
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
          <a href={renderSectionHref(location.pathname, "#teklif")} className="nav-cta">
            Planlama Başlat
          </a>
        </nav>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobileMenu"
          aria-label="Menüyü aç"
          onClick={onToggleMenu}
        >
          <span aria-hidden="true">{mobileMenuOpen ? "×" : "☰"}</span>
        </button>
      </header>

      <div className={`mobile-menu${mobileMenuOpen ? " open" : ""}`} id="mobileMenu" aria-label="Mobil menü">
        {sectionLinks.map((link) => (
          <a key={link.href} href={renderSectionHref(location.pathname, link.href)} onClick={onCloseMenu}>
            {link.label}
          </a>
        ))}
        {pageLinks.map((link) => (
          <Link key={link.to} to={link.to} onClick={onCloseMenu}>
            {link.label}
          </Link>
        ))}
        <a href={renderSectionHref(location.pathname, "#teklif")} className="mobile-menu-cta" onClick={onCloseMenu}>
          Ön Planlama Al
        </a>
      </div>
    </>
  );
}

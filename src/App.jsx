import { Suspense, lazy, useEffect, useMemo, useState } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ScrollManager from "./components/ScrollManager";
import { contactInfo, contactMeta, footerServiceAreas, pageLinks, sectionLinks } from "./data/sharedSiteData";

const HomeRoute = lazy(() => import("./routes/HomeRoute"));
const ServicesRoute = lazy(() => import("./routes/ServicesRoute"));
const ServiceDetailRoute = lazy(() => import("./routes/ServiceDetailRoute"));
const GalleryRoute = lazy(() => import("./routes/GalleryRoute"));
const BlogRoute = lazy(() => import("./routes/BlogRoute"));
const BlogPostRoute = lazy(() => import("./routes/BlogPostRoute"));
const RegionsRoute = lazy(() => import("./routes/RegionsRoute"));
const RegionDetailRoute = lazy(() => import("./routes/RegionDetailRoute"));
const CitiesRoute = lazy(() => import("./routes/CitiesRoute"));
const CityDetailRoute = lazy(() => import("./routes/CityDetailRoute"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const PrivacyPage = lazy(() => import("./pages/PrivacyPage"));
const KvkkPage = lazy(() => import("./pages/KvkkPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

function normalizePhone(phone) {
  return phone.replace(/[^\d+]/g, "");
}

function validatePhone(phone) {
  const normalized = normalizePhone(phone);
  return /^(?:\+90|0)?5\d{9}$/.test(normalized) || /^\+?\d{10,15}$/.test(normalized);
}

function buildWhatsAppUrl(message) {
  return `https://wa.me/${contactInfo.whatsappRaw}?text=${encodeURIComponent(message)}`;
}

function openWhatsApp(message) {
  window.open(buildWhatsAppUrl(message), "_blank", "noopener");
}

function AppShell() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [toast, setToast] = useState("");

  const today = useMemo(() => new Date().toISOString().split("T")[0], []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 16);
    };

    const markVisible = (element) => {
      element.classList.add("visible");
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            markVisible(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -8% 0px" }
    );

    const attachRevealObservers = () => {
      const revealElements = document.querySelectorAll(".reveal:not(.visible)");

      revealElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.92) {
          markVisible(element);
          return;
        }

        observer.observe(element);
      });
    };

    const frame = window.requestAnimationFrame(attachRevealObservers);
    const latePass = window.setTimeout(attachRevealObservers, 250);
    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.cancelAnimationFrame(frame);
      window.clearTimeout(latePass);
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

  useEffect(() => {
    ["hdate", "fdate"].forEach((id) => {
      const input = document.getElementById(id);
      if (input) {
        input.min = today;
      }
    });
  }, [today]);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    if (!toast) {
      return undefined;
    }

    const timer = window.setTimeout(() => setToast(""), 3200);
    return () => window.clearTimeout(timer);
  }, [toast]);

  function handleHeroSubmit(event) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "").trim();
    const phone = String(form.get("phone") || "").trim();
    const from = String(form.get("from") || "").trim();
    const to = String(form.get("to") || "").trim();
    const service = String(form.get("service") || "").trim();
    const rooms = String(form.get("rooms") || "").trim();
    const date = String(form.get("date") || "").trim();

    if (!name || !phone || !from || !to) {
      setToast("Lutfen gerekli alanlari doldurun.");
      return;
    }

    if (!validatePhone(phone)) {
      setToast("Gecerli bir telefon numarasi girin.");
      return;
    }

    const message = [
      "Merhaba, hizli nakliyat teklifi almak istiyorum.",
      `Ad Soyad: ${name}`,
      `Telefon: ${phone}`,
      `Nereden: ${from}`,
      `Nereye: ${to}`,
      service ? `Hizmet Turu: ${service}` : "",
      rooms ? `Oda Tipi: ${rooms}` : "",
      date ? `Tarih: ${date}` : ""
    ]
      .filter(Boolean)
      .join("\n");

    openWhatsApp(message);
    setToast("WhatsApp penceresi hazirlaniyor.");
  }

  function handleDetailSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const name = form.querySelector("#fname")?.value.trim() || "";
    const phone = form.querySelector("#fphone")?.value.trim() || "";
    const from = form.querySelector("#ffrom")?.value.trim() || "";
    const to = form.querySelector("#fto")?.value.trim() || "";
    const date = form.querySelector("#fdate")?.value.trim() || "";
    const type = form.querySelector("#ftype")?.value.trim() || "";
    const service = form.querySelector("#fservice")?.value.trim() || "";
    const floorFrom = form.querySelector("#ffloorfrom")?.value.trim() || "";
    const floorTo = form.querySelector("#ffloorto")?.value.trim() || "";
    const elevator = form.querySelector("#felevator")?.value.trim() || "";
    const rooms = form.querySelector("#frooms")?.value.trim() || "";
    const callback = form.querySelector("#fcallback")?.value.trim() || "";
    const note = form.querySelector("#fnote")?.value.trim() || "";

    if (!name || !phone || !from || !to || !date) {
      setToast("Lutfen formdaki zorunlu alanlari tamamlayin.");
      return;
    }

    if (!validatePhone(phone)) {
      setToast("Telefon numarasini kontrol edin.");
      return;
    }

    const message = [
      "Merhaba, detayli nakliyat teklifi rica ediyorum.",
      `Ad Soyad: ${name}`,
      `Telefon: ${phone}`,
      `Nereden: ${from}`,
      `Nereye: ${to}`,
      `Tarih: ${date}`,
      type ? `Konut Tipi: ${type}` : "",
      service ? `Hizmet Turu: ${service}` : "",
      floorFrom ? `Cikis Kati: ${floorFrom}` : "",
      floorTo ? `Varis Kati: ${floorTo}` : "",
      elevator ? `Asansor Durumu: ${elevator}` : "",
      rooms ? `Oda Sayisi: ${rooms}` : "",
      callback ? `Geri Donus Tercihi: ${callback}` : "",
      note ? `Ek Not: ${note}` : ""
    ]
      .filter(Boolean)
      .join("\n");

    openWhatsApp(message);
    form.reset();
    setToast("Teklif mesajiniz WhatsApp'ta hazirlandi.");
  }

  return (
    <>
      <ScrollManager />
      <Header
        sectionLinks={sectionLinks}
        pageLinks={pageLinks}
        mobileMenuOpen={mobileMenuOpen}
        onToggleMenu={() => setMobileMenuOpen((value) => !value)}
        onCloseMenu={() => setMobileMenuOpen(false)}
        scrolled={scrolled}
      />

      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomeRoute onHeroSubmit={handleHeroSubmit} onDetailSubmit={handleDetailSubmit} />} />
          <Route path="/hizmetler" element={<ServicesRoute />} />
          <Route path="/hizmetler/:slug" element={<ServiceDetailRoute />} />
          <Route path="/galeri" element={<GalleryRoute />} />
          <Route path="/blog" element={<BlogRoute />} />
          <Route path="/blog/:slug" element={<BlogPostRoute />} />
          <Route path="/bolgeler" element={<RegionsRoute />} />
          <Route path="/bolgeler/:slug" element={<RegionDetailRoute />} />
          <Route path="/sehirler" element={<CitiesRoute />} />
          <Route path="/sehirler/:slug" element={<CityDetailRoute />} />
          <Route path="/hakkimizda" element={<AboutPage />} />
          <Route path="/gizlilik-politikasi" element={<PrivacyPage />} />
          <Route path="/kvkk-aydinlatma-metni" element={<KvkkPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>

      <Footer
        sectionLinks={sectionLinks}
        pageLinks={pageLinks}
        contactInfo={contactInfo}
        contactMeta={contactMeta}
        footerServiceAreas={footerServiceAreas}
      />
      <div id="toast" className={toast ? "show" : ""} role="status" aria-live="polite">
        {toast}
      </div>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  );
}

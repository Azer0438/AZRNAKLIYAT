const ANALYTICS_ID = "G-Q1M1CX6NKR";
const CLARITY_ID = "w1r2eyxnzv";

function loadScript(src, onload) {
  const script = document.createElement("script");
  script.async = true;
  script.src = src;
  if (onload) {
    script.onload = onload;
  }
  document.head.appendChild(script);
}

function loadAnalytics() {
  loadScript(`https://www.googletagmanager.com/gtag/js?id=${ANALYTICS_ID}`, () => {
    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() {
      window.dataLayer.push(arguments);
    };
    window.gtag("js", new Date());
    window.gtag("config", ANALYTICS_ID);
  });
}

function loadClarity() {
  ((c, l, a, r, i, t, y) => {
    c[a] =
      c[a] ||
      function clarity() {
        (c[a].q = c[a].q || []).push(arguments);
      };
    t = l.createElement(r);
    t.async = 1;
    t.src = `https://www.clarity.ms/tag/${i}`;
    y = l.getElementsByTagName(r)[0];
    y.parentNode.insertBefore(t, y);
  })(window, document, "clarity", "script", CLARITY_ID);
}

export function scheduleThirdPartyScripts() {
  if (typeof window === "undefined" || window.__marketingScriptsLoaded) {
    return;
  }

  const loadAll = () => {
    if (window.__marketingScriptsLoaded) {
      return;
    }
    window.__marketingScriptsLoaded = true;
    loadAnalytics();
    loadClarity();
  };

  const schedule = () => {
    const delayedLoad = () => {
      if ("requestIdleCallback" in window) {
        window.requestIdleCallback(loadAll, { timeout: 8000 });
        return;
      }
      loadAll();
    };

    window.setTimeout(delayedLoad, 30000);
    ["pointerdown", "keydown", "touchstart"].forEach((eventName) => {
      window.addEventListener(eventName, loadAll, { once: true, passive: true });
    });
  };

  if (document.readyState === "complete") {
    schedule();
    return;
  }

  window.addEventListener("load", schedule, { once: true });
}

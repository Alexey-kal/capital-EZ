import "./style.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { createIcons, TrendingUp, CreditCard, Calendar } from "lucide";
import QRCode from "qrcode";
import { translations, seoMeta } from "./i18n.js";

gsap.registerPlugin(ScrollTrigger);

function initIcons() {
  createIcons({
    icons: {
      TrendingUp,
      CreditCard,
      Calendar,
    },
  });
}

let currentLang = localStorage.getItem("ez-lang") || "en";

function prepareHeroHeadline() {
  const headline = document.querySelector(".hero h1");
  if (!headline) return [];

  const text = headline.textContent.trim().replace(/\s+/g, " ");
  headline.setAttribute("aria-label", text);
  headline.innerHTML = text
    .split(" ")
    .map(
      (word, index, words) =>
        `<span class="hero-word" aria-hidden="true">${word}${index < words.length - 1 ? "&nbsp;" : ""}</span>`
    )
    .join("");

  return headline.querySelectorAll(".hero-word");
}

function applyTranslations(lang, preserveScroll = false) {
  const dict = translations[lang];
  if (!dict) return;
  const scrollPosition = window.scrollY;

  document.documentElement.lang = lang === "fr" ? "fr" : "en";

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] != null) {
      el.textContent = dict[key];
    }
  });

  prepareHeroHeadline();
  document.querySelectorAll(".faq-item.open .faq-answer").forEach((answer) => {
    gsap.set(answer, { height: "auto" });
  });

  const toggle = document.getElementById("lang-toggle");
  if (toggle) {
    const active = toggle.querySelector(".lang-active");
    const inactive = toggle.querySelector(".lang-inactive");
    if (lang === "en") {
      active.textContent = "EN";
      inactive.textContent = "FR";
    } else {
      active.textContent = "FR";
      inactive.textContent = "EN";
    }
  }

  localStorage.setItem("ez-lang", lang);
  currentLang = lang;

  if (preserveScroll) {
    requestAnimationFrame(() => {
      window.scrollTo({ top: scrollPosition, behavior: "auto" });
      ScrollTrigger.refresh();
    });
  }
}

/* ——— Navbar ——— */
function initNavbar() {
  const navbar = document.getElementById("navbar");
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");
  let isScrolled = null;

  const onScroll = () => {
    const nextState = window.scrollY > 40;
    if (nextState === isScrolled) return;
    isScrolled = nextState;
    navbar.classList.toggle("scrolled", nextState);
    gsap.to(navbar, {
      backgroundColor: nextState ? "rgba(5, 8, 6, 0.96)" : "rgba(0, 0, 0, 0)",
      borderBottomColor: nextState
        ? "rgba(46, 204, 113, 0.45)"
        : "rgba(255, 255, 255, 0)",
      boxShadow: nextState
        ? "0 8px 30px rgba(0, 0, 0, 0.22)"
        : "0 0 0 rgba(0, 0, 0, 0)",
      duration: 0.45,
      ease: "power2.out",
      overwrite: true,
    });
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  hamburger?.addEventListener("click", () => {
    const open = navLinks.classList.toggle("open");
    hamburger.setAttribute("aria-expanded", String(open));
    document.body.classList.toggle("menu-open", open);
  });

  navLinks?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      hamburger?.setAttribute("aria-expanded", "false");
      document.body.classList.remove("menu-open");
    });
  });
}

/* ——— Smooth anchor scrolling ——— */
function initSmoothAnchors() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (event) => {
      const id = anchor.getAttribute("href");
      if (!id || id === "#") return;
      const target = document.querySelector(id);
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      history.pushState(null, "", id);
    });
  });
}

/* ——— Language toggle ——— */
function initLangToggle() {
  applyTranslations(currentLang);

  document.getElementById("lang-toggle")?.addEventListener("click", () => {
    applyTranslations(currentLang === "en" ? "fr" : "en", true);
  });
}

/* ——— FAQ accordion + division tabs ——— */
function initFaq() {
  const root = document.getElementById("faq");
  if (!root) return;

  const tabs = [...root.querySelectorAll("[data-faq-tab]")];
  const panels = [...root.querySelectorAll("[data-faq-panel]")];

  const setTab = (key, { focusTab = false } = {}) => {
    tabs.forEach((tab) => {
      const active = tab.dataset.faqTab === key;
      tab.classList.toggle("is-active", active);
      tab.setAttribute("aria-selected", active ? "true" : "false");
      tab.tabIndex = active ? 0 : -1;
      if (active && focusTab) tab.focus();
    });
    panels.forEach((panel) => {
      const active = panel.dataset.faqPanel === key;
      panel.hidden = !active;
    });
  };

  const openItem = (item) => {
    const btn = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");
    if (!btn || !answer || item.classList.contains("open")) return;
    item.classList.add("open");
    btn.setAttribute("aria-expanded", "true");
    answer.hidden = false;
    gsap.fromTo(
      answer,
      { height: 0 },
      {
        height: "auto",
        duration: 0.5,
        ease: "power3.out",
        overwrite: true,
        onComplete: () => ScrollTrigger.refresh(),
      }
    );
  };

  const closeItem = (item) => {
    const btn = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");
    if (!btn || !answer || !item.classList.contains("open")) return;
    item.classList.remove("open");
    btn.setAttribute("aria-expanded", "false");
    gsap.to(answer, {
      height: 0,
      duration: 0.45,
      ease: "power3.inOut",
      overwrite: true,
      onComplete: () => {
        answer.hidden = true;
        ScrollTrigger.refresh();
      },
    });
  };

  root.querySelectorAll(".faq-item").forEach((item) => {
    const btn = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");
    if (!btn || !answer) return;

    gsap.set(answer, { height: 0 });
    answer.hidden = true;

    btn.addEventListener("click", () => {
      if (item.classList.contains("open")) closeItem(item);
      else openItem(item);
    });
  });

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => setTab(tab.dataset.faqTab));
    tab.addEventListener("keydown", (event) => {
      if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) {
        return;
      }
      event.preventDefault();
      let next = index;
      if (event.key === "ArrowRight") next = (index + 1) % tabs.length;
      if (event.key === "ArrowLeft")
        next = (index - 1 + tabs.length) % tabs.length;
      if (event.key === "Home") next = 0;
      if (event.key === "End") next = tabs.length - 1;
      setTab(tabs[next].dataset.faqTab, { focusTab: true });
    });
  });

  const openFromHash = () => {
    const id = decodeURIComponent(location.hash.replace(/^#/, ""));
    if (!id) return;
    const item = document.getElementById(id);
    if (!item?.classList.contains("faq-item")) return;
    const panel = item.closest("[data-faq-panel]");
    if (panel?.dataset.faqPanel) setTab(panel.dataset.faqPanel);
    openItem(item);
    requestAnimationFrame(() => {
      item.scrollIntoView({ block: "nearest", behavior: "smooth" });
    });
  };

  window.addEventListener("hashchange", openFromHash);
  openFromHash();
}

/* ——— Modals ——— */
function initModals() {
  const privacy = document.getElementById("privacy-modal");
  const terms = document.getElementById("terms-modal");

  const openModal = (modal) => {
    if (!modal) return;
    modal.hidden = false;
    document.body.style.overflow = "hidden";
    gsap.fromTo(
      modal.querySelector(".modal-panel"),
      { opacity: 0, y: 24 },
      { opacity: 1, y: 0, duration: 0.35, ease: "power2.out" }
    );
  };

  const closeModal = (modal) => {
    if (!modal || modal.hidden) return;
    gsap.to(modal.querySelector(".modal-panel"), {
      opacity: 0,
      y: 16,
      duration: 0.2,
      onComplete: () => {
        modal.hidden = true;
        document.body.style.overflow = "";
      },
    });
  };

  document.getElementById("open-privacy")?.addEventListener("click", () =>
    openModal(privacy)
  );
  document.getElementById("open-terms")?.addEventListener("click", () =>
    openModal(terms)
  );

  [privacy, terms].forEach((modal) => {
    modal?.querySelectorAll("[data-close-modal]").forEach((el) => {
      el.addEventListener("click", () => closeModal(modal));
    });
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeModal(privacy);
      closeModal(terms);
    }
  });
}

/* ——— Contact form (Formspree) ——— */
function initForm() {
  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");
  const thanks = document.getElementById("form-thanks");
  const serviceSelect = document.getElementById("serviceNeeded");
  const outboundFields = document.getElementById("outbound-fields");
  const financingFields = document.getElementById("financing-fields");
  const paymentsFields = document.getElementById("payments-fields");
  const submitBtn = form?.querySelector('button[type="submit"]');
  if (!form) return;

  const endpoint =
    form.getAttribute("action") || "https://formspree.io/f/xlgqnjjr";

  const syncConditionalFields = () => {
    const value = serviceSelect?.value || "";
    const showOutbound = value === "outbound" || value === "multiple";
    const showFinancing = value === "financing" || value === "multiple";
    const showPayments = value === "payments" || value === "multiple";
    if (outboundFields) outboundFields.hidden = !showOutbound;
    if (financingFields) financingFields.hidden = !showFinancing;
    if (paymentsFields) paymentsFields.hidden = !showPayments;
  };

  serviceSelect?.addEventListener("change", syncConditionalFields);
  syncConditionalFields();

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const dict = translations[currentLang];

    const honeypot = form.querySelector('[name="_gotcha"]');
    if (honeypot?.value) {
      return;
    }

    if (!form.checkValidity()) {
      form.reportValidity();
      status.textContent = dict["contact.error"];
      status.classList.add("error");
      return;
    }

    status.classList.remove("error");
    status.textContent = "";
    if (thanks) thanks.hidden = true;
    if (submitBtn) submitBtn.disabled = true;

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        body: new FormData(form),
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Formspree request failed");
      }

      form.reset();
      syncConditionalFields();
      status.textContent = "";
      if (thanks) {
        thanks.hidden = false;
        const thanksCopy = thanks.querySelector("[data-i18n='contact.thanks']");
        if (thanksCopy) thanksCopy.textContent = dict["contact.thanks"];
      } else {
        status.textContent = dict["contact.thanks"];
      }
    } catch {
      status.textContent = dict["contact.error"];
      status.classList.add("error");
    } finally {
      if (submitBtn) submitBtn.disabled = false;
    }
  });
}

/* ——— Scroll progress ——— */
function initScrollProgress() {
  const bar = document.getElementById("scroll-progress");
  if (!bar) return;

  const update = () => {
    const doc = document.documentElement;
    const max = doc.scrollHeight - window.innerHeight;
    const progress = max > 0 ? window.scrollY / max : 0;
    gsap.set(bar, { scaleX: Math.min(Math.max(progress, 0), 1) });
  };

  update();
  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
}
function initSeo() {
  const meta = document.getElementById("meta-description");

  const applySeo = (key) => {
    const data = seoMeta[key] || seoMeta.home;
    document.title = data.title;
    if (meta) meta.setAttribute("content", data.description);
  };

  const resolveKey = () => {
    const hash = window.location.hash.replace("#", "");
    if (hash === "financing") return "financing";
    if (hash === "payments") return "payments";
    if (hash === "outbound") return "outbound";
    return "home";
  };

  applySeo(resolveKey());
  window.addEventListener("hashchange", () => applySeo(resolveKey()));

  const observed = [
    ["#home", "home"],
    ["#financing", "financing"],
    ["#payments", "payments"],
    ["#outbound", "outbound"],
  ];

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible) return;
        const match = observed.find(([selector]) =>
          visible.target.matches(selector)
        );
        if (match) applySeo(match[1]);
      },
      { threshold: 0.35 }
    );
    observed.forEach(([selector]) => {
      const el = document.querySelector(selector);
      if (el) observer.observe(el);
    });
  }
}

function initHeroGrowthChart(reducedMotion) {
  const chart = document.querySelector(".hero-growth-chart");
  const bars = gsap.utils.toArray(".hero-growth-bar");
  const dollars = gsap.utils.toArray(".hero-growth-dollar");
  const arrow = document.querySelector(".hero-growth-arrow");
  if (!chart || !bars.length || !arrow) return;

  const length = arrow.getTotalLength();
  // Tip pulse origin in SVG user space (viewBox coords)
  const tipOrigin = "166 -19";
  const barGrowDuration = 0.48;
  const barStagger = 0.07;

  const showComplete = () => {
    gsap.set(chart, { opacity: 1 });
    gsap.set(bars, { scaleY: 1, transformOrigin: "50% 100%" });
    gsap.set(dollars, { opacity: 1 });
    gsap.set(arrow, {
      fill: "#5EE894",
      stroke: "#5EE894",
      strokeWidth: 1,
      strokeDashoffset: 0,
      clearProps: "strokeDasharray,transform,scale",
      opacity: 1,
      scale: 1,
    });
  };

  if (reducedMotion) {
    showComplete();
    return;
  }

  gsap.set(chart, { opacity: 1 });
  gsap.set(bars, {
    scaleY: 0,
    transformOrigin: "50% 100%",
    transformBox: "fill-box",
  });
  gsap.set(dollars, { opacity: 0 });

  // Draw the unified arrow outline first (fill off), then solidify + pulse tip
  gsap.set(arrow, {
    fill: "transparent",
    stroke: "#5EE894",
    strokeWidth: 2.75,
    strokeDasharray: length,
    strokeDashoffset: length,
    opacity: 1,
    scale: 1,
    svgOrigin: tipOrigin,
  });

  const tl = gsap.timeline({ delay: 0.18 });
  tl.to(bars, {
    scaleY: 1,
    duration: barGrowDuration,
    stagger: barStagger,
    ease: "power2.out",
  });

  // Each $ fades in only after its own bar has finished growing
  dollars.forEach((dollar, i) => {
    tl.to(
      dollar,
      { opacity: 1, duration: 0.22, ease: "power1.out" },
      barGrowDuration + i * barStagger
    );
  });

  tl.to(arrow, {
    strokeDashoffset: 0,
    duration: 0.95,
    ease: "power2.inOut",
  })
    .to(arrow, {
      fill: "#5EE894",
      strokeWidth: 1,
      duration: 0.12,
      ease: "power1.out",
    })
    .to(arrow, {
      scale: 1.28,
      duration: 0.28,
      ease: "power2.out",
      svgOrigin: tipOrigin,
    })
    .to(arrow, {
      scale: 1,
      duration: 0.32,
      ease: "power2.inOut",
      svgOrigin: tipOrigin,
    })
    .add(() => {
      gsap.fromTo(
        chart,
        {
          filter:
            "drop-shadow(0 0 8px rgba(94,232,148,0.35)) drop-shadow(0 0 16px rgba(49,200,107,0.2))",
        },
        {
          filter:
            "drop-shadow(0 0 18px rgba(94,232,148,0.95)) drop-shadow(0 0 36px rgba(94,232,148,0.55))",
          duration: 0.35,
          yoyo: true,
          repeat: 1,
          ease: "power1.inOut",
        }
      );
    }, "-=0.5");
}

/* ——— GSAP animations ——— */
function initAnimations() {
  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;
  const heroWords = prepareHeroHeadline();

  if (reducedMotion) {
    document.querySelectorAll(".stat-number[data-count]").forEach((number) => {
      number.textContent = `${number.dataset.count}${number.dataset.suffix || ""}`;
    });
    initHeroGrowthChart(true);
    return;
  }

  gsap.set(".hero-accent", { scaleX: 0, transformOrigin: "left center" });
  gsap.set(heroWords, { opacity: 0, y: 22 });
  gsap.set(".hero-sub, .hero-ctas .btn", { opacity: 0, y: 18 });

  const heroTimeline = gsap.timeline({
    defaults: { ease: "power3.out" },
    delay: 0.12,
  });

  heroTimeline
    .to(
      heroWords,
      { opacity: 1, y: 0, duration: 0.7, stagger: 0.1 },
      0
    )
    .to(".hero-accent", { scaleX: 1, duration: 0.7 }, 0.15)
    .to(".hero-sub", { opacity: 1, y: 0, duration: 0.8 }, "-=0.15")
    .to(
      ".hero-ctas .btn",
      { opacity: 1, y: 0, duration: 0.65, stagger: 0.12 },
      "-=0.25"
    );

  initHeroGrowthChart(false);

  if (document.querySelector(".hero-glow")) {
    gsap.to(".hero-glow", {
      opacity: 0.55,
      scale: 1.08,
      duration: 3.8,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
    });
  }

  gsap.from(".stat-item", {
    opacity: 0,
    y: 28,
    duration: 0.8,
    stagger: 0.12,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".stats-bar",
      start: "top 85%",
      once: true,
    },
  });

  document.querySelectorAll(".stat-number[data-count]").forEach((number) => {
    const target = Number(number.dataset.count);
    const suffix = number.dataset.suffix || "";
    const counter = { value: 0 };

    gsap.to(counter, {
      value: target,
      duration: 1.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".stats-bar",
        start: "top 85%",
        once: true,
      },
      onUpdate: () => {
        number.textContent = `${Math.round(counter.value)}${suffix}`;
      },
    });
  });

  document.querySelectorAll("main > .section").forEach((section) => {
    const titleBits = section.querySelectorAll(
      ".section-header h2, .section-header h3, .section-header .section-eyebrow, .section-header p, .faq-tabs, .faq-intro, .faq-disclaimer"
    );
    const contentBits = [
      ...section.querySelectorAll(
        "#services .compliance-note, .about-content > *, .eligibility-inner > *, .faq-panel:not([hidden]) .faq-item, .faq-group-cta, .form-field, .optional-fields, .consent-field, .contact-form > .compliance-note, .contact-form > .btn, .contact-direct, .form-top-note, .trust-card, .outbound-pricing, .outbound-intro, .outbound-services, .outbound-who, .outbound-block, .outbound-note, .outbound-ctas, .division-intro, .division-block, .division-cta-banner, .section-division .compliance-note"
      ),
    ].filter((element) => !element.closest(".steps"));

    if (titleBits.length) {
      gsap.from(titleBits, {
        opacity: 0,
        y: 32,
        duration: 0.85,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 78%",
          once: true,
        },
      });
    }

    if (contentBits.length) {
      gsap.from(contentBits, {
        opacity: 0,
        y: 28,
        duration: 0.8,
        stagger: 0.07,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 72%",
          once: true,
        },
        delay: titleBits.length ? 0.12 : 0,
      });
    }
  });

  /* Service cards — animate independently so none stay mid-opacity */
  const serviceCards = gsap.utils.toArray(".service-card");
  serviceCards.forEach((card, index) => {
    gsap.fromTo(
      card,
      { autoAlpha: 0, y: 28 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.8,
        delay: 0.12 + index * 0.07,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "#services",
          start: "top 72%",
          once: true,
        },
        onComplete: () => {
          gsap.set(card, {
            clearProps: "opacity,visibility,transform",
          });
          card.classList.add("is-visible");
        },
      }
    );
  });

  document.querySelectorAll(".steps").forEach((list) => {
    list.querySelectorAll(".step").forEach((step) => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: step,
          start: "top 84%",
          once: true,
        },
      });

      timeline
        .from(step.querySelector(".step-num"), {
          opacity: 0,
          x: -22,
          duration: 0.7,
          ease: "power3.out",
          onStart: () => step.classList.add("is-revealed"),
        })
        .from(
          step.querySelector(".step-body"),
          {
            opacity: 0,
            x: 22,
            duration: 0.75,
            ease: "power3.out",
          },
          "-=0.4"
        );
    });
  });

  gsap.from(".footer-grid > *, .footer-bottom > *", {
    opacity: 0,
    y: 30,
    duration: 0.85,
    stagger: 0.1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".footer",
      start: "top 88%",
      once: true,
    },
  });

  if (window.matchMedia("(hover: hover)").matches) {
    document.querySelectorAll(".service-card").forEach((card) => {
      card.addEventListener("mouseenter", () => {
        card.classList.add("is-hovered");
        gsap.to(card, {
          y: -8,
          borderTopColor: "#2ecc71",
          boxShadow: "0 20px 44px rgba(10, 40, 20, 0.16)",
          duration: 0.3,
          ease: "power2.out",
          overwrite: "auto",
        });
      });
      card.addEventListener("mouseleave", () => {
        card.classList.remove("is-hovered");
        gsap.to(card, {
          y: 0,
          borderTopColor: "#1a5c2a",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.06)",
          duration: 0.35,
          ease: "power3.out",
          overwrite: "auto",
        });
      });
    });

    document.querySelectorAll(".logo").forEach((logo) => {
      logo.addEventListener("mouseenter", () => {
        gsap.to(logo, { scale: 1.03, duration: 0.3, ease: "power2.out" });
      });
      logo.addEventListener("mouseleave", () => {
        gsap.to(logo, { scale: 1, duration: 0.35, ease: "power3.out" });
      });
    });

    document.querySelectorAll(".btn").forEach((btn) => {
      btn.addEventListener("mouseenter", () => {
        gsap.to(btn, { scale: 1.02, duration: 0.3, ease: "power2.out" });
      });
      btn.addEventListener("mouseleave", () => {
        gsap.to(btn, { scale: 1, duration: 0.3, ease: "power3.out" });
      });
    });
  }
}

/* ——— QR codes (local generation via qrcode package) ——— */
async function initQrCodes() {
  const options = {
    width: 168,
    margin: 2,
    errorCorrectionLevel: "M",
    color: {
      dark: "#000000",
      light: "#ffffff",
    },
  };

  const targets = [
    {
      id: "qr-map",
      url: "https://www.google.com/maps/search/?api=1&query=1140+Rue+Wellington+Montreal+Quebec+H3C+1V8",
    },
    {
      id: "qr-registry",
      url: "https://www.registreentreprises.gouv.qc.ca/RQAnonymeGR/GR/GR03/GR03A2_19A_PIU_RechEnt_PC/PageRechSimple.aspx",
    },
  ];

  await Promise.all(
    targets.map(async ({ id, url }) => {
      const canvas = document.getElementById(id);
      if (!canvas) return;
      await QRCode.toCanvas(canvas, url, options);
    })
  );
}

/* ——— Boot ——— */
document.addEventListener("DOMContentLoaded", () => {
  initIcons();
  initLangToggle();
  initNavbar();
  initSmoothAnchors();
  initFaq();
  initModals();
  initForm();
  initSeo();
  initScrollProgress();
  initAnimations();
  initQrCodes();
});

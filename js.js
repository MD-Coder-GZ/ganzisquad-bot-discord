/* ====== EXTRA JS ====== */

const glow = document.createElement("div");

glow.id = "cursorGlow";

document.body.appendChild(glow);

document.addEventListener("mousemove", (e) => {
  glow.style.left = e.clientX + "px";

  glow.style.top = e.clientY + "px";
});

const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {
  navbar.classList.toggle(
    "nav-small",

    window.scrollY > 80,
  );
});

document.querySelectorAll(".stat").forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const r = card.getBoundingClientRect();

    card.style.setProperty(
      "--x",

      e.clientX - r.left + "px",
    );

    card.style.setProperty(
      "--y",

      e.clientY - r.top + "px",
    );
  });
});

const reveal = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.15,
  },
);

document.querySelectorAll("section,.stat").forEach((el) => {
  el.classList.add("fadeBlur");

  reveal.observe(el);
});

document.querySelectorAll("a[href^='#']").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    document.querySelector(link.getAttribute("href"))?.scrollIntoView({
      behavior: "smooth",
    });
  });
});

document.addEventListener("visibilitychange", () => {
  document.title = document.hidden
    ? "👋 Come back to GANZISQUAD"
    : "GANZISQUAD BOT";
});

console.log(
  "%cGANZISQUAD BOT",

  "font-size:32px;color:#00d9ff;font-weight:bold;",
);

console.log(
  "%cDeveloped with ❤️",

  "font-size:16px;color:#ffffff;",
);
/* ===== PREMIUM EFFECTS ===== */

const loader = document.createElement("div");

loader.id = "pageLoader";

loader.innerHTML = `

<div class="loaderLogo">

GANZI

</div>

<div class="loaderCircle"></div>

<div class="loaderText">

Loading Experience...

</div>

`;

document.body.append(loader);

window.addEventListener("load", () => {
  setTimeout(() => {
    loader.style.opacity = "0";

    loader.style.pointerEvents = "none";

    setTimeout(() => loader.remove(), 900);
  }, 1400);
});

document.querySelector(".hero-box").insertAdjacentHTML(
  "beforeend",

  '<div class="glowBorder"></div>',
);

document.querySelectorAll(".member").forEach((el) => {
  el.classList.add("member");
});

document.body.animate(
  [
    {
      filter: "brightness(.85)",
    },

    {
      filter: "brightness(1)",
    },
  ],
  {
    duration: 1500,

    fill: "forwards",
  },
);

setInterval(() => {
  document.querySelectorAll(".stat").forEach((card) => {
    card.animate(
      [
        {
          transform: "translateY(0px)",
        },

        {
          transform: "translateY(-4px)",
        },

        {
          transform: "translateY(0px)",
        },
      ],
      {
        duration: 3500 + Math.random() * 1500,

        iterations: 1,
      },
    );
  });
}, 4000);

const fps = document.createElement("div");

fps.style.cssText = `

position:fixed;

left:25px;

bottom:25px;

padding:10px 16px;

background:rgba(0,0,0,.45);

backdrop-filter:blur(20px);

border-radius:14px;

font-size:13px;

color:#8ab8ff;

border:1px solid rgba(255,255,255,.08);

z-index:999999;

`;

document.body.append(fps);

let frames = 0;

let last = performance.now();

function counter(now) {
  frames++;

  if (now - last >= 1000) {
    fps.innerHTML = "FPS : " + frames;

    frames = 0;

    last = now;
  }

  requestAnimationFrame(counter);
}

requestAnimationFrame(counter);
/* ===== PREMIUM TOOLS ===== */

const search = document.createElement("div");

search.className = "searchBox";

search.innerHTML = `
<input
placeholder="Search Privacy Policy..."
id="searchInput">
`;

document.querySelector("#privacy").before(search);

document.getElementById("searchInput").addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();

  document.querySelectorAll(".stat").forEach((card) => {
    card.classList.remove("highlight");

    if (card.innerText.toLowerCase().includes(value) && value.length) {
      card.classList.add("highlight");

      card.scrollIntoView({
        behavior: "smooth",

        block: "center",
      });
    }
  });
});

const toast = document.createElement("div");

toast.className = "toast";

document.body.appendChild(toast);

function showToast(text) {
  toast.textContent = text;

  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 2500);
}

document.querySelectorAll("h2,h3").forEach((title) => {
  title.style.cursor = "pointer";

  title.title = "Copy title";

  title.onclick = () => {
    navigator.clipboard.writeText(title.innerText);

    showToast("Copied: " + title.innerText);
  };
});

for (let i = 0; i < 30; i++) {
  const s = document.createElement("div");

  s.className = "floatingShape";

  s.style.left = Math.random() * 100 + "vw";

  s.style.animationDuration = 15 + Math.random() * 20 + "s";

  s.style.animationDelay = Math.random() * 15 + "s";

  document.body.appendChild(s);
}

showToast("GANZISQUAD BOT Loaded Successfully");

/* ===== SETTINGS PANEL ===== */

const panel = document.createElement("div");

panel.id = "settingsPanel";

panel.innerHTML = `

<h3>⚙ Settings</h3>

<div class="setting">

<span>Particles</span>

<div class="switch active" id="particlesSwitch"></div>

</div>

<div class="setting">

<span>Animations</span>

<div class="switch active" id="animSwitch"></div>

</div>

<button class="themeButton" id="themeButton">

Toggle Theme

</button>

`;

document.body.appendChild(panel);

document.querySelectorAll(".switch").forEach((sw) => {
  sw.onclick = () => sw.classList.toggle("active");
});

document.getElementById("particlesSwitch").onclick = () => {
  document.getElementById("particles").style.display =
    document.getElementById("particles").style.display === "none"
      ? "block"
      : "none";

  document.getElementById("particlesSwitch").classList.toggle("active");
};

document.getElementById("animSwitch").onclick = () => {
  document.body.classList.toggle("disableAnimations");

  document.getElementById("animSwitch").classList.toggle("active");
};

document.getElementById("themeButton").onclick = () => {
  document.body.classList.toggle("lightTheme");

  localStorage.setItem(
    "theme",

    document.body.classList.contains("lightTheme") ? "light" : "dark",
  );
};

if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("lightTheme");
}

const style = document.createElement("style");

style.innerHTML = `

.disableAnimations *{

animation:none!important;

transition:none!important;

}

`;

document.head.appendChild(style);
/* ===== COMMAND PALETTE ===== */

const palette = document.createElement("div");

palette.id = "commandPalette";

palette.innerHTML = `

<div id="commandBox">

<input
id="commandInput"
placeholder="Type a command...">

<div class="commandItem" data-target="#privacy">

Privacy

<span>↵</span>

</div>

<div class="commandItem" data-target="#terms">

Terms

<span>↵</span>

</div>

<div class="commandItem" data-target="#discord">

Discord

<span>↵</span>

</div>

<div class="commandItem" data-target="#contact">

Contact

<span>↵</span>

</div>

</div>

`;

document.body.appendChild(palette);

document.addEventListener("keydown", (e) => {
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() == "k") {
    e.preventDefault();

    palette.style.display = "flex";

    document.getElementById("commandInput").focus();
  }

  if (e.key === "Escape") {
    palette.style.display = "none";
  }
});

document.querySelectorAll(".commandItem").forEach((item) => {
  item.onclick = () => {
    document.querySelector(item.dataset.target).scrollIntoView({
      behavior: "smooth",
    });

    palette.style.display = "none";
  };
});

const reading = document.createElement("div");

reading.id = "readingTime";

document.body.appendChild(reading);

const words = document.body.innerText.split(/\s+/).length;

reading.textContent =
  "📖 " + Math.max(1, Math.round(words / 220)) + " min read";

const net = document.createElement("div");

net.id = "networkStatus";

document.body.appendChild(net);

function updateNetwork() {
  if (navigator.onLine) {
    net.textContent = "🟢 Online";

    net.style.background = "#16a34a";
  } else {
    net.textContent = "🔴 Offline";

    net.style.background = "#dc2626";
  }
}

updateNetwork();

window.addEventListener("online", updateNetwork);

window.addEventListener("offline", updateNetwork);
/* ===== LIVE DASHBOARD ===== */

document.body.insertAdjacentHTML(
  "beforeend",
  `

<section id="quickStats">

<div class="quickCard">

<div class="quickValue" id="cpuLoad">12%</div>

<div class="quickLabel">CPU Load</div>

</div>

<div class="quickCard">

<div class="quickValue" id="ramUsage">248MB</div>

<div class="quickLabel">Memory Usage</div>

</div>

<div class="quickCard">

<div class="quickValue" id="pingValue">31ms</div>

<div class="quickLabel">Gateway Ping</div>

</div>

<div class="quickCard">

<div class="quickValue" id="versionValue">v2.0</div>

<div class="quickLabel">Current Version</div>

</div>

</section>

<div id="liveClock"></div>

`,
);

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

setInterval(() => {
  document.getElementById("cpuLoad").textContent = random(8, 27) + "%";

  document.getElementById("ramUsage").textContent = random(180, 420) + " MB";

  document.getElementById("pingValue").textContent = random(22, 54) + " ms";
}, 2500);

function updateClock() {
  const d = new Date();

  document.getElementById("liveClock").textContent = d.toLocaleTimeString();
}

updateClock();

setInterval(updateClock, 1000);

document.querySelectorAll(".quickCard").forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.animate(
      [
        {
          transform: "translateY(0px)",
        },

        {
          transform: "translateY(-10px) scale(1.03)",
        },
      ],
      {
        duration: 250,

        fill: "forwards",
      },
    );
  });

  card.addEventListener("mouseleave", () => {
    card.animate(
      [
        {
          transform: "translateY(-10px) scale(1.03)",
        },

        {
          transform: "translateY(0px)",
        },
      ],
      {
        duration: 250,

        fill: "forwards",
      },
    );
  });
});
/* ===== NOTIFICATION SYSTEM ===== */

const center = document.createElement("div");

center.id = "notificationCenter";

document.body.appendChild(center);

function notify(title, text, icon = "✨") {
  const n = document.createElement("div");

  n.className = "notification";

  n.innerHTML = `

<div class="notificationIcon">

${icon}

</div>

<div>

<div class="notificationTitle">

${title}

</div>

<div class="notificationText">

${text}

</div>

</div>

`;

  center.appendChild(n);

  requestAnimationFrame(() => {
    n.classList.add("show");
  });

  setTimeout(() => {
    n.classList.remove("show");

    setTimeout(() => n.remove(), 450);
  }, 4200);
}

setTimeout(() => {
  notify(
    "Welcome",

    "GANZISQUAD BOT loaded successfully.",

    "🚀",
  );
}, 1200);

setTimeout(() => {
  notify(
    "Discord",

    "Connection with Discord Widget established.",

    "💬",
  );
}, 3000);

setTimeout(() => {
  notify(
    "Privacy",

    "Latest policy version is active.",

    "🔒",
  );
}, 5000);

document.querySelectorAll(".btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    notify(
      "Navigation",

      "Opening selected section...",

      "📄",
    );
  });
});

document.addEventListener("keydown", (e) => {
  if (e.key === "F1") {
    e.preventDefault();

    notify(
      "Keyboard Shortcuts",

      "Ctrl + K → Command Palette",

      "⌨️",
    );
  }
});
/* ===== FINAL POLISH ===== */

document.querySelectorAll(".stat,.quickCard").forEach((card) => {
  card.classList.add("glass-card");

  card.addEventListener("mousemove", (e) => {
    const r = card.getBoundingClientRect();

    card.style.setProperty("--mx", e.clientX - r.left + "px");

    card.style.setProperty("--my", e.clientY - r.top + "px");
  });
});

const fpsBadge = document.createElement("div");

fpsBadge.id = "fpsBadge";

document.body.appendChild(fpsBadge);

let fpsFrames = 0;

let fpsLast = performance.now();

function fpsLoop(now) {
  fpsFrames++;

  if (now - fpsLast >= 1000) {
    fpsBadge.textContent = "⚡ " + fpsFrames + " FPS";

    fpsFrames = 0;

    fpsLast = now;
  }

  requestAnimationFrame(fpsLoop);
}

requestAnimationFrame(fpsLoop);

const vis = document.createElement("div");

vis.id = "musicVisualizer";

vis.innerHTML = `

<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>

`;

document.body.appendChild(vis);

window.addEventListener("load", () => {
  document.querySelectorAll("img").forEach((img) => {
    img.classList.add("lazy-blur");

    if (img.complete) {
      requestAnimationFrame(() => img.classList.add("loaded"));
    } else {
      img.onload = () => img.classList.add("loaded");
    }
  });
});

console.log(
  "%cGANZISQUAD BOT PRO EDITION",
  "font-size:34px;font-weight:900;color:#00d9ff;",
);
console.log("%cBuild: Enterprise Edition", "font-size:16px;color:#8ecbff;");
console.log("%cStatus: Ready", "font-size:16px;color:#31ff7d;");

// theme: saved choice > system preference
(function () {
  var root = document.documentElement;
  function saved() { try { return localStorage.getItem("theme"); } catch (e) { return null; } }
  function isDark() {
    var t = root.getAttribute("data-theme");
    if (t) return t === "dark";
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  }
  var s = saved();
  if (s === "dark" || s === "light") root.setAttribute("data-theme", s);

  function syncIcon() {
    var btn = document.getElementById("theme-toggle");
    if (!btn) return;
    btn.innerHTML = isDark() ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
    btn.setAttribute("aria-label", isDark() ? "Switch to light mode" : "Switch to dark mode");
  }

  document.addEventListener("DOMContentLoaded", function () {
    syncIcon();
    var btn = document.getElementById("theme-toggle");
    if (btn) btn.addEventListener("click", function () {
      var next = isDark() ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("theme", next); } catch (e) {}
      syncIcon();
    });

    var nt = document.getElementById("nav-toggle");
    var nl = document.getElementById("nav-links");
    if (nt && nl) nt.addEventListener("click", function () {
      var open = nl.classList.toggle("open");
      nt.setAttribute("aria-expanded", open ? "true" : "false");
    });

    document.querySelectorAll("[data-bib]").forEach(function (b) {
      b.addEventListener("click", function () {
        var el = document.getElementById(b.getAttribute("data-bib"));
        var open = el.classList.toggle("open");
        b.setAttribute("aria-expanded", open ? "true" : "false");
      });
    });
  });
})();

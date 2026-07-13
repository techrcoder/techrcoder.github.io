/* Signal & Ledger — shared behaviors (dependency-free)
   1. Marks <html> as JS-capable so reveal styles activate
   2. Duplicates the ticker track for a seamless marquee loop
   3. IntersectionObserver-driven scroll reveals               */

(function () {
  document.documentElement.classList.add("js");

  // --- Ticker: duplicate items once for a seamless -50% loop ---
  // Each duplicate is aria-hidden so screen readers only hear the set once.
  document.querySelectorAll(".ticker-track").forEach(function (track) {
    Array.prototype.slice.call(track.children).forEach(function (node) {
      var copy = node.cloneNode(true);
      copy.setAttribute("aria-hidden", "true");
      track.appendChild(copy);
    });
  });

  // --- Scroll reveal ---
  var revealed = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    revealed.forEach(function (el) { el.classList.add("is-visible"); });
    return;
  }

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );

  revealed.forEach(function (el) { observer.observe(el); });
})();

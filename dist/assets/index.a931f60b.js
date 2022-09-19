(function () {
  const o = document.createElement("link").relList;
  if (o && o.supports && o.supports("modulepreload")) return;
  for (const e of document.querySelectorAll('link[rel="modulepreload"]')) i(e);
  new MutationObserver((e) => {
    for (const s of e)
      if (s.type === "childList")
        for (const t of s.addedNodes)
          t.tagName === "LINK" && t.rel === "modulepreload" && i(t);
  }).observe(document, { childList: !0, subtree: !0 });
  function r(e) {
    const s = {};
    return (
      e.integrity && (s.integrity = e.integrity),
      e.referrerpolicy && (s.referrerPolicy = e.referrerpolicy),
      e.crossorigin === "use-credentials"
        ? (s.credentials = "include")
        : e.crossorigin === "anonymous"
        ? (s.credentials = "omit")
        : (s.credentials = "same-origin"),
      s
    );
  }
  function i(e) {
    if (e.ep) return;
    e.ep = !0;
    const s = r(e);
    fetch(e.href, s);
  }
})();
$(".slider").slick({
  dots: !1,
  infinite: !1,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 3,
        infinite: !1,
        dots: !1,
        arrow: !0,
      },
    },
    {
      breakpoint: 1024,
      settings: { slidesToShow: 5, slidesToScroll: 3, infinite: !1, dots: !1 },
    },
    {
      breakpoint: 768,
      settings: { slidesToShow: 3, slidesToScroll: 2, dots: !1 },
    },
    {
      breakpoint: 640,
      settings: { slidesToShow: 2, slidesToScroll: 2, dots: !1 },
    },
    {
      breakpoint: 360,
      settings: { slidesToShow: 2, slidesToScroll: 1, dots: !1 },
    },
  ],
});

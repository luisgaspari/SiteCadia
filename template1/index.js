window.onload = function () {
  // createNavBar("", "index");
  var n = new wheelnav("indexDiv", null, 500, 500);
  document.documentElement.clientWidth < 990 &&
    ((n.navAngle = 90),
    (n.titleAttr = {
      font: "100 10px Arial, sans-serif",
      fill: "#111",
      cursor: "pointer",
      stroke: "none",
    }),
    (n.titleSelectedAttr = {
      font: "100 10px Arial, sans-serif",
      fill: "#FFF",
      cursor: "pointer",
    }),
    (n.titleHoverAttr = {
      font: "100 10px Arial, sans-serif",
      fill: "#FFF",
      cursor: "pointer",
    }));
  n.slicePathFunction = slicePath().PieArrowBasePieSlice;
  n.sliceSelectedPathFunction = slicePath().PieArrowSlice;
  n.titleWidth = 50;
  n.keynavigateEnabled = !0;
  n.createWheel([
    "Experiência",
    "Localização",
    "Metodologia",
    "Suporte",
    "Tecnologia",
    "Soluções",
    "Alianças",
    "Certificações",
    "Cultura",
    "Meio Ambiente",
  ]);
  createTabHandler(n.navItems[0], "tabDefaultNav", "tabExperience");
  createTabHandler(n.navItems[1], "tabDefaultNav", "tabLocalization");
  createTabHandler(n.navItems[2], "tabDefaultNav", "tabMethodology");
  createTabHandler(n.navItems[3], "tabDefaultNav", "tabSupport");
  createTabHandler(n.navItems[4], "tabDefaultNav", "tabTechnology");
  createTabHandler(n.navItems[5], "tabDefaultNav", "tabSolutions");
  createTabHandler(n.navItems[6], "tabDefaultNav", "tabAlliances");
  createTabHandler(n.navItems[7], "tabDefaultNav", "tabCertifications");
  createTabHandler(n.navItems[8], "tabDefaultNav", "tabCulture");
  createTabHandler(n.navItems[9], "tabDefaultNav", "tabEnvironment");
};
//# sourceMappingURL=index.min.js.map

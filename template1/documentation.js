createChapterWheel = function (n, t, i, r) {
  var u = new wheelnav("chapterWheelDiv"),
    f;
  u.slicePathFunction = slicePath().WheelSlice;
  u.clickModeRotate = !1;
  u.colors = ["#AD74E7", "#623491", "#9657D6"];
  i = ":   Previous - " + i + "   :";
  r = ":   Next - " + r + "   :";
  f = ":   Wheel of contents   :";
  n === ""
    ? (u.initWheel([icon.arrowalt, icon.home]),
      (u.navItems[0].tooltip = r),
      (u.navItems[1].tooltip = f))
    : t === ""
    ? (u.initWheel([icon.home, icon.arrowleftalt]),
      (u.navItems[0].tooltip = f),
      (u.navItems[1].tooltip = i))
    : ((u.navAngle = -30),
      u.initWheel([icon.arrowalt, icon.home, icon.arrowleftalt]),
      (u.navItems[0].tooltip = r),
      (u.navItems[1].tooltip = f),
      (u.navItems[2].tooltip = i));
  u.createWheel();
  u.navigateWheel(null);
  n === ""
    ? ((u.navItems[0].navigateFunction = function () {
        window.location.href = t;
      }),
      (u.navItems[1].navigateFunction = function () {
        window.location.href = "../documentation.html";
      }))
    : t === ""
    ? ((u.navItems[0].navigateFunction = function () {
        window.location.href = "../documentation.html";
      }),
      (u.navItems[1].navigateFunction = function () {
        window.location.href = n;
      }))
    : ((u.navItems[0].navigateFunction = function () {
        window.location.href = t;
      }),
      (u.navItems[1].navigateFunction = function () {
        window.location.href = "../documentation.html";
      }),
      (u.navItems[2].navigateFunction = function () {
        window.location.href = n;
      }));
};
createNavBar = function (n, t) {
  var u, i, r, f;
  $("head").append(
    "<link href='https://fonts.googleapis.com/css?family=Anton' rel='stylesheet' type='text/css'>"
  );
  u = "";
  u = n === "" ? "." : "..";
  i = "";
  i += "<div class='container'>";
  i +=
    "   <div class='navbar navbar-inverse navbar-fixed-top' role='navigation'>";
  i += "       <div class='container'>";
  i += "           <div class='navbar-header'>";
  i +=
    "               <button type='button' class='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse'>";
  i += "                   <span class='sr-only'>Toggle navigation</span>";
  i += "                   <span class='icon-bar'></span>";
  i += "                   <span class='icon-bar'></span>";
  i += "                   <span class='icon-bar'></span>";
  i += "               </button>";
  i +=
    "               <div id='logoWheel' class='pull-left' style='width: 50px; height: 50px'></div><a class='navbar-brand brand-link' href='" +
    u +
    "/index.html'>wheelnav.js</a>";
  i += "           </div>";
  i += "           <div class='navbar-collapse collapse'>";
  i += "               <ul class='nav navbar-nav'>";
  i +=
    t === "index"
      ? "                   <li class='active'>"
      : "                   <li>";
  i += "<a href='" + u + "/index.html'>Home</a></li>";
  i +=
    t === "examples"
      ? "                   <li class='active'>"
      : "                   <li>";
  i += "<a href='" + u + "/examples.html'>Examples</a></li>";
  r = "";
  r = n === "" ? "documentation" : ".";
  i +=
    n === "documentation" || t === "documentation"
      ? "<li class='dropdown active'>"
      : "<li class='dropdown'>";
  i +=
    "  <a href='" +
    u +
    "/documentation.html' class='dropdown-toggle' data-toggle='dropdown'>Documentation <b class='caret'></b></a>";
  i += "  <ul class='dropdown-menu'>";
  i += t === "documentation" ? "      <li class='active'>" : "      <li>";
  i += "<a href='" + u + "/documentation.html'>Wheel of contents</a></li>";
  i += "      <li class='divider'></li>";
  i += "      <li>";
  i += t === "core" ? "      <li class='active'>" : "      <li>";
  i += "<a href='" + r + "/core.html'>Core</a></li>";
  i += t === "navItem" ? "      <li class='active'>" : "      <li>";
  i += "<a href='" + r + "/navItem.html'>NavItem</a></li>";
  i += t === "spreader" ? "      <li class='active'>" : "      <li>";
  i += "<a href='" + r + "/spreader.html'>Spreader</a></li>";
  i += t === "marker" ? "      <li class='active'>" : "      <li>";
  i += "<a href='" + r + "/marker.html'>Marker</a></li>";
  i += t === "slicePath" ? "      <li class='active'>" : "      <li>";
  i += "<a href='" + r + "/slicePath.html'>SlicePath</a></li>";
  i += t === "sliceTransform" ? "      <li class='active'>" : "      <li>";
  i += "<a href='" + r + "/sliceTransform.html'>SliceTransform</a></li>";
  i += t === "colorPalettes" ? "      <li class='active'>" : "      <li>";
  i += "<a href='" + r + "/colorPalettes.html'>ColorPalettes</a></li>";
  i += "      <li class='divider'></li>";
  i += t === "html5" ? "      <li class='active'>" : "      <li>";
  i += "<a href='" + r + "/html5.html'>HTML tags</a></li>";
  i += t === "css3" ? "      <li class='active'>" : "      <li>";
  i += "<a href='" + r + "/css3.html'>CSS classes</a></li>";
  i += "  </ul>";
  i += "</li>";
  i +=
    t === "spinit"
      ? "                   <li class='active'>"
      : "                   <li>";
  i += "<a href='" + u + "/spinit.html'>Spin it</a></li>";
  i +=
    t === "download"
      ? "                   <li class='active'>"
      : "                   <li>";
  i += "<a href='" + u + "/download.html'>Download</a></li>";
  i +=
    t === "inspirations"
      ? "                   <li class='active'>"
      : "                   <li>";
  i += "<a href='" + u + "/inspirations.html'>Inspirations</a></li>";
  i += "               </ul>";
  i += "           </div>";
  i += "       </div>";
  i += "   </div>";
  i += "</div>";
  document.getElementById("wheelNavBar").innerHTML = i;
  f = new wheelnav("logoWheel");
  f.wheelRadius = 22;
  f.rotateRound = !0;
  f.rotateRoundCount = 1;
  f.animatetime = 500;
  f.createWheel(["", "", "", ""]);
  createFooter();
};
twitterjs = function (n, t, i) {
  var r,
    u = n.getElementsByTagName(t)[0],
    f = /^http:/.test(n.location) ? "http" : "https";
  n.getElementById(i) ||
    ((r = n.createElement(t)),
    (r.id = i),
    (r.src = f + "://platform.twitter.com/widgets.js"),
    u.parentNode.insertBefore(r, u));
};
createFooter = function () {
  var n = "";
  n += "<div class='container marketing'>";
  n +=
    "<a href='https://github.com/softwaretailoring/wheelnav/stargazers' target='_blank' style='background-color: #e7e7e7;'>";
  n += "<div style='display: inline-block;' ";
  n += "data-hybicon='github-starred' ";
  n += "data-hybicon-github-user='softwaretailoring' ";
  n += "data-hybicon-github-repo='wheelnav' ";
  n += "data-hybicon-size='30' ";
  n += "data-hybicon-infomode='right' ";
  n += "data-hybicon-hovermode='switch'>";
  n += "</div>";
  n += "</a>";
  n +=
    "<a href='https://codepen.io/collection/DORero/' target='_blank' style='background-color: #e7e7e7;'>";
  n += "<div style='display: inline-block;' ";
  n += "data-hybicon='codepen-fave' ";
  n += "data-hybicon-size='30' ";
  n += "data-hybicon-infomode='right' ";
  n += "data-hybicon-hovermode='hover' ";
  n += "data-hybicon-infotext='Demo' ";
  n += "data-hybicon-color='black'>";
  n += "</div>";
  n += "</a>";
  n +=
    "<a href='https://twitter.com/intent/tweet?url=https://wheelnavjs.softwaretailoring.net/&hashtags=wheelnavjs&text=Animated circular navigation menus&via=sftwr_tlrng' target='_blank' style='background-color: #e7e7e7;'>";
  n += "<div style='display: inline-block;' ";
  n += "data-hybicon='twitter-bubble' ";
  n += "data-hybicon-size='30' ";
  n += "data-hybicon-infomode='right' ";
  n += "data-hybicon-hovermode='hover' ";
  n += "data-hybicon-infotext='Tweet' ";
  n += "data-hybicon-color='#0c7abf'>";
  n += "</div>";
  n += "</a>";
  n +=
    "<a href='https://stackoverflow.com/questions/tagged/wheelnav.js' target='_blank' style='background-color: #e7e7e7;'>";
  n += "<div style='display: inline-block;' ";
  n += "data-hybicon='stackoverflow-question' ";
  n += "data-hybicon-size='30' ";
  n += "data-hybicon-infomode='right' ";
  n += "data-hybicon-hovermode='hover' ";
  n += "data-hybicon-infotext='Help' ";
  n += "data-hybicon-color='#F48023'>";
  n += "</div>";
  n += "</a>";
  n +=
    "<p class='pull-right copy'>&copy; 2014-2020 <a href='https://softwaretailoring.net' target='_blank'>softwaretailoring.net</a></p>";
  n += "</div>";
  document.getElementById("wheelNavFooter") !== null &&
    (document.getElementById("wheelNavFooter").innerHTML = n);
  new hybicon().parseAll();
  new hybicongithub().parseAll();
};
createTabHandler = function (n, t, i) {
  n.navigateFunction = function () {
    jQuery("#" + t + ' a[href="#' + i + '"]').tab("show");
  };
};
clickcount = function (n) {
  window.location.href = "clickcounter/click.php?id=" + n;
};

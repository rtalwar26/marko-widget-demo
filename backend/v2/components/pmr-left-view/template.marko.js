function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXml = __helpers.x;

  return function render(data, out) {
    out.w("<div class=\"view view-left navbar-through\"><div class=\"navbar\"><div class=\"navbar-inner \"><div class=\"center sliding\">Pool My Ride</div></div></div><div class=\"pages\"><div data-page=\"index-left\" class=\"page\"><div class=\"page-content\"><div class=\"list-block\"><ul><li><div class=\"item-content\"><div class=\"item-inner\"><div class=\"item-title label floating-label\">Source</div><div class=\"item-input\"><input type=\"text\" placeholder name=\"source\"></div></div></div></li><li><div class=\"item-content\"><div class=\"item-inner\"><div class=\"item-title label floating-label\">Destination</div><div class=\"item-input\"><input type=\"text\" name=\"destination\"></div></div></div></li></ul></div>");

    if (false) {
      out.w("<div class=\"content-block-title\">Explore More</div>");
    }

    if (false) {
      out.w("<div class=\"list-block\"><ul><li><a href=\"about.html\" data-view=\".view-main\" class=\"item-link\"><div class=\"item-content\"><div class=\"item-inner\"><div class=\"item-title\">My Company</div></div></div></a></li><li><a href=\"services.html\" data-view=\".view-main\" class=\"item-link\"><div class=\"item-content\"><div class=\"item-inner\"><div class=\"item-title\">Messages</div></div></div></a></li><li><a href=\"#\" data-view=\".view-main\" class=\"back item-link\"><div class=\"item-content\"><div class=\"item-inner\"><div class=\"item-title\">My Carpools</div></div></div></a></li></ul></div>");
    }

    out.w("</div></div></div></div>");
  };
}

(module.exports = require("marko").c(__filename)).c(create);

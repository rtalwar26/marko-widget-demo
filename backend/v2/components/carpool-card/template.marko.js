function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXml = __helpers.x;

  return function render(data, out) {
    out.w("<div class=\"card demo-card-header-pic\"><div style=\"background-image:url(http://graph.facebook.com/10209073260689919/picture?type=large)\" class=\"card-header\"><div class=\"profile-info\"><p class=\"color-blue\">Rajat Talwar</p></div></div><div class=\"card-content\"><div class=\"card-content-inner flex-horizontal\"><div class=\"arrow\">0<br>|<br>|<br>0</div><div class=\"locations\"><p class=\"item-after\">Rajouri Garden </p><p>Gurgaon</p></div></div><a href=\"#\" class=\"floating-button color-pink\"><i class=\"icon icon-forward \"></i></a></div><div class=\"card-footer\"><div class=\"item-title label floating-label\">Posted 2 days ago</div></div></div>");
  };
}

(module.exports = require("marko").c(__filename)).c(create);

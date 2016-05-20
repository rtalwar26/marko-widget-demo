function create(__helpers) {
  var __widgetType = {
          name: "/demo$1.0.0/backend/v2/components/pmr-main-view/index",
          def: function() {
            return require("./");
          }
        },
      __markoWidgets = require("marko-widgets"),
      __widgetAttrs = __markoWidgets.attrs,
      str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXml = __helpers.x,
      __loadTag = __helpers.t,
      w_widget = __loadTag(require("marko-widgets/taglib/widget-tag")),
      attr = __helpers.a,
      attrs = __helpers.as,
      loadTemplate = __helpers.l,
      carpool_card_template = loadTemplate(require.resolve("../carpool-card/template.marko"));

  return function render(data, out) {
    w_widget({
        type: __widgetType,
        _cfg: data.widgetConfig,
        _state: data.widgetState,
        _props: data.widgetProps,
        _body: data.widgetBody,
        renderBody: function renderBody(out, widget) {
          out.w("<div class=\"view view-main navbar-through\"" +
            attr("id", widget.id) +
            attrs(__widgetAttrs(widget)) +
            "><div class=\"navbar\"><div class=\"navbar-inner\"><div class=\"center sliding\">Start searching your co-passengers</div></div></div><div class=\"pages\"><div data-page=\"index-1\" class=\"page\"><div class=\"page-content\"><div class=\"row\"><div class=\"col-100 tablet-33\">");

          carpool_card_template.render({}, out);

          out.w("</div><div class=\"col-100 tablet-33\">");

          carpool_card_template.render({}, out);

          out.w("</div><div class=\"col-100 tablet-33\">");

          carpool_card_template.render({}, out);

          out.w("</div><div class=\"col-100 tablet-33\">");

          carpool_card_template.render({}, out);

          out.w("</div></div></div></div></div></div>");
        }
      }, out);
  };
}

(module.exports = require("marko").c(__filename)).c(create);

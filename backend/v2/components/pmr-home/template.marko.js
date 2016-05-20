function create(__helpers) {
  var __widgetType = {
          name: "/demo$1.0.0/backend/v2/components/pmr-home/index",
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
      pmr_left_view_template = loadTemplate(require.resolve("../pmr-left-view/template.marko")),
      pmr_main_view = __loadTag(require("../pmr-main-view"));

  return function render(data, out) {
    w_widget({
        type: __widgetType,
        _cfg: data.widgetConfig,
        _state: data.widgetState,
        _props: data.widgetProps,
        _body: data.widgetBody,
        renderBody: function renderBody(out, widget) {
          out.w("<div class=\"views theme-cyan \"" +
            attr("id", widget.id) +
            attrs(__widgetAttrs(widget)) +
            ">");

          pmr_left_view_template.render({}, out);

          pmr_main_view({}, out);

          out.w("</div>");
        }
      }, out);
  };
}

(module.exports = require("marko").c(__filename)).c(create);

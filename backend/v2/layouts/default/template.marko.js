function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXml = __helpers.x,
      __loadTag = __helpers.t,
      lasso_slot = __loadTag(require("lasso/taglib/slot-tag")),
      layout_placeholder = __loadTag(require("marko/taglibs/layout/placeholder-tag")),
      lasso_head = __loadTag(require("lasso/taglib/head-tag")),
      lasso_body = __loadTag(require("lasso/taglib/body-tag")),
      init_widgets = __loadTag(require("marko-widgets/taglib/init-widgets-tag")),
      async_fragments = __loadTag(require("marko/taglibs/async/async-fragments-tag")),
      browser_refresh = __loadTag(require("browser-refresh-taglib/refresh-tag"));

  return function render(data, out) {
    out.w("<!doctype html>\n<html lang=\"en\">\n<head>\n\n    <meta charset=\"utf-8\">\n    <meta name=\"apple-mobile-web-app-capable\" content=\"yes\">\n    <meta name=\"mobile-web-app-capable\" content=\"yes\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, minimal-ui\">\n\n    ");

    lasso_slot({
        name: "ios-slot",
        externalStyleAttrs: {
            "device-type": "ios"
          }
      }, out);

    out.w("\n    ");

    lasso_slot({
        name: "material-slot",
        externalStyleAttrs: {
            "device-type": "material"
          }
      }, out);

    out.w("\n    <title>\n        ");

    layout_placeholder({
        name: "title",
        content: data.layoutContent
      }, out);

    out.w("\n    </title>\n\n    \n    ");

    lasso_head({}, out);

    out.w("\n\n\n</head>\n<body>\n\n    ");

    layout_placeholder({
        name: "yield",
        content: data.layoutContent
      }, out);

    out.w("\n\n\n\n");

    lasso_body({}, out);

    out.w("\n\n\n\n");

    init_widgets({
        immediate: true
      }, out);

    out.w("\n\n\n");

    async_fragments({}, out);

    out.w("\n\n\n");

    browser_refresh({
        enabled: "true"
      }, out);

    out.w("\n</body>\n</html>");
  };
}

(module.exports = require("marko").c(__filename)).c(create);

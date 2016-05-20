function create(__helpers) {
  var loadTemplate = __helpers.l,
      default_template = loadTemplate(require.resolve("../../../layouts/default/template.marko")),
      str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXml = __helpers.x,
      __browser_json = require.resolve("./browser.json"),
      __loadTag = __helpers.t,
      lasso_page = __loadTag(require("lasso/taglib/page-tag")),
      layout_use = __loadTag(require("marko/taglibs/layout/use-tag")),
      layout_put = __loadTag(require("marko/taglibs/layout/put-tag")),
      pmr_home = __loadTag(require("../../../components/pmr-home"));

  return function render(data, out) {
    lasso_page({
        packagePath: __browser_json,
        dirname: __dirname,
        filename: __filename
      }, out);

    layout_use({
        __template: default_template,
        getContent: function getContent(__layoutHelper) {
          layout_put({
              into: "title",
              layout: __layoutHelper,
              renderBody: function renderBody(out) {
                out.w("Pool My Ride");
              }
            }, out);

          layout_put({
              into: "yield",
              layout: __layoutHelper,
              renderBody: function renderBody(out) {
                pmr_home({}, out);
              }
            }, out);
        }
      }, out);
  };
}

(module.exports = require("marko").c(__filename)).c(create);

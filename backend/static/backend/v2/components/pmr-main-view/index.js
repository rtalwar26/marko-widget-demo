$rmod.def("/backend/v2/components/pmr-main-view/index", function(require, exports, module, __filename, __dirname) { /**
 * Created by rohittalwar on 20/05/16.
 */
var defineWidget = require('/$/marko-widgets'/*'marko-widgets'*/).defineComponent;
var template = require('/$/marko'/*'marko'*/).load(require.resolve('./template.marko'));
var comp = {
    template: template,
    getTemplateData: function (state, input) {
        return {
            name: input.name
        };
    },
    init: function () {
        var el = this.el; // The root DOM element that the widget is bound to
        console.log('Initializing widget: ' + el.id);
    }
};
module.exports = defineWidget(comp);
//# sourceMappingURL=index.js.map
});
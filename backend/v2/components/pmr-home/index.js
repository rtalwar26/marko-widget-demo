var defineWidget = require('marko-widgets').defineComponent;
var template = require('marko').load(require.resolve('./template.marko'));
var comp = {
    template: template,
    getTemplateData: function (state, input) {
        return {};
    },
    init: function () {
        var el = this.el; // The root DOM element that the widget is bound to
        console.log('Initializing widget: ' + el.id);
    },
    onRender: function () {
        console.log('rendered');
    }
};
module.exports = defineWidget(comp);
//# sourceMappingURL=index.js.map
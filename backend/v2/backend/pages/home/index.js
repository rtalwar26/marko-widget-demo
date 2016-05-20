var template = require('marko').load(require.resolve('./template.marko'));
function get(req, res) {
    template.render({
        name: 'Frank'
    }, res);
    // res.send("hello")
}
exports.get = get;
;
//# sourceMappingURL=index.js.map
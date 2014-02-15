
/**
 * Escape the given `html`.
 *
 * @param {String} html
 * @return {String}
 * @api private
 */
exports.escape = function(html)  {
    return String(html)
        .replace(/&(?!\w+;)/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
};

exports.getContext = function(comment) {
    var ctx = comment.ctx;
    var tags = comment.tags;

};

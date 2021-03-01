
const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
    // eleventyConfig.addPassthroughCopy('src/img')
    // eleventyConfig.addPassthroughCopy('src/admin')
  
    // https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
    eleventyConfig.addFilter('htmlDateString', (dateObj) => {
        return DateTime.fromJSDate(dateObj, {
            zone: 'utc'
        }).toFormat('yy-MM-dd');
    });
  
    eleventyConfig.addFilter("readableDate", dateObj => {
        return DateTime.fromJSDate(dateObj, {
            zone: 'utc'
        }).toFormat("dd-MM-yy");
    });

    return {
        dir: {
            input: "src",
            output: "public"
        }
    }
  
};

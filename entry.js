require("./style.css");
let title = 'Hello';
let description = 'You';
document.write(require("./content.js"));
$('#interpolate').append('let longTitle = `${title} ${description}`');
$('#interpolate-ans').append(`${title} ${description}`)
$('#arrays').append('<p>let colors = ["Green", "White", "Black"];</p>  <p>let [ first, ...rest] = colors</p>  <p>console.log(first, rest);</p>')
$('#array-ans').append('Green ["White", "Black"]')
$('#sets').append(`
let colors = new Set();
colors.add("Red");
colors.add("Blue");
colors.add("Red");
console.log(colors.size);
`)

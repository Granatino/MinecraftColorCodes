const input = document.getElementById("input");
const output = document.getElementById("output");

const colors = new Map();
colors.set("0", "BLACK");
colors.set("1", "DARK_BLUE");
colors.set("2", "DARK_GREEN");
colors.set("3", "DARK_AQUA");
colors.set("4", "DARK_RED");
colors.set("5", "DARK_PURPLE");
colors.set("6", "GOLD");
colors.set("7", "GRAY");
colors.set("8", "DARK_GRAY");
colors.set("9", "BLUE");
colors.set("a", "GREEN");
colors.set("b", "AQUA");
colors.set("c", "RED");
colors.set("d", "PINK");
colors.set("e", "YELLOW");
colors.set("f", "WHITE");
 
function convertColor(text) {
    text = text.replace("&l", "");
    let args = text.split("&");
    if (text[0] === "&") args.shift();
    const result = [];

    if (args.length === 0) return text;

    for (let i = 0; i < args.length; i++) {
        const color = colors.get(args[i][0]);
        if (i === 0 && text[0] !== "&" || !color || args[i].length === 1) result.push(args[i]);
        else result.push(`<span class=\"${color}\">${args[i].slice(1)}</span>`);
    }

    return result.join("");
}

input.onkeyup = () => output.innerHTML = convertColor(input.value);

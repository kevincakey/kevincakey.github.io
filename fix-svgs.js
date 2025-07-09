const fs = require("fs");
const path = require("path");

const dir = "./src/assets/icons";

fs.readdirSync(dir).forEach((file) => {
  if (file.endsWith(".svg")) {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, "utf8");
    // Remove width and height attributes from the <svg ...> tag
    content = content.replace(/(<svg[^>]*)(\\swidth="[^"]*")/gi, "$1");
    content = content.replace(/(<svg[^>]*)(\\sheight="[^"]*")/gi, "$1");
    fs.writeFileSync(filePath, content, "utf8");
    console.log(`Fixed: ${file}`);
  }
});

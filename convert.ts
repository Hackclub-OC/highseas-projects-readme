// Typescript file to convert json data into a proper readme file 
import * as fs from "fs";

// Function to generate README content from JSON data
function generateReadme(data: any): string {
  let content = `# ${data.title}\n\n`;
  content += `> 🚀 ${data.description}\n\n`;
  
  content += `## 🌟 Featured Projects\n\n`;
  Object.keys(data.projects).forEach((key) => {
    const project = data.projects[key];
    content += `### 🚀 ${key}\n\n`;
    content += `> **${project.description}**\n\n`;
    content += `- 🌍 **Live Demo:** [Try it here](${project.liveLink})\n`;
    content += `- 🛠 **Source Code:** [GitHub Repository](${project.repoLink})\n`;
    content += `- 🖼️ **Preview:** ![${key}](${project.imageLink})\n\n`;
    content += `---\n\n`;
  });

  content += `## 📬 Get In Touch\n\n`;
  content += `- **GitHub:** [@${data.author.github}](https://github.com/${data.author.github})\n\n`;
  
  content += `🚀 Happy Coding! 💻✨\n`;

  return content;
}

// Read JSON data
const jsonData = JSON.parse(fs.readFileSync("data.json", "utf-8"));

// Generate README content
const readmeContent = generateReadme(jsonData);

// Write to README.md
fs.writeFileSync("README.md", readmeContent, "utf-8");

console.log("✅ README.md successfully generated!");

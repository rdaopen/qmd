import fs from "fs";
import { execSync } from "child_process";

const OWNER = "rdaopen";
const REPO = "quick_downloader";
const OUT = "public/releases.json";

async function main() {
  try {
    const api = `https://api.github.com/repos/${OWNER}/${REPO}/releases`;
    const res = await fetch(api, {
      headers: { "User-Agent": "generate-releases-script" },
    });
    if (!res.ok) throw new Error("GitHub API error " + res.status);
    const data = await res.json();
    fs.mkdirSync("public", { recursive: true });
    fs.writeFileSync(OUT, JSON.stringify(data, null, 2));
    console.log("Wrote", OUT);
  } catch (err) {
    console.error("Failed to generate releases.json", err);
    process.exit(1);
  }
}

main();

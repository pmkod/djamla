import {
  mkdirSync,
  readdirSync,
  readFileSync,
  writeFileSync,
  unlinkSync,
  rmSync,
} from "node:fs";

import path from "node:path";

const reactUiDirPath = path.join(process.cwd(), "../components/react/src");

const toCamelCase = (str: string): string => {
  return str
    .replace(/[-_\s]+(.)?/g, (_, c) => (c ? c.toUpperCase() : ""))
    .replace(/^(.)/, (c) => c.toLowerCase());
};

// const componentsDirs = ["core"];

const coreComponentsDirName = "core";
const coreExampleComponentsDirName = "core-examples";
const blockComponentsDirName = "blocks";

const allComponentDirs = [
  coreComponentsDirName,
  coreExampleComponentsDirName,
  blockComponentsDirName,
];

const allUiLibDirPaths = [reactUiDirPath];
for (const uiDirPath of allUiLibDirPaths) {
  const componentDirs = readdirSync(uiDirPath);
  for (const componentDirName of componentDirs) {
    if (allComponentDirs.includes(componentDirName)) {
      const componentFiles = readdirSync(
        path.join(uiDirPath, componentDirName),
      );
      const componentCodesDirName = componentDirName + "-code";
      const componentCodesDirPath = path.join(uiDirPath, componentCodesDirName);
      try {
        rmSync(componentCodesDirPath, {
          recursive: true,
        });
      } catch (error) {}

      mkdirSync(componentCodesDirPath);

      for (const componentFileName of componentFiles) {
        const componentFileBuffer = readFileSync(
          path.join(uiDirPath, componentDirName, componentFileName),
        );

        const componentCodeFilePath = path.join(
          uiDirPath,
          componentCodesDirName,
          componentFileName,
        );

        try {
          unlinkSync(componentCodeFilePath);
        } catch (error) {}

        writeFileSync(
          componentCodeFilePath,
          `export const ${toCamelCase(path.parse(componentFileName).name)}Code = \`${componentFileBuffer.toString().replaceAll("`", "\\`").replaceAll("$", "\\$")}\``,
        );
      }
    }
  }
}

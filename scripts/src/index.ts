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

// const componentsDirs = ["core"];

const coreComponentsDirName = "core";
const coreComponentCodesDirName = "core-code";

const allUiLibDirPaths = [reactUiDirPath];
for (const uiDirPath of allUiLibDirPaths) {
  const componentDirs = readdirSync(uiDirPath);
  for (const componentDir of componentDirs) {
    if (componentDir === coreComponentsDirName) {
      const coreComponentFiles = readdirSync(
        path.join(uiDirPath, coreComponentsDirName)
      );
      const coreComponentCodesDirPath = path.join(
        uiDirPath,
        coreComponentCodesDirName
      );
      try {
        rmSync(coreComponentCodesDirPath, {
          recursive: true,
        });
      } catch (error) {}

      mkdirSync(coreComponentCodesDirPath);

      for (const coreComponentFileName of coreComponentFiles) {
        const componentFileBuffer = readFileSync(
          path.join(uiDirPath, coreComponentsDirName, coreComponentFileName)
        );

        const coreComponentCodeFilePath = path.join(
          uiDirPath,
          coreComponentCodesDirName,
          coreComponentFileName
        );

        try {
          unlinkSync(coreComponentCodeFilePath);
        } catch (error) {}

        writeFileSync(
          coreComponentCodeFilePath,
          `export const ${path.parse(coreComponentFileName).name}Code = \`${componentFileBuffer}\``
        );
      }
    }
  }
}

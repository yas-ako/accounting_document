module.exports = {
  size: "a5",
  title: "会計班引継ぎ資料",
  theme: "css/style.css",
  // theme: "css",
  language: "ja",
  author: "第75期記念祭幹部",
  entryContext: "./manuscripts",
  entry: [
    {
      path: "0_frontmatter.md",
      rel: "contents",
    },
  ],
  output: ".vivliostyle/output.pdf",
  workspaceDir: ".vivliostyle/",
};

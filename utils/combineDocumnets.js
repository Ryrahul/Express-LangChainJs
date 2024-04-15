export function combineDocs(docs) {
  return docs.map((doc) => doc.pageContent).join("\n\n");
}

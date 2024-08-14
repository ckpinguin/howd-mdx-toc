export interface HeadingData {
  title: string
  level: number
}

export function extractMdxHeadings(mdxContent: string): Array<HeadingData> {
  const headings: Array<HeadingData> = []

  const headingMatcher = /^(#+)\s(.+)$/gm

  let match = headingMatcher.exec(mdxContent)
  while (match !== null) {
    const level = match[1].length
    const title = match[2].trim()

    if (level === 2 || level === 3) {
      headings.push({ title, level })
    }
    // get next match (must be outside if statement to avoid infinite loop)
    match = headingMatcher.exec(mdxContent)
  }
  return headings
}

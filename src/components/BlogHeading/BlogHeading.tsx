import clsx from "clsx"
import React from "react"

import { generateHeadingSlug } from "@/helpers/headings-helpers"

import styles from "./BlogHeading.module.css"

export type BlogHeadingProps = {
  level: 2 | 3
} & React.ComponentProps<"h2">

function BlogHeading({
  level,
  className,
  children,
  ...delegated
}: BlogHeadingProps) {
  const Tag: "h2" | "h3" = `h${level}`
  const id = generateHeadingSlug(children)

  return (
    <Tag
      id={id}
      className={clsx(className, styles[`heading${level}`])}
      {...delegated}>
      {children}
    </Tag>
  )
}

export default BlogHeading

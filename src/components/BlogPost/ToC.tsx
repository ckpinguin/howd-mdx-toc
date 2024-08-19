import { get } from "http"
import { MDXRemote } from "next-mdx-remote/rsc"
import React from "react"

import { generateHeadingSlug, HeadingData } from "@/helpers/headings-helpers"

import styles from "./ToC.module.css"

type ToCProps = { headings: Array<HeadingData> }

function ToC({ headings }: ToCProps) {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Contents</h2>
      <nav className={styles.nav}>
        {headings.map(({ title, level, id }) => {
          return (
            // a `span` for now. Will become an `a` later.
            <a
              href={`#${id}`}
              // this key assumes no duplicate heading titles
              key={title}
              className={styles[`heading${level}`]}>
              <MDXRemote source={title} />
            </a>
          )
        })}
      </nav>
    </div>
  )
}

export default ToC

export interface JsonLdProps {
  /** A single schema object or an array of schemas */
  data: Record<string, unknown> | Array<Record<string, unknown>>
  /**
   * How to render multiple schemas:
   * - "graph": wraps in a single @graph (default)
   * - "separate": renders separate script tags per schema
   */
  mode?: "graph" | "separate"
}

export function JsonLd({ data, mode = "graph" }: JsonLdProps) {
  if (!data) return null

  if (!Array.isArray(data)) {
    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      />
    )
  }

  if (mode === "separate") {
    return (
      <>
        {data.map((item, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
          />
        ))}
      </>
    )
  }

  // Graph mode: wrap in @graph
  const graphData = {
    "@context": "https://schema.org",
    "@graph": data.map((d) => {
      const { "@context": _, ...rest } = d
      return rest
    }),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graphData) }}
    />
  )
}

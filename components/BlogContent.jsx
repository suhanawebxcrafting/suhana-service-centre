'use client'

import { useMemo } from 'react'

/**
 * Renders markdown-formatted blog content with beautiful, 
 * well-structured typography and colors.
 * Supports: ## headings, ### subheadings, **bold**, *italic*,
 * bullet lists (-/•), numbered lists, and paragraphs.
 */
export default function BlogContent({ content }) {
  const renderedContent = useMemo(() => {
    if (!content) return []

    const lines = content.split('\n')
    const elements = []
    let currentList = []
    let listType = null // 'ul' or 'ol'
    let key = 0

    const flushList = () => {
      if (currentList.length > 0) {
        if (listType === 'ol') {
          elements.push(
            <ol key={`ol-${key++}`} className="blog-ordered-list">
              {currentList.map((item, i) => (
                <li key={i}>{renderInline(item)}</li>
              ))}
            </ol>
          )
        } else {
          elements.push(
            <ul key={`ul-${key++}`} className="blog-unordered-list">
              {currentList.map((item, i) => (
                <li key={i}>{renderInline(item)}</li>
              ))}
            </ul>
          )
        }
        currentList = []
        listType = null
      }
    }

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim()

      // Skip empty lines (don't flush lists so they can span across empty lines)
      if (!line) {
        continue
      }

      // H2 heading (##)
      if (line.startsWith('## ')) {
        flushList()
        const text = line.replace(/^##\s+/, '').replace(/\*\*/g, '')
        elements.push(
          <h2 key={`h2-${key++}`} className="blog-h2">
            {text}
          </h2>
        )
        continue
      }

      // H3 heading (###)
      if (line.startsWith('### ')) {
        flushList()
        const text = line.replace(/^###\s+/, '').replace(/\*\*/g, '')
        elements.push(
          <h3 key={`h3-${key++}`} className="blog-h3">
            {text}
          </h3>
        )
        continue
      }

      // H4 heading (####)
      if (line.startsWith('#### ')) {
        flushList()
        const text = line.replace(/^####\s+/, '').replace(/\*\*/g, '')
        elements.push(
          <h4 key={`h4-${key++}`} className="blog-h4">
            {text}
          </h4>
        )
        continue
      }

      // Horizontal rule
      if (line === '---' || line === '***' || line === '___') {
        flushList()
        elements.push(<hr key={`hr-${key++}`} className="blog-hr" />)
        continue
      }

      // Blockquote
      if (line.startsWith('> ')) {
        flushList()
        const text = line.replace(/^>\s+/, '')
        elements.push(
          <blockquote key={`bq-${key++}`} className="blog-blockquote">
            {renderInline(text)}
          </blockquote>
        )
        continue
      }

      // Unordered list items (-, *, •)
      const ulMatch = line.match(/^[-*•]\s+(.+)/)
      if (ulMatch) {
        if (listType === 'ol') flushList()
        listType = 'ul'
        currentList.push(ulMatch[1])
        continue
      }

      // Ordered list items (1. 2. etc)
      const olMatch = line.match(/^\d+\.\s+(.+)/)
      if (olMatch) {
        if (listType === 'ul') flushList()
        listType = 'ol'
        currentList.push(olMatch[1])
        continue
      }

      // Regular paragraph
      flushList()
      elements.push(
        <p key={`p-${key++}`} className="blog-paragraph">
          {renderInline(line)}
        </p>
      )
    }

    flushList()
    return elements
  }, [content])

  return (
    <div className="blog-content">
      {renderedContent}
    </div>
  )
}

/**
 * Render inline markdown: **bold**, *italic*, [links](url)
 */
function renderInline(text) {
  if (!text) return text

  let cleaned = text

  const parts = []
  let remaining = cleaned
  let partKey = 0

  while (remaining.length > 0) {
    // Bold: **text**
    const boldMatch = remaining.match(/\*\*(.+?)\*\*/)
    // Italic: *text*
    const italicMatch = remaining.match(/(?<!\*)\*(?!\*)(.+?)(?<!\*)\*(?!\*)/)
    // Link: [text](url)
    const linkMatch = remaining.match(/\[(.+?)\]\((.+?)\)/)

    // Find earliest match
    let earliest = null
    let earliestIndex = remaining.length

    if (boldMatch && boldMatch.index < earliestIndex) {
      earliest = { type: 'bold', match: boldMatch }
      earliestIndex = boldMatch.index
    }
    if (italicMatch && italicMatch.index < earliestIndex) {
      earliest = { type: 'italic', match: italicMatch }
      earliestIndex = italicMatch.index
    }
    if (linkMatch && linkMatch.index < earliestIndex) {
      earliest = { type: 'link', match: linkMatch }
      earliestIndex = linkMatch.index
    }

    if (!earliest) {
      parts.push(remaining)
      break
    }

    // Add text before the match
    if (earliestIndex > 0) {
      parts.push(remaining.substring(0, earliestIndex))
    }

    // Add the formatted element
    if (earliest.type === 'bold') {
      parts.push(
        <strong key={`b-${partKey++}`} className="font-bold text-gray-900">
          {earliest.match[1]}
        </strong>
      )
      remaining = remaining.substring(earliestIndex + earliest.match[0].length)
    } else if (earliest.type === 'italic') {
      parts.push(
        <em key={`i-${partKey++}`} className="italic text-gray-600">
          {earliest.match[1]}
        </em>
      )
      remaining = remaining.substring(earliestIndex + earliest.match[0].length)
    } else if (earliest.type === 'link') {
      parts.push(
        <a key={`a-${partKey++}`} href={earliest.match[2]} target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold underline decoration-blue-300 hover:decoration-blue-600 transition-colors">
          {earliest.match[1]}
        </a>
      )
      remaining = remaining.substring(earliestIndex + earliest.match[0].length)
    }
  }

  return parts.length === 1 ? parts[0] : parts
}

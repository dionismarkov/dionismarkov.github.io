import type { BlogPost } from './blog-data'

export function generateBlogPostStructuredData(post: BlogPost, url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: `${url}/og-images/${post.slug}.png`,
    datePublished: new Date(post.date).toISOString(),
    dateModified: new Date(post.date).toISOString(),
    author: {
      '@type': 'Person',
      name: post.author.name,
      url: 'https://github.com/dionismarkov',
    },
    publisher: {
      '@type': 'Person',
      name: 'Dionis Markov',
      url: 'https://dionismarkov.github.io',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${url}/blog/${post.slug}`,
    },
    articleSection: post.category,
    keywords: post.tags.join(', '),
    timeRequired: post.readTime,
  }
}

export function generateWebsiteStructuredData(url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Dionis Markov',
    description: "A digital workshop where code meets curiosity. Experiments, prototypes, and open-source artifacts by Dionis Markov.",
    url: url,
    author: {
      '@type': 'Person',
      name: 'Dionis Markov',
      url: 'https://github.com/dionismarkov',
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${url}/blog?search={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  }
}

export function generatePersonStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Dionis Markov',
    url: 'https://dionismarkov.github.io',
    image: 'https://dionismarkov.github.io/developer-portrait.png',
    sameAs: [
      'https://github.com/dionismarkov',
      'https://x.com/dionismarkovv?s=11',
      'https://www.linkedin.com/in/dionis-markov-5a296741b?utm_source=share_via&utm_content=profile&utm_medium=member_ios',
    ],
    jobTitle: 'Founder & Full-Stack Engineer',
    worksFor: {
      '@type': 'Organization',
      name: 'ValtheraLabs',
      url: 'https://github.com/ValtheraLabs',
    },
  }
}

export function generateBreadcrumbStructuredData(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

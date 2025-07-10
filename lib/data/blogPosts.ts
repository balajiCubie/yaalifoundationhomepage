
export interface Author {
  name: string;
  bio: string;
  avatar: string;
}

export interface Authors {
  [key: string]: Author;
}

export const authors: Authors = {
  "john-doe": {
    name: "John Doe",
    bio: "John is a passionate advocate for environmental sustainability and community development.",
    avatar: "/avatars/john-doe.jpg"
  },
  "jane-smith": {
    name: "Jane Smith",
    bio: "Jane is an expert in educational reform and empowering youth through innovative learning programs.",
    avatar: "/avatars/jane-smith.jpg"
  }
};

export interface Post {
  slug: string;
  title: string;
  summary: string;
  date: string;
  category: string;
  author: keyof Authors;
  content: string;
  heroImage?: string;
}

export const blogPosts: Post[] = [
  {
    slug: "clean-water-rural-development",
    title: "The Importance of Clean Water in Rural Development",
    summary: "Access to clean water is fundamental for health, education, and economic stability. Learn about our initiatives.",
    date: "July 1, 2025",
    category: "Water",
    author: "john-doe",
    heroImage: "/hero.jpg",
    content: `
# The Importance of Clean Water in Rural Development

This is the detailed content for "The Importance of Clean Water in Rural Development". Access to clean water is fundamental for health, education, and economic stability. Learn about our initiatives.

## The Challenge

Millions worldwide lack access to safe drinking water, leading to preventable diseases and hindering development.

## Our Solution

We implement sustainable water solutions, including well drilling, water purification systems, and community education programs.

### Block Embed Example (Image)
![Water Project](https://via.placeholder.com/600x300?text=Water+Project+Image)

This image represents a typical water project we undertake.

### Block Embed Example (Video - Placeholder)
You can imagine embedding a video here, for example from YouTube:
\`\`\`html
<iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-in; gyroscope; picture-in-picture" allowfullscreen></iframe>
\`\`\`
*Note: This is a placeholder for a video embed. In a real MDX setup, you might have custom components for this.*
    `
  },
  {
    slug: "reforestation-fresh-air",
    title: "Reforestation: A Breath of Fresh Air for Our Planet",
    summary: "Discover how planting trees helps combat climate change and supports biodiversity.",
    date: "June 20, 2025",
    category: "Environment",
    author: "jane-smith",
    heroImage: "/hero.jpg",
    content: `
# Reforestation: A Breath of Fresh Air for Our Planet

This is the detailed content for "Reforestation: A Breath of Fresh Air for Our Planet". Discover how planting trees helps combat climate change and supports biodiversity.

## Why Reforestation Matters

Trees absorb carbon dioxide, produce oxygen, prevent soil erosion, and provide habitats for wildlife.

## Our Reforestation Projects

We work with local communities to plant native trees and restore degraded ecosystems.

### Block Embed Example (Quote)
> "Heal the earth, heal our future." - Unknown

This quote inspires our work in environmental conservation.
    `
  },
  {
    slug: "empowering-through-education",
    title: "Empowering the Next Generation Through Education",
    summary: "Our education hubs are transforming lives by providing essential skills and knowledge.",
    date: "June 10, 2025",
    category: "Education",
    author: "john-doe",
    heroImage: "/hero.jpg",
    content: `
# Empowering the Next Generation Through Education

This is the detailed content for "Empowering the Next Generation Through Education". Our education hubs are transforming lives by providing essential skills and knowledge.

## The Power of Knowledge

Education is a powerful tool for breaking the cycle of poverty and fostering sustainable development.

## Our Education Programs

We provide access to quality education, vocational training, and digital literacy programs for underserved communities.

### Block Embed Example (List)
Our key educational areas include:
*   Literacy and Numeracy
*   Vocational Skills Training
*   Digital Literacy
*   Environmental Awareness
    `
  }
];

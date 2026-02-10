# chulbuji.com - Astro Site

> 생각을 구조로, 구조를 실행으로

AI와 함께 흐릿한 생각을 선명하게 만드는 공간입니다.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev
# → http://localhost:4321

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📂 Project Structure

```
src/
├── content/          # Markdown content (ko/en)
│   ├── ko/
│   │   ├── log/      # Korean blog posts
│   │   └── pages/    # Korean static pages
│   └── en/
│       ├── log/      # English blog posts
│       └── pages/    # English static pages
├── layouts/          # Page layouts
├── components/       # Reusable components
├── pages/            # Route pages
├── utils/            # Utilities (i18n, etc.)
└── styles/           # Global styles

public/               # Static assets
```

## 🌍 i18n Support

- **Korean** (default): `/`
- **English**: `/en`

URLs automatically include language prefix for non-default languages.

## 📝 Adding Content

### New Blog Post

Create markdown file in `src/content/ko/log/` or `src/content/en/log/`:

```markdown
---
title: "Post Title"
date: 2025-02-10
excerpt: "Brief summary"
tags: ["tag1", "tag2"]
published: true
---

Your content here...
```

### New Static Page

1. Create markdown in `src/content/ko/pages/` or `src/content/en/pages/`
2. Create corresponding `.astro` file in `src/pages/`

## 🔧 Tech Stack

- **Framework**: Astro 5.17.1
- **Content**: Markdown + Content Collections
- **Styling**: Scoped CSS + Global styles
- **i18n**: Custom implementation
- **Build**: Static site generation (SSG)

## 📊 Features

- ✅ Bilingual support (Korean/English)
- ✅ SEO optimized (meta tags, sitemap, alternate links)
- ✅ Content Collections for type-safe content
- ✅ Responsive design
- ✅ Fast builds with Astro
- ✅ Zero JavaScript by default
- ✅ Automatic sitemap generation

## 🎯 Commands

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Install dependencies                             |
| `npm run dev`             | Start dev server at `localhost:4321`             |
| `npm run build`           | Build production site to `./dist/`               |
| `npm run preview`         | Preview build locally                            |
| `npm run astro ...`       | Run Astro CLI commands                           |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 📖 Documentation

- [Astro Documentation](https://docs.astro.build)
- [Content Collections Guide](https://docs.astro.build/en/guides/content-collections/)
- [Migration Guide](./MIGRATION-COMPLETE.md)

## 🐛 Known Issues

- Content Collections JSON schema warnings on first build (normal)
- Projects collection empty (content pending)

## 📄 License

Private project.

## 🙏 Credits

Built with [Astro](https://astro.build) and Claude AI collaboration.

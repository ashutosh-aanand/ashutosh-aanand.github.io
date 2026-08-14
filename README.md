# ashutosh-aanand.github.io

Personal site — Jekyll, custom theme, no theme gem.

## Layout

```
_config.yml            site settings, social links, plugins
_layouts/              default · home · page · post
_includes/             head · header · footer
_posts/                published posts (YYYY-MM-DD-slug.md)
_drafts/               unfinished posts — never published
assets/css/main.scss   the whole theme, ~600 lines, CSS custom properties
assets/js/main.js      theme toggle + by-date/by-tag switch
index.html             homepage intro + post listing
about.md  projects.md  standalone pages
```

## Writing a post

Create `_posts/2026-09-01-my-title.md`:

```markdown
---
title: "My title"
date: 2026-09-01
tags: [technical]
excerpt: "One line that shows up in search results and the RSS feed."
---

Body in Markdown.
```

The first tag shows as the pill in the listing. Tags automatically populate the
**By tag** view — no config needed.

Anything in `_drafts/` is invisible to a normal build. To see drafts locally:

```bash
bundle exec jekyll serve --drafts
```

To publish a draft, move it to `_posts/` and rename it with a date prefix.

## Running it locally

Ruby isn't installed on this machine yet. One-time setup:

```bash
winget install RubyInstallerTeam.RubyWithDevKit.3.3
```

Reopen the terminal, then from this folder:

```bash
bundle install
```

```bash
bundle exec jekyll serve --livereload
```

Site comes up at <http://127.0.0.1:4000>.

## Deploying

Repo → Settings → Pages → **Source: GitHub Actions**. Then every push to `main`
builds and deploys via `.github/workflows/pages.yml`. No local Ruby needed.

The repo name decides the URL:

| Repo name | Site URL |
| --- | --- |
| `ashutosh-aanand.github.io` | `https://ashutosh-aanand.github.io/` |
| anything else | `https://ashutosh-aanand.github.io/<repo-name>/` |

A user site needs the repo named **exactly** `<username>.github.io` — the
username here is `ashutosh-aanand`, hyphen included. The workflow passes the
correct `--baseurl` either way, so links don't break; `baseurl` stays empty in
`_config.yml` so local `jekyll serve` runs at the root.

For a custom domain, add a `CNAME` file containing the domain, point the DNS at
GitHub Pages, and update `url:` in `_config.yml`.

## Customising

Colours, fonts and spacing are all CSS custom properties at the top of
`assets/css/main.scss` — `:root` for light, `[data-theme="dark"]` for dark.
Change `--accent` and the whole site follows.

## To do

- [ ] Drop the resume PDF at `assets/ashutosh-anand-resume.pdf` (the nav link
      already points there)
- [ ] Finish the two draft posts — they have `TODO` markers and a draft banner
- [ ] Replace `assets/favicon.svg` if you want something other than the "A"

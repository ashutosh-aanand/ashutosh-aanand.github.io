source "https://rubygems.org"

gem "jekyll", "~> 4.3"

group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.17"
  gem "jekyll-seo-tag", "~> 2.8"
  gem "jekyll-sitemap", "~> 1.4"
end

# Ruby 3.x no longer ships webrick, which `jekyll serve` needs.
gem "webrick", "~> 1.8"

# Windows / JRuby timezone data.
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

# Faster file watching on Windows.
gem "wdm", "~> 0.2", platforms: [:mingw, :x64_mingw, :mswin]

Repository for [bmaupin.github.io](https://bmaupin.github.io/)

## Development

#### Running the site locally

1. Setup

   1. Install Ruby

      (Includes bundle, gem, and header files for installing native modules)

      ```
      sudo apt install ruby ruby-bundler ruby-dev
      ```

   1. Install and configure Jekyll

      [https://help.github.com/articles/setting-up-your-github-pages-site-locally-with-jekyll/](https://help.github.com/articles/setting-up-your-github-pages-site-locally-with-jekyll/)

      ```
      bundle install
      ```

1. Running Jekyll

   ```
   bundle exec jekyll serve --livereload
   ```

#### Updating gems

This is particularly useful if GitHub bugs you that you have a security vulnerability in one of your dependencies

```
rm Gemfile.lock
bundle install
```

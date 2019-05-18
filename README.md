# Init Conference 2019

This repository contains source files for [Init Conference 2019](http://initconf.org/) website.

## Dev setup

1. Install [Hugo](https://gohugo.io/getting-started/installing/) Extended
    - On macOS: `brew install hugo` - might not install extended version
    - On Windows: `choco install hugo-extended`
    - On Linux: `snap install hugo --channel=extended`
    - We need [extended version](https://gohugo.io/troubleshooting/faq/) for SASS support
    - Binaries can be downloaded from [GitHub](https://gohugo.io/troubleshooting/faq/)
2. Create `/hugo` root folder and open it in shell.
3. Clone `website` into `/hugo/init-conference`:
    - `git clone https://github.com/init-conference/website init-conference`
4. *[Not yet ready]* Clone GitHub Pages repository `init-conference.github.io` into `hugo/init-conference.github.io`:
    - `git clone https://github.com/init-conference/init-conference.github.io.git`
5. Go to `/hugo/init-conference`:
    - `cd init-conference`
6. Open the site in editor (i.e. Visual Studio Code):
    - `code .`
7. Run Hugo server
    - `hugo server`
    - It will watch for changes in files and refresh the browser.

## Source files and folders

+ `themes/init/` - contains the conference theme
+ `themes/init/assets/sass/main.scss` - main SCSS file that is compiled to CSS - *we might split this into multiple includes*
+ `themes/init/layouts/partials/` - a list of partial files for each section of the page - here you can change the page content
+ `themes/init/layouts/index.html` - main layout file that combines all the partials
+ `themes/init/static/` - all static files (CSS, JS, fonts, images)
+ `config.toml` - main Hugo config file - contains parameters used on pages and partials

## Building output

*NOTE: Output will be created once the first draft of the site is ready*

1. Open `/hugo/init-conference` folder with shell
2. Run `hugo -d ../init-conference.github.io`
3. Go there: `cd ../init-conference.github.io`
4. Do commit and push:
    - `git commit -m 'New version message'`
    - `git push origin master`

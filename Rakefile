abort('Please run this using `bundle exec rake`') unless ENV["BUNDLE_BIN_PATH"]
require 'html-proofer'

task :default => ["serve:dev"]

namespace :build do

    desc "build development site"
    task :dev => [:clean] do
        sh "bundle exec jekyll build --drafts --config _config.yml,_config-dev.yml"
        sh "npm run sw-manifest"
    end

    desc "build production site"
    task :prod => [:clean] do
        sh "JEKYLL_ENV=production bundle exec jekyll build --config=_config.yml"
        sh "npm run sw-manifest"
    end
end

namespace :serve do

    desc "serve development site"
    task :dev => [:clean] do
        sh "bundle exec jekyll serve --drafts --config _config.yml,_config-dev.yml"
        sh "npm run sw-manifest"
    end

    desc "serve production site"
    task :prod => [:clean] do
        sh "JEKYLL_ENV=production bundle exec jekyll serve --config=_config.yml"
        sh "npm run sw-manifest"
    end
end

desc "cleans the output directory"
    task :clean do
    sh "bundle exec jekyll clean"
end

# rake test
desc "build and test website"
task :test => ["build:prod"] do
    HTMLProofer.check_directory("_site", {
        :href_ignore=> ['http://localhost:4000'], 
        http_status_ignore: [999],
        :verbose => true
    }).run
end

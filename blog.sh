ruby -rubygems -e 'require "jekyll-import";
    JekyllImport::Importers::WordPress.run({
      "dbname"   => "wordpress",
      "user"     => "root",
      "password" => "",
      "host"     => "localhost",
      "table_prefix"   => "wp_",
      "clean_entities" => true,
      "comments"       => true,
      "categories"     => true,
      "tags"           => true,
      "more_excerpt"   => true,
      "more_anchor"    => true,
      "status"         => ["publish"]
    })'

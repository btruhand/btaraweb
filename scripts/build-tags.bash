#!/bin/bash

find . -type f -iregex ".*\.js$" -not -path "./node_modules/*" -not -path "./bower_components/*" -exec jsctags {} -f \; | sed '/^$/d' | sort > ./tags

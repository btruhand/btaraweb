#!/bin/bash

shopt -s extglob

java -jar $YUICOMPRESSOR -o '.css$:.min.css' public/styles/!(*.min.css)
java -jar $YUICOMPRESSOR -o '.js$:.min.js' public/js/!(*.min.js)

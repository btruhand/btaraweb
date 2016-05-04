#!/bin/bash

shopt -s extglob

if [ $# -eq 0 ]
then
	java -jar $YUICOMPRESSOR -o '.css$:.min.css' public/styles/!(*.min.css)
	java -jar $YUICOMPRESSOR -o '.js$:.min.js' public/js/!(*.min.js)
elif [ "$1" == "private" ]
then
	java -jar $YUICOMPRESSOR -o '.css$:.min.css' private/styles/!(*.min.css)
fi

#!/bin/sh
#/Users/x/Desktop/Docker - Archive/docker.node/app/public/

rm -rf '/Users/x/Desktop/Docker - Archive/docker.node/app/public/include.txt';

for file in $( find 'app/modules' -type f -name '*.js' )
	do
        file_name=${file%.js} #Must remove .js from the end!

		echo -e "'${file_name}'," >> '/Users/x/Desktop/Docker - Archive/docker.node/app/public/include.txt'
	done
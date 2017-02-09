#!/bin/bash
timestamp=$(date +%F_%T)
list=$(ls *.js)
edit=$(sed -e "/@author/s/$/ $USER/" -e "/@date/s/$/ $timestamp/" header.txt)

for entry in $list; do
    echo -e "$edit\n$(cat $entry)\n" > $entry
done

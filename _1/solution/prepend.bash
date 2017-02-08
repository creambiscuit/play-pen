#!/bin/bash
# title                 : prepend
# description           : prepends the header file to the javascript files in the executed directory
# author                : mcgoo
# date                  : YYYY.MM.DD
# usage                 : ./prepend.sh
# notes                 :
# =========================================================================================================
for FILE in $(ls *.js);
    do echo -e "$(sed -e "/@author/s/$/ $USER/" -e "/@date/s/$/ $(date)/" header.txt)\n$(cat $FILE)" > $FILE;
done

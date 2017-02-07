timestamp=$(date +%F_%T)
timeOfDay=$(date "+%H")
if [[ $timeOfDay -lt 12 ]]; then
	echo "Good Morning, $USER"
elif [[ $timeOfDay -lt 16 ]]; then
		echo "Good Afternoon, $USER"
else
	echo "Good Evening, $USER"
fi
initDate="@date"
updatedDate="$initDate $timestamp"
initAuthor="@author"
updatedAuthor="$initAuthor $USER"
echo "please enter the file name you want to merge with the header file"
read fileName
headerFile="header.txt"
newFileName="new_$fileName"
cat $headerFile $fileName > $newFileName
echo "The new file name is $newFileName"
sed -i "" "s/$initDate/$updatedDate/g" $newFileName
sed -i "" "s/$initAuthor/$updatedAuthor/g" $newFileName
var numArray = [];
var formatArray;
document.querySelector('.show').addEventListener('click', function () {
    showMultiples();
    convertArray();
    showArray();
});

function showMultiples()
{
    for (var i=1; i<=1000; i++)
    {
        if(i%5==0 && i%7!=0)
        {
            numArray.push(i+' - Ziggy Stardust');
            console.log(numArray[i-1]);
        }
        else if(i%7==0 && i%5!=0)
        {
            numArray.push(i+' - David Bowie');
            console.log(numArray[i-1]);
        }
        else if(i%5==0 && i%7==0)
        {
            numArray.push(i+' - Ziggy Stardust David Bowie');
        }
        else
        {
            numArray.push(i);
            console.log(numArray[i-1]);
        }
    }
}

function convertArray() {
    formatArray = numArray.join('<br>');
}

function showArray() {
        document.querySelector('.showArray').innerHTML = formatArray;
}

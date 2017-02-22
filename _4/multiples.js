var numArray = [];
var formatArray;
document.querySelector('.show').addEventListener('click', function () {
    clearDisplay();
    calculateMultiples();
    convertArray();
    showArray();
});

function calculateMultiples()
{
    for (var i=1; i<=1000; i++)
    {
        if(i%5==0 && i%7!=0)
        {
            numArray.push(i+' - Ziggy Stardust');
        }
        else if(i%7==0 && i%5!=0)
        {
            numArray.push(i+' - David Bowie');
        }
        else if(i%5==0 && i%7==0)
        {
            numArray.push(i+' - Ziggy Stardust David Bowie');
        }
        else
        {
            numArray.push(i);
        }
    }
}

function convertArray() {
    formatArray = numArray.join('<br>');
}

function showArray() {
    document.querySelector('.showArray').innerHTML = formatArray;
}

function clearDisplay() {
    numArray = [];
    document.querySelector('.showArray').innerHTML = '';
}

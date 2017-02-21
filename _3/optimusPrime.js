var primeNumber = 1;
var showPrimeNumber;
var prime;
document.querySelector('.title').innerHTML = "Do you want to hear what Optimus Prime said?";
document.querySelector('.yes').addEventListener('click', function() {
    showPrime();
    document.querySelector('.title').innerHTML = "Do you want to hear what Optimus Prime said again?";

});
document.querySelector('.no').addEventListener('click', function() {
    clearPrime();
    document.querySelector('.title').innerHTML = "Do you want to hear what Optimus Prime said?";
});

function showPrime() {
    if(primeNumber==1)
    {
        showPrimeNumber = primeNumber;
        primeNumber++;
    }
    else
    {
        prime = calculatePrime(primeNumber);
        if (!prime)
        {
            primeNumber++;
            showPrime();
        }
        else
        {
            showPrimeNumber = primeNumber;
            primeNumber++;
        }
    }
    return document.querySelector('.showText').innerHTML = showPrimeNumber;
}

function clearPrime() {
    primeNumber = 1;
    return document.querySelector('.showText').innerHTML = "";
}

function calculatePrime(num) {
    if (num==2)
    {
        return false;
    }
    else if (num%2==0) {
        return false;
    }
    else
    {
        for (var i = 3; i <= Math.floor(Math.sqrt(num)); i++) {
            if (num%i==0)
            {
                return false;
            }
        }
    }
    return true;
}



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
    var isPrime = true;
    if (num==2)
    {
        isPrime = false;
    }
    else
    {
        for (var i = 2; i <= Math.ceil(num/2); i++) {
            console.log(i);
            if (num%i==0)
            {
                isPrime = false;
            }
        }
    }
    return isPrime;
}

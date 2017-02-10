var piValue = "3.141592653589793238462643383279502884197169399375105820974944592307816406286208998628034825342117067982148086513282306647093844609550582231725359408128481117450284102701938521105559644622948954930381964428810975665933446128475648233786783165271201909145648566923460348610454326648213393607260249141273724587006606315588174881520920962829254091715364367892590360011330530548820466521384146951941511609433057270365759591953092186117381932611793105118548074462379962749567351885752724891227938183011949129833673362440656643086021394946395224737190702179860943702770539217176293176752384674818467669405132000568127145263560827";
var calculatePi;
document.querySelector('h4').innerHTML = "Enter a number between 0-100 to get a slice of pi";
document.getElementById('userValue').addEventListener('input',function(){
    showPi();
});

function showPi() {
    var userValue = document.getElementById('userValue').value;
    if (userValue > 0 && userValue <= 100)
    {
        userValue = parseInt(userValue) + 2;
        calculatePi = piValue.slice(0,userValue);
    }
    else if (userValue == 0 && userValue != "")
    {
        calculatePi = 3;
    }
    else if (userValue == "")
    {
        calculatePi = "";
    }
    else {
        calculatePi = "please enter a value between 0-100";
    }
    document.getElementById('showText').innerHTML = calculatePi;
}

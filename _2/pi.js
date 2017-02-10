var myApp =angular.module('piApp', []);
myApp.controller('piController', function($scope) {
    $scope.pi="3.141592653589793238462643383279502884197169399375105820974944592307816406286208998628034825342117067982148086513282306647093844609550582231725359408128481117450284102701938521105559644622948954930381964428810975665933446128475648233786783165271201909145648566923460348610454326648213393607260249141273724587006606315588174881520920962829254091715364367892590360011330530548820466521384146951941511609433057270365759591953092186117381932611793105118548074462379962749 567351885752724891227938183011949129833673362440656643086021394946395224737190 702179860943702770539217176293176752384674818467669405132000568127145263560827 785771342757789609173637178721468440901224953430146549585371050792279689258923 542019956112129021960864034418159813629774771309960518707211349999998372978049 951059731732816096318595024459455346908302642522308253344685035261931188171010 003137838752886587533208381420617177669147303598253490428755468731159562863882 353787593751957781857780532171226806613001927876611195909216420198938095257201 065485863278865936153381827968230301952035301852968995773622599413891249721775 283479131515574857242454150695950829533116861727855889075098381754637464939319 255060400927701671139009848824012858361603563707660104710181942955596198946767 837449448255379774726847104047534646208046684259069491293313677028989152104752 162056966024058038150193511253382430035587640247496473263914199272604269922796 782354781636009341721641219924586315030286182974555706749838505494588586926995 690927210797509302955321165344987202755960236480665499119881834797753566369807 426542527862551818417574672890977772793800081647060016145249192173217214772350 141441973568548161361157352552133475741849468438523323907394143334547762416862 5189835694855620992192221842725502542568876717";
    $scope.showPi = function () {
        if ($scope.userValue >= 0 && $scope.userValue <= 100)
        {
            $scope.decimalPlaces=$scope.userValue+2;
            return $scope.pi.substring(0,$scope.decimalPlaces);
        }
        else
        {
            return "The input range is [0-100]";
        }

    };
});

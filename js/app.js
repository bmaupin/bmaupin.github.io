angular.module('app', [])
  .controller('Controller', ['$scope', function($scope) {
    $scope.includeLower = true;
    $scope.includeUpper = true;
    $scope.includeNumbers = true;
    $scope.includeSymbols = true;
  
    generateNewPass = function() {
      $scope.newPassword = WeightedPasswordGen.genPassword();
    }
    
    generateNewPass();
    
    $scope.updateClasses = function() {
      WeightedPasswordGen.charClasses["lowerLetters"].enabled = $scope.includeLower;
      WeightedPasswordGen.charClasses["upperLetters"].enabled = $scope.includeUpper;
      WeightedPasswordGen.charClasses["numbers"].enabled = $scope.includeNumbers;
      WeightedPasswordGen.charClasses["symbols"].enabled = $scope.includeSymbols;
    
      generateNewPass();
    }
  }]);


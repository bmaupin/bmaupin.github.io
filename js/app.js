angular.module('app', [])
  .controller('Controller', ['$scope', function($scope) {
    $scope.includeLower = true;
    $scope.includeUpper = true;
    $scope.includeNumbers = true;
    $scope.includeSymbols = true;
  
    $scope.generateNewPass = function() {
      $scope.newPassword = WeightedPasswordGen.genPassword();
    }
    
    $scope.generateNewPass();
    
    $scope.updateClasses = function() {
      WeightedPasswordGen.charClasses["lowerLetters"].enabled = $scope.includeLower;
      WeightedPasswordGen.charClasses["upperLetters"].enabled = $scope.includeUpper;
      WeightedPasswordGen.charClasses["numbers"].enabled = $scope.includeNumbers;
      WeightedPasswordGen.charClasses["symbols"].enabled = $scope.includeSymbols;
    
      $scope.generateNewPass();
    }
  }])
  // Directive to select the password text when clicking on it for easier copying
  .directive('selectOnClick', function () {
    return {
      restrict: 'A',
      link: function (scope, element, attrs) {
        element.on('click', function () {
          var selection = window.getSelection();            
          var range = document.createRange();
          range.selectNodeContents(this);
          selection.removeAllRanges();
          selection.addRange(range);
        });
      }
    };
  });


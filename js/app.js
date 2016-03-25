angular.module('app', ['ui.bootstrap'])
  // Show tooltips when clicking and hide them on mouseleave
  .config(['$tooltipProvider', function($tooltipProvider){
    $tooltipProvider.setTriggers({
      'click': 'mouseleave',
    });
  }])

  .controller('Controller', ['$scope', function($scope) {
    $scope.includeLower = true;
    $scope.includeUpper = true;
    $scope.includeNumbers = true;
    $scope.includeSymbols = true;
  
    $scope.generateNewPass = function() {
      $scope.newPassword = WeightedPasswordGen.genPassword();
    };
    
    $scope.generateNewPass();
    
    $scope.updateClasses = function() {
      WeightedPasswordGen.charClasses["lowerLetters"].enabled = $scope.includeLower;
      WeightedPasswordGen.charClasses["upperLetters"].enabled = $scope.includeUpper;
      WeightedPasswordGen.charClasses["numbers"].enabled = $scope.includeNumbers;
      WeightedPasswordGen.charClasses["symbols"].enabled = $scope.includeSymbols;
    
      $scope.generateNewPass();
    };

    // Instantiate clipboard.js (https://clipboardjs.com/)
    new Clipboard('.btn');
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

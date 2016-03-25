angular.module('app', ['ui.bootstrap'])
  .controller('Controller', ['$scope', '$timeout', function($scope, $timeout) {
    $scope.includeLower = true;
    $scope.includeUpper = true;
    $scope.includeNumbers = true;
    $scope.includeSymbols = true;

    $scope.changeTooltip = function() {
      $scope.dynamicTooltip = 'Copied!';
    }

    $scope.resetTooltip = function() {
      $scope.dynamicTooltip = 'Copy to clipboard';
    }
  
    $scope.generateNewPass = function() {
      $scope.newPassword = WeightedPasswordGen.genPassword();
      $scope.resetTooltip();
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

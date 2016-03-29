angular.module('app', ['ui.bootstrap', 'angularBootstrapNumberpicker'])
  .controller('Controller', ['$scope', function($scope) {
    $scope.includeLower = true;
    $scope.includeUpper = true;
    $scope.includeNumbers = true;
    $scope.includeSymbols = true;

//    $log.log($scope);

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

    $scope.updateLength = function() {
//      $log.log('Value changed=' + $scope.passwordLength);/*
      WeightedPasswordGen.setPasswordLength($scope.passwordLength);
      $scope.generateNewPass();

//      $log.log('WeightedPasswordGen.getPasswordLength()=' + WeightedPasswordGen.getPasswordLength());
    };

    // Instantiate clipboard.js (https://clipboardjs.com/)
    new Clipboard('#copyPasswordButton');
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

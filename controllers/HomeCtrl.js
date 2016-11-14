CardGameTest.controller('HomeCtrl', ['$scope','$location','$timeout', 'Cards', function($scope,$location,$timeout,Cards){
  $scope.Game = {
    title: 'Card Game Test'
  }
  $scope.playerChoices = {}
  $scope.selected = 0
  $scope.skillPoints = 50

  $scope.availablePlayers = []
  for(Player in $scope.playerChoices) {
    $scope.availablePlayers.push(Player)
  }

  $scope.activePlayers = []
  $scope.activeClasses = []

  $scope.choosePlayer = function(direction, current) {
    console.log(direction)
    console.log(current)
    if(current === 0 && direction === 'prev'){
      $scope.selected = 3
    } else if(current === 3 && direction === 'next') {
      $scope.selected = 0
    } else if(direction === 'next') {
      $scope.selected += 1
    } else {
      $scope.selected -= 1
    }
  }

  $scope.alterStats = function(alter, stat, player) {
    if(alter === 'sub') {
      $scope.playerChoices[player.name].stats[stat] -= 1
    } else if(alter === 'add') {
      $scope.playerChoices[player.name].stats[stat] += 1
    }
  }

  $scope.set = function(){
    $scope.playerChoices = {
      Warrior: new Cards.Player('Warrior'),
      Wizard: new Cards.Player('Wizard'),
      Ranger: new Cards.Player('Ranger'),
      Rogue: new Cards.Player('Rogue')
    }

    $scope.skillPoints = 50
  }

  $scope.save = function(model) {
    if($scope.activePlayers.length <= 3) {
      $scope.activePlayers.push(model)
      $scope.activeClasses.push(model.name)
    } else {
      alert("Team full.")
    }
  }

  $scope.remove = function(idx) {
    $scope.activePlayers.splice(idx,1)
  }

  $scope.$watchCollection('activeClasses',function(p,n){
    console.log(JSON.stringify(p))
  })

  $scope.set()

}])

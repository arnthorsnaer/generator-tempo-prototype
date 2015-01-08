angular.module('tempoApp').controller('contextCtrl', ['$scope', '$http', 'contextData', 'interfaceData',
	function($scope, $http, contextData, interfaceData) {

	$scope.app = {
		"title":"<%= projectName %>",
		"description":"Insert from Yeoman",
		"shortTitle":"<%= projectDescription %>",
		"entity":"<%= entity %>",
		"number": 1,
		"showLeftSidebar":false,
		"showBigNavigation":false,
		"rightSidebarTitle":"Insert from Yeoman",
		"view":"Insert from Yeoman - reports, configuration or main"
	}

	$scope.customData = interfaceData.getData();
	$scope.entity = contextData.getEntities()[$scope.app.entity][$scope.app.number];
	var navEntity = $scope.app.view === "reports" ? "Reports" : $scope.app.title;
	$scope.entity.pages.splice(2, 0, navEntity);


	$scope.isCurrentPage = function isCurrentPage(pageName){
		if (navEntity===pageName) {
			return true;
		} else {
			return false;
		}
	}

	$scope.selectedData = $scope.customData[Object.keys($scope.customData)[0]];

	$scope.$watch('selectedData', function(){
		$scope.$broadcast('dataSelected');
	});

	$scope.dataToggle = function dataToggle(dataSetName) {
		for(var key in $scope.customData) {
			if(key === dataSetName) {
				$scope.selectedData = $scope.customData[key];
			}
		}
	};

	$scope.bigNavigationExpanded = false;
	$scope.toggleBigNavigation = function toggleBigNavigation () {
		$scope.bigNavigationExpanded = $scope.bigNavigationExpanded === true ? false : true;
	};

}])

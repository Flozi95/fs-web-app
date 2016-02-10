'use strict';
(function() {    
    angular
        .module('fsApp.home', [])
        .controller('HomeController', ['dataFactory', HomeController]);
    
    function HomeController(dataFactory) {
        var vm = this;
        
        vm.blackboard = [];
        vm.mensaMenu = [];
        vm.trafficLothstr = [];
        vm.trafficPasing = [];
        vm.holidays = [];
        
        init();
        
        //////////////////////////////////////////////////////////////
        
        // Initial Server requests to fill data
        function init() {
            blackboard();
            mensaMeal();
            transportTimetableLothstr();
            transportTimetablePasing();
            getHolidays();
        }
    
        // Get Blackboard entries
        function blackboard() {
            var yesterday = new Date();
            yesterday.setDate(yesterday.getDate() - 1);

            // Get all new entries since 24h
            dataFactory.getBlackboard({ since: yesterday.getTime() })
                .then(function(result) {
                
                    console.log(result.data);
                    vm.blackboard = result.data;
            })
        }
        
        // Get Mensa Deals
        function mensaMeal() {
            dataFactory.getMensaMeal({ location: 'MENSA_LOTHSTRASSE' })
                .then(function(result) {
                    vm.mensaMenu = result.data;
            })
        } 
        
        // Get MVV for Lothstrasse
        function transportTimetableLothstr() {
            dataFactory.getTraffic({ location: 'LOTHSTR' })
                .then(function(result){
                    vm.trafficLothstr = result.data;
            })
        }
        
        // Get MVV for Pasing
        function transportTimetablePasing() {
            dataFactory.getTraffic({ location: 'PASING' })
                .then(function(result){
                    vm.trafficPasing = result.data;
            })
        }
        
        function getHolidays() {
            dataFactory.getHolidays()
                .then(function(result) {
                    //var holidayStart = new Date(item.start);
                    vm.holidays = result.data;
                    nextHoliday(result.data);
            })
        }
        
        function nextHoliday(data) {
            var today = new Date();
            for (var i = 0; i < data.length; i++) {
                console.log('data[' + i + ']');
                console.log(data[i]);
                var holidayStart = new Date(data[i].start);
                if (holidayStart.getTime() >= today.getTime()) {
                    console.log('in if');
                    console.log(data[i]);
                    vm.nextHoliday = data[i];
                    break;
                }
                /*if(holidayStart.getTime() >= today.getTime()) {
                var dayDiff = Math.round((holidayStart.getTime() - today.getTime()) / 1000 / 60 / 60 / 24);
                $("#holidays").append(item.name + " in " + dayDiff + " Tagen");
                return false;*/
            }
        }
    }
        
})();
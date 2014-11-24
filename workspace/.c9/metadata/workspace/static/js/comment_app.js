{"filter":false,"title":"comment_app.js","tooltip":"/static/js/comment_app.js","undoManager":{"mark":0,"position":0,"stack":[[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":129,"column":3},"action":"insert","lines":["/* This module defines the app along with several middle ware services"," */","","var app = angular.module('myApp', []);","","//we set this object up to act as a service that will handle calling the","//routes necessary to work with comments","function CommentObj($http) {","    this.getComment = function(commentId, callback) {","        $http.get('/comments/get', {","                params: {","                    commentId: commentId","                }","            })","            .success(function(data, status, headers, config) {","                callback(null, data);","            })","            .error(function(data, status, headers, config) {","                callback(data, {});","            });","    };","    this.addComment = function(rootCommentId, parentId,","        newComment, callback) {","        $http.post('/comments/add', {","                rootCommentId: rootCommentId,","                parentCommentId: parentId,","                newComment: newComment","            })","            .success(function(data, status, headers, config) {","                callback(null, data);","            })","            .error(function(data, status, headers, config) {});","    };","}","","//here is where the above object is used as a service","app.service('commentSrv', ['$http', CommentObj]);","","//create the photo controller","app.controller('photoController', ['$scope', '$http', 'commentSrv',","    function($scope, $http, commentSrv) {","        $http.get('/photos')","            .success(function(data, status, headers, config) {","                $scope.photos = data;","                $scope.photo = $scope.photos[0];","                $scope.loadComments();","            })","            .error(function(data, status, headers, config) {","                $scope.photos = [];","            });","        $scope.loadComments = function() {","            commentSrv.getComment($scope.photo.commentId,","                function(err, comment) {","                    if (err) {","                        $srope.commentThread = {};","                    }","                    else {","                        $scope.commentThread = comment;","                    }","                });","        };","        $scope.addReply = function(parentCommentId, subject, body) {","            var newComment = {","                subject: subject,","                body: body","            };","            commentSrv.addComment($scope.commentThread._id,","                parentCommentId,","                newComment,","                function(err, comment) {","                    $scope.loadComments();","                });","        };","        $scope.setPhoto = function(photoId) {","            $http.get('/photo', {","                    params: {","                        photoId: photoId","                    }","                })","                .success(function(data, status, headers, config) {","                    $scope.photo = data;","                    $scope.loadComments();","                })","                .error(function(data, status, headers, config) {","                    $scope.photo = {};","                });","        };","    }","]);","","//create the page controller","app.controller('pageController', ['$scope', '$http', 'commentSrv',","    function($scope, $http, commentSrv) {","        $http.get('/page', {","                params: {","                    pageName: \"Photos Page\"","                }","            })","            .success(function(data, status, headers, config) {","                $scope.page = data;","                $scope.loadComments();","            })","            .error(function(data, status, headers, config) {","                $scope.Page = {};","            });","        $scope.addReply = function(parentCommentId, subject, body) {","            var newComment = {","                subject: subject,","                body: body","            };","            commentSrv.addComment($scope.commentThread._id,","                parentCommentId,","                newComment,","                function(err, comment) {","                    $scope.loadComments();","                });","        };","        $scope.loadComments = function() {","            commentSrv.getComment($scope.page.commentId,","                function(err, comment) {","                    if (err) {","                        $scope.commentThread = {};","                    }","                    else {","                        $scope.commentThread = comment;","                    }","                });","        };","    }","]);"]}]}]]},"ace":{"folds":[],"scrolltop":1362,"scrollleft":0,"selection":{"start":{"row":129,"column":3},"end":{"row":129,"column":3},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":96,"state":"no_regex","mode":"ace/mode/javascript"}},"timestamp":1416776954752,"hash":"1215e5cb9b6ff4a21d2137f6c74f91f6accf87b9"}
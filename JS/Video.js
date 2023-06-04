//Script for the Video Playback//
//Create a pointer to the HTML tag via its ID
var video = document.getElementById('Video')
//Lets set the attributes you want to build via this JS script
//Lets build onPlay
video.onplay = function(){
    console.log('Video playing!')
}
//Lets build onCanPlay
video.oncanplay = function(){
    console.log('Video Available for Playing')
}
//Lets build onPause
video.onpause = function(){
    console.log('Video Stopped!')
}

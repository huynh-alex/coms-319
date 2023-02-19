import { API_KEY } from './config.js';

function getVideoId(url) {
    var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|v=)([^#\&\?]*).*/;
    var match = url.match(regExp);
    if (match && match[2].length == 11) {
        return match[2];
    } else {
        return null;
    }
}

function getVideoInfo(videoId, API_KEY, callback) {
    var url = 'https://www.googleapis.com/youtube/v3/videos?id=' + videoId + '&key=' + API_KEY + '&part=snippet,contentDetails';
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onload = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var json = JSON.parse(xhr.responseText);
            console.log(json);
            var data = {
                title: json.items[0].snippet.title,
                duration: json.items[0].contentDetails.duration,
                thumbnail: json.items[0].snippet.thumbnails.medium.url
            };
            callback(data);
        }
    };
    xhr.send(null);
}

function convertToMinsAndSecs(duration) {
    var match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
    var hours = (parseInt(match[1]) || 0);
    var minutes = (parseInt(match[2]) || 0);
    var seconds = (parseInt(match[3]) || 0);
    var totalSeconds = (hours * 60 * 60) + (minutes * 60) + seconds;
    var mins = Math.floor(totalSeconds / 60);
    var secs = totalSeconds % 60;
    return `Duration: ${mins}:${secs}`;
}

var urls = [
    'https://www.youtube.com/watch?v=jvKlzYeW2SA',
    'https://www.youtube.com/watch?v=CYdkHMJIGek',
    'https://www.youtube.com/watch?v=PW3gFuPwA3s',
    'https://www.youtube.com/watch?v=SSzegrjvxX4',
    'https://www.youtube.com/watch?v=Lgs9QUtWc3M',
    'https://www.youtube.com/watch?v=6FEDrU85FLE'
]

for (let i = 0; i < urls.length; i++) {
    var videoId = getVideoId(urls[i]);
    if (videoId) {
    getVideoInfo(videoId, API_KEY, function (data) {
        var videoInfoDiv = document.getElementById(`video-info${i+1}`);
        videoInfoDiv.innerHTML =
            '<img src="' + data.thumbnail + '">' +
            '<div class="card-body">' +
            '<h4 class="card-text" style="overflow: hidden;white-space: nowrap; text-overflow: ellipsis;">' + data.title + '</h4>' +
            '</div>' +
            '<div style="padding:15px" class="d-flex justify-content-between align-items-center">' +
            '<div class="btn-group">' +
            '<button type="button" class="btn btn-sm btn-outline-secondary">' +
            'Watch' +
            '</button>' +
            '</div>' +
            '<small class="text-muted">' + convertToMinsAndSecs(data.duration) + '</small>' +
            '</div>';
    });
}
}
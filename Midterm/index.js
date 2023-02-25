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

function getVideoDataFromUrl(category, videoUrl, API_KEY, callback) {
    let videoId = getVideoId(videoUrl);
    var url = `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${API_KEY}&part=snippet,contentDetails`;
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onload = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var json = JSON.parse(xhr.responseText);
            var data = {
                category: category,
                title: json.items[0].snippet.title,
                duration: json.items[0].contentDetails.duration,
                thumbnail: json.items[0].snippet.thumbnails.medium.url
            };
            callback(data);
        }
    };
    xhr.send(null);
}

function buildJson() {
    let jsonObject = {
        data: []
    };
    fetch('./urls.json')
        .then((response) => response.json())
        .then((json) => {
            for (let category in json) {
                for (let videoUrl of json[category]) {
                    getVideoDataFromUrl(category, videoUrl, API_KEY, (videoData) => {
                        console.log(videoData)
                        jsonObject.data.push(videoData);
                        // copy and paste this into data.json and re-format
                        console.log(JSON.stringify(jsonObject));
                    });
                }
            }
        })
}

function injectVideos(video) {
    var videoInfoDiv = document.getElementById(`video-info`);
    videoInfoDiv.innerHTML = `
        <img src=${video.thumbnail}>
        <div class="card-body">
            <h4 class="card-text" style="overflow: hidden;white-space: nowrap; text-overflow: ellipsis;"> ${video.title}</h4>
        </div>
        <div style="padding:15px" class="d-flex justify-content-between align-items-center">
            <div class="btn-group">
                <button type="button" class="btn btn-sm btn-outline-secondary">
                    Watch
                </button>
            </div>
            <small class="text-muted"> ${convertToMinsAndSecs(video.duration)}</small>
        </div>
    `;
}

async function getVideoDataFromJson() {
    const response = await fetch('./data.json');
    const json = await response.json();
    const videos = json.data.map(video => video);
    return videos;
}

let currentIndex = 0;
let videos = [];
getVideoDataFromJson()
    .then((videoDataFromJson) => {
        videos = videoDataFromJson;
        injectVideos(videos[currentIndex]);
    })

let prevButton = document.getElementById("prevButton");
let nextButton = document.getElementById("nextButton");

nextButton.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % videos.length;
  injectVideos(videos[currentIndex]);
});

prevButton.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + videos.length) % videos.length;
  injectVideos(videos[currentIndex]);
});
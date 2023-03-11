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
                thumbnail: json.items[0].snippet.thumbnails.medium.url,
                videoUrl: videoUrl
            };
            callback(data);
        }
    };
    xhr.send(null);
}

// This is used to build data.json
async function buildJson() {
    var API_KEY;
    try {
        let config = await import('./config.js');
        API_KEY = config.API_KEY;
        let jsonObject = {
            data: []
        };
        fetch('./urls.json')
            .then((response) => response.json())
            .then((json) => {
                for (let category in json) {
                    for (let videoUrl of json[category]) {
                        getVideoDataFromUrl(category, videoUrl, API_KEY, (videoData) => {
                            jsonObject.data.push(videoData);
                            // Copy and paste the output below from the console into data.json
                            // Then re-format
                            console.log(JSON.stringify(jsonObject));
                        });
                    }
                }
            })
    }
    catch (err) {
        console.log(err);
    }   
}

function convertYouTubeUrl(url) {
    var videoId = url.split('v=')[1];
    return 'https://www.youtube.com/embed/' + videoId;
}

async function getVideoDataFromJson(category) {
    var response;
    try {
        response = await fetch('../data.json');
        if (!response.ok) {
            throw new Error('');
        }
    }
    catch {
        return null;
    }
    const json = await response.json();

    if (window.location.pathname.includes(`/${category}.html`)) {
        var filteredVideos = json.data.filter(video => video.category === category);
    }

    return filteredVideos;
}

function createVideoHTML(video) {
    let embedUrl = convertYouTubeUrl(video.videoUrl);
    const html = `
      <img height="480px" width="720px" style="display: block; margin: auto;" id="video-thumbnail" src="${video.thumbnail}">
      <iframe frameborder="0" allowfullscreen id="video-frame" style="display: none" src="${embedUrl}"></iframe>
      <div class="card-body">
        <h4 class="card-text" style="overflow: hidden;white-space: nowrap; text-overflow: ellipsis;">${video.title}</h4>
      </div>
      <div style="padding:15px" class="d-flex justify-content-between align-items-center">
        <div class="btn-group">
          <button id="watch-button" type="button" class="btn btn-sm btn-outline-secondary">Watch</button>
        </div>
        <small class="text-muted">${convertToMinsAndSecs(video.duration)}</small>
      </div>
    `;
    return html;
}

function showVideo() {
    const videoFrame = document.getElementById("video-frame");
    videoFrame.style.display = "block";
    videoFrame.style.margin = "auto";
    videoFrame.style.height = "480px";
    videoFrame.style.width = "720px";
    const videoThumbnail = document.getElementById("video-thumbnail");
    videoThumbnail.style.display = "none";
}

function setWatchButton() {
    if (videosHTML.length > 0) {
        const watchVideoButton = document.getElementById("watch-button");
        watchVideoButton.addEventListener("click", showVideo);
    }
}

function populateVideosHTML(videos) {
    for (let video of videos) {
        const videoHTML = createVideoHTML(video);
        videosHTML.push(videoHTML);
    }
    setPrevAndNextButtons();
}

function showVideoHTML(videoHTML) {
    const videoInfoDiv = document.getElementById("video-info");
    videoInfoDiv.innerHTML = videoHTML;
    setWatchButton();
}

let currentIndex = 0;
let videos = [];
let videosHTML = [];

function setPrevAndNextButtons() {
    let prevButton = document.getElementById("prevButton");
    let nextButton = document.getElementById("nextButton");

    nextButton.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % videos.length;
        showVideoHTML(videosHTML[currentIndex]);

    });

    prevButton.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + videos.length) % videos.length;
        showVideoHTML(videosHTML[currentIndex]);
    });
}

if (window.location.pathname.includes('/music.html')) {
    getVideoDataFromJson('music')
        .then(function (videoDataFromJson) {
            videos = videoDataFromJson;
            populateVideosHTML(videos);
            showVideoHTML(videosHTML[0]);
        })
}

if (window.location.pathname.includes('/funny.html')) {
    getVideoDataFromJson('funny')
        .then(function (videoDataFromJson) {
            videos = videoDataFromJson;
            populateVideosHTML(videos);
            showVideoHTML(videosHTML[0]);
        })
}

if (window.location.pathname.includes('/food.html')) {
    getVideoDataFromJson('food')
        .then(function (videoDataFromJson) {
            videos = videoDataFromJson;
            populateVideosHTML(videos);
            showVideoHTML(videosHTML[0]);
        })
}
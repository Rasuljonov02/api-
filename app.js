const text = document.querySelector(".input");
const btn = document.querySelector(".btn");
const videolar = document.querySelector(".videolar");
const namelar = document.querySelector(".namelar");
const baseURL = "https://youtube-v31.p.rapidapi.com";
const htp = "https://youtu.be/";
const options = {
	params: {
		part: "snippet",
		maxResults: "30",
		q: "",
	},
	headers: {
		"X-RapidAPI-Key": "a4190b5426mshe46583b9c044cb6p136b48jsn839770809808",
		"X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
	},
};

async function searchVideos() {
	options.params.q = text.value;
	try {
		const response = await axios.get(`${baseURL}/search`, options); // hamma malumot
		displayVideos(response.data.items); // videolar malumot
		console.log(response.data.items); // video malumot
	} catch (error) {
		console.error(error);
	}
}

function displayVideos(videos) {
	videolar.innerHTML = "";
	videos.forEach((video) => {
		const videoId = video.id.videoId;
		const channelId = video.snippet.channelId;
		const channelTitle = video.snippet.channelTitle;
		const videoElement = document.createElement("video");
		videoElement.src = `${htp}${channelId}`;
		videoElement.width = "300";
		videoElement.height = "300";
		videoElement.controls = true;
		videoElement.autoplay = true;
		videolar.appendChild(videoElement);
		namelar.innerHTML = channelTitle;
	});
}

btn.addEventListener("click", searchVideos);

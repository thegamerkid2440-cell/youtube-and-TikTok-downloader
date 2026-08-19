fetch("https://YOUR-SERVER-URL.com/api/download", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    url: document.getElementById("youtubeURL").value,
    quality: document.getElementById("youtubeQuality").value
  })
})
.then(response => response.json())
.then(data => {
  console.log(data);
});
const playBtn = document.getElementById("playBtn");
const song = document.getElementById("song");

let playing = false;

playBtn.addEventListener("click", () => {
  if (!playing) {
    song.play();
    playBtn.innerText = "إيقاف الأغنية 💜";
    playing = true;
  } else {
    song.pause();
    playBtn.innerText = "تشغيل الأغنية 🎵";
    playing = false;
  }
});
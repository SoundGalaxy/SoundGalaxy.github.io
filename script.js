document.addEventListener('DOMContentLoaded', () => {
const artists = [

// - // - // - // - //  DO NOT EDIT BELOW THIS LINE // - // - // - // - //
{
name: "Bollywood - Hindi",
albums: [

// Album - Mr. And Mrs. Mahi (Original Motion Picture Soundtrack)
{
cover: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/mr_and_mrs_mahi/00-album_cover.jpg",
name: "Mr. And Mrs. Mahi (Original Motion Picture Soundtrack)",
artist: "Various Artists",
releaseDate: "24-05-2024",
quality: "24-Bit / 96 kHz",
format: "FLAC",
label: " ℗ 2024 Sony Music Entertainment India Pvt. Ltd.",
tracks: [
{ name: "01. Dekhha Tenu		            	", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/mr_and_mrs_mahi/01-dekhha_tenu.flac" },
{ name: "02. Agar Ho Tum		            	", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/mr_and_mrs_mahi/02-agar_ho_tum.flac" },
{ name: "03. Roya Jab Tu		            	", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/mr_and_mrs_mahi/03-roya_jab_tu.flac" },
{ name: "04. Tu Hain Toh            			", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/mr_and_mrs_mahi/04-tu_hain_toh.flac" },
{ name: "05. Junoon Hain		            	", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/mr_and_mrs_mahi/05-junoon_hain.flac" },
{ name: "06. Ranjhana                           ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/mr_and_mrs_mahi/06-ranjhana.flac" },
{ name: "07. Tu - Hain Toh - Neeti Mohan Version", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/mr_and_mrs_mahi/07-tu_hain_toh_neeti_mohan_version.flac" }
]
},                

// Album - Crew (Original Motion Picture Soundtrack)
{
cover: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/crew/00-album_cover.jpg",
name: "Crew (Original Motion Picture Soundtrack)",
artist: "Various Artists",
releaseDate: "28-03-2024",
quality: "24-Bit / 96 kHz",
format: "FLAC",
label: " ℗ 2024 Tips Industries Ltd. ©— 2024 Tips Industries Ltd.",
tracks: [
{ name: "01. Naina                        ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/crew/01-naina_from_crew.flac" },
{ name: "02. Kiddan Zaalima               ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/crew/02-kiddan_zaalima.flac" },
{ name: "03. Darbadar                     ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/crew/03-darbadar.flac" },
{ name: "04. Khwabida                     ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/crew/04-khwabida.flac" },
{ name: "05. Ghagra                       ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/crew/05-ghagra_from_crew.flac" },
{ name: "06. Choli Ke Peeche              ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/crew/06-choli_ke_peeche_from_crew.flac" },
{ name: "07. Sona Kitna Sona Hai          ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/crew/07-sona_kitna_sona_hai.flac" },
{ name: "08. Sona Kitna Sona Hai (Reprise)", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/crew/08-sona_kitna_sona_hai_reprise.flac" }
]
},

// Album - Ek Tha Raja
{
cover: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/ek_tha_raja/00-album_cover.jpg",
name: "Ek Tha Raja",
artist: "Badshah, Various Artists",
releaseDate: "18-03-2024",
quality: "16-Bit / 44.1 kHz",
format: "FLAC",
label: " ℗ 2024 Universal Music India Pvt. Ltd.",
tracks: [
{ name: "01. God Damn        ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/ek_tha_raja/01-god_damn.flac" },
{ name: "02. O' Sajna        ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/ek_tha_raja/02-o_sajna.flac" },
{ name: "03. Like A Snake    ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/ek_tha_raja/03-like_a_snake.flac" },
{ name: "04. Bajenge         ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/ek_tha_raja/04-bajenge.flac" },
{ name: "05. Hola At Your Boy", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/ek_tha_raja/05-hola_at_your_boy.flac" },
{ name: "06. Surma           ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/ek_tha_raja/06-surma.flac" },
{ name: "07. Red And Blue    ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/ek_tha_raja/07-red_and_blue.flac" },
{ name: "08. Drinks On Me    ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/ek_tha_raja/08-drinks_on_me.flac" },
{ name: "09. Soulmate        ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/ek_tha_raja/09-soulmate.flac" },
{ name: "10. Body On Me	     ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/ek_tha_raja/10-body_on_me.flac" },
{ name: "11. AMG	     ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/ek_tha_raja/11-amg.flac" },
{ name: "12. Naraaz          ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/ek_tha_raja/12-naraaz.flac" },
{ name: "13. Kalashnikova    ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/ek_tha_raja/13-kalashnikova.flac" },
{ name: "14. Alag Hai        ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/ek_tha_raja/14-alag_hai.flac" },
{ name: "15. Daaku           ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/ek_tha_raja/15-daaku.flac" },
{ name: "16. G-Yaan          ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/ek_tha_raja/16-g_yaan.flac" }
]
},


// - // - // - // - //  DO NOT EDIT BELOW THIS LINE // - // - // - // - //
]
}
];
// - // - // - // - //  DO NOT EDIT BELOW THIS LINE // - // - // - // - //


    const artistList = document.getElementById('artist-list');
    const albumGrid = document.getElementById('album-grid');
    const trackList = document.getElementById('track-list');
    const trackArt = document.getElementById('track-art');
    const trackName = document.getElementById('track-name');
    const trackArtist = document.getElementById('track-artist');
    const playPauseBtn = document.getElementById('playpause-btn');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const progressSlider = document.getElementById('progress-slider');
    const currentTime = document.getElementById('current-time');
    const durationTime = document.getElementById('duration-time');

    let currentTrack = new Audio();
    let isPlaying = false;
    let currentAlbum = [];
    let currentTrackIndex = 0;

    // Function to display artists in the sidebar and albums in the album grid
    const displayArtistsAndAlbums = () => {
        artists.forEach((artist, index) => {
            let artistItem = document.createElement('li');
            artistItem.textContent = artist.name;
            artistItem.addEventListener('click', () => {
                albumGrid.innerHTML = '';
                trackList.innerHTML = '';
                artist.albums.forEach((album, albumIndex) => {
                    let albumItem = document.createElement('div');
                    albumItem.classList.add('album');

                    // Determine cover image and extra icon based on album quality
                    let coverImage = album.cover;
                    let extraIcon = album.quality.includes("24-Bit") ? "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy.github.io/main/assets/hires.png" : "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy.github.io/main/assets/cd.png";
                    albumItem.innerHTML = `
                        <div class="album-details">
                            <img class="cover-image" src="${coverImage}" alt="Cover">
                            <div class="album-info">
                                <h3><strong>${album.name}</strong></h3>
                                <p><strong>Artist:</strong> <span class="album-info">${artist.name}</span></p>
                                <p><strong>Release Date:</strong> <span class="album-info">${album.releaseDate}</span></p>
                                <p><strong>Quality:</strong> <span class="album-info">${album.quality}</span></p>
                                <p><strong>Album Format:</strong> <span class="album-info">${album.format}</span></p>
                                <p><strong>Label:</strong> <span class="album-info">${album.label}</span></p>
                            </div>
                        </div>
                        <div class="extra-info">
                            <img src="${extraIcon}" alt="${album.quality.includes("24-Bit") ? "24-Bit" : "16-Bit"}" style="max-width: 40px; max-height: 40px;">
                        </div>
                    `;
                    albumItem.addEventListener('click', () => {
                        currentAlbum = album.tracks;
                        trackList.innerHTML = '';
                        currentAlbum.forEach((track, trackIndex) => {
                            let trackItem = document.createElement('li');
                            trackItem.textContent = track.name;
                            trackItem.addEventListener('click', () => {
                                loadTrack(trackIndex, artist.name);
                            });
                            trackList.appendChild(trackItem);
                        });
                    });
                    albumGrid.appendChild(albumItem);
                });
            });
            artistList.appendChild(artistItem);
        });
    };

    // Function to load a track and start playing it
    const loadTrack = (index, artistName) => {
        if (currentTrack.src !== currentAlbum[index].src) {
            currentTrack.src = currentAlbum[index].src;
        }
        currentTrackIndex = index;
        trackArt.src = albumGrid.querySelector('.album .cover-image').src;
        trackName.textContent = currentAlbum[currentTrackIndex].name;
        trackArtist.textContent = artistName || "Unknown Artist"; // Fallback if artist name is missing
        playTrack();
    };

    // Function to play a track
    const playTrack = () => {
        currentTrack.play();
        isPlaying = true;
        updatePlayPauseButton();
    };

    // Function to pause a track
    const pauseTrack = () => {
        currentTrack.pause();
        isPlaying = false;
        updatePlayPauseButton();
    };

    // Update play/pause button based on current state
    const updatePlayPauseButton = () => {
        if (isPlaying) {
            playPauseBtn.innerHTML = `<img src="https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy.github.io/main/assets/pause.png" alt="Pause" height="30" width="30">`;
        } else {
            playPauseBtn.innerHTML = `<img src="https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy.github.io/main/assets/play.png" alt="Play" height="30" width="30">`;
        }
    };

    // Event listener for play/pause button
    playPauseBtn.addEventListener('click', () => {
        isPlaying ? pauseTrack() : playTrack();
    });

    // Event listener for previous button
    prevBtn.addEventListener('click', () => {
        currentTrackIndex = (currentTrackIndex - 1 + currentAlbum.length) % currentAlbum.length;
        loadTrack(currentTrackIndex);
    });

    // Event listener for next button
    nextBtn.addEventListener('click', () => {
        currentTrackIndex = (currentTrackIndex + 1) % currentAlbum.length;
        loadTrack(currentTrackIndex);
    });

    // Update progress slider and time display
    currentTrack.addEventListener('timeupdate', () => {
        const { currentTime: currentTimeValue, duration: durationValue } = currentTrack;
        progressSlider.value = (currentTimeValue / durationValue) * 100;
        currentTime.textContent = formatTime(currentTimeValue);
        durationTime.textContent = formatTime(durationValue);
    });

    // Automatically play next track when current track ends
    currentTrack.addEventListener('ended', () => {
        currentTrackIndex = (currentTrackIndex + 1) % currentAlbum.length;
        loadTrack(currentTrackIndex);
    });

    // Format time as mm:ss
    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    // Update current time on slider drag
    progressSlider.addEventListener('input', () => {
        currentTrack.currentTime = (progressSlider.value * currentTrack.duration) / 100;
    });

    // Display initial artists and albums
    displayArtistsAndAlbums();
});

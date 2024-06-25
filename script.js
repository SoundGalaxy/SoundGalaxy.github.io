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
label: " ℗ 2024 Tips Industries Ltd. © — 2024 Tips Industries Ltd.",
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

// Album - Honey 3.0
{
cover: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/honey_3_0/00-album_cover.jpg",
name: "Honey 3.0",
artist: "Yo Yo Honey Singh, Various Artists",
releaseDate: "15-03-2024",
quality: "24-Bit / 96 kHz",
format: "FLAC",
label: " ℗ 2023 Zee Music Company © — 2023 Zee Music Company",
tracks: [
{ name: "01. Vigdiyan Heeran   ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/honey_3_0/01-vigdiyan_heeran.flac" },
{ name: "02. Kalaastar         ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/honey_3_0/02-kalaastar.flac" },
{ name: "03. Kuley Kuley       ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/honey_3_0/03-kuley_kuley.flac" },
{ name: "04. Tujh Pe Pyar      ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/honey_3_0/04-tujh_pe_pyaar.flac" },
{ name: "05. Dheeth            ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/honey_3_0/05-dheeth.flac" },
{ name: "06. Savage            ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/honey_3_0/06-savage.flac" },
{ name: "07. Soul              ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/honey_3_0/07-soul.flac" },
{ name: "08. Let's Get It Party", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/honey_3_0/08-lets_get-it_party.flac" },
{ name: "09. Naagan            ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/honey_3_0/09-naagan.flac" },
{ name: "10. Habibti           ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/honey_3_0/10-habibti.flac" }
]
},

// Album - ANIMAL (Original Motion Picture Soundtrack)
{
cover: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/animal_deluxe/00-album_cover.jpg",
name: "ANIMAL (Original Motion Picture Soundtrack)",
artist: "Various Artists",
releaseDate: "23-01-2024",
quality: "24-Bit / 48 kHz",
format: "FLAC",
label: " ℗ 2024 Super Cassettes Industries Private Limited © — 2024 Super Cassettes Industries Private Limited",
tracks: [
{ name: "01. Arjan Vailly                                    ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/animal_deluxe/01-arjan_vailly.flac" },
{ name: "02. Hua Main                                        ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/animal_deluxe/02-hua_main.flac" },
{ name: "03. Satranga                                        ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/animal_deluxe/03-satranga.flac" },
{ name: "04. Papa Meri Jaan                                  ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/animal_deluxe/04-papa_meri_jaan.flac" },
{ name: "05. Pehle Bhi Main                                  ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/animal_deluxe/05-pehle_bhi_main.flac" },
{ name: "06. Kashmir                                         ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/animal_deluxe/06-kashmir.flac" },
{ name: "07. Saari Duniya Jalaa Denge                        ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/animal_deluxe/07-saari_duniya_jalaa_denge.flac" },
{ name: "08. Haiwaan                                         ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/animal_deluxe/08-haiwaan.flac" },
{ name: "09. Papa Meri Jaan (Child's Version)                ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/animal_deluxe/09-papa_meri_jaan_childs_version.flac" },
{ name: "10. Ranvijay's Entry Medley                         ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/animal_deluxe/10-ranvijays_entry_medley.flac" },
{ name: "11. Abrar's Entry Jamal Kudu                        ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/animal_deluxe/11-abrars_entry_jamal_kudu.flac" },
{ name: "12. Bhaavein Jaane Ya Na Jaane                      ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/animal_deluxe/12-bhaavein_jaane_ya_na_jaane.flac" },
{ name: "13. Marham (Pehle Bhi Main)                         ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/animal_deluxe/13-marham_pehle_bhi_main.flac" },
{ name: "14. Satranga (Stripped)                             ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/animal_deluxe/14-satranga_stripped.flac" },
{ name: "15. Urdu Ke Jaisa Ishq (Kashmir)                    ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/animal_deluxe/15-urdu_ke_jaisa_ishq_kashmir.flac" },
{ name: "16. Saari Duniya Jalaa Denge (Extended Film Version)", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/animal_deluxe/16-saari_duniya_jalaa_denge_extended_film_version.flac" },
{ name: "17. Papa Meri Jaan (Whistle)                        ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/animal_deluxe/17-papa_meri_jaan_whistle.flac" }
]
},

// Album - Tu Jhooti Main Makaar
{
cover: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/tu_jhoothi_main_makkaar/00-album_cover.jpg",
name: "Tu Jhooti Main Makaar",
artist: "Pritam",
releaseDate: "16-03-2023",
quality: "24-Bit / 44.1 kHz",
format "FLAC",
label: " ℗ 2023 Super Cassettes Industries Private Limited © — 2023 Super Cassettes Industries Private Limited",
tracks: [
{ name: "01. Tere Pyaar Mein         ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/tu_jhoothi_main_makkaar/01-tere_pyaar_mein.flac" },
{ name: "02. Pyaar Hota Kayi Baar Hai", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/tu_jhoothi_main_makkaar/02-pyaar_hota_kayi_baar_hai.flac" },
{ name: "03. O Bedardeya             ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/tu_jhoothi_main_makkaar/03-o_bedardeya.flac" },
{ name: "04. Show Me The Thumka      ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/tu_jhoothi_main_makkaar/04-show_me_the_thumka.flac" },
{ name: "05. Jaadui                  ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/tu_jhoothi_main_makkaar/05-jaadui.flac" },
{ name: "06. Maine Pi Rakhi Hai      ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/tu_jhoothi_main_makkaar/06-maine_pi_rakhi_hai.flac" }
]
},

// Album - Bhool Bhulaiyaa 2 (Original Motion Picture Soundtrack)
{
cover: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/bhool_bhulaiyaa_2/00-album_cover.jpg",
name: "Bhool Bhulaiyaa 2 (Original Motion Picture Soundtrack)",
artist: "Pritam, Various Artists",
releaseDate: "01-06-2022",
quality: "24-Bit / 48 kHz",
format "FLAC",
label: " ℗ 2022 Super Cassettes Industries Private Limited © — 2022 Super Cassettes Industries Private Limited",
tracks: [
{ name: "01. Bhool Bhulaiyaa 2 Title Track      ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/bhool_bhulaiyaa_2/01-bhool_bhulaiyaa_2_title_track.flac" },
{ name: "02. Hum Nashe Mein Toh Nahin           ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/bhool_bhulaiyaa_2/02-hum_nashe_mein_toh_nahin.flac" },
{ name: "03. De Taali                           ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/bhool_bhulaiyaa_2/03-de_taali.flac" },
{ name: "04. Mere Dholna (Arijit Version)       ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/bhool_bhulaiyaa_2/04-mere_dholna_arijit_version.flac" },
{ name: "05. Ami Je Tomar Tandav                ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/bhool_bhulaiyaa_2/05-ami_je_tomar_tandav.flac" },
{ name: "06. Ami Je Tomar Tandav (Film Version) ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/bhool_bhulaiyaa_2/06-ami_je_tomar_tandav_film_version.flac" },
{ name: "07. Ami Je Tomar Tandav (Kiara's Scare)", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/bhool_bhulaiyaa_2/07-ami_je_tomar_Kiaras_scare.flac" },
{ name: "08. Mere Dholna (The Sisters)          ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/bhool_bhulaiyaa_2/08-mere_dholna_the_sisters.flac" },
{ name: "09. Mere Dholna Revisited              ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/bhool_bhulaiyaa_2/09-mere_dholna_revisited.flac" }
]
},

// Album - De De Pyaar De (Original Motion Picture Soundtrack)
{
cover: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/de_de_pyaar_de/00-album_cover.png",
name: "De De Pyaar De (Original Motion Picture Soundtrack)",
artist: "Various Artists",
releaseDate: "15-05-2019",
quality: "16-Bit / 44.1 kHz",
format "FLAC",
label: " ℗ 2019 Super Cassettes Industries Private Limited © — 2019 Super Cassettes Industries Private Limited",
tracks: [
{ name: "01. Vaddi Sharaban            ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/de_de_pyaar_de/01-vaddi_sharaban.flac" },
{ name: "02. Tu Mila To Haina          ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/de_de_pyaar_de/02-tu_mila_to_haina.flac" },
{ name: "03. Hauli Hauli               ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/de_de_pyaar_de/03-hauli_hauli.flac" },
{ name: "04. Chale Aana		       ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/de_de_pyaar_de/04-chale_aana.flac" },
{ name: "05. Mukhda Vekh Ke            ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/de_de_pyaar_de/05-mukhda_vekh_ke.flac" },
{ name: "06. Dil Royi Jaye             ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/de_de_pyaar_de/06-dil_royi_jaye.flac" },
{ name: "07. Vaddi Sharaban (Talli Mix)", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/de_de_pyaar_de/07-vaddi_sharaban_talli_mix.flac" }
]
},

// Album - Jalebi (Original Motion Picture Soundtrack)
{
cover: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/jalebi/00-album_cover.jpg",
name: "Jalebi (Original Motion Picture Soundtrack)",
artist: "Samuel Shetty, Various Artists",
releaseDate: "21-09-2018",
quality: "24-Bit / 96 kHz",
format "FLAC",
label: " ℗ 2018 Sony Music Entertainment India Pvt. Ltd.",
tracks: [
{ name: "01. Tum Se                 ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/jalebi/01-tum_se.flac" },
{ name: "02. Pal                    ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/jalebi/02-pal.flac" },
{ name: "03. Mera Pyar Tera Pyar    ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/jalebi/03-mera_pyar_tera_pyar.flac" },
{ name: "04. Mujhme                 ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/jalebi/04-mujhme.flac" },
{ name: "05. Tera Mera Rishta       ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/jalebi/05-tera_mera_rishta.flac" },
{ name: "06. Pal (Female)           ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/jalebi/06-pal_female.flac" },
{ name: "07. Tera Mera Rishta (Male)", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/jalebi/07-tera_mera_rishta_male.flac" },
{ name: "08. Pehle Ke Jaisa         ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/jalebi/08-pehle_ke_jaisa.flac" },
{ name: "09. Tum Se Adlib           ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/jalebi/09-tum_se.flac" },
{ name: "10. Tum Se Adlib (Female)  ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/jalebi/10-tum_se_female.flac" }
]
},

// Album - Dil Junglee
{
cover: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/dil_juunglee/00-album_cover.jpg",
name: "Dil Juunglee",
artist: "Various Artists",
releaseDate: "09-03-2018",
quality: "",
format: "",
label: "",
tracks: [
{ name: "01. Dil Jaane Na ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/dil_juunglee/01-dil_jaane_na.flac" },
{ name: "02. Bandeya      ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/dil_juunglee/02-bandeya.flac" },
{ name: "03. Beat Juunglee", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/dil_juunglee/03-beat_juunglee.flac" }
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

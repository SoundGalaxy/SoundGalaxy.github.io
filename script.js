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
{ name: "11. AMG	         ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/ek_tha_raja/11-amg.flac" },
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
format: "FLAC",
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
format: "FLAC",
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
format: "FLAC",
label: " ℗ 2019 Super Cassettes Industries Private Limited © — 2019 Super Cassettes Industries Private Limited",
tracks: [
{ name: "01. Vaddi Sharaban            ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/de_de_pyaar_de/01-vaddi_sharaban.flac" },
{ name: "02. Tu Mila To Haina          ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/de_de_pyaar_de/02-tu_mila_to_haina.flac" },
{ name: "03. Hauli Hauli               ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/de_de_pyaar_de/03-hauli_hauli.flac" },
{ name: "04. Chale Aana		           ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/de_de_pyaar_de/04-chale_aana.flac" },
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
format: "FLAC",
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
quality: "24-Bit / 96 kHz",
format: "FLAC",
label: " ℗ 2018 Pooja Music / Under Exclusive Distribution to Sony Music Entertainment India Pvt. Ltd.",
tracks: [
{ name: "01. Dil Jaane Na ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/dil_juunglee/01-dil_jaane_na.flac" },
{ name: "02. Bandeya      ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/dil_juunglee/02-bandeya.flac" },
{ name: "03. Beat Juunglee", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/dil_juunglee/03-beat_juunglee.flac" }
]
},

// Album - Bollywood Romantic Songs With Armaan Malik
{
cover: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/bollywood_romantic_songs_with_armaan_malik/00-album_cover.jpg",
name: "Bollywood Romantic Songs With Armaan Malik",
artist: "Armaan Malik",
releaseDate: "20-07-2017",
quality: "16-Bit / 44.1 kHz",
format: "FLAC",
label: " ℗ 2017 Super Cassettes Industries Private Limited © — 2017 Super Cassettes Industries Private Limited",
tracks: [
{ name: "01. Main Rahoon Ya Na Rahoon                  ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/bollywood_romantic_songs_with_armaan_malik/01-main_rahoon_ya_na_rahoon.flac" },
{ name: "02. Bol Do Na Zara                            ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/bollywood_romantic_songs_with_armaan_malik/02-bol_do_na_zara.flac" },
{ name: "03. Kaun Tujhe & Kuch Toh Hai Mashup          ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/bollywood_romantic_songs_with_armaan_malik/03-kaun_tujhe_&_kuch_toh_hai_mashup.flac" },
{ name: "04. Jab Tak                                   ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/bollywood_romantic_songs_with_armaan_malik/04-jab_tak.flac" },
{ name: "05. Wajah Tum Ho                              ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/bollywood_romantic_songs_with_armaan_malik/05-wajah_tum_ho.flac" },
{ name: "06. Sab Tera                                  ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/bollywood_romantic_songs_with_armaan_malik/06-sab_tera.flac" },
{ name: "07. Dil Mein Chhupa Loonga                    ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/bollywood_romantic_songs_with_armaan_malik/07-dil_mein_chhupa_loonga.flac" },
{ name: "08. Main Hoon Hero Tera (Armaan Malik Version)", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/bollywood_romantic_songs_with_armaan_malik/08-main_hoon_hero_tera.flac" },
{ name: "09. Mujhko Barsaat Bana Lo                    ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/bollywood_romantic_songs_with_armaan_malik/09-mujhko_barsaat_bana_lo.flac" },
{ name: "10. Tum Jo Mile                               ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/bollywood_romantic_songs_with_armaan_malik/10-tum_jo_mile.flac" },
{ name: "11. Main Agar Kahoon - Bol Do Na Zara         ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/bollywood_romantic_songs_with_armaan_malik/11-main_agar_kahoon_bol_do_na_zara.flac" },
{ name: "12. Dil Ke Paas (Unplugged)                   ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/bollywood_romantic_songs_with_armaan_malik/12-dil_ke_paas_Unplugged.flac" },
{ name: "13. Pyaar Manga Hai                           ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/bollywood_romantic_songs_with_armaan_malik/13-pyaar_manga_hai.flac" },
{ name: "14. Tumhe Apna Banane Ka                      ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/bollywood_romantic_songs_with_armaan_malik/14-tumhe_apna_banane_ka.flac" },
{ name: "15. O Saathiya                                ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/bollywood_romantic_songs_with_armaan_malik/15-o_saathiya.flac" }
]
},

// Album - Meri Pyaari Bindu
{
cover: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/meri_pyaari_bindu/00-album_cover.jpg",
name: "Meri Pyaari Bindu",
artist: "Sachin-Jigar, Various Artists",
releaseDate: "25-04-2017",
quality: "16-Bit / 44.1 kHz",
format: "FLAC",
label: " ℗ 2017 YRF Music © — 2017 YRF Music",
tracks: [
{ name: "01. Afeemi                 ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/meri_pyaari_bindu/01-afeemi.flac" },
{ name: "02. Ye Jawaani Teri        ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/meri_pyaari_bindu/02-ye_jawaani_teri.flac" },
{ name: "03. Haareya                ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/meri_pyaari_bindu/03-haareya.flac" },
{ name: "04. Maana Ke Hum Yaar Nahin", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/meri_pyaari_bindu/04-maana_ke_hum_yaar_nahin.flac" },
{ name: "05. Iss Tarah              ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/meri_pyaari_bindu/05-iss_tarah.flac" },
{ name: "06. Khol De Baahein        ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/meri_pyaari_bindu/06-khol_de_baahein.flac" }
]
},

// Album - Best Of Arijit Singh (2016)
{
cover: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/best_of_arijit_singh/00-album_cover.jpg",
name: "Best Of Arijit Singh (2016)",
artist: "Arijit Singh",
releaseDate: "22-12-2016",
quality: "16-Bit / 44.1 kHz",
format: "FLAC",
label: " ℗ 2016 Super Cassettes Industries Private Limited © — 2016 Super Cassettes Industries Private Limited",
tracks: [
{ name: "01. Tum Hi Ho (From 'Aashiqui 2')                         ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/best_of_arijit_singh/01-tum_hi_ho_from_aashiqui_2.flac" },
{ name: "02. Hum Mar Jayenge (From 'Aashiqui 2')                   ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/best_of_arijit_singh/02-hum_mar_jayenge_from_aashiqui_2.flac" },
{ name: "03. Aasan Nahin Yahan (From 'Aashiqui 2')                 ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/best_of_arijit_singh/03-aasan_nahin_yahan_from_aashiqui_2.flac" },
{ name: "04. Milne Hai Mujhse Aayi (From 'Aashiqui 2')             ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/best_of_arijit_singh/04-milne_hai_mujhse_aayi_from_aashiqui_2.flac" },
{ name: "05. Phir Mohabbat (From 'Murder 2')                       ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/best_of_arijit_singh/05-phir_mohabbat_from_murder_2.flac" },
{ name: "06. Ilahi (From 'Yeh Jawaani Hai Deewani')                ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/best_of_arijit_singh/06-ilahi_from_yeh_jawaani_hai_deewani.flac" },
{ name: "07. Raabta (From 'Agent Vinod')                           ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/best_of_arijit_singh/07-raabta_from_agent_vinod.flac" },
{ name: "08. Raat Bhar (From 'Heropanti')                          ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/best_of_arijit_singh/08-raat_bhar_from_heropanti.flac" },
{ name: "09. Tose Naina (From 'Mickey Virus')                      ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/best_of_arijit_singh/09-tose_naina_from_mickey_virus.flac" },
{ name: "10. Kabira (Encore) (From 'Yeh Jawaani Hai Deewani')      ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/best_of_arijit_singh/10-kabira_encore_from_yeh_jawaani_hai_deewani.flac" },
{ name: "11. Har Kisi Ko (From 'Boss')                             ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/best_of_arijit_singh/11-har_kisi_ko_from_boss.flac" },
{ name: "12. Duaa (From 'Shanghai')                                ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/best_of_arijit_singh/12-duaa_from_shanghai.flac" },
{ name: "13. Aaj Phir (From 'Hate Story 2')                        ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/best_of_arijit_singh/13-aaj_phir_from_hate_story_2.flac" },
{ name: "14. Palat - Tera Hero Idhar Hai (From 'Main Tera Hero')   ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/best_of_arijit_singh/14-palat_tera_hero_idhar_hai_from_main_tera_hero.flac" },
{ name: "15. Shanivaar Raati (From 'Main Tera Hero')               ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/best_of_arijit_singh/15-shanivaar_raati_from_main_tera_hero.flac" },
{ name: "16. Mast Magan (From '2 States')                          ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/best_of_arijit_singh/16-mast_magan_from_2_states.flac" },
{ name: "17. Sooraj Dooba Hain (From 'Roy')                        ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/best_of_arijit_singh/17-sooraj_dooba_hain_from_roy.flac" },
{ name: "18. Suno Na Sangemarmar                                   ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/best_of_arijit_singh/18-suno-na_sangemarmar.flac" },
{ name: "19. Soch Na Sake (From 'Airlift')                         ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/best_of_arijit_singh/19-soch_na_sake_from_airlift.flac" },
{ name: "20. Baaton Ko Teri (From 'All Is Well')                   ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/best_of_arijit_singh/20-baaton_ko_teri_from_all_is_well.flac" },
{ name: "21. Chal Wahan Jaate Hain (From 'Chal Wahan Jaate Hain')  ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/best_of_arijit_singh/21-chal_wahan_jaate_hain_from_chal_wahan_jaate_hain.flac" },
{ name: "22. Sanam Re (From 'Sanam Re')                            ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/best_of_arijit_singh/22-sanam_re_from_sanam_re.flac" },
{ name: "23. Wat Wat Wat (From 'Tamasha')                          ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/best_of_arijit_singh/23-wat_wat_wat_from_tamasha.flac" },
{ name: "24. Agar Tum Saath Ho (From 'Tamasha')                    ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/best_of_arijit_singh/24-agar_tum_saath_ho_from_tamasha.flac" },
{ name: "25. Itni Si Baat Hain (From 'Azhar')                      ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/best_of_arijit_singh/25-itni_si_baat_hain_from_azhar.flac" },
{ name: "26. Phir Kabhi (From 'M.S.Dhoni - The Untold Story')      ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/best_of_arijit_singh/26-phir_kabhi_from_M_S_dhoni_the_untold_story.flac" },
{ name: "27. Yaad Hai Na (From 'Raaz Reboot')                      ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/best_of_arijit_singh/27-yaad_hai_Na_from_raaz_reboot.flac" },
{ name: "28. Ishq Mubarak (From 'Tum Bin 2')                       ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/best_of_arijit_singh/28-ishq_mubarak_from_tum_bin_2.flac" },
{ name: "29. Dil Ke Paas (From 'Wajah Tum Ho')                     ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/best_of_arijit_singh/29-dil_ke_paas_from_wajah_tum_ho.flac" },
{ name: "30. Dilliwaali Girlfriend (From 'Yeh Jawaani Hai Deewani')", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/best_of_arijit_singh/30-dilliwaali_girlfriend_from_yeh_jawaani_hai_deewani.flac" }
]
},
	
// Album - Tum Bin 2
{
cover: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/tum_bin_2/00-album_cover.jpg",
name: "Tum Bin 2",
artist: "Various Artist",
releaseDate: "20-08-2016",
quality: "16-Bit / 44.1 kHz",
format: "FLAC",
label: " ℗ 2016 Super Cassettes Industries Private Limited © — 2016 Super Cassettes Industries Private Limited",
tracks: [
{ name: "01. Teri Fariyad                 ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/tum_bin_2/01-teri_fariyad.flac" },
{ name: "02. Ishq Mubarak                 ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/tum_bin_2/02-ishq_mubarak.flac" },
{ name: "03. Dekh Lena                    ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/tum_bin_2/03-dekh_lena.flac" },
{ name: "04. Tum Bin                      ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/tum_bin_2/04-tum_bin.flac" },
{ name: "05. Masta                        ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/tum_bin_2/05-masta.flac" },
{ name: "06. Dil Nawaziyaan               ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/tum_bin_2/06-dil_nawaziyaan.flac" },
{ name: "07. Jaegar Bomb                  ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/tum_bin_2/07-jaeger_bomb.flac" },
{ name: "08. Teri Fariyad Extended Version", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/tum_bin_2/08-teri_fariyad_extended_version.flac" }
]
},

// Album - Azhar
{
cover: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/azhar/00-album_cover.png",
name: "Azhar",
artist: "Various Artists",
releaseDate: "07-04-2016",
quality: "16-Bit / 44.1 kHz",
format: "FLAC",
label: " ℗ 2016 Super Cassettes Industries Private Limited © — 2016 Super Cassettes Industries Private Limited",
tracks: [
{ name: "01. Bol Do Na Zara   ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/azhar/01-bol_do_na_zara.flac" },
{ name: "02. Itni Si Baat Hain", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/azhar/02-itni_si_baat_hain.flac" },
{ name: "03. Oye Oye          ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/azhar/03-oye_oye.flac" },
{ name: "04. Tu Hi Na Jaane   ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/azhar/04-tu_hi_na_jaane.flac" },
{ name: "05. Jeetne Ke Liye   ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/azhar/05-jeetne_ke_liye.flac" }
]
},

// Album - Hate Story 3
{
cover: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/hate_story_3/00-album_cover.jpg",
name: "Hate Story 3",
artist: "Various Artists",
releaseDate: "04-11-2015",
quality: "16-Bit / 44.1 kHz",
format: "FLAC",
label: " ℗ 2015 Super Cassettes Industries Private Limited © — 2015 Super Cassettes Industries Private Limited",
tracks: [
{ name: "01. Tumhe Apna Banane Ka    ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/hate_story_3/01-tumhe_apna_banane_ka.flac" },
{ name: "02. Tu Isaq Mera            ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/hate_story_3/02-tu_isaq_mera.flac" },
{ name: "03. Wajah Tum Ho            ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/hate_story_3/03-wajah_tum_ho.flac" },
{ name: "04. Neendein Khul Jaati Hain", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/hate_story_3/04-neendein_khul_jaati_hain.flac" }
]
},

// Album - Guddu Rangeela (Original Motion Picture Soundtrack)
{
cover: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/guddu_rangeela/00-album_cover.jpg",
name: "Guddu Rangeela (Original Motion Picture Soundtrack)",
artist: "Various Artists",
releaseDate: "19-06-2015",
quality: "16-Bit / 44.1 kHz",
format: "FLAC",
label: " ℗ — 2015 Sony Music Entertainment India Pvt. Ltd. Under Exclusive License From Zee Music Company",
tracks: [
{ name: "01. Guddu Rangeela        ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/guddu_rangeela/01-guddu_rangeela.flac" },
{ name: "02. Sooiyan               ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/guddu_rangeela/02-sooiyan.flac" },
{ name: "03. Sahebaan              ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/guddu_rangeela/03-sahebaan.flac" },
{ name: "04. Guddu Rangeela - Remix", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/guddu_rangeela/04-guddu_rangeela_remix.flac" },
{ name: "05. Mata Ka Email         ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/guddu_rangeela/05-mata_ka_email.flac" }
]
},

// Album - Hamari Adhuri Kahani (Original Motion Picture Soundtrack)
{
cover: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/hamari_adhuri_kahani/00-album_cover.jpg",
name: "Hamari Adhuri Kahani (Original Motion Picture Soundtrack)",
artist: "Various Artists",
releaseDate: "21-05-2015",
quality: "24-Bit / 44.1 kHz",
format: "FLAC",
label: " ℗ 2015 Sony Music Entertainment India Pvt. Ltd.",
tracks: [
{ name: "01. Hamari Adhuri Kahani (Title Track)", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/hamari_adhuri_kahani/01-hamari_adhuri_kahani_title_track.flac" },
{ name: "02. Humnava                           ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/hamari_adhuri_kahani/02-humnava.flac" },
{ name: "03. Hasi (Male)                       ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/hamari_adhuri_kahani/03-hasi_male.flac" },
{ name: "04. Hasi (Female)                     ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/hamari_adhuri_kahani/04-hasi_female.flac" },
{ name: "05. Yeh Kaisi Jagah                   ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/hamari_adhuri_kahani/05-yeh_kaisi_jagah.flac" },
{ name: "06. Hamari Adhuri Kahani (Remix)      ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/hamari_adhuri_kahani/06-hamari_adhuri_kahani_remix.flac" }
]
},

// Album - Tanu Weds Manu Returns (Original Motion Picture Soundtrack)
{
cover: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/tanu_weds_manu_returns/00-album_cover.jpg",
name: "Tanu Weds Manu Returns (Original Motion Picture Soundtrack)",
artist: "Various Artists",
releaseDate: "14-04-2015",
quality: "16-Bit / 44.1 kHz",
format: "FLAC",
label: " ℗ 2023 Sony Music Entertainment India Pvt. Ltd. © — 2015 Eros Now Music",
tracks: [
{ name: "01. Banno                          ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/tanu_weds_manu_returns/01-banno.flac" },
{ name: "02. Mat Ja Re                      ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/tanu_weds_manu_returns/02-mat_ja_re.flac" },
{ name: "03. Ghani Bawri                    ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/tanu_weds_manu_returns/03-ghani_bawri.flac" },
{ name: "04. Old School Girl                ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/tanu_weds_manu_returns/04-old_school_girl.flac" },
{ name: "05. Old School Girl - Reprise      ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/tanu_weds_manu_returns/05-old_school_girl_reprise.flac" },
{ name: "06. Move On                        ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/tanu_weds_manu_returns/06-move_on.flac" },
{ name: "07. Ho Gaya Hai Pyar               ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/tanu_weds_manu_returns/07-ho_gaya_hai_pyar.flac" },
{ name: "08. O Sathi Mere                   ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/tanu_weds_manu_returns/08-o_sathi_mere.flac" },
{ name: "09. Ghani Bawri - Remix            ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/tanu_weds_manu_returns/09-ghani_bawri_remix.flac" },
{ name: "10. Tanu Weds Manu Returns - Mashup", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/tanu_weds_manu_returns/10-tanu_weds_manu_returns_mashup.flac" }
]
},

// Album - Khamoshiyan (Original Motion Picture Soundtrack)
{
cover: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/khamoshiyan/00-album_cover.png",
name: "Khamoshiyan (Original Motion Picture Soundtrack)",
artist: "Various Artists",
releaseDate: "29-12-2014",
quality: "24-Bit / 44.1 kHz",
format: "FLAC",
label: " ℗ — 2014 Sony Music Entertainment India Pvt. Ltd.",
tracks: [
{ name: "01. Khamoshiyan", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/khamoshiyan/01-khamoshiyan.flac" },
{ name: "02. Tu Har Lamha", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/khamoshiyan/02-tu_har_lamha.flac" },
{ name: "03. Baatein Ye Kabhi Na - Male", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/khamoshiyan/03-baatein_ye_kabhi_na_male.flac" },
{ name: "04. Kya Khoya", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/khamoshiyan/04-kya_khoya.flac" },
{ name: "05. Bheegh Loon - Female", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/khamoshiyan/05-bheegh_loon_female.flac" },
{ name: "06. Subhan Allah", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/khamoshiyan/06-subhan_allah.flac" },
{ name: "07. Bheegh Loon - Male", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/khamoshiyan/07-bheegh_loon_male.flac" },
{ name: "08. Baatein Ye Kabhi Na - Female", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/khamoshiyan/08-baatein_ye_kabhi_na_female.flac" },
{ name: "09. Khamoshiyan (Unplugged)", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/khamoshiyan/09-khamoshiyan_unplugged.flac" },
{ name: "10. Tu Har Lamha - Remix By Dj Angel", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/khamoshiyan/10-tu_har_lamha_remix_by_dj_angel.flac" },
{ name: "11. Bheegh Loon - Female - Remix By Dj Angel", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/khamoshiyan/11-bheegh_loon_remale_remix_by_dj_angel.flac" }
]
},

// Album - Kill Dil
{
cover: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/kill_dil/00-album_cover.jpg",
name: "Kill Dil",
artist: "Shankar-Ehsaan-Loy",
releaseDate: "25-09-2014",
quality: "16-Bit / 44.1 kHz",
format: "FLAC",
label: " ℗ 2014 YRF Music © — 2014 YRF Music",
tracks: [
{ name: "01. Kill Dil     ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/kill_dil/01-kill_dil.flac" },
{ name: "02. Sweeta       ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/kill_dil/02-sweeta.flac" },
{ name: "03. Happy Budday ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/kill_dil/03-happy_budday.flac" },
{ name: "04. Sajde        ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/kill_dil/04-sajde.flac" },
{ name: "05. Bol Beliya   ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/kill_dil/05-bol_beliya.flac" },
{ name: "06. Daiyya Maiyya", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/kill_dil/06-daiyya_maiyya.flac" },
{ name: "07. Baawra       ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/kill_dil/07-baawra.flac" },
{ name: "08. Nakhriley    ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/kill_dil/08-nakhriley.flac" }
]
},

// Album - Creature 3D
{
cover: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/creature_3d/00-album_cover.jpg",
name: "Creature 3D",
artist: "Various Artists",
releaseDate: "16-08-2014",
quality: "16-Bit / 44.1 kHz",
format: "FLAC",
tracks: [
{ name: "01. Sawan Aaya Hai                            ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/creature_3d/01-sawan_aaya_hai.flac" },
{ name: "02. Hum Naa Rahein Hum                        ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/creature_3d/02-hum_naa_rahein_hum.flac" },
{ name: "03. Naam - E - Wafa                           ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/creature_3d/03-naam_e_wafa.flac" },
{ name: "04. Ik Pal Yahi                               ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/creature_3d/04-ik_pal_yahi.flac" },
{ name: "05. Mehboob Ki                                ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/creature_3d/05-mehboob_ki.flac" },
{ name: "06. Sawan Aaya Hai (Unplugged)                ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/creature_3d/06-sawan_aaya_hai_unplugged.flac" },
{ name: "07. Hum Naa Rahein Hum (Remix By Dj Notorious)", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/creature_3d/07-hum_naa_rahein_hum_remix_by_dj_notorious.flac" },
{ name: "08. Naam - E - Wafa (Remix By Dj Angel)       ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/creature_3d/08-naam_e_wafa_remix_by_dj_angel.flac" },
{ name: "09. Sawan Aaya Hai (Remix By Dj Shiva)        ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/creature_3d/09-sawan_aaya_hai_remix_by_dj_shiva.flac" },
{ name: "10. Mohabbat Barsa De                         ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/creature_3d/10-mohabbat_barsa_de.flac" }
]
},

// Album - Aashiqui 2
{
cover: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/aashiqui_2/00-album_cover.png",
name: "Aashiqui 2",
artist: "Various Artists",
releaseDate: "03-04-2013",
quality: "16-Bit / 44.1 kHz",
format: "FLAC",
label: " ℗ 2013 Super Cassettes Industries Private Limited © — 2013 Super Cassettes Industries Private Limited",
tracks: [
{ name: "01. Tum Hi Ho                     ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/aashiqui_2/01-tum_hi_ho.flac" },
{ name: "02. Sunn Raha Hai                 ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/aashiqui_2/02-sunn_raha_hai.flac" },
{ name: "03. Chahun Main Ya Naa            ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/aashiqui_2/03-chahun_main_ya_naa.flac" },
{ name: "04. Hum Mar Jayenge               ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/aashiqui_2/04-hum_mar_jayenge.flac" },
{ name: "05. Meri Aashiqui                 ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/aashiqui_2/05-meri_aashiqui.flac" },
{ name: "06. Piya Aaye Na                  ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/aashiqui_2/06-piya_aaye_na.flac" },
{ name: "07. Bhula Dena                    ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/aashiqui_2/07-bhula_dena.flac" },
{ name: "08. Aasan Nahin Yahan             ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/aashiqui_2/08-aasan_nahin_yahan.flac" },
{ name: "09. Sunn Raha Hai - Shreya Ghoshal", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/aashiqui_2/09-sunn_raha_hai_shreya_ghoshal.flac" },
{ name: "10. Milne Hai Mujhse Aayi         ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/aashiqui_2/10-milne_hai_mujhse_aayi.flac" },
{ name: "11. Aashiqui (The Love Theme)     ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/aashiqui_2/11-aashiqui_the_love_theme.flac" },
{ name: "12. Tum Hi Ho (Remix)             ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/aashiqui_2/12-tum_hi_ho_Remix.flac" }
]
},

// Album - Table No. 21 (Original Motion Picture Soundtrack)
{
cover: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/table_no_21/00-album_cover.jpg",
name: "Table No. 21 (Original Motion Picture Soundtrack)",
artist: "Gajendra Verma, Sachin Gupta",
releaseDate: "21-12-12",
quality: "16-Bit / 44.1 kHz",
format: "FLAC",
label: " © 2023 Sony Music Entertainment India Pvt. Ltd. ℗ 2013 Sony Music Entertainment India Pvt. Ltd. / Eros Now Music",
tracks: [
{ name: "01. If You Lie You Die", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/table_no_21/01-if_you_lie_you_die.flac" },
{ name: "02. Mann Mera         ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/table_no_21/02-mann_mera.flac" },
{ name: "03. Mann Mera (Remix) ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/table_no_21/03-mann_mera_remix.flac" },
{ name: "04. O Sajna           ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/table_no_21/04-o_sajna.flac" },
{ name: "05. O Sajna (Remix)   ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/table_no_21/05-o_sajna_remix.flac" }
]
},

// Album - Tum Mile (Original Motion Picture Soundtrack)
{
cover: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/tum_mile/00-album_cover.jpg",
name: "Tum Mile (Original Motion Picture Soundtrack)",
artist: "Pritam, Various Artists",
releaseDate: "08-09-2009",
quality: "16-Bit / 44.1 kHz",
format: "FLAC",
label: " ℗ — 2009 Sony Music Entertainment India Pvt. Ltd.",
tracks: [
{ name: "01. Tum Mile		      	    ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/tum_mile/01-tum_mile.flac" },
{ name: "02. Dil Ibaadat		    ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/tum_mile/02-dil_ibaadat.flac" },
{ name: "03. Tu Hi Haqeeqat		    ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/tum_mile/03-tu_hi_haqeeqat.flac" },
{ name: "04. Is Jahaan Mein		    ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/tum_mile/04-is_jahaan_mein.flac" },
{ name: "05. Tum Mile - Love Reprise	    ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/tum_mile/05-tum_mile_love_reprise.flac" },
{ name: "06. O Meri Jaan		    ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/tum_mile/06-o_meri_jaan.flac" },
{ name: "07. Dil Ibaadat - Rock		    ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/tum_mile/07-dil-ibaadat_rock.flac" },
{ name: "08. Tum Mile - Rock		    ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/tum_mile/08-tum_mile_rock.flac" },
{ name: "09. Soul Of Tum Mile - Instrumental", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/tum_mile/09-soul_of_tum_mile_instrumental.flac" }
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

document.addEventListener('DOMContentLoaded', () => {
const artists = [

// PLACEHOLDER - DO NOT MODIFY THE BELOW LINE ( ALBUM TAGS )
{
// PLACEHOLDER - DO NOT MODIFY THE ABOVE LINE ( ALBUM TAGS )

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
{ name: " 01. Dekhha Tenu		            	", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/mr_and_mrs_mahi/01-dekhha_tenu.flac" },
{ name: " 02. Agar Ho Tum		            	", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/mr_and_mrs_mahi/02-agar_ho_tum.flac" },
{ name: " 03. Roya Jab Tu		            	", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/mr_and_mrs_mahi/03-roya_jab_tu.flac" },
{ name: " 04. Tu Hain Toh            			", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/mr_and_mrs_mahi/04-tu_hain_toh.flac" },
{ name: " 05. Junoon Hain		            	", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/mr_and_mrs_mahi/05-junoon_hain.flac" },
{ name: " 06. Ranjhana                           ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/mr_and_mrs_mahi/06-ranjhana.flac" },
{ name: " 07. Tu - Hain Toh - Neeti Mohan Version", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/mr_and_mrs_mahi/07-tu_hain_toh_neeti_mohan_version.flac" }
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
{ name: " 01. Naina                        ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/crew/01-naina_from_crew.flac" },
{ name: " 02. Kiddan Zaalima               ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/crew/02-kiddan_zaalima.flac" },
{ name: " 03. Darbadar                     ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/crew/03-darbadar.flac" },
{ name: " 04. Khwabida                     ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/crew/04-khwabida.flac" },
{ name: " 05. Ghagra                       ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/crew/05-ghagra_from_crew.flac" },
{ name: " 06. Choli Ke Peeche              ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/crew/06-choli_ke_peeche_from_crew.flac" },
{ name: " 07. Sona Kitna Sona Hai          ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/crew/07-sona_kitna_sona_hai.flac" },
{ name: " 08. Sona Kitna Sona Hai (Reprise)", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/crew/08-sona_kitna_sona_hai_reprise.flac" }
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
{ name: " 01. God Damn        ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/ek_tha_raja/01-god_damn.flac" },
{ name: " 02. O' Sajna        ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/ek_tha_raja/02-o_sajna.flac" },
{ name: " 03. Like A Snake    ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/ek_tha_raja/03-like_a_snake.flac" },
{ name: " 04. Bajenge         ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/ek_tha_raja/04-bajenge.flac" },
{ name: " 05. Hola At Your Boy", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/ek_tha_raja/05-hola_at_your_boy.flac" },
{ name: " 06. Surma           ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/ek_tha_raja/06-surma.flac" },
{ name: " 07. Red And Blue    ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/ek_tha_raja/07-red_and_blue.flac" },
{ name: " 08. Drinks On Me    ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/ek_tha_raja/08-drinks_on_me.flac" },
{ name: " 09. Soulmate        ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/ek_tha_raja/09-soulmate.flac" },
{ name: " 10. Body On Me	     ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/ek_tha_raja/10-body_on_me.flac" },
{ name: " 11. AMG	         ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/ek_tha_raja/11-amg.flac" },
{ name: " 12. Naraaz          ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/ek_tha_raja/12-naraaz.flac" },
{ name: " 13. Kalashnikova    ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/ek_tha_raja/13-kalashnikova.flac" },
{ name: " 14. Alag Hai        ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/ek_tha_raja/14-alag_hai.flac" },
{ name: " 15. Daaku           ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/ek_tha_raja/15-daaku.flac" },
{ name: " 16. G-Yaan          ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/ek_tha_raja/16-g_yaan.flac" }
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
{ name: " 01. Vigdiyan Heeran   ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/honey_3_0/01-vigdiyan_heeran.flac" },
{ name: " 02. Kalaastar         ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/honey_3_0/02-kalaastar.flac" },
{ name: " 03. Kuley Kuley       ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/honey_3_0/03-kuley_kuley.flac" },
{ name: " 04. Tujh Pe Pyar      ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/honey_3_0/04-tujh_pe_pyaar.flac" },
{ name: " 05. Dheeth            ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/honey_3_0/05-dheeth.flac" },
{ name: " 06. Savage            ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/honey_3_0/06-savage.flac" },
{ name: " 07. Soul              ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/honey_3_0/07-soul.flac" },
{ name: " 08. Let's Get It Party", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/honey_3_0/08-lets_get-it_party.flac" },
{ name: " 09. Naagan            ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/honey_3_0/09-naagan.flac" },
{ name: " 10. Habibti           ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/honey_3_0/10-habibti.flac" }
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
{ name: " 01. Arjan Vailly                                    ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/animal_deluxe/01-arjan_vailly.flac" },
{ name: " 02. Hua Main                                        ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/animal_deluxe/02-hua_main.flac" },
{ name: " 03. Satranga                                        ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/animal_deluxe/03-satranga.flac" },
{ name: " 04. Papa Meri Jaan                                  ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/animal_deluxe/04-papa_meri_jaan.flac" },
{ name: " 05. Pehle Bhi Main                                  ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/animal_deluxe/05-pehle_bhi_main.flac" },
{ name: " 06. Kashmir                                         ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/animal_deluxe/06-kashmir.flac" },
{ name: " 07. Saari Duniya Jalaa Denge                        ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/animal_deluxe/07-saari_duniya_jalaa_denge.flac" },
{ name: " 08. Haiwaan                                         ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/animal_deluxe/08-haiwaan.flac" },
{ name: " 09. Papa Meri Jaan (Child's Version)                ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/animal_deluxe/09-papa_meri_jaan_childs_version.flac" },
{ name: " 10. Ranvijay's Entry Medley                         ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/animal_deluxe/10-ranvijays_entry_medley.flac" },
{ name: " 11. Abrar's Entry Jamal Kudu                        ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/animal_deluxe/11-abrars_entry_jamal_kudu.flac" },
{ name: " 12. Bhaavein Jaane Ya Na Jaane                      ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/animal_deluxe/12-bhaavein_jaane_ya_na_jaane.flac" },
{ name: " 13. Marham (Pehle Bhi Main)                         ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/animal_deluxe/13-marham_pehle_bhi_main.flac" },
{ name: " 14. Satranga (Stripped)                             ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/animal_deluxe/14-satranga_stripped.flac" },
{ name: " 15. Urdu Ke Jaisa Ishq (Kashmir)                    ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/animal_deluxe/15-urdu_ke_jaisa_ishq_kashmir.flac" },
{ name: " 16. Saari Duniya Jalaa Denge (Extended Film Version)", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/animal_deluxe/16-saari_duniya_jalaa_denge_extended_film_version.flac" },
{ name: " 17. Papa Meri Jaan (Whistle)                        ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/animal_deluxe/17-papa_meri_jaan_whistle.flac" }
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
{ name: " 01. Tere Pyaar Mein         ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/tu_jhoothi_main_makkaar/01-tere_pyaar_mein.flac" },
{ name: " 02. Pyaar Hota Kayi Baar Hai", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/tu_jhoothi_main_makkaar/02-pyaar_hota_kayi_baar_hai.flac" },
{ name: " 03. O Bedardeya             ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/tu_jhoothi_main_makkaar/03-o_bedardeya.flac" },
{ name: " 04. Show Me The Thumka      ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/tu_jhoothi_main_makkaar/04-show_me_the_thumka.flac" },
{ name: " 05. Jaadui                  ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/tu_jhoothi_main_makkaar/05-jaadui.flac" },
{ name: " 06. Maine Pi Rakhi Hai      ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/tu_jhoothi_main_makkaar/06-maine_pi_rakhi_hai.flac" }
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
{ name: " 01. Bhool Bhulaiyaa 2 Title Track      ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/bhool_bhulaiyaa_2/01-bhool_bhulaiyaa_2_title_track.flac" },
{ name: " 02. Hum Nashe Mein Toh Nahin           ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/bhool_bhulaiyaa_2/02-hum_nashe_mein_toh_nahin.flac" },
{ name: " 03. De Taali                           ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/bhool_bhulaiyaa_2/03-de_taali.flac" },
{ name: " 04. Mere Dholna (Arijit Version)       ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/bhool_bhulaiyaa_2/04-mere_dholna_arijit_version.flac" },
{ name: " 05. Ami Je Tomar Tandav                ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/bhool_bhulaiyaa_2/05-ami_je_tomar_tandav.flac" },
{ name: " 06. Ami Je Tomar Tandav (Film Version) ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/bhool_bhulaiyaa_2/06-ami_je_tomar_tandav_film_version.flac" },
{ name: " 07. Ami Je Tomar Tandav (Kiara's Scare)", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/bhool_bhulaiyaa_2/07-ami_je_tomar_Kiaras_scare.flac" },
{ name: " 08. Mere Dholna (The Sisters)          ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/bhool_bhulaiyaa_2/08-mere_dholna_the_sisters.flac" },
{ name: " 09. Mere Dholna Revisited              ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/bhool_bhulaiyaa_2/09-mere_dholna_revisited.flac" }
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
{ name: " 01. Vaddi Sharaban            ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/de_de_pyaar_de/01-vaddi_sharaban.flac" },
{ name: " 02. Tu Mila To Haina          ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/de_de_pyaar_de/02-tu_mila_to_haina.flac" },
{ name: " 03. Hauli Hauli               ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/de_de_pyaar_de/03-hauli_hauli.flac" },
{ name: " 04. Chale Aana		           ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/de_de_pyaar_de/04-chale_aana.flac" },
{ name: " 05. Mukhda Vekh Ke            ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/de_de_pyaar_de/05-mukhda_vekh_ke.flac" },
{ name: " 06. Dil Royi Jaye             ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/de_de_pyaar_de/06-dil_royi_jaye.flac" },
{ name: " 07. Vaddi Sharaban (Talli Mix)", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/de_de_pyaar_de/07-vaddi_sharaban_talli_mix.flac" }
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
{ name: " 01. Tum Se                 ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/jalebi/01-tum_se.flac" },
{ name: " 02. Pal                    ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/jalebi/02-pal.flac" },
{ name: " 03. Mera Pyar Tera Pyar    ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/jalebi/03-mera_pyar_tera_pyar.flac" },
{ name: " 04. Mujhme                 ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/jalebi/04-mujhme.flac" },
{ name: " 05. Tera Mera Rishta       ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/jalebi/05-tera_mera_rishta.flac" },
{ name: " 06. Pal (Female)           ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/jalebi/06-pal_female.flac" },
{ name: " 07. Tera Mera Rishta (Male)", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/jalebi/07-tera_mera_rishta_male.flac" },
{ name: " 08. Pehle Ke Jaisa         ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/jalebi/08-pehle_ke_jaisa.flac" },
{ name: " 09. Tum Se Adlib           ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/jalebi/09-tum_se.flac" },
{ name: " 10. Tum Se Adlib (Female)  ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/jalebi/10-tum_se_female.flac" }
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
{ name: " 01. Dil Jaane Na ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/dil_juunglee/01-dil_jaane_na.flac" },
{ name: " 02. Bandeya      ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/dil_juunglee/02-bandeya.flac" },
{ name: " 03. Beat Juunglee", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/dil_juunglee/03-beat_juunglee.flac" }
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
{ name: " 01. Main Rahoon Ya Na Rahoon                  ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/bollywood_romantic_songs_with_armaan_malik/01-main_rahoon_ya_na_rahoon.flac" },
{ name: " 02. Bol Do Na Zara                            ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/bollywood_romantic_songs_with_armaan_malik/02-bol_do_na_zara.flac" },
{ name: " 03. Kaun Tujhe & Kuch Toh Hai Mashup          ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/bollywood_romantic_songs_with_armaan_malik/03-kaun_tujhe_&_kuch_toh_hai_mashup.flac" },
{ name: " 04. Jab Tak                                   ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/bollywood_romantic_songs_with_armaan_malik/04-jab_tak.flac" },
{ name: " 05. Wajah Tum Ho                              ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/bollywood_romantic_songs_with_armaan_malik/05-wajah_tum_ho.flac" },
{ name: " 06. Sab Tera                                  ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/bollywood_romantic_songs_with_armaan_malik/06-sab_tera.flac" },
{ name: " 07. Dil Mein Chhupa Loonga                    ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/bollywood_romantic_songs_with_armaan_malik/07-dil_mein_chhupa_loonga.flac" },
{ name: " 08. Main Hoon Hero Tera (Armaan Malik Version)", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/bollywood_romantic_songs_with_armaan_malik/08-main_hoon_hero_tera.flac" },
{ name: " 09. Mujhko Barsaat Bana Lo                    ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/bollywood_romantic_songs_with_armaan_malik/09-mujhko_barsaat_bana_lo.flac" },
{ name: " 10. Tum Jo Mile                               ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/bollywood_romantic_songs_with_armaan_malik/10-tum_jo_mile.flac" },
{ name: " 11. Main Agar Kahoon - Bol Do Na Zara         ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/bollywood_romantic_songs_with_armaan_malik/11-main_agar_kahoon_bol_do_na_zara.flac" },
{ name: " 12. Dil Ke Paas (Unplugged)                   ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/bollywood_romantic_songs_with_armaan_malik/12-dil_ke_paas_Unplugged.flac" },
{ name: " 13. Pyaar Manga Hai                           ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/bollywood_romantic_songs_with_armaan_malik/13-pyaar_manga_hai.flac" },
{ name: " 14. Tumhe Apna Banane Ka                      ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/bollywood_romantic_songs_with_armaan_malik/14-tumhe_apna_banane_ka.flac" },
{ name: " 15. O Saathiya                                ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/bollywood_romantic_songs_with_armaan_malik/15-o_saathiya.flac" }
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
{ name: " 01. Afeemi                 ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/meri_pyaari_bindu/01-afeemi.flac" },
{ name: " 02. Ye Jawaani Teri        ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/meri_pyaari_bindu/02-ye_jawaani_teri.flac" },
{ name: " 03. Haareya                ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/meri_pyaari_bindu/03-haareya.flac" },
{ name: " 04. Maana Ke Hum Yaar Nahin", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/meri_pyaari_bindu/04-maana_ke_hum_yaar_nahin.flac" },
{ name: " 05. Iss Tarah              ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/meri_pyaari_bindu/05-iss_tarah.flac" },
{ name: " 06. Khol De Baahein        ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/meri_pyaari_bindu/06-khol_de_baahein.flac" }
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
{ name: " 01. Tum Hi Ho (From 'Aashiqui 2')                         ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/best_of_arijit_singh/01-tum_hi_ho_from_aashiqui_2.flac" },
{ name: " 02. Hum Mar Jayenge (From 'Aashiqui 2')                   ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/best_of_arijit_singh/02-hum_mar_jayenge_from_aashiqui_2.flac" },
{ name: " 03. Aasan Nahin Yahan (From 'Aashiqui 2')                 ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/best_of_arijit_singh/03-aasan_nahin_yahan_from_aashiqui_2.flac" },
{ name: " 04. Milne Hai Mujhse Aayi (From 'Aashiqui 2')             ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/best_of_arijit_singh/04-milne_hai_mujhse_aayi_from_aashiqui_2.flac" },
{ name: " 05. Phir Mohabbat (From 'Murder 2')                       ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/best_of_arijit_singh/05-phir_mohabbat_from_murder_2.flac" },
{ name: " 06. Ilahi (From 'Yeh Jawaani Hai Deewani')                ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/best_of_arijit_singh/06-ilahi_from_yeh_jawaani_hai_deewani.flac" },
{ name: " 07. Raabta (From 'Agent Vinod')                           ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/best_of_arijit_singh/07-raabta_from_agent_vinod.flac" },
{ name: " 08. Raat Bhar (From 'Heropanti')                          ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/best_of_arijit_singh/08-raat_bhar_from_heropanti.flac" },
{ name: " 09. Tose Naina (From 'Mickey Virus')                      ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/best_of_arijit_singh/09-tose_naina_from_mickey_virus.flac" },
{ name: " 10. Kabira (Encore) (From 'Yeh Jawaani Hai Deewani')      ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/best_of_arijit_singh/10-kabira_encore_from_yeh_jawaani_hai_deewani.flac" },
{ name: " 11. Har Kisi Ko (From 'Boss')                             ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/best_of_arijit_singh/11-har_kisi_ko_from_boss.flac" },
{ name: " 12. Duaa (From 'Shanghai')                                ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/best_of_arijit_singh/12-duaa_from_shanghai.flac" },
{ name: " 13. Aaj Phir (From 'Hate Story 2')                        ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/best_of_arijit_singh/13-aaj_phir_from_hate_story_2.flac" },
{ name: " 14. Palat - Tera Hero Idhar Hai (From 'Main Tera Hero')   ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/best_of_arijit_singh/14-palat_tera_hero_idhar_hai_from_main_tera_hero.flac" },
{ name: " 15. Shanivaar Raati (From 'Main Tera Hero')               ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/best_of_arijit_singh/15-shanivaar_raati_from_main_tera_hero.flac" },
{ name: " 16. Mast Magan (From '2 States')                          ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/best_of_arijit_singh/16-mast_magan_from_2_states.flac" },
{ name: " 17. Sooraj Dooba Hain (From 'Roy')                        ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/best_of_arijit_singh/17-sooraj_dooba_hain_from_roy.flac" },
{ name: " 18. Suno Na Sangemarmar                                   ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/best_of_arijit_singh/18-suno-na_sangemarmar.flac" },
{ name: " 19. Soch Na Sake (From 'Airlift')                         ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/best_of_arijit_singh/19-soch_na_sake_from_airlift.flac" },
{ name: " 20. Baaton Ko Teri (From 'All Is Well')                   ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/best_of_arijit_singh/20-baaton_ko_teri_from_all_is_well.flac" },
{ name: " 21. Chal Wahan Jaate Hain (From 'Chal Wahan Jaate Hain')  ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/best_of_arijit_singh/21-chal_wahan_jaate_hain_from_chal_wahan_jaate_hain.flac" },
{ name: " 22. Sanam Re (From 'Sanam Re')                            ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/best_of_arijit_singh/22-sanam_re_from_sanam_re.flac" },
{ name: " 23. Wat Wat Wat (From 'Tamasha')                          ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/best_of_arijit_singh/23-wat_wat_wat_from_tamasha.flac" },
{ name: " 24. Agar Tum Saath Ho (From 'Tamasha')                    ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/best_of_arijit_singh/24-agar_tum_saath_ho_from_tamasha.flac" },
{ name: " 25. Itni Si Baat Hain (From 'Azhar')                      ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/best_of_arijit_singh/25-itni_si_baat_hain_from_azhar.flac" },
{ name: " 26. Phir Kabhi (From 'M.S.Dhoni - The Untold Story')      ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/best_of_arijit_singh/26-phir_kabhi_from_M_S_dhoni_the_untold_story.flac" },
{ name: " 27. Yaad Hai Na (From 'Raaz Reboot')                      ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/best_of_arijit_singh/27-yaad_hai_Na_from_raaz_reboot.flac" },
{ name: " 28. Ishq Mubarak (From 'Tum Bin 2')                       ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/best_of_arijit_singh/28-ishq_mubarak_from_tum_bin_2.flac" },
{ name: " 29. Dil Ke Paas (From 'Wajah Tum Ho')                     ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/best_of_arijit_singh/29-dil_ke_paas_from_wajah_tum_ho.flac" },
{ name: " 30. Dilliwaali Girlfriend (From 'Yeh Jawaani Hai Deewani')", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/best_of_arijit_singh/30-dilliwaali_girlfriend_from_yeh_jawaani_hai_deewani.flac" }
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
{ name: " 01. Teri Fariyad                 ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/tum_bin_2/01-teri_fariyad.flac" },
{ name: " 02. Ishq Mubarak                 ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/tum_bin_2/02-ishq_mubarak.flac" },
{ name: " 03. Dekh Lena                    ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/tum_bin_2/03-dekh_lena.flac" },
{ name: " 04. Tum Bin                      ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/tum_bin_2/04-tum_bin.flac" },
{ name: " 05. Masta                        ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/tum_bin_2/05-masta.flac" },
{ name: " 06. Dil Nawaziyaan               ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/tum_bin_2/06-dil_nawaziyaan.flac" },
{ name: " 07. Jaegar Bomb                  ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/tum_bin_2/07-jaeger_bomb.flac" },
{ name: " 08. Teri Fariyad Extended Version", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/tum_bin_2/08-teri_fariyad_extended_version.flac" }
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
{ name: " 01. Bol Do Na Zara   ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/azhar/01-bol_do_na_zara.flac" },
{ name: " 02. Itni Si Baat Hain", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/azhar/02-itni_si_baat_hain.flac" },
{ name: " 03. Oye Oye          ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/azhar/03-oye_oye.flac" },
{ name: " 04. Tu Hi Na Jaane   ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/azhar/04-tu_hi_na_jaane.flac" },
{ name: " 05. Jeetne Ke Liye   ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/azhar/05-jeetne_ke_liye.flac" }
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
{ name: " 01. Tumhe Apna Banane Ka    ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/hate_story_3/01-tumhe_apna_banane_ka.flac" },
{ name: " 02. Tu Isaq Mera            ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/hate_story_3/02-tu_isaq_mera.flac" },
{ name: " 03. Wajah Tum Ho            ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/hate_story_3/03-wajah_tum_ho.flac" },
{ name: " 04. Neendein Khul Jaati Hain", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/hate_story_3/04-neendein_khul_jaati_hain.flac" }
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
{ name: " 01. Guddu Rangeela        ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/guddu_rangeela/01-guddu_rangeela.flac" },
{ name: " 02. Sooiyan               ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/guddu_rangeela/02-sooiyan.flac" },
{ name: " 03. Sahebaan              ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/guddu_rangeela/03-sahebaan.flac" },
{ name: " 04. Guddu Rangeela - Remix", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/guddu_rangeela/04-guddu_rangeela_remix.flac" },
{ name: " 05. Mata Ka Email         ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/guddu_rangeela/05-mata_ka_email.flac" }
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
{ name: " 01. Hamari Adhuri Kahani (Title Track)", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/hamari_adhuri_kahani/01-hamari_adhuri_kahani_title_track.flac" },
{ name: " 02. Humnava                           ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/hamari_adhuri_kahani/02-humnava.flac" },
{ name: " 03. Hasi (Male)                       ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/hamari_adhuri_kahani/03-hasi_male.flac" },
{ name: " 04. Hasi (Female)                     ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/hamari_adhuri_kahani/04-hasi_female.flac" },
{ name: " 05. Yeh Kaisi Jagah                   ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/hamari_adhuri_kahani/05-yeh_kaisi_jagah.flac" },
{ name: " 06. Hamari Adhuri Kahani (Remix)      ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/hamari_adhuri_kahani/06-hamari_adhuri_kahani_remix.flac" }
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
{ name: " 01. Banno                          ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/tanu_weds_manu_returns/01-banno.flac" },
{ name: " 02. Mat Ja Re                      ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/tanu_weds_manu_returns/02-mat_ja_re.flac" },
{ name: " 03. Ghani Bawri                    ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/tanu_weds_manu_returns/03-ghani_bawri.flac" },
{ name: " 04. Old School Girl                ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/tanu_weds_manu_returns/04-old_school_girl.flac" },
{ name: " 05. Old School Girl - Reprise      ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/tanu_weds_manu_returns/05-old_school_girl_reprise.flac" },
{ name: " 06. Move On                        ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/tanu_weds_manu_returns/06-move_on.flac" },
{ name: " 07. Ho Gaya Hai Pyar               ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/tanu_weds_manu_returns/07-ho_gaya_hai_pyar.flac" },
{ name: " 08. O Sathi Mere                   ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/tanu_weds_manu_returns/08-o_sathi_mere.flac" },
{ name: " 09. Ghani Bawri - Remix            ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/tanu_weds_manu_returns/09-ghani_bawri_remix.flac" },
{ name: " 10. Tanu Weds Manu Returns - Mashup", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/tanu_weds_manu_returns/10-tanu_weds_manu_returns_mashup.flac" }
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
{ name: " 01. Khamoshiyan", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/khamoshiyan/01-khamoshiyan.flac" },
{ name: " 02. Tu Har Lamha", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/khamoshiyan/02-tu_har_lamha.flac" },
{ name: " 03. Baatein Ye Kabhi Na - Male", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/khamoshiyan/03-baatein_ye_kabhi_na_male.flac" },
{ name: " 04. Kya Khoya", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/khamoshiyan/04-kya_khoya.flac" },
{ name: " 05. Bheegh Loon - Female", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/khamoshiyan/05-bheegh_loon_female.flac" },
{ name: " 06. Subhan Allah", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/khamoshiyan/06-subhan_allah.flac" },
{ name: " 07. Bheegh Loon - Male", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/khamoshiyan/07-bheegh_loon_male.flac" },
{ name: " 08. Baatein Ye Kabhi Na - Female", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/khamoshiyan/08-baatein_ye_kabhi_na_female.flac" },
{ name: " 09. Khamoshiyan (Unplugged)", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/khamoshiyan/09-khamoshiyan_unplugged.flac" },
{ name: " 10. Tu Har Lamha - Remix By Dj Angel", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/khamoshiyan/10-tu_har_lamha_remix_by_dj_angel.flac" },
{ name: " 11. Bheegh Loon - Female - Remix By Dj Angel", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/khamoshiyan/11-bheegh_loon_remale_remix_by_dj_angel.flac" }
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
{ name: " 01. Kill Dil     ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/kill_dil/01-kill_dil.flac" },
{ name: " 02. Sweeta       ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/kill_dil/02-sweeta.flac" },
{ name: " 03. Happy Budday ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/kill_dil/03-happy_budday.flac" },
{ name: " 04. Sajde        ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/kill_dil/04-sajde.flac" },
{ name: " 05. Bol Beliya   ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/kill_dil/05-bol_beliya.flac" },
{ name: " 06. Daiyya Maiyya", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/kill_dil/06-daiyya_maiyya.flac" },
{ name: " 07. Baawra       ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/kill_dil/07-baawra.flac" },
{ name: " 08. Nakhriley    ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/kill_dil/08-nakhriley.flac" }
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
{ name: " 01. Sawan Aaya Hai                            ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/creature_3d/01-sawan_aaya_hai.flac" },
{ name: " 02. Hum Naa Rahein Hum                        ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/creature_3d/02-hum_naa_rahein_hum.flac" },
{ name: " 03. Naam - E - Wafa                           ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/creature_3d/03-naam_e_wafa.flac" },
{ name: " 04. Ik Pal Yahi                               ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/creature_3d/04-ik_pal_yahi.flac" },
{ name: " 05. Mehboob Ki                                ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/creature_3d/05-mehboob_ki.flac" },
{ name: " 06. Sawan Aaya Hai (Unplugged)                ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/creature_3d/06-sawan_aaya_hai_unplugged.flac" },
{ name: " 07. Hum Naa Rahein Hum (Remix By Dj Notorious)", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/creature_3d/07-hum_naa_rahein_hum_remix_by_dj_notorious.flac" },
{ name: " 08. Naam - E - Wafa (Remix By Dj Angel)       ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/creature_3d/08-naam_e_wafa_remix_by_dj_angel.flac" },
{ name: " 09. Sawan Aaya Hai (Remix By Dj Shiva)        ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/creature_3d/09-sawan_aaya_hai_remix_by_dj_shiva.flac" },
{ name: " 10. Mohabbat Barsa De                         ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/creature_3d/10-mohabbat_barsa_de.flac" }
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
{ name: " 01. Tum Hi Ho                     ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/aashiqui_2/01-tum_hi_ho.flac" },
{ name: " 02. Sunn Raha Hai                 ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/aashiqui_2/02-sunn_raha_hai.flac" },
{ name: " 03. Chahun Main Ya Naa            ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/aashiqui_2/03-chahun_main_ya_naa.flac" },
{ name: " 04. Hum Mar Jayenge               ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/aashiqui_2/04-hum_mar_jayenge.flac" },
{ name: " 05. Meri Aashiqui                 ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/aashiqui_2/05-meri_aashiqui.flac" },
{ name: " 06. Piya Aaye Na                  ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/aashiqui_2/06-piya_aaye_na.flac" },
{ name: " 07. Bhula Dena                    ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/aashiqui_2/07-bhula_dena.flac" },
{ name: " 08. Aasan Nahin Yahan             ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/aashiqui_2/08-aasan_nahin_yahan.flac" },
{ name: " 09. Sunn Raha Hai - Shreya Ghoshal", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/aashiqui_2/09-sunn_raha_hai_shreya_ghoshal.flac" },
{ name: " 10. Milne Hai Mujhse Aayi         ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/aashiqui_2/10-milne_hai_mujhse_aayi.flac" },
{ name: " 11. Aashiqui (The Love Theme)     ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/aashiqui_2/11-aashiqui_the_love_theme.flac" },
{ name: " 12. Tum Hi Ho (Remix)             ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/aashiqui_2/12-tum_hi_ho_Remix.flac" }
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
{ name: " 01. If You Lie You Die", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/table_no_21/01-if_you_lie_you_die.flac" },
{ name: " 02. Mann Mera         ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/table_no_21/02-mann_mera.flac" },
{ name: " 03. Mann Mera (Remix) ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/table_no_21/03-mann_mera_remix.flac" },
{ name: " 04. O Sajna           ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/table_no_21/04-o_sajna.flac" },
{ name: " 05. O Sajna (Remix)   ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/table_no_21/05-o_sajna_remix.flac" }
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
{ name: " 01. Tum Mile		      	    ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/tum_mile/01-tum_mile.flac" },
{ name: " 02. Dil Ibaadat		    ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/tum_mile/02-dil_ibaadat.flac" },
{ name: " 03. Tu Hi Haqeeqat		    ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/tum_mile/03-tu_hi_haqeeqat.flac" },
{ name: " 04. Is Jahaan Mein		    ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/tum_mile/04-is_jahaan_mein.flac" },
{ name: " 05. Tum Mile - Love Reprise	    ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/tum_mile/05-tum_mile_love_reprise.flac" },
{ name: " 06. O Meri Jaan		    ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/tum_mile/06-o_meri_jaan.flac" },
{ name: " 07. Dil Ibaadat - Rock		    ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/tum_mile/07-dil-ibaadat_rock.flac" },
{ name: " 08. Tum Mile - Rock		    ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/tum_mile/08-tum_mile_rock.flac" },
{ name: " 09. Soul Of Tum Mile - Instrumental", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/albums/bollywood_hindi/tum_mile/09-soul_of_tum_mile_instrumental.flac" }
]
},

// PLACEHOLDER - DO NOT MODIFY THE BELOW LINE ( ALBUM TAGS )
]
},
// PLACEHOLDER - DO NOT MODIFY THE ABOVE LINE ( ALBUM TAGS )



// PLACEHOLDER - DO NOT MODIFY THE BELOW LINE ( ALBUM TAGS )
{
// PLACEHOLDER - DO NOT MODIFY THE ABOVE LINE ( ALBUM TAGS )

name: "Arijit Singh",
albums: [

// Album - Dil Haareya
{
cover: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/arijit_singh/dil_haareya/00-album_cover.jpg",
name: "Dil Haareya",
artist: "Arijit Singh",
releaseDate: "07-12-2023",
quality: "16-Bit / 44.1 kHz",
format: "FLAC",
label: " ℗ 2023 Saregama India Ltd © — 2023 Saregama India Ltd",
tracks: [
{ name: " 01. Dil Haareya", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/arijit_singh/dil_haareya/01-dil_haareya.flac" }
]
},

// Album - Bairiya
{
cover: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/arijit_singh/bairiya/00-album_cover.jpg",
name: "Bairiya",
artist: "Arijit Singh",
releaseDate: "14-03-2023",
quality: "16-Bit / 44.1 kHz",
format: "FLAC",
label: " ℗ — 2023 Sony Music Entertainment India Pvt. Ltd.",
tracks: [
{ name: " 01. Bairiya", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/arijit_singh/bairiya/01-bairiya.flac" }
]
},

// Album - Pal Pal Dil Ke Paas
{
cover: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/arijit_singh/pal_pal_dil_ke_paas/00-album_cover.jpg",
name: "Pal Pal Dil Ke Paas",
artist: "Arijit Singh",
releaseDate: "27-08-2019",
quality: "16-Bit / 44.1 kHz",
format: "FLAC",
label: " ℗ 2019 Zee Music Company © — 2019 Zee Music Company",
tracks: [
{ name: " 01. Pal Pal Dil Ke Paas - Title Track", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/arijit_singh/pal_pal_dil_ke_paas/01-pal_pal_dil_ke_paas.flac" }
]
},

// Album - Pal (From 'Monsoon Shooutout') - Single
{
cover: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/arijit_singh/monsoon_shootout/00-album_cover.jpg",
name: "Pal (From 'Monsoon Shooutout')",
artist: "Arijit Singh",
releaseDate: "19-12-2017",
quality: "16-Bit / 44.1 kHz",
format: "FLAC",
label: " ℗ 2017 Saregama India Ltd © — 2017 Saregama India Ltd",
tracks: [
{ name: " 01. Pal", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/arijit_singh/monsoon_shootout/01-pal.flac" }
]
},

// PLACEHOLDER - DO NOT MODIFY THE BELOW LINE ( ALBUM TAGS )
]
},
// PLACEHOLDER - DO NOT MODIFY THE ABOVE LINE ( ALBUM TAGS )



// PLACEHOLDER - DO NOT MODIFY THE BELOW LINE ( ALBUM TAGS )
{
// PLACEHOLDER - DO NOT MODIFY THE ABOVE LINE ( ALBUM TAGS )

name: "d4vd",
albums: [

// Album - Petals to Thorns
{
cover: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/d4vd/petals_to_thorns/00-album_cover.jpg",
name: "Petals to Thorns",
artist: "d4vd",
releaseDate: "26-05-2023",
quality: "24-Bit / 44.1 kHz",
format: "FLAC",
label: " ℗ 2023 Darkroom/Interscope Records © — 2023 Darkroom/Interscope Records",
tracks: [
{ name: " 01. Sleep Well                       ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/d4vd/petals_to_thorns/01-sleep_well.flac" },
{ name: " 02. Here With Me                     ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/d4vd/petals_to_thorns/02-here_with_me.flac" },
{ name: " 03. This Is How It Feels (ft. Laufey)", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/d4vd/petals_to_thorns/03-this_is_how_it_feels.flac" },
{ name: " 04. Don't Forget About Me            ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/d4vd/petals_to_thorns/04-dont_forget_about_me.flac" },
{ name: " 05. WORTHLESS                        ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/d4vd/petals_to_thorns/05-worthless.flac" },
{ name: " 06. Backstreet Girl                  ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/d4vd/petals_to_thorns/06-backstreet_girl.flac" },
{ name: " 07. You and I                        ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/d4vd/petals_to_thorns/07-you_and_i.flac" },
{ name: " 08. Romantic Homicide                ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/d4vd/petals_to_thorns/08-romantic_homicide.flac" },
{ name: " 09. The Bridge                       ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/d4vd/petals_to_thorns/09-the_bridge.flac" }
]
},

// PLACEHOLDER - DO NOT MODIFY THE BELOW LINE ( ALBUM TAGS )
]
},
// PLACEHOLDER - DO NOT MODIFY THE ABOVE LINE ( ALBUM TAGS )




// PLACEHOLDER - DO NOT MODIFY THE BELOW LINE ( ALBUM TAGS )
{
// PLACEHOLDER - DO NOT MODIFY THE ABOVE LINE ( ALBUM TAGS )

name: "Dave Porter",
albums: [

// Album - Better Call Saul, Vol. 3 (Original Score from the TV Series)
{
cover: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/dave_porter/better_call_saul_vol_3/00-album_cover.jpg",
name: "Better Call Saul, Vol. 3 (Original Score from the TV Series)",
artist: "Dave Porter",
quality: "24-Bit / 48 kHz",
format: "FLAC",
label: " ℗ — 2022 Sony Pictures Television Inc., under exclusive license to Milan Records, a label of Sony Music Entertainment. All Rights Reserved.",
tracks: [
{ name: " 01. Devil's Dandruff        ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/dave_porter/better_call_saul_vol_3/01-devils_dandruff.flac" },
{ name: " 02. Lalo Needs Proof        ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/dave_porter/better_call_saul_vol_3/02-lalo_needs_proof.flac" },
{ name: " 03. Safe In the Safe        ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/dave_porter/better_call_saul_vol_3/03-safe_in_the_safe.flac" },
{ name: " 04. Mike Vs Gus             ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/dave_porter/better_call_saul_vol_3/04-mike_vs_gus.flac" },
{ name: " 05. Rock and Hard Place     ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/dave_porter/better_call_saul_vol_3/05-rock_and_hard_place.flac" },
{ name: " 06. Take the Jag for a Spin ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/dave_porter/better_call_saul_vol_3/06-take_the_jag_for_a_spin.flac" },
{ name: " 07. Axe to Grind            ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/dave_porter/better_call_saul_vol_3/07-axe_to_grind.flac" },
{ name: " 08. Stargazing              ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/dave_porter/better_call_saul_vol_3/08-stargazing.flac" },
{ name: " 09. Kim Takes a Turn        ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/dave_porter/better_call_saul_vol_3/09-kim_takes_a_turn.flac" },
{ name: " 10. Lalo Underground        ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/dave_porter/better_call_saul_vol_3/10-lalo_underground.flac" },
{ name: " 11. Dark Room Magic         ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/dave_porter/better_call_saul_vol_3/11-dark_room_magic.flac" },
{ name: " 12. Flickering Candle       ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/dave_porter/better_call_saul_vol_3/12-flickering_candle.flac" },
{ name: " 13. Paint and Shoot         ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/dave_porter/better_call_saul_vol_3/13-point_and_shoot.flac" },
{ name: " 14. Coverging on the Laundry", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/dave_porter/better_call_saul_vol_3/14-converging_on_the_laundry.flac" },
{ name: " 15. Lament for Howard       ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/dave_porter/better_call_saul_vol_3/15-lament_for_howard.flac" },
{ name: " 16. Nippy                   ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/dave_porter/better_call_saul_vol_3/16-nippy.flac" },
{ name: " 17. Open for Buisness       ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/dave_porter/better_call_saul_vol_3/17-open_for_buisness.flac" },
{ name: " 18. Black and White Shirt   ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/dave_porter/better_call_saul_vol_3/18-black_and_white_shirt.flac" },
{ name: " 19. The Crystal Ship Returns", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/dave_porter/better_call_saul_vol_3/19-the_crystal_ship_returns.flac" },
{ name: " 20. November 12th at 3pm    ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/dave_porter/better_call_saul_vol_3/20-novemeber_12th_at_3pm.flac" },
{ name: " 21. Identity Lost           ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/dave_porter/better_call_saul_vol_3/21-identity_lost.flac" },
{ name: " 22. Wound Up                ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/dave_porter/better_call_saul_vol_3/22-wound_up.flac" },
{ name: " 23. Last Dumpster Dive      ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/dave_porter/better_call_saul_vol_3/23-last_dumpster_dive.flac" },
{ name: " 24. Shared Sentence         ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/dave_porter/better_call_saul_vol_3/24-shared_sentence.flac" },
{ name: " 25. Saul Done               ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/dave_porter/better_call_saul_vol_3/25-saul_done.flac" }
]
},

// Album - Better Call Saul, Vol. 2 (Original Score from the TV Series)
{
cover: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/dave_porter/better_call_saul_vol_2/00-album_cover.jpg",
name: "Better Call Saul, Vol. 2 (Original Score from the TV Series)",
artist: "Dave Porter",
releaseDate: "13-05-2022",
quality: "24-Bit / 48 kHz",
format: "FLAC",
label: " ℗ — 2022 Sony Pictures Television Inc., under exclusive license to Milan Records, a label of Sony Music Entertainment. All Rights Reserved.",
tracks: [
{ name: " 01. Omaha                  ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/dave_porter/better_call_saul_vol_2/01-omaha.flac" },
{ name: " 02. Gas Cap Parasite       ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/dave_porter/better_call_saul_vol_2/02-gas_cap_parasite.flac" },
{ name: " 03. Crossed Wires          ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/dave_porter/better_call_saul_vol_2/03-crossed_wires.flac" },
{ name: " 04. The Long Follow        ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/dave_porter/better_call_saul_vol_2/04-the_long_follow.flac" },
{ name: " 05. Trials and Tribulations", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/dave_porter/better_call_saul_vol_2/05-trials_and_tribulations.flac" },
{ name: " 06. The Big Winner         ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/dave_porter/better_call_saul_vol_2/06-the_big_winner.flac" },
{ name: " 07. Walls                  ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/dave_porter/better_call_saul_vol_2/07-walls.flac" },
{ name: " 08. Fallen Lantern         ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/dave_porter/better_call_saul_vol_2/08-fallen_lantern.flac" },
{ name: " 09. Alpine Shepherd Boy    ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/dave_porter/better_call_saul_vol_2/09-alpine_shepherd_boy.flac" },
{ name: " 10. Weidersehen            ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/dave_porter/better_call_saul_vol_2/10-wiedersehen.flac" },
{ name: " 11. Gum Up the Works       ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/dave_porter/better_call_saul_vol_2/11-gum_up_the_works.flac" },
{ name: " 12. Rooftop Mettle         ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/dave_porter/better_call_saul_vol_2/12-rooftop-mettle.flac" },
{ name: " 13. Life's Rich Pageant    ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/dave_porter/better_call_saul_vol_2/13-lifes_rich_pageant.flac" },
{ name: " 14. Bowling Sized Balls    ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/dave_porter/better_call_saul_vol_2/14-bowling_sized_balls.flac" },
{ name: " 15. Mike In Mexico         ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/dave_porter/better_call_saul_vol_2/15-mike_in_mexico.flac" },
{ name: " 16. Do Not Disturb         ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/dave_porter/better_call_saul_vol_2/16-do_not_disturb.flac" },
{ name: " 17. Out of the Frying Pan  ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/dave_porter/better_call_saul_vol_2/17-out_of_the_frying_pan.flac" },
{ name: " 18. Nothing Gets Past Lalo ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/dave_porter/better_call_saul_vol_2/18-nothing_gets_past_lalo.flac" },
{ name: " 19. Too Hot for Snakes     ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/dave_porter/better_call_saul_vol_2/19-too_hot_for_snakes.flac" }
]
},


// Album - The Main Title Theme - Better Call Saul
{
cover: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/dave_porter/better_call_saul_main_title_theme/00-album_cover.jpg",
name: "The Main Title Theme - Better Call Saul",
artist: "TV Themes",
releaseDate: "06-06-2019",
quality: "24-Bit / 44.1 kHz",
format: "FLAC",
label: " ℗ 2019 Burning Girl © — 2019 Burning Girl",
tracks: [
{ name: " 01. The Main Title Theme - Better Call Saul", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/dave_porter/better_call_saul_main_title_theme/01-better_call_saul_main_title_theme.flac" }
]
},

// Album - Better Call Saul, Vol. 1 (Original Score from the TV Series)
{
cover: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/dave_porter/better_call_saul_vol_1/00-album_cover.jpg",
name: "Better Call Saul, Vol. 1 (Original Score from the TV Series)",
artist: "Dave Porter",
releaseDate: "09-06-2017",
quality: "16-Bit / 44.1 kHz",
format: "FLAC",
label: " ℗ 2017 Madison Gate Records, Inc. All Rights Reserved. © — 2017 Sony Pictures Television Inc., under exclusive license to Madison Gate Records, Inc. All Rights Reserved.",
tracks: [
{ name: " 01. Shared Smoke                ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/dave_porter/better_call_saul_vol_1/01-shared_smoke.flac" },
{ name: " 02. Ass Over Tea Kettle         ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/dave_porter/better_call_saul_vol_1/02-ass_over_tea_kettle.flac" },
{ name: " 03. One Leg Each                ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/dave_porter/better_call_saul_vol_1/03-one_leg_each.flac" },
{ name: " 04. Sex Robot Voice             ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/dave_porter/better_call_saul_vol_1/04-sex_robot_voice.flac" },
{ name: " 05. Payphone Dilemma            ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/dave_porter/better_call_saul_vol_1/05-payphone_dilemma.flac" },
{ name: " 06. Billboard Stunt             ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/dave_porter/better_call_saul_vol_1/06-billboard_stunt.flac" },
{ name: " 07. Chuck's Theme               ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/dave_porter/better_call_saul_vol_1/07-chucks_theme.flac" },
{ name: " 08. Elevator Exchange           ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/dave_porter/better_call_saul_vol_1/08-elevator_exchange.flac" },
{ name: " 09. One Last Grift              ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/dave_porter/better_call_saul_vol_1/09-one_last_grift.flac" },
{ name: " 10. Jimmy's Choice              ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/dave_porter/better_call_saul_vol_1/10-jimmys_choice.flac" },
{ name: " 11. Davis & Main                ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/dave_porter/better_call_saul_vol_1/11-davis_&_main.flac" },
{ name: " 12. Pretend I'm Not Here        ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/dave_porter/better_call_saul_vol_1/12-pretend_im_not_here.flac" },
{ name: " 13. Delibrations                ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/dave_porter/better_call_saul_vol_1/13-deliberations.flac" },
{ name: " 14. Magic Hands                 ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/dave_porter/better_call_saul_vol_1/14-magic_hands.flac" },
{ name: " 15. Weary Mike                  ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/dave_porter/better_call_saul_vol_1/15-weary_mike.flac" },
{ name: " 16. Border Crossing             ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/dave_porter/better_call_saul_vol_1/16-border_crossing.flac" },
{ name: " 17. Watching and Waiting        ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/dave_porter/better_call_saul_vol_1/17-watching_and_waiting.flac" },
{ name: " 18. Reciprocating Saw           ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/dave_porter/better_call_saul_vol_1/18-reciprocating_saw.flac" },
{ name: " 19. Three Moves Ahead           ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/dave_porter/better_call_saul_vol_1/19-three_moves_ahead.flac" },
{ name: " 20. M40                         ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/dave_porter/better_call_saul_vol_1/20-m40.flac" },
{ name: " 21. Better Call Saul End Credits", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/dave_porter/better_call_saul_vol_1/21-better_call_saul_end_credits.flac" }
]
},

// Album - Breaking Bad (Original Score from the Television Series), Vol. 2
{
cover: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/dave_porter/breaking_bad_vol_2/00-album_cover.jpg",
name: "Breaking Bad (Original Score from the Television Series), Vol. 2",
artist: "Dave Porter",
releaseDate: "11-11-2014",
quality: "16-Bit / 44.1 kHz",
format: "FLAC",
label: " ℗ 2013 Madison Gate Records, Inc. © — 2013 Sony Pictures Television Inc., under exclusive license to Madison Gate Records, Inc. All Rights Reserved.",
tracks: [
{ name: " 01. Breaking Bad 'Sunset' Credits", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/dave_porter/breaking_bad_vol_2/01-breaking_bad_sunset_credits.flac" },
{ name: " 02. The Bike Lock                ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/dave_porter/breaking_bad_vol_2/02-the_bike_lock.flac" },
{ name: " 03. Follicles                    ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/dave_porter/breaking_bad_vol_2/03-follicles.flac" },
{ name: " 04. 308 Negra Arroyo Lane        ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/dave_porter/breaking_bad_vol_2/04-308_negra_arroyo_lane.flac" },
{ name: " 05. Eyeball in the Drawer        ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/dave_porter/breaking_bad_vol_2/05-eyeball_in_the_drawer.flac" },
{ name: " 06. Salud                        ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/dave_porter/breaking_bad_vol_2/06-salud.flac" },
{ name: " 07. Building a Bomb              ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/dave_porter/breaking_bad_vol_2/07-building_a_bomb.flac" },
{ name: " 08. Dead Freight                 ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/dave_porter/breaking_bad_vol_2/08-dead_frieght.flac" },
{ name: " 09. Radiator                     ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/dave_porter/breaking_bad_vol_2/09-radiator.flac" },
{ name: " 10. White House Visit            ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/dave_porter/breaking_bad_vol_2/10-white_house_visit.flac" },
{ name: " 11. Amost Alaska                 ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/dave_porter/breaking_bad_vol_2/11-almost_alaska.flac" },
{ name: " 12. Fumes                        ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/dave_porter/breaking_bad_vol_2/12-fumes.flac" },
{ name: " 13. Gas Can Rage                 ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/dave_porter/breaking_bad_vol_2/13-gas_can_rage.flac" },
{ name: " 14. Circling the Square          ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/dave_porter/breaking_bad_vol_2/14-circling_the_square.flac" },
{ name: " 15. To'hajiilee                  ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/dave_porter/breaking_bad_vol_2/15-to_hajiilee.flac" },
{ name: " 16. Hank's Last Stand            ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/dave_porter/breaking_bad_vol_2/16-hanks_last_stand.flac" },
{ name: " 17. Chained Dog                  ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/dave_porter/breaking_bad_vol_2/17-chained_dog.flac" },
{ name: " 18. We're a Family               ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/dave_porter/breaking_bad_vol_2/18-were_a_family.flac" },
{ name: " 19. The Final Hat                ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/dave_porter/breaking_bad_vol_2/19-the_final_hat.flac" },
{ name: " 20. Dimple Pinch Neat            ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/dave_porter/breaking_bad_vol_2/20-dimples_pinch_neat.flac" }
]
},

// Album - Breaking Bad: Original Score from the Television Series
{
cover: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/dave_porter/breaking_bad/00-album_cover.jpg",
name: "Breaking Bad: Original Score from the Television Series",
artist: "Dave Porter",
releaseDate: "28-08-2012",
quality: "16-Bit / 44.1 kHz",
format: "FLAC",
label: " ℗ 2013 Madison Gate Records © — 2013 Madison Gate Records",
tracks: [
{ name: " 01. Breaking Bad Main Title Theme (Extended)", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/dave_porter/breaking_bad/01-breaking_bad_main_title_theme_extended.flac" },
{ name: " 02. Matches In The Pool                     ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/dave_porter/breaking_bad/02-matches_in_the_pool.flac" },
{ name: " 03. Smoking Jesse's Pot                     ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/dave_porter/breaking_bad/03-smoking_jesses_pot.flac" },
{ name: " 04. Gray Matter                             ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/dave_porter/breaking_bad/04-gray_matter.flac" },
{ name: " 05. The Morning After                       ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/dave_porter/breaking_bad/05-the_morning_after.flac" },
{ name: " 06. Three Days Out                          ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/dave_porter/breaking_bad/06-three_days_out.flac" },
{ name: " 07. Vent                                    ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/dave_porter/breaking_bad/07-vent.flac" },
{ name: " 08. Baby's Coming                           ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/dave_porter/breaking_bad/08-babys_coming.flac" },
{ name: " 09. Jane's Demise                           ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/dave_porter/breaking_bad/09-janes_demise.flac" },
{ name: " 10. The Cousins                             ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/dave_porter/breaking_bad/10-the_cousins.flac" },
{ name: " 11. Hank In Pursuit                         ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/dave_porter/breaking_bad/11-hank_in_pursuit.flac" },
{ name: " 12. The Long Walk Alone (Heisenbergâ€™s Theme)", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/dave_porter/breaking_bad/12-the_long_walk_alone_heisenbergs_theme.flac" },
{ name: " 13. Searching For Jesse                     ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/dave_porter/breaking_bad/13-searching_for_jesse.flac" },
{ name: " 14. Aztek                                   ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/dave_porter/breaking_bad/14-aztek.flac" },
{ name: " 15. Four Corners / Waiting for the End      ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/dave_porter/breaking_bad/15-four_corners.flac" },
{ name: " 16. Jesse In Mexico                         ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/dave_porter/breaking_bad/16-jesse_in_mexico.flac" },
{ name: " 17. Crawl Space                             ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/dave_porter/breaking_bad/17-crawl_space.flac" },
{ name: " 18. Parking Garage Standoff                 ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/dave_porter/breaking_bad/18-parking_garage_standoff.flac" },
{ name: " 19. Cleaning House                          ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/dave_porter/breaking_bad/19-cleaning_house.flac" },
{ name: " 20. Disassemble                             ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/dave_porter/breaking_bad/20-disassemble.flac" }
]
},

// PLACEHOLDER - DO NOT MODIFY THE BELOW LINE ( ALBUM TAGS )
]
},
// PLACEHOLDER - DO NOT MODIFY THE ABOVE LINE ( ALBUM TAGS )



// PLACEHOLDER - DO NOT MODIFY THE BELOW LINE ( ALBUM TAGS )
{
// PLACEHOLDER - DO NOT MODIFY THE ABOVE LINE ( ALBUM TAGS )

name: "Denny",
albums: [

// Album - Chale Jaana Phir (Humko Tere Bina)
{
cover: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/denny/chale_jaana_phir/00-album_cover.jpg",
name: "Chale Jaana Phir (Humko Tere Bina)",
artist: "Denny, Rahul Mishra, Kunaal Vermaa",
releaseDate: "06-04-2023",
quality: "16-Bit / 44.1 kHz",
format: "FLAC",
label: " ℗ 2023 For The Record Music © — 2023 For The Record Music",
tracks: [
{ name: " 01. Chale Jaana Phir (Humko Tere Bina", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/denny/chale_jaana_phir/01-chale_jaana_phir.flac" }
]
},

// PLACEHOLDER - DO NOT MODIFY THE BELOW LINE ( ALBUM TAGS )
]
},
// PLACEHOLDER - DO NOT MODIFY THE ABOVE LINE ( ALBUM TAGS )



// PLACEHOLDER - DO NOT MODIFY THE BELOW LINE ( ALBUM TAGS )
{
// PLACEHOLDER - DO NOT MODIFY THE ABOVE LINE ( ALBUM TAGS )

name: "Gajendra Verma",
albums: [

// Album - Tera Ghata
{
cover: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/gajendra_verma/tera_ghata/00-album_cover.jpg",
name: "Tera Ghata",
artist: "Gajendra Verma",
releaseDate: "24-06-2018",
quality: "16-Bit / 44.1 kHz",
format: "FLAC",
label: " ℗ 2018 Virtual Planet Music © — 2018 Virtual Planet Music",
tracks: [
{ name: " 01. Tera Ghata", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/gajendra_verma/tera_ghata/01-tera_ghata.flac" }
]
},

// PLACEHOLDER - DO NOT MODIFY THE BELOW LINE ( ALBUM TAGS )
]
},
// PLACEHOLDER - DO NOT MODIFY THE ABOVE LINE ( ALBUM TAGS )



// PLACEHOLDER - DO NOT MODIFY THE BELOW LINE ( ALBUM TAGS )
{
// PLACEHOLDER - DO NOT MODIFY THE ABOVE LINE ( ALBUM TAGS )

name: "Jim White",
albums: [

// Album - Drill a Hole In That Substrate and Tell Me What You See (Deluxe Version)
{
cover: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/jim_white/drill_a_hole_in_that_substrate_and_tell_me_what_you_see/00-album_cover.jpg",
name: "Drill a Hole In That Substrate and Tell Me What You See (Deluxe Version)",
artist: "Jim White",
releaseDate: "05-04-2024",
quality: "16-Bit / 44.1 kHz",
format: "FLAC",
label: " © 2024 Luaka Bop, Inc ℗ 2007 Luaka Bop",
tracks: [
{ name: " 01. Static On The Radio                 ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/jim_white/drill_a_hole_in_that_substrate_and_tell_me_what_you_see/01-static_on_the_radio.flac" },
{ name: " 02. Bluebird                            ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/jim_white/drill_a_hole_in_that_substrate_and_tell_me_what_you_see/02-bluebird.flac" },
{ name: " 03. Combing My Hair In a Brand New Style", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/jim_white/drill_a_hole_in_that_substrate_and_tell_me_what_you_see/03-combing_my_hair_in_a_brand_new_style.flac" },
{ name: " 04. That Girl From Brownsville Texas    ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/jim_white/drill_a_hole_in_that_substrate_and_tell_me_what_you_see/04-that_girl_from_brownsville_texas.flac" },
{ name: " 05. Borrowed Wings                      ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/jim_white/drill_a_hole_in_that_substrate_and_tell_me_what_you_see/05-borrowed_wings.flac" },
{ name: " 06. If Jesus Drove a Motor Home         ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/jim_white/drill_a_hole_in_that_substrate_and_tell_me_what_you_see/06-if_jesus_drove_a_motor_home.flac" },
{ name: " 07. Objects In Motion                   ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/jim_white/drill_a_hole_in_that_substrate_and_tell_me_what_you_see/07-objects_in_motion.flac" },
{ name: " 08. Buzzards Of Love                    ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/jim_white/drill_a_hole_in_that_substrate_and_tell_me_what_you_see/08-buzzards_of_love.flac" },
{ name: " 09. Alabama Chrome                      ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/jim_white/drill_a_hole_in_that_substrate_and_tell_me_what_you_see/09-alabama_chrome.flac" },
{ name: " 10. Phone Booth In Heaven               ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/jim_white/drill_a_hole_in_that_substrate_and_tell_me_what_you_see/10-phone_booth_in_heaven.flac" },
{ name: " 11. Land Called Home                    ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/jim_white/drill_a_hole_in_that_substrate_and_tell_me_what_you_see/11-land_called_home.flac" },
{ name: " 12. Suckerz Promisez                    ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/jim_white/drill_a_hole_in_that_substrate_and_tell_me_what_you_see/12-suckerz_promisez.flac" },
{ name: " 13. Stranger Candy                      ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/jim_white/drill_a_hole_in_that_substrate_and_tell_me_what_you_see/13-stranger_candy.flac" },
{ name: " 14. Cinderblock Walls                   ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/jim_white/drill_a_hole_in_that_substrate_and_tell_me_what_you_see/14-cinderblock_walls.flac" }
]
},

// PLACEHOLDER - DO NOT MODIFY THE BELOW LINE ( ALBUM TAGS )
]
},
// PLACEHOLDER - DO NOT MODIFY THE ABOVE LINE ( ALBUM TAGS )



// PLACEHOLDER - DO NOT MODIFY THE BELOW LINE ( ALBUM TAGS )
{
// PLACEHOLDER - DO NOT MODIFY THE ABOVE LINE ( ALBUM TAGS )

name: "Lil Nas X",
albums: [

// Album - MONTERO
{
cover: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/lil_nas_x/MONTERO/00-album_cover.jpg",
name: "MONTERO",
artist: "Lil Nas X",
releaseDate: "17-09-2021",
quality: "24-Bit / 44.1 kHz",
format: "FLAC",
label: " ℗ 2021 Columbia Records, a Division of Sony Music Entertainment",
tracks: [
{ name: " 01. MONTERO (Call Me By Your Name)", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/lil_nas_x/MONTERO/01-montero_call_me_by_your_name.flac" },
{ name: " 02. DEAD RIGHT NOW                ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/lil_nas_x/montero/02-dead_right_now.flac" },
{ name: " 03. INDUSTRY BABY                 ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/lil_nas_x/MONTERO/03-industry_baby.flac" },
{ name: " 04. THATS WHAT I WANT             ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/lil_nas_x/MONTERO/04-thats_what_i_want.flac" },
{ name: " 05. THE ART OF REALIZATION        ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/lil_nas_x/MONTERO/05-the_art_of_realization.flac" },
{ name: " 06. SCOOP                         ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/lil_nas_x/MONTERO/06-scoop.flac" },
{ name: " 07. ONE OF ME                     ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/lil_nas_x/MONTERO/07-one_of_me.flac" },
{ name: " 08. LOST IN THE CITADEL           ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/lil_nas_x/MONTERO/08-lost_in_the_citadel.flac" },
{ name: " 09. DOLLA SIGN SLIME              ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/lil_nas_x/MONTERO/09-dolla_sign_slime.flac" },
{ name: " 10. TALES OF DOMINICA             ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/lil_nas_x/MONTERO/10-tales_of_dominica.flac" },
{ name: " 11. SUN GOES DOWN                 ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/lil_nas_x/MONTERO/11-sun_goes_down.flac" },
{ name: " 12. VOID                          ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/lil_nas_x/MONTERO/12-void.flac" },
{ name: " 13. DONT WANT IT                  ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/lil_nas_x/MONTERO/13-dont_want_it.flac" },
{ name: " 14. LIFE AFTER SALEM              ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/lil_nas_x/MONTERO/14-life_after_salem.flac" },
{ name: " 15. AM I DREAMING                 ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/lil_nas_x/MONTERO/15-am_i_dreaming.flac" }
]
},

// PLACEHOLDER - DO NOT MODIFY THE BELOW LINE ( ALBUM TAGS )
]
},
// PLACEHOLDER - DO NOT MODIFY THE ABOVE LINE ( ALBUM TAGS )



// PLACEHOLDER - DO NOT MODIFY THE BELOW LINE ( ALBUM TAGS )
{
// PLACEHOLDER - DO NOT MODIFY THE ABOVE LINE ( ALBUM TAGS )

name: "Piyush Mehroliyaa",
albums: [

// Album - Aawara Shaam Hai
{
cover: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/piyush_mehroliyaa/aawara_shaam_hai/00-album_cover.jpg",
name: "Aawara Shaam Hai",
artist: "Piyush Mehroliyaa, Meet Bros.",
releaseDate: "01-10-2022",
quality: "16-Bit / 44.1 kHz",
format: "FLAC",
label: " ℗ 2022 MB Music © — 2022 MB Music",
tracks: [
{ name: " 01. Aawara Shaam Hai", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/piyush_mehroliyaa/aawara_shaam_hai/01-aawara_shaam_hai.flac" }
]
},

// PLACEHOLDER - DO NOT MODIFY THE BELOW LINE ( ALBUM TAGS )
]
},
// PLACEHOLDER - DO NOT MODIFY THE ABOVE LINE ( ALBUM TAGS )



// PLACEHOLDER - DO NOT MODIFY THE BELOW LINE ( ALBUM TAGS )
{
// PLACEHOLDER - DO NOT MODIFY THE ABOVE LINE ( ALBUM TAGS )

name: "Shubh",
albums: [

// Album - Bandana
{
cover: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/shubh/bandana/00-album_cover.jpg",
name: "Bandana",
artist: "Shubh",
releaseDate: "29-03-2024",
quality: "24-Bit / 48 kHz",
format: "FLAC",
label: " ℗ 2024 Shubh © — 2024 Shubh",
tracks: [
{ name: " 01. Bandana", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/shubh/bandana/01-bandana.flac" }
]
},

// Album - Leo
{
cover: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/shubh/leo/00-album_cover.jpg",
name: "Leo",
artist: "Shubh",
releaseDate: "05-01-2024",
quality: "24-Bit / 48 kHz",
format: "FLAC",
label: " ℗ 2024 Shubh © — 2024 Shubh",
tracks: [
{ name: " 01. King Shit  ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/shubh/leo/01-king_shit.flac" },
{ name: " 02. You And Me ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/shubh/leo/02-you_and_me.flac" },
{ name: " 03. Hood Anthem", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/shubh/leo/03-hood_anthem.flac" },
{ name: " 04. Safety Off ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/shubh/leo/04-safety_off.flac" }
]
},

// Album - Still Rollin
{
cover: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/shubh/still_rollin/00-album_cover.jpg",
name: "Still Rollin",
artist: "Shubh",
releaseDate: "19-05-2023",
quality: "24-Bit / 44.1 kHz",
format: "FLAC",
label: " ℗ 2023 Shubh © — 2023 Shubh",
tracks: [
{ name: " 01. Still Rollin", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/shubh/still_rollin/01-still_rollin.flac" },
{ name: " 02. Ice         ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/shubh/still_rollin/02-ice.flac" },
{ name: " 03. Cheques     ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/shubh/still_rollin/03-cheques.flac" },
{ name: " 04. OG          ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/shubh/still_rollin/04-OG.flac" },
{ name: " 05. Ruthless    ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/shubh/still_rollin/05-ruthless.flac" },
{ name: " 06. Dior        ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/shubh/still_rollin/06-dior.flac" },
{ name: " 07. The Flow    ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/shubh/still_rollin/07-the_flow.flac" }
]
},

// PLACEHOLDER - DO NOT MODIFY THE BELOW LINE ( ALBUM TAGS )
]
},
// PLACEHOLDER - DO NOT MODIFY THE ABOVE LINE ( ALBUM TAGS )



// PLACEHOLDER - DO NOT MODIFY THE BELOW LINE ( ALBUM TAGS )
{
// PLACEHOLDER - DO NOT MODIFY THE ABOVE LINE ( ALBUM TAGS )

name: "Sukha",
albums: [

// Album - UNDISPUTED
{
cover: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/sukha/undisputed/00-album_cover.jpg",
name: "UNDISPUTED",
artist: "Sukha",
releaseDate: "17-11-2023",
quality: "24-Bit / 96 kHz",
format: "FLAC",
label: " ℗ 2023 Sukha, in Partnership with GK Universal Inc. © — 2023 Sukha, in Partnership with GK Universal Inc.",
tracks: [
{ name: " 01. 8 ASLE      ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/sukha/undisputed/01-8_asle.flac" },
{ name: " 02. ARMED       ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/sukha/undisputed/02-armed.flac" },
{ name: " 03. ROLL WITH ME", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/sukha/undisputed/03-roll_with_me.flac" },
{ name: " 04. 21 QUESTIONS", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/sukha/undisputed/04-21_questions.flac" },
{ name: " 05. GODFATHER   ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/sukha/undisputed/05-godfather.flac" },
{ name: " 06. TROUBLESOME ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/sukha/undisputed/06-troublesome.flac" }
]
},

// PLACEHOLDER - DO NOT MODIFY THE BELOW LINE ( ALBUM TAGS )
]
},
// PLACEHOLDER - DO NOT MODIFY THE ABOVE LINE ( ALBUM TAGS )



// PLACEHOLDER - DO NOT MODIFY THE BELOW LINE ( ALBUM TAGS )
{
// PLACEHOLDER - DO NOT MODIFY THE ABOVE LINE ( ALBUM TAGS )

name: "The Weeknd",
albums: [

// Album - The Idol Episode 5 Part 2
{
cover: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/the_idol_episode_5_part2/00-album_cover.jpg",
name: "The Idol Episode 5 Part 2 (Music from the HBO Original Series)",
artist: "The Weeknd, Lily Rose Depp, Suzanna Son",
releaseDate: "03-07-2023",
quality: "24-Bit / 88 kHz",
format: "FLAC",
label: " ℗ 2023 The Weeknd XO, Inc. © — 2023 The Weeknd XO, Inc.",
tracks: [
{ name: " 01. Dollhouse      ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/the_idol_episode_5_part2/01-dollhouse.flac" },
{ name: " 02. My Sweet Lord  ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/the_idol_episode_5_part2/02-my_sweet_lord.flac" },
{ name: " 03. Crocodile Tears", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/the_idol_episode_5_part2/03-crocodile_tears.flac" }
]
},

// Album - The Idol Episode 5 Part 1
{
cover: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/the_idol_episode_5_part1/00-album_cover.jpg",
name: "The Idol Episode 5 Part 1 (Music from the HBO Original Series)",
artist: "The Weeknd, Lil Baby, Suzanna Son",
releaseDate: "30-06-2023",
quality: "24-Bit / 88 kHz",
format: "FLAC",
label: " ℗ 2023 The Weeknd XO, Inc. © — 2023 The Weeknd XO, Inc.",
tracks: [
{ name: " 01. Like A God ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/the_idol_episode_5_part1/01-like_a_god.flac" },
{ name: " 02. False Idols", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/the_idol_episode_5_part1/02-false_idols.flac" }
]
},

// Album - The Idol Episode 4
{
cover: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/the_idol_episode_4/00-album_cover.jpg",
name: "The Idol Episode 4 (Music from the HBO Original Series)",
artist: "The Weeknd, Jennie, Lily Rose Depp",
releaseDate: "19-06-2023",
quality: "24-Bit / 88 kHz",
format: "FLAC",
label: " ℗ 2023 The Weeknd XO, Inc. © — 2023 The Weeknd XO, Inc.",
tracks: [
{ name: " 01. One Of The Girls", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/the_idol_episode_4/01-one_of_the_girls.flac" },
{ name: " 02. Jealous Guy     ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/the_idol_episode_4/02-jealous_guy.flac" },
{ name: " 03. Fill The Void   ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/the_idol_episode_4/03-fill_the_void.flac" }
]
},

// Album - The Idol Episode 3
{
cover: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/the_idol_episode_3/00-album_cover.jpg",
name: "The Idol Episode 3 (Music from the HBO Original Series)",
artist: "The Weeknd, Moses Sumney",
releaseDate: "19-06-2023",
quality: "24-Bit / 88 kHz",
format: "FLAC",
label: " ℗ 2023 The Weeknd XO, Inc. © — 2023 The Weeknd XO, Inc.",
tracks: [
{ name: " 01. A Lesser Man", src: "https://media.githubusercontent.com/media/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/the_idol_episode_3/01-a_lesser_man.flac" },
{ name: " 02. Take Me Back", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/the_idol_episode_3/02-take_me_back.flac" },
{ name: " 03. Get It B4   ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/the_idol_episode_3/03-get_it_b4.flac" }
]
},

// Album - The Idol Episode 2
{
cover: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/the_idol_episode_2/00-album_cover.jpg",
name: "The Idol Episode 2 (Music from the HBO Original Series)",
artist: "The Weeknd, Mike Dean, Suzanna Son",
releaseDate: "12-06-2023",
quality: "24-Bit / 88 kHz",
format: "FLAC",
label: " ℗ 2023 The Weeknd XO, Inc. © — 2023 The Weeknd XO, Inc.",
tracks: [
{ name: " 01. Family                       ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/the_idol_episode_2/01-family.flac" },
{ name: " 02. Devil's Paradise             ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/the_idol_episode_2/02-devils_paradise.flac" },
{ name: " 03. Double Fantasy (feat. Future)", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/the_idol_episode_2/03-double_fantasy.flac" }
]
},

// Album - The Idol Episode 1
{
cover: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/the_idol_episode_1/00-album_cover.jpg",
name: "The Idol Episode 1 (Music from the HBO Original Series)",
artist: "The Weeknd, Mike Dean, Lily-Rose Depp",
releaseDate: "09-06-2023",
quality: "24-Bit / 88 kHz",
format: "FLAC",
label: " ℗ 2023 The Weeknd XO, Inc. © — 2023 The Weeknd XO, Inc.",
tracks: [
{ name: " 01. The Lure (Main Theme)           ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/the_idol_episode_1/01-world_class_sinner_im_a_freek.flac" },
{ name: " 02. World Class Sinner / I'm A Freak", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/the_idol_episode_1/02-the_lure_main_theme.flac" }
]
},

 // Album - Dawn FM (Alternate World)
{
cover: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/dawn_fm_alternate_world/00-album_cover.jpg",
name: "Dawn FM (Alternate World)",
artist: "The Weeknd",
releaseDate: "07-01-2022",
quality: "24-Bit / 48 kHz",
format: "FLAC",
label: " ℗ 2022 The Weeknd XO, Inc. © — 2022 The Weeknd XO, Inc.",
tracks: [
{ name: " 01. Dawn FM                                       ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/dawn_fm_alternate_world/01-dawn_fm.flac" },
{ name: " 02. Gasoline                                      ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/dawn_fm_alternate_world/02-gasoline.flac" },
{ name: " 03. How Do I Make You Love Me?                    ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/dawn_fm_alternate_world/03-how_do_i_make_you_love_me.flac" },
{ name: " 04. Take My Breath                                ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/dawn_fm_alternate_world/04-take_my_breath.flac" },
{ name: " 05. Sacrifice                                     ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/dawn_fm_alternate_world/05-sacrifice.flac" },
{ name: " 06. A Tale By Quincy                              ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/dawn_fm_alternate_world/06-a_tale_by_quincy.flac" },
{ name: " 07. Out Of Time                                   ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/dawn_fm_alternate_world/07-out_of_time.flac" },
{ name: " 08. Here We Go... Again (feat. Tyler, The Creator)", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/dawn_fm_alternate_world/08-here_we_go_again.flac" },
{ name: " 09. Best Friends                                  ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/dawn_fm_alternate_world/09-best_friends-the_weeknd.flac" },
{ name: " 10. Is There Someone Else?                        ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/dawn_fm_alternate_world/10-is_there_someone_else.flac" },
{ name: " 11. Starry Eyes                                   ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/dawn_fm_alternate_world/11-starry_eyes.flac" },
{ name: " 12. Every Angel Is Terrifying                     ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/dawn_fm_alternate_world/12-every_angel_is_terrifying.flac" },
{ name: " 13. Don't Break My Heart                          ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/dawn_fm_alternate_world/13-dont_break_my_heart.flac" },
{ name: " 14. I Heard You're Married (feat. Lil Wayne)      ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/dawn_fm_alternate_world/14-i_heard_youre_married.flac" },
{ name: " 15. Less Than Zero                                ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/dawn_fm_alternate_world/15-less_than_zero.flac" },
{ name: " 16. Phantom Regret By Jim                         ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/dawn_fm_alternate_world/16-phantom_regret_by_jim.flac" },
{ name: " 17. Moth To A Flame                               ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/dawn_fm_alternate_world/17-moth_to_a_flame.flac" },
{ name: " 18. Dawn FM - OPN Remix                           ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/dawn_fm_alternate_world/18-dawn_fm_opn_remix.flac" },
{ name: " 19. How Do I Make You Love Me? - Remix            ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/dawn_fm_alternate_world/19-how_do_i_make_you_love_me_remix.flac" },
{ name: " 20. Sacrifice Remix                               ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/dawn_fm_alternate_world/20-sacrifice_remix.flac" },
{ name: " 21. Out of Time - KAYTRANADA Remix                ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/dawn_fm_alternate_world/21-out_of_time_kaytranada_remix.flac" },
{ name: " 22. Best Friends Remix                            ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/dawn_fm_alternate_world/22-best_friends_remix.flac" },
{ name: " 23. Starry Eyes - MIKE DEAN Remix                 ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/dawn_fm_alternate_world/23-starry_eyes_mike_dean_remix.flac" },
{ name: " 24. Take My Breath - Single Version               ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/dawn_fm_alternate_world/24-take_my_breath_single_version.flac" }
]
},

// Album - Dawn FM
{
cover: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/dawn_fm/00-album_cover-the_weeknd.jpg",
name: "Dawn FM",
artist: "The Weeknd",
releaseDate: "07-01-2022",
quality: "24-Bit / 48 kHz",
format: "FLAC",
label: " ℗ 2022 The Weeknd XO, Inc. © — 2022 The Weeknd XO, Inc.",
tracks: [
{ name: " 01. Dawn FM                                       ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/dawn_fm/01-dawn_fm-the_weeknd.flac" },
{ name: " 02. Gasoline                                      ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/dawn_fm/02-gasoline-the_weeknd.flac" },
{ name: " 03. How Do I Make You Love Me?                    ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/dawn_fm/03-how_do_i_make_you_love_me-the_weeknd.flac" },
{ name: " 04. Take My Breath                                ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/dawn_fm/04-take_my_breath-the_weeknd.flac" },
{ name: " 05. Sacrifice                                     ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/dawn_fm/05-sacrifice-the_weeknd.flac" },
{ name: " 06. A Tale By Quincy                              ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/dawn_fm/06-a_tale_by_quincy-the_weeknd.flac" },
{ name: " 07. Out Of Time                                   ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/dawn_fm/07-out_of_time-the_weeknd.flac" },
{ name: " 08. Here We Go... Again (feat. Tyler, The Creator)", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/dawn_fm/08-here_we_go_again-the_weeknd.flac" },
{ name: " 09. Best Friends                                  ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/dawn_fm/09-best_friends-the_weeknd.flac" },
{ name: " 10. Is There Someone Else?                        ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/dawn_fm/10-is_there_someone_else-the_weeknd.flac" },
{ name: " 11. Starry Eyes                                   ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/dawn_fm/11-starry_eyes-the_weeknd.flac" },
{ name: " 12. Every Angel Is Terrifying                     ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/dawn_fm/12-every_angel_is_terrifying-the_weeknd.flac" },
{ name: " 13. Don't Break My Heart                          ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/dawn_fm/13-dont_break_my_heart-the_weeknd.flac" },
{ name: " 14. I Heard You're Married (feat. Lil Wayne)      ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/dawn_fm/14-i_heard_youre_married-the_weeknd.flac" },
{ name: " 15. Less Than Zero                                ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/dawn_fm/15-less_than_zero-the_weeknd.flac" },
{ name: " 16. Phantom Regret By Jim                         ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/dawn_fm/16-phantom_regret_by_jim-the_weeknd.flac" }
]
},

// Album - One Right Now
{
cover: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/one_right_now/00-album_cover.jpg",
name: "One Right Now",
artist: "The Weeknd, Post Malone",
releaseDate: "5-11-2021",
quality: "24-Bit / 44.1 kHz",
format: "FLAC",
label: " ℗ 2021 Republic Records, a division of UMG Recordings, Inc. © — 2021 Republic Records, a division of UMG Recordings, Inc.",
tracks: [
{ name: " 01. One Right Now (feat. Post Malone)", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/one_right_now/01-one_right_now.flac" }
]
},
	
// Album - After Hours (Deluxe)
{
cover: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/after_hours_deluxe/00-album_cover.jpg",
name: "After Hours (Deluxe)",
artist: "The Weeknd",
releaseDate: "20-03-2020",
quality: "24-Bit / 44.1 kHz",
format: "FLAC",
label: " ℗ 2020 The Weeknd XO, Inc. © — 2020 The Weeknd XO, Inc",
tracks: [
{ name: " 01. Alone Again                   ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/after_hours_deluxe/01-alone_again.flac" },
{ name: " 02. Too Late                      ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/after_hours_deluxe/02-too_late.flac" },
{ name: " 03. Hardest To Love               ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/after_hours_deluxe/03-hardest_to_love.flac" },			
{ name: " 04. Scared To Live                ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/after_hours_deluxe/04-scared_to_live.flac" },
{ name: " 05. Snowchild                     ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/after_hours_deluxe/05-snowchild.flac" },
{ name: " 06. Escape From LA                ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/after_hours_deluxe/06-escape_from_la.flac" },
{ name: " 07. Heartless                     ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/after_hours_deluxe/07-heartless.flac" },
{ name: " 08. Faith                         ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/after_hours_deluxe/08-faith.flac" },
{ name: " 09. Blinding Lights               ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/after_hours_deluxe/09-blinding_lights.flac" },
{ name: " 10. In Your Eyes                  ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/after_hours_deluxe/10-in_your_eyes.flac" },
{ name: " 11. Save Your Tears               ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/after_hours_deluxe/11-save_your_tears.flac" },
{ name: " 12. Repeat After Me (Interlude)   ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/after_hours_deluxe/12-repeat_after_me_interlude.flac" },
{ name: " 13. After Hours                   ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/after_hours_deluxe/13-after_hours.flac" },
{ name: " 14. Until I Bleed Out             ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/after_hours_deluxe/14-until_i_bleed_out.flac" },
{ name: " 15. Nothing Compares (Bonus Track)", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/after_hours_deluxe/15-nothing_compares.flac" },
{ name: " 16. Missed You (Bonus Track)      ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/after_hours_deluxe/16-missed_you.flac" },
{ name: " 17. Final Lullaby (Bonus Track)   ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/after_hours_deluxe/17-final_lullaby.flac" }
]
},

	// Album - After Hours
{
cover: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/after_hours/00-album_cover-the_weeknd.jpg",
name: "After Hours",
artist: "The Weeknd",
releaseDate: "20-03-2020",
quality: "24-Bit / 44.1 kHz",
format: "FLAC",
label: " ℗ 2020 The Weeknd XO, Inc. © — 2020 The Weeknd XO, Inc",
tracks: [
{ name: " 01. Alone Again                ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/after_hours/01-alone_again-the_weeknd.flac" },
{ name: " 02. Too Late                   ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/after_hours/02-too_late-the_weeknd.flac" },
{ name: " 03. Hardest To Love            ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/after_hours/03-hardest_to_love-the_weeknd.flac" },			
{ name: " 04. Scared To Live             ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/after_hours/04-scared_to_live-the_weeknd.flac" },
{ name: " 05. Snowchild                  ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/after_hours/05-snowchild-the_weeknd.flac" },
{ name: " 06. Escape From LA             ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/after_hours/06-escape_from_la-the_weeknd.flac" },
{ name: " 07. Heartless                  ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/after_hours/07-heartless-the_weeknd.flac" },
{ name: " 08. Faith                      ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/after_hours/08-faith-the_weeknd.flac" },
{ name: " 09. Blinding Lights            ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/after_hours/09-blinding_lights-the_weeknd.flac" },
{ name: " 10. In Your Eyes               ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/after_hours/10-in_your_eyes-the_weeknd.flac" },
{ name: " 11. Save Your Tears            ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/after_hours/11-save_your_tears-the_weeknd.flac" },
{ name: " 12. Repeat After Me (Interlude)", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/after_hours/12-repeat_after_me_interlude-the_weeknd.flac" },
{ name: " 13. After Hours                ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/after_hours/13-after_hours-the_weeknd.flac" },
{ name: " 14. Until I Bleed Out          ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/after_hours/14-until_i_bleed_out-the_weeknd.flac" }
]
},

// Album - My Dear Melancholy,
{
cover: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/my_dear_melancholy/00-album_cover.jpg",
name: "My Dear Melancholy,",
artist: "The Weeknd",
releaseDate: "30-03-2018",
quality: "16-Bit / 44.1 kHz",
format: "FLAC",
label: " ℗ 2018 The Weeknd XO, Inc. © — 2018 The Weeknd XO, Inc",
tracks: [  
{ name: " 01. Call Out My Name ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/my_dear_melancholy/01-call_out_my_name.flac" },
{ name: " 02. Try Me           ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/my_dear_melancholy/02-try_me.flac" },
{ name: " 03. Wasted Times     ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/my_dear_melancholy/03-wasted_times.flac" },
{ name: " 04. I Was Never There", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/my_dear_melancholy/04-i_was_never_there.flac" },
{ name: " 05. Hurt You         ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/my_dear_melancholy/05-hurt_you.flac" },
{ name: " 06. Privilege        ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/my_dear_melancholy/06-privilege.flac" }
]
},

// Album - Starboy (Deluxe)
{
cover: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/starboy_deluxe/00-album_cover.jpg",
name: "Starboy (Deluxe)",
artist: "The Weeknd",
releaseDate: "25-11-2016",
quality: "24-Bit / 44.1 kHz",
format: "FLAC",
label: " ℗ 2016 The Weeknd XO, Inc. © — 2016 The Weeknd XO, Inc",
tracks: [  
{ name: " 01. Starboy (feat. Daft Punk)              ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/starboy_deluxe/01-starboy.flac" },
{ name: " 02. Party Monster                          ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/starboy_deluxe/02-party_monster.flac" },
{ name: " 03. False Alarm                            ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/starboy_deluxe/03-false_alarm.flac" },
{ name: " 04. Reminder                               ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/starboy_deluxe/04-reminder.flac" },
{ name: " 05. Rockin'                                ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/starboy_deluxe/05-rockin.flac" },
{ name: " 06. Secrets                                ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/starboy_deluxe/06-secrets.flac" },
{ name: " 07. True Colors                            ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/starboy_deluxe/07-true_colors.flac" },
{ name: " 08. Stargirl Interlude (feat. Lana Del Rey)", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/starboy_deluxe/08-stargirl_interlude.flac" },
{ name: " 09. Sidewalks (feat. Kendrick Lamar)       ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/starboy_deluxe/09-sidewalks.flac" },
{ name: " 10. Six Feet Under                         ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/starboy_deluxe/10-six_feet_under.flac" },
{ name: " 11. Love To Lay                            ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/starboy_deluxe/11-love_to_lay.flac" },
{ name: " 12. A Lonely Night                         ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/starboy_deluxe/12-a_lonely_night.flac" },
{ name: " 13. Attention                              ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/starboy_deluxe/13-attention.flac" },
{ name: " 14. Ordinary Life                          ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/starboy_deluxe/14-ordinary_life.flac" },
{ name: " 15. Nothing Without You                    ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/starboy_deluxe/15-nothing_without_you.flac" },
{ name: " 16. All I Know (feat. Future)              ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/starboy_deluxe/16-all_i_know.flac" },
{ name: " 17. Die For You                            ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/starboy_deluxe/17-die_for_you.flac" },
{ name: " 18. I Feel It Coming (feat. Daft Punk)     ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/starboy_deluxe/18-i_feel_it_coming.flac" },
{ name: " 19. Die For You (Remix)                    ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/starboy_deluxe/19-die_for_you_remix.flac" },
{ name: " 20. Starboy (Kygo Remix)                   ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/starboy_deluxe/20-staryboy_kygo_remix.flac" },
{ name: " 21. Reminder (Remix)                       ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/starboy_deluxe/21-reminder_remix.flac" }
]
},

// Album - Starboy
{
cover: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/starboy/00-album_cover-the_weeknd.jpg",
name: "Starboy",
artist: "The Weeknd",
releaseDate: "25-11-2016",
quality: "24-Bit / 44.1 kHz",
format: "FLAC",
label: " ℗ 2016 The Weeknd XO, Inc. © — 2016 The Weeknd XO, Inc",
tracks: [  
{ name: " 01. Starboy (feat. Daft Punk)              ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/starboy/01-starboy-the_weeknd.flac" },
{ name: " 02. Party Monster                          ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/starboy/02-party_monster-the_weeknd.flac" },
{ name: " 03. False Alarm                            ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/starboy/03-false_alarm-the_weeknd.flac" },
{ name: " 04. Reminder                               ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/starboy/04-reminder-the_weeknd.flac" },
{ name: " 05. Rockin'                                ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/starboy/05-rockin-the_weeknd.flac" },
{ name: " 06. Secrets                                ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/starboy/06-secrets-the_weeknd.flac" },
{ name: " 07. True Colors                            ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/starboy/07-true_colors-the_weeknd.flac" },
{ name: " 08. Stargirl Interlude (feat. Lana Del Rey)", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/starboy/08-stargirl_interlude-the_weeknd.flac" },
{ name: " 09. Sidewalks (feat. Kendrick Lamar)       ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/starboy/09-sidewalks-the_weeknd.flac" },
{ name: " 10. Six Feet Under                         ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/starboy/10-six_feet_under-the_weeknd.flac" },
{ name: " 11. Love To Lay                            ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/starboy/11-love_to_lay-the_weeknd.flac" },
{ name: " 12. A Lonely Night                         ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/starboy/12-a_lonely_night-the_weeknd.flac" },
{ name: " 13. Attention                              ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/starboy/13-attention-the_weeknd.flac" },
{ name: " 14. Ordinary Life                          ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/starboy/14-ordinary_life-the_weeknd.flac" },
{ name: " 15. Nothing Without You                    ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/starboy/15-nothing_without_you-the_weeknd.flac" },
{ name: " 16. All I Know (feat. Future)              ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/starboy/16-all_i_know-the_weeknd.flac" },
{ name: " 17. Die For You                            ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/starboy/17-die_for_you-the_weeknd.flac" },
{ name: " 18. I Feel It Coming (feat. Daft Punk)     ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/starboy/18-i_feel_it_coming-the_weeknd.flac" }
]
},

// Album - Beauty Behind The Madness	
{
cover: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/beauty_behind_the_madness/00-album_cover-the_weeknd.jpg",
name: "Beauty Behind The Madness",
artist: "The Weeknd",
releaseDate: "28-08-2015",
quality: "24-Bit / 44.1 kHz",
format: "FLAC",
label: " ℗ 2015 The Weeknd XO, Inc. © — 2015 The Weeknd XO, Inc",
tracks: [
{ name: " 01. Real Life                       ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/beauty_behind_the_madness/01-real_life-the_weeknd.flac" },
{ name: " 02. Losers (feat. Labrinth)         ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/beauty_behind_the_madness/02-losers-the_weeknd.flac" },
{ name: " 03. Tell Your Friends               ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/beauty_behind_the_madness/03-tell_your_friends-the_weeknd.flac" },			
{ name: " 04. Often                           ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/beauty_behind_the_madness/04-often-the_weeknd.flac" },
{ name: " 05. The Hills                       ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/beauty_behind_the_madness/05-the_hills-the_weeknd.flac" },
{ name: " 06. Acquainted                      ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/beauty_behind_the_madness/06-acquainted-the_weeknd.flac" },
{ name: " 07. Can't Feel My Face              ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/beauty_behind_the_madness/07-cant_feel_my_face-the_weeknd.flac" },
{ name: " 08. Shameless                       ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/beauty_behind_the_madness/08-shameless-the_weeknd.flac" },
{ name: " 09. Earned It (Fifty Shades of Grey)", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/beauty_behind_the_madness/09-earned_it-the_weeknd.flac" },
{ name: " 10. In the Night                    ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/beauty_behind_the_madness/10-in_the_night-the_weeknd.flac" },
{ name: " 11. As You Are                      ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/beauty_behind_the_madness/11-as_you_are-the_weeknd.flac" },
{ name: " 12. Dark Times (feat. Ed Sheeran)   ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/beauty_behind_the_madness/12-dark_times-the_weeknd.flac" },
{ name: " 13. Prisoner (feat. Lana Del Rey)   ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/beauty_behind_the_madness/13-prisoner-the_weeknd.flac" },
{ name: " 14. Angel                           ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/beauty_behind_the_madness/14-angel-the_weeknd.flac" }
]
},

// Album - Often (Kygo Remix)
{
cover: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/often_kygo_remix/00-album_cover.jpg",
name: "Often (Kygo Remix)",
artist: "The Weeknd",
releaseDate: "31-07-2014",
quality: "16-Bit / 44.1 kHz",
format: "FLAC",
label: " ℗ 2015 The Weeknd XO, Inc. © — 2015 The Weeknd XO, Inc",
tracks: [
{ name: " 01. Often (Kygo Remix)", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/often_kygo_remix/01-often_kygo_remix.flac" }
]
},

// Album - Kiss Land
{
cover: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/kiss_land/00-album_cover-the_weeknd.jpg",
name: "Kiss Land",
artist: "The Weeknd",
releaseDate: "10-09-2013",
quality: "16-Bit / 44.1 kHz",
format: "FLAC",
label: " ℗ 2013 The Weeknd XO, Inc. © — 2013 The Weeknd XO, Inc",
tracks: [
{ name: " 01. Professional          ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/kiss_land/01-professional-the_weeknd.flac" },
{ name: " 02. The Town              ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/kiss_land/02-the_town-the_weeknd.flac" },
{ name: " 03. Adaptation            ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/kiss_land/03-adaptation-the_weeknd.flac" },			
{ name: " 04. Love In the Sky       ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/kiss_land/04-love_in_the_sky-the_weeknd.flac" },
{ name: " 05. Belong To the World   ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/kiss_land/05-belong_to_the_world-the_weeknd.flac" },
{ name: " 06. Live For (feat. Drake)", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/kiss_land/06-live_for-the_weeknd.flac" },
{ name: " 07. Wanderlust            ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/kiss_land/07-wanderlust-the_weeknd.flac" },
{ name: " 08. Kiss Land             ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/kiss_land/08-kiss_land-the_weeknd.flac" },
{ name: " 09. Pretty                ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/kiss_land/09-pretty-the_weeknd.flac" },
{ name: " 10. Tears In the Rain     ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/kiss_land/10-tears_in_the_rain-the_weeknd.flac" }
]
},

// Album - Trilogy
{
cover: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/trilogy/00-album_cover.jpg",
name: "Trilogy",
artist: "The Weeknd",
releaseDate: "08-11-2012",
quality: "24-Bit / 44.1 kHz",
format: "FLAC",
label: " ℗ 2012 The Weeknd XO, Inc. © — 2012 The Weeknd XO, Inc",
tracks: [
{ name: "    >  Disc 01  <", src: "https://raw.githubusercontent.com/lakshkukreja/lakshkukreja.github.io/main/assets/beep.wav" },
{ name: " 01. High For This                        ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/trilogy/01-high_for_this.flac" },
{ name: " 02. What You Need                        ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/trilogy/02-what_you_need.flac" },
{ name: " 03. House Of Balloons / Glass Table Girls", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/trilogy/03-house_of_balloons_glass_table_girls.flac" },
{ name: " 04. The Morning                          ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/trilogy/04-the_morning.flac" },
{ name: " 05. Wicked Games                         ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/trilogy/05-wicked_games.flac" },
{ name: " 06. The Party & The After Party          ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/trilogy/06-the_party_&_the_after_party.flac" },
{ name: " 07. Coming Down                          ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/trilogy/07-coming_down.flac" },
{ name: " 08. Loft Music                           ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/trilogy/08-loft_music.flac" },
{ name: " 09. The Knowing                          ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/trilogy/09-the_knowing.flac" },
{ name: " 10. Twenty Eight                         ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/trilogy/10-twenty_eight.flac" },
{ name: "    >  Disc 02  <", src: "https://raw.githubusercontent.com/lakshkukreja/lakshkukreja.github.io/main/assets/beep.wav" },
{ name: " 01. Lonely Star        ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/trilogy/11-lonely_star.flac" },
{ name: " 02. Life Of The Party  ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/trilogy/12-life_of_the_party.flac" },
{ name: " 03. Thursday           ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/trilogy/13-thursday.flac" },
{ name: " 04. The Zone           ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/trilogy/14-the_zone.flac" },
{ name: " 05. The Birds Pt. 1    ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/trilogy/15-the_birds_pt_1.flac" },
{ name: " 06. The Birds Pt. 2    ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/trilogy/16-the_birds_pt_2.flac" },
{ name: " 07. Gone               ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/trilogy/17-gone.flac" },
{ name: " 08. Rolling Stone      ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/trilogy/18-rolling_stone.flac" },
{ name: " 09. Heaven Or Las Vegas", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/trilogy/19-heaven_or_las_vegas.flac" },
{ name: " 10. Valerie            ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/trilogy/20-valerie.flac" },
{ name: "    >  Disc 03  <", src: "https://raw.githubusercontent.com/lakshkukreja/lakshkukreja.github.io/main/assets/beep.wav" },
{ name: " 01. D.D.                          ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/trilogy/21-dd.flac" },
{ name: " 02. Montreal                      ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/trilogy/22-montreal.flac" },
{ name: " 03. Outside                       ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/trilogy/23-outside.flac" },
{ name: " 04. XO / The Host                 ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/trilogy/24-xo_the_host.flac" },
{ name: " 05. Initiation                    ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/trilogy/25-initiation.flac" },
{ name: " 06. Same Old Song                 ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/trilogy/26-same_old_song.flac" },
{ name: " 07. The Fall                      ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/trilogy/27-the_fall.flac" },
{ name: " 08. Next                          ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/trilogy/28-next.flac" },
{ name: " 09. Echoes Of Silence             ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/trilogy/29-echoes_of_silence.flac" },
{ name: " 10. Till Dawn (Here Comes The Sun)", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/trilogy/30-till_dawn.flac" },
]
},
	
// Album - Echoes Of Silence (Original) 
{
cover: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/echoes_of_silence_original/00-album_cover.jpg",
name: "Echoes Of Silence (Original)",
artist: "The Weeknd",
releaseDate: "21-12-2011",
quality: "24-Bit / 44.1 kHz",
format: "FLAC",
label: " ℗ 2011 The Weeknd XO, Inc. © — 2011 The Weeknd XO, Inc",
tracks: [
{ name: "01. D.D.             ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/echoes_of_silence_original/" },
{ name: "02. Montreal         ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/echoes_of_silence_original/" },
{ name: "03. Outside          ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/echoes_of_silence_original/" },
{ name: "04. XO / The Host    ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/echoes_of_silence_original/" },
{ name: "05. Initiation       ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/echoes_of_silence_original/" },
{ name: "06. Same Old Song    ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/echoes_of_silence_original/" },
{ name: "07. The Fall         ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/echoes_of_silence_original/" },
{ name: "08. Next             ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/echoes_of_silence_original/" },
{ name: "09. Echoes Of Silence", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/echoes_of_silence_original/" }
]
},
	
// Album - Thursday (Original) 
{
cover: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/thursday_original/00-album_cover.jpg",
name: "Thursday (Original)",
artist: "The Weeknd",
releaseDate: "18-08-2011",
quality: "24-Bit / 44.1 kHz",
format: "FLAC",
label: " ℗ 2011 The Weeknd XO, Inc. © — 2011 The Weeknd XO, Inc",
tracks: [
{ name: "01. Lonely Star        ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/thursday_original/01-lonely_star.flac" },
{ name: "02. Life Of The Party  ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/thursday_original/02-life_of_the_party.flac" },
{ name: "03. Thursday           ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/thursday_original/03-thursday.flac" },
{ name: "04. The Zone           ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/thursday_original/04-the_zone.flac" },
{ name: "05. The Birds Pt. 1    ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/thursday_original/05-the_birds_pt_1.flac" },
{ name: "06. The Birds Pt. 2    ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/thursday_original/06-the_birds_pt_2.flac" },
{ name: "07. Gone               ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/thursday_original/07-gone.flac" },
{ name: "08. Rolling Stone      ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/thursday_original/08-rolling_stone.flac" },
{ name: "09. Heaven Or Las Vegas", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/thursday_original/09-heaven_or_las_vegas.flac" }
]
},
	
// Album - House Of Balloons (Original)
{
cover: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/house_of_balloons_original/00-album_cover.jpg",
name: "House Of Balloons (Original)",
artist: "The Weeknd",
releaseDate: "21-03-2011",
quality: "24-Bit / 44.1 kHz",
format: "FLAC",
label: " ℗ 2011 The Weeknd XO, Inc. © — 2011 The Weeknd XO, Inc",
tracks: [
{ name: "01. High For This                        ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/house_of_balloons_original/01-high_for_this.flac" },
{ name: "02. What You Need                        ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/house_of_balloons_original/02-what_you_need.flac" },
{ name: "03. House Of Balloons / Glass Table Girls", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/house_of_balloons_original/03-house_of_balloons_glass_table_girls.flac" },
{ name: "04. The Morning                          ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/house_of_balloons_original/04-the_morning.flac" },
{ name: "05. Wicked Games                         ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/house_of_balloons_original/05-wicked_games.flac" },
{ name: "06. The Party & The After Party          ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/house_of_balloons_original/06-the_party_&_the_after_party.flac" },
{ name: "07. Coming Down                          ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/house_of_balloons_original/07-coming_down.flac" },
{ name: "08. Loft Music                           ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/house_of_balloons_original/08-loft_music.flac" },
{ name: "09. The Knowing                          ", src: "https://raw.githubusercontent.com/SoundGalaxy/SoundGalaxy/main/music/artists/the_weeknd/house_of_balloons_original/09-the_knowing.flac" }
]
},

// PLACEHOLDER - DO NOT MODIFY THE BELOW LINE ( ALBUM TAGS )
]
},
// PLACEHOLDER - DO NOT MODIFY THE ABOVE LINE ( ALBUM TAGS )




// PLACEHOLDER - DO NOT MODIFY THE BELOW LINE ( ARTIST TAGS )
];
// PLACEHOLDER - DO NOT MODIFY THE ABOVE LINE ( ARTIST TAGS )


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

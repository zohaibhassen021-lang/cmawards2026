// Har awardee: [photo, name, city, category]. Naam/category yahan edit kar sakte hain.
const AWARDEES = [
[
"01.jpg",
"Abaseen Khan",
"Pishin",
"Sports – Horse Raiding"
],
[
"02.jpg",
"Farzana Seher",
"Khuzdar",
"Recognition Award"
],
[
"03.jpg",
"Bilal Ahmed",
"Pishin",
"Body Building"
],
[
"04.jpg",
"Rizwana",
"Gwadar",
"Social Work"
],
[
"05.jpg",
"M Umar",
"Quetta",
"Karate"
],
[
"06.jpg",
"Safia Baloch",
"Quetta",
"Sports – Futsal"
],
[
"07.jpg",
"Sania Kaur",
"Quetta",
"Social Organization"
],
[
"08.jpg",
"Kashmala Ali",
"Duki",
"Recognition Award"
],
[
"09.jpg",
"Rizwana",
"Quetta",
"Special Person"
],
[
"10.jpg",
"Percikla Paul",
"Quetta",
"Sports – Athletics"
],
[
"11.jpg",
"Nisar Ahmed",
"Qila Abdullah",
"Sports – MMA Kick Boxing"
],
[
"12.jpg",
"Arhama Khan",
"Quetta",
"Sports – Hockey"
],
[
"13.jpg",
"Hameed Khan",
"Quetta",
"Film Making"
],
[
"14.jpg",
"Jassica Austian",
"Quetta",
"Special Award"
],
[
"15.jpg",
"Ehsan Ullah",
"Qila Abdullah",
"Sports – Boxing"
],
[
"16.jpg",
"Barista Ali",
"Quetta",
"Sports – Karate"
],
[
"17.jpg",
"Muhammad Hamza",
"Quetta",
"Agriculture"
],
[
"18.jpg",
"Ilyas Ali",
"Quetta",
"Sports – Archery"
],
[
"19.jpg",
"Zulqarnain",
"Quetta",
"MMA – Youngest Champion"
],
[
"20.jpg",
"Ayesha Fatima",
"Khuzdar",
"Influencer Award"
],
[
"21.jpg",
"Junaid Shah",
"Noshki",
"Football"
],
[
"22.jpg",
"Nargis Mengal",
"Noshki",
"Special Award"
],
[
"23.jpg",
"Sarwat Fatima",
"Quetta",
"Sports – Badminton"
],
[
"24.jpg",
"Abdul Muqeet Khilji",
"Quetta",
"Sports – Biker"
],
[
"25.jpg",
"M Yaseen",
"Quetta",
"Sports – Fencing"
],
[
"26.jpg",
"Ghazala Hassan",
"",
"Special Award"
],
[
"27.jpg",
"Alia Ahmed Khan",
"Quetta",
"Special Award"
],
[
"28.jpg",
"Fayaz",
"Quetta",
"Volleyball"
],
[
"29.jpg",
"Fatima",
"Quetta",
"Volleyball"
],
[
"30.jpg",
"Kalsoom Mengal",
"",
"Youth Activist"
],
[
"31.jpg",
"Bibi Durjan",
"Noshki",
"Emerging Youth Leader"
],
[
"32.jpg",
"Huma Baloch",
"Quetta",
"Lifetime Achievement"
],
[
"33.jpg",
"M Asif Hazara",
"Quetta",
"Sports – MMA"
],
[
"34.jpg",
"Jadid Khan Pathan",
"",
"Sports – Football"
],
[
"35.jpg",
"M Iqbal Khilji",
"Quetta",
"Sports – Weight Lifting"
],
[
"36.jpg",
"Aqsa Mirwani",
"Awaran",
"Social Work"
],
[
"37.jpg",
"Zamar",
"Quetta",
"Sports – Cricket"
],
[
"38.jpg",
"Barera Shah",
"Pashin",
"Sports – Fencing / Flag Football"
],
[
"39.jpg",
"Dr Nazia",
"Quetta",
"Education – Gold Medalist Student"
],
[
"40.jpg",
"Naseer Mengal",
"Quetta",
"Sports – Karate"
],
[
"41.jpg",
"Praksa Noor",
"Sibi",
"Recognition Award"
],
[
"42.jpg",
"Mansoor Ahmed",
"Quetta (Kuchlak)",
"Sports – Karate"
],
[
"43.jpg",
"Ayesha Khan",
"Quetta",
"Best Student – Position Holder"
],
[
"44.jpg",
"Afzal Khan",
"",
"Sports – Boxing"
],
[
"photos/45.jpg",
"Nargis Hazara",
"Quetta",
"Sports – Karate"
],
[
"46.jpg",
"Naz Gul",
"Quetta",
"Sports – Karate"
],
[
"47.jpg",
"Laiba Ishaq",
"Quetta",
"Sports – Basketball"
],
[
"48.jpg",
"Hafsa Kakar",
"Qila Saifullah",
"Emerging Youth Leader"
],
[
"49.jpg",
"Marina Khan",
"Quetta",
"Sports – Cycling"
],
[
"50.jpg",
"Hanata Ali",
"Quetta",
"Sports – Archery"
],
[
"51.jpg",
"Rafia Malik",
"Ormara / Gwadar",
"Recognition Award"
],
[
"52.jpg",
"Maheen Naseer",
"Quetta",
"Recognition – Research & Content"
],
[
"53.jpg",
"Asma Ahmed",
"",
"Health – Individual Health Worker"
],
[
"54.jpg",
"Sabra Sultana",
"Quetta",
"Recognition Award"
],
[
"55.jpg",
"Sidra Maqbool",
"Panjgur",
"Book Author"
],
[
"56.jpg",
"Abdul Ali Khan",
"Quetta",
"Sports – MMA"
],
[
"57.jpg",
"Sikander Akram",
"Quetta",
"Travel Influencer"
],
[
"58.jpg",
"Abdul Hanan",
"",
"Sports – MMA"
],
[
"59.jpg",
"Faheem Kakar",
"Quetta (Kuchlak)",
"Sports – MMA"
],
[
"60.jpg",
"Amin Ullah Zakir",
"Quetta",
"Sports – Wushu"
],
[
"61.jpg",
"Shams U Din",
"Quetta",
"Sports – Shotokan Karate"
],
[
"62.jpg",
"Shujhat Ali Shan",
"Quetta",
"Sports – Wushu"
],
[
"63.jpg",
"Ahmed Yar Khan",
"Quetta",
"Sports – Fencing"
],
[
"64.jpg",
"M Sabir",
"",
"Sports – MMA Judo"
],
[
"65.jpg",
"Muhammad Taha",
"Quetta",
"Singing"
],
[
"66.jpg",
"Shehryar Zaman",
"",
"MMA – Kick Boxing"
],
[
"67.jpg",
"Dua Baloch",
"Sibi",
"Sports – Basketball"
],
[
"68.jpg",
"Saman Khan",
"Quetta",
"Singing"
],
[
"69.jpg",
"Mohib Ullah",
"Quetta",
"Sports – MMA"
],
[
"70.jpg",
"Amar Shahid",
"Quetta",
"Best Artist"
],
[
"71.jpg",
"Sana Ibrahim",
"Sibi",
"Emerging Talent"
],
[
"72.jpg",
"Abida Batool",
"Quetta",
"Sports – Boxing"
],
[
"73.jpg",
"Bilal Khan",
"Quetta",
"Sports – Hockey"
],
[
"74.jpg",
"Dr Ghulam Farooq",
"Naseerabad",
"Special Award"
],
[
"75.jpg",
"Faiza Sikander",
"Quetta",
"Lifetime Achievement"
]
];

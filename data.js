// Har awardee: [photo, name, city, category]. Naam/category yahan edit kar sakte hain.
const AWARDEES = [
[
"photos/01.jpg",
"Abaseen Khan",
"Pishin",
"Sports – Horse Raiding"
],
[
"photos/02.jpg",
"Farzana Seher",
"Khuzdar",
"Recognition Award"
],
[
"photos/03.jpg",
"Bilal Ahmed",
"Pishin",
"Body Building"
],
[
"photos/04.jpg",
"Rizwana",
"Gwadar",
"Social Work"
],
[
"photos/05.jpg",
"M Umar",
"Quetta",
"Karate"
],
[
"photos/06.jpg",
"Safia Baloch",
"Quetta",
"Sports – Futsal"
],
[
"photos/07.jpg",
"Sania Kaur",
"Quetta",
"Social Organization"
],
[
"photos/08.jpg",
"Kashmala Ali",
"Duki",
"Recognition Award"
],
[
"photos/09.jpg",
"Rizwana",
"Quetta",
"Special Person"
],
[
"photos/10.jpg",
"Percikla Paul",
"Quetta",
"Sports – Athletics"
],
[
"photos/11.jpg",
"Nisar Ahmed",
"Qila Abdullah",
"Sports – MMA Kick Boxing"
],
[
"photos/12.jpg",
"Arhama Khan",
"Quetta",
"Sports – Hockey"
],
[
"photos/13.jpg",
"Hameed Khan",
"Quetta",
"Film Making"
],
[
"photos/14.jpg",
"Jassica Austian",
"Quetta",
"Special Award"
],
[
"photos/15.jpg",
"Ehsan Ullah",
"Qila Abdullah",
"Sports – Boxing"
],
[
"photos/16.jpg",
"Barista Ali",
"Quetta",
"Sports – Karate"
],
[
"photos/17.jpg",
"Muhammad Hamza",
"Quetta",
"Agriculture"
],
[
"photos/18.jpg",
"Ilyas Ali",
"Quetta",
"Sports – Archery"
],
[
"photos/19.jpg",
"Zulqarnain",
"Quetta",
"MMA – Youngest Champion"
],
[
"photos/20.jpg",
"Ayesha Fatima",
"Khuzdar",
"Influencer Award"
],
[
"photos/21.jpg",
"Junaid Shah",
"Noshki",
"Football"
],
[
"photos/22.jpg",
"Nargis Mengal",
"Noshki",
"Special Award"
],
[
"photos/23.jpg",
"Sarwat Fatima",
"Quetta",
"Sports – Badminton"
],
[
"photos/24.jpg",
"Abdul Muqeet Khilji",
"Quetta",
"Sports – Biker"
],
[
"photos/25.jpg",
"M Yaseen",
"Quetta",
"Sports – Fencing"
],
[
"photos/26.jpg",
"Ghazala Hassan",
"",
"Special Award"
],
[
"photos/27.jpg",
"Alia Ahmed Khan",
"Quetta",
"Special Award"
],
[
"photos/28.jpg",
"Fayaz",
"Quetta",
"Volleyball"
],
[
"photos/29.jpg",
"Fatima",
"Quetta",
"Volleyball"
],
[
"photos/30.jpg",
"Kalsoom Mengal",
"",
"Youth Activist"
],
[
"photos/31.jpg",
"Bibi Durjan",
"Noshki",
"Emerging Youth Leader"
],
[
"photos/32.jpg",
"Huma Baloch",
"Quetta",
"Lifetime Achievement"
],
[
"photos/33.jpg",
"M Asif Hazara",
"Quetta",
"Sports – MMA"
],
[
"photos/34.jpg",
"Jadid Khan Pathan",
"",
"Sports – Football"
],
[
"photos/35.jpg",
"M Iqbal Khilji",
"Quetta",
"Sports – Weight Lifting"
],
[
"photos/36.jpg",
"Aqsa Mirwani",
"Awaran",
"Social Work"
],
[
"photos/37.jpg",
"Zamar",
"Quetta",
"Sports – Cricket"
],
[
"photos/38.jpg",
"Barera Shah",
"Pashin",
"Sports – Fencing / Flag Football"
],
[
"photos/39.jpg",
"Dr Nazia",
"Quetta",
"Education – Gold Medalist Student"
],
[
"photos/40.jpg",
"Naseer Mengal",
"Quetta",
"Sports – Karate"
],
[
"photos/41.jpg",
"Praksa Noor",
"Sibi",
"Recognition Award"
],
[
"photos/42.jpg",
"Mansoor Ahmed",
"Quetta (Kuchlak)",
"Sports – Karate"
],
[
"photos/43.jpg",
"Ayesha Khan",
"Quetta",
"Best Student – Position Holder"
],
[
"photos/44.jpg",
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
"photos/46.jpg",
"Naz Gul",
"Quetta",
"Sports – Karate"
],
[
"photos/47.jpg",
"Laiba Ishaq",
"Quetta",
"Sports – Basketball"
],
[
"photos/48.jpg",
"Hafsa Kakar",
"Qila Saifullah",
"Emerging Youth Leader"
],
[
"photos/49.jpg",
"Marina Khan",
"Quetta",
"Sports – Cycling"
],
[
"photos/50.jpg",
"Hanata Ali",
"Quetta",
"Sports – Archery"
],
[
"photos/51.jpg",
"Rafia Malik",
"Ormara / Gwadar",
"Recognition Award"
],
[
"photos/52.jpg",
"Maheen Naseer",
"Quetta",
"Recognition – Research & Content"
],
[
"photos/53.jpg",
"Asma Ahmed",
"",
"Health – Individual Health Worker"
],
[
"photos/54.jpg",
"Sabra Sultana",
"Quetta",
"Recognition Award"
],
[
"photos/55.jpg",
"Sidra Maqbool",
"Panjgur",
"Book Author"
],
[
"photos/56.jpg",
"Abdul Ali Khan",
"Quetta",
"Sports – MMA"
],
[
"photos/57.jpg",
"Sikander Akram",
"Quetta",
"Travel Influencer"
],
[
"photos/58.jpg",
"Abdul Hanan",
"",
"Sports – MMA"
],
[
"photos/59.jpg",
"Faheem Kakar",
"Quetta (Kuchlak)",
"Sports – MMA"
],
[
"photos/60.jpg",
"Amin Ullah Zakir",
"Quetta",
"Sports – Wushu"
],
[
"photos/61.jpg",
"Shams U Din",
"Quetta",
"Sports – Shotokan Karate"
],
[
"photos/62.jpg",
"Shujhat Ali Shan",
"Quetta",
"Sports – Wushu"
],
[
"photos/63.jpg",
"Ahmed Yar Khan",
"Quetta",
"Sports – Fencing"
],
[
"photos/64.jpg",
"M Sabir",
"",
"Sports – MMA Judo"
],
[
"photos/65.jpg",
"Muhammad Taha",
"Quetta",
"Singing"
],
[
"photos/66.jpg",
"Shehryar Zaman",
"",
"MMA – Kick Boxing"
],
[
"photos/67.jpg",
"Dua Baloch",
"Sibi",
"Sports – Basketball"
],
[
"photos/68.jpg",
"Saman Khan",
"Quetta",
"Singing"
],
[
"photos/69.jpg",
"Mohib Ullah",
"Quetta",
"Sports – MMA"
],
[
"photos/70.jpg",
"Amar Shahid",
"Quetta",
"Best Artist"
],
[
"photos/71.jpg",
"Sana Ibrahim",
"Sibi",
"Emerging Talent"
],
[
"photos/72.jpg",
"Abida Batool",
"Quetta",
"Sports – Boxing"
],
[
"photos/73.jpg",
"Bilal Khan",
"Quetta",
"Sports – Hockey"
],
[
"photos/74.jpg",
"Dr Ghulam Farooq",
"Naseerabad",
"Special Award"
],
[
"photos/75.jpg",
"Faiza Sikander",
"Quetta",
"Lifetime Achievement"
]
];

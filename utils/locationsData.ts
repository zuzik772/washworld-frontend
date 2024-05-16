import { Status, getRandomStatus } from "./Status";

export type location = {
  location_id: number;
  address: string;
  latitude: number;
  longitude: number;
  opening_times: string;
  closing_time: string;
  hall_id: number;
  status: Status;
  isFavourite: boolean;
};

export const locations: location[] = [
  {
    location_id: 1,
    address: "Dynamovej 4, 2860 Søborg",
    latitude: 55.738761,
    longitude: 12.490239,
    opening_times: "24/7",
    closing_time: "24/7",
    hall_id: 1,
    status: getRandomStatus(),
    isFavourite: false,
  },
  {
    location_id: 2,
    address: "Ved Vigen 9, 2100 København",
    latitude: 55.700748,
    longitude: 12.590151,
    opening_times: "7",
    closing_time: "22",
    hall_id: 2,
    status: getRandomStatus(),
    isFavourite: false,
  },
  {
    location_id: 3,
    address: "Københavns Hovedbanegård, 1570 København",
    latitude: 55.672791,
    longitude: 12.564676,
    opening_times: "24/7",
    closing_time: "24/7",
    hall_id: 3,
    status: getRandomStatus(),
    isFavourite: false,
  },
  {
    location_id: 4,
    address: "Strandvejen 28, 3000 Helsingør",
    latitude: 56.032283,
    longitude: 12.613646,
    opening_times: "7",
    closing_time: "22",
    hall_id: 4,
    status: getRandomStatus(),
    isFavourite: false,
  },
  {
    location_id: 5,
    address: "Store Torv 2, 4000 Roskilde",
    latitude: 55.641356,
    longitude: 12.082224,
    opening_times: "24/7",
    closing_time: "24/7",
    hall_id: 5,
    status: getRandomStatus(),
    isFavourite: false,
  },
  {
    location_id: 6,
    address: "Kordilgade 30, 4200 Slagelse",
    latitude: 55.40283,
    longitude: 11.34816,
    opening_times: "7",
    closing_time: "22",
    hall_id: 6,
    status: getRandomStatus(),
    isFavourite: false,
  },
  {
    location_id: 7,
    address: "Køge Torv 16, 4600 Køge",
    latitude: 55.454022,
    longitude: 12.181133,
    opening_times: "24/7",
    closing_time: "24/7",
    hall_id: 7,
    status: getRandomStatus(),
    isFavourite: false,
  },
  {
    location_id: 8,
    address: "Strandvejen 7, 4300 Holbæk",
    latitude: 55.720328,
    longitude: 11.722581,
    opening_times: "7",
    closing_time: "22",
    hall_id: 8,
    status: getRandomStatus(),
    isFavourite: false,
  },
  {
    location_id: 9,
    address: "Algade 60, 4200 Slagelse",
    latitude: 55.40216,
    longitude: 11.343546,
    opening_times: "24/7",
    closing_time: "24/7",
    hall_id: 9,
    status: getRandomStatus(),
    isFavourite: false,
  },
  {
    location_id: 10,
    address: "Bramsnæsvej 16, 4000 Roskilde",
    latitude: 55.618126,
    longitude: 12.030423,
    opening_times: "7",
    closing_time: "22",
    hall_id: 10,
    status: getRandomStatus(),
    isFavourite: false,
  },
  {
    location_id: 11,
    address: "Nørregade 2, 4000 Roskilde",
    latitude: 55.642324,
    longitude: 12.082678,
    opening_times: "24/7",
    closing_time: "24/7",
    hall_id: 11,
    status: getRandomStatus(),
    isFavourite: false,
  },
  {
    location_id: 12,
    address: "Storegade 7, 4600 Køge",
    latitude: 55.451416,
    longitude: 12.18228,
    opening_times: "7",
    closing_time: "22",
    hall_id: 12,
    status: getRandomStatus(),
    isFavourite: false,
  },
  {
    location_id: 13,
    address: "Nykøbingvej 14, 4100 Ringsted",
    latitude: 55.446545,
    longitude: 11.785661,
    opening_times: "24/7",
    closing_time: "24/7",
    hall_id: 13,
    status: getRandomStatus(),
    isFavourite: false,
  },
  {
    location_id: 14,
    address: "Havnegade 20, 4500 Nykøbing Sjælland",
    latitude: 55.92265,
    longitude: 11.683944,
    opening_times: "7",
    closing_time: "22",
    hall_id: 14,
    status: getRandomStatus(),
    isFavourite: false,
  },
  {
    location_id: 15,
    address: "Bramdrupvej 35, 6000 Kolding",
    latitude: 55.47519,
    longitude: 9.486,
    opening_times: "24/7",
    closing_time: "24/7",
    hall_id: 15,
    status: getRandomStatus(),
    isFavourite: false,
  },
  {
    location_id: 16,
    address: "Grønnegade 2, 5500 Middelfart",
    latitude: 55.507259,
    longitude: 9.731722,
    opening_times: "7",
    closing_time: "22",
    hall_id: 16,
    status: getRandomStatus(),
    isFavourite: false,
  },
  {
    location_id: 17,
    address: "Østre Stationsvej 1, 5000 Odense",
    latitude: 55.392443,
    longitude: 10.375925,
    opening_times: "24/7",
    closing_time: "24/7",
    hall_id: 17,
    status: getRandomStatus(),
    isFavourite: false,
  },
  {
    location_id: 18,
    address: "Jernbanegade 6, 5000 Odense",
    latitude: 55.397105,
    longitude: 10.383499,
    opening_times: "7",
    closing_time: "22",
    hall_id: 18,
    status: getRandomStatus(),
    isFavourite: false,
  },
  {
    location_id: 19,
    address: "Østergade 21, 5000 Odense",
    latitude: 55.398467,
    longitude: 10.379497,
    opening_times: "24/7",
    closing_time: "24/7",
    hall_id: 19,
    status: getRandomStatus(),
    isFavourite: false,
  },
  {
    location_id: 20,
    address: "Havnegade 8, 5000 Odense",
    latitude: 55.400597,
    longitude: 10.383548,
    opening_times: "7",
    closing_time: "22",
    hall_id: 20,
    status: getRandomStatus(),
    isFavourite: false,
  },
  {
    location_id: 21,
    address: "Borups Allé 177, 2400 København",
    latitude: 55.700931,
    longitude: 12.529642,
    opening_times: "24/7",
    closing_time: "24/7",
    hall_id: 21,
    status: getRandomStatus(),
    isFavourite: false,
  },
  {
    location_id: 22,
    address: "Finsensvej 5, 2000 Frederiksberg",
    latitude: 55.688775,
    longitude: 12.519228,
    opening_times: "7",
    closing_time: "22",
    hall_id: 22,
    status: getRandomStatus(),
    isFavourite: false,
  },
  {
    location_id: 23,
    address: "Rødovrevej 177, 2610 Rødovre",
    latitude: 55.682228,
    longitude: 12.453931,
    opening_times: "24/7",
    closing_time: "24/7",
    hall_id: 23,
    status: getRandomStatus(),
    isFavourite: false,
  },
  {
    location_id: 24,
    address: "Hvidovrevej 378, 2650 Hvidovre",
    latitude: 55.651898,
    longitude: 12.472672,
    opening_times: "7",
    closing_time: "22",
    hall_id: 24,
    status: getRandomStatus(),
    isFavourite: false,
  },
  {
    location_id: 25,
    address: "Tårnvej 2, 2740 Skovlunde",
    latitude: 55.734006,
    longitude: 12.400543,
    opening_times: "24/7",
    closing_time: "24/7",
    hall_id: 25,
    status: getRandomStatus(),
    isFavourite: false,
  },
  {
    location_id: 26,
    address: "Park Alle 350, 2605 Brøndby",
    latitude: 55.665273,
    longitude: 12.455526,
    opening_times: "7",
    closing_time: "22",
    hall_id: 26,
    status: getRandomStatus(),
    isFavourite: false,
  },
  {
    location_id: 27,
    address: "Gammelmosevej 7, 2800 Kongens Lyngby",
    latitude: 55.770601,
    longitude: 12.517125,
    opening_times: "24/7",
    closing_time: "24/7",
    hall_id: 27,
    status: getRandomStatus(),
    isFavourite: false,
  },
  {
    location_id: 28,
    address: "Jægersborg Allé 41, 2920 Charlottenlund",
    latitude: 55.758676,
    longitude: 12.574963,
    opening_times: "7",
    closing_time: "22",
    hall_id: 28,
    status: getRandomStatus(),
    isFavourite: false,
  },
  {
    location_id: 29,
    address: "Hellerupvej 26, 2900 Hellerup",
    latitude: 55.726794,
    longitude: 12.569375,
    opening_times: "24/7",
    closing_time: "24/7",
    hall_id: 29,
    status: getRandomStatus(),
    isFavourite: false,
  },
  {
    location_id: 30,
    address: "Lyngby Hovedgade 43, 2800 Kongens Lyngby",
    latitude: 55.775387,
    longitude: 12.510978,
    opening_times: "7",
    closing_time: "22",
    hall_id: 30,
    status: getRandomStatus(),
    isFavourite: false,
  },
];

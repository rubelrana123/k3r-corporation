/**
 * Every photo on the site, with its caption and licence details.
 * All are freely licensed from Wikimedia Commons; CC BY / CC BY-SA photos
 * must stay credited on the /credits page. To swap in your own photo,
 * replace the file in public/images/bd and update its entry here.
 */
export type Photo = {
  src: string;
  alt: string;
  caption: string;
  credit: { author: string; license: string; source: string };
};

const commons = (file: string) => `https://commons.wikimedia.org/wiki/File:${file}`;

export const photos = {
  navyFrigate: {
    src: "/images/bd/navy-frigate.jpg",
    alt: "Bangladesh Navy frigate BNS Bangabandhu at sea",
    caption: "BNS Bangabandhu (F-25), Bangladesh Navy",
    credit: {
      author: "Commander, U.S. 7th Fleet",
      license: "CC BY-SA 2.0",
      source: commons("Bangladesh_Navy_Ship_Bangabandhu_(F-25).jpg"),
    },
  },
  chattogramPort: {
    src: "/images/bd/chattogram-port.jpg",
    alt: "Shipping containers stacked at the Port of Chattogram",
    caption: "Port of Chattogram, our gateway for imports",
    credit: {
      author: "Roy Upam",
      license: "CC BY-SA 4.0",
      source: commons("Stacking_Intermodal_container_in_Port_of_Chittagong_(06).jpg"),
    },
  },
  dhakaSkyline: {
    src: "/images/bd/dhaka-skyline.jpg",
    alt: "Dhaka rooftops under a golden evening sky with a rainbow",
    caption: "Dhaka, home of K3R Corporation",
    credit: {
      author: "Wasiul Bahar",
      license: "CC BY-SA 4.0",
      source: commons("Dhaka_skyline_at_golden_hour_02.jpg"),
    },
  },
  armyTraining: {
    src: "/images/bd/army-training.jpg",
    alt: "Bangladesh Army soldier rappelling during training",
    caption: "Bangladesh Army on joint training",
    credit: {
      author: "U.S. Army photo by Spc. Arianna Cox",
      license: "Public domain",
      source: commons("U_S_Soldiers_rappel_with_Bangladesh_Army_during_joint_training_(9824130).jpg"),
    },
  },
  armyTruck: {
    src: "/images/bd/army-truck.jpg",
    alt: "Bangladesh Army Isuzu 3-ton cargo truck on the road",
    caption: "Bangladesh Army 3-ton cargo truck",
    credit: {
      author: "Shadman Samee",
      license: "CC BY-SA 2.0",
      source: commons("3-ton_Bangladesh_Army_Isuzu_TSD_45_truck_(30052370043).jpg"),
    },
  },
  coastGuard: {
    src: "/images/bd/coast-guard.jpg",
    alt: "Bangladesh Coast Guard patrol ships on the river",
    caption: "Bangladesh Coast Guard patrol ships",
    credit: {
      author: "Shajib Ray",
      license: "CC BY-SA 4.0",
      source: commons("Coast_Guard_Ship_(Bangladesh).jpg"),
    },
  },
  policeApc: {
    src: "/images/bd/police-apc.jpg",
    alt: "Dhaka Metropolitan Police armoured vehicle",
    caption: "Dhaka Metropolitan Police armoured vehicle",
    credit: {
      author: "Wasiul Bahar",
      license: "CC BY-SA 4.0",
      source: commons("Bangladesh_Police_Otokar_Cobra.jpg"),
    },
  },
  computerLab: {
    src: "/images/bd/computer-lab.jpg",
    alt: "Students working at desktop computers in an ICT training lab in Jamalpur",
    caption: "ICT training lab, Jamalpur",
    credit: {
      author: "Mediattc",
      license: "CC BY-SA 4.0",
      source: commons("ICTjamalpur.jpg"),
    },
  },
  mugdaHospital: {
    src: "/images/bd/mugda-hospital.jpg",
    alt: "Mugda Medical College Hospital building in Dhaka",
    caption: "Mugda Medical College Hospital, Dhaka",
    credit: {
      author: "MdAbeerHussain",
      license: "CC0",
      source: commons("Mugda_Medical_College_Hospital_Building.jpg"),
    },
  },
  bcsComputerCity: {
    src: "/images/bd/bcs-computer-city.jpg",
    alt: "Inside BCS Computer City electronics market in Dhaka",
    caption: "BCS Computer City, Dhaka's electronics hub",
    credit: {
      author: "Lavadewan",
      license: "CC BY-SA 4.0",
      source: commons("BCS_Computer_City_1.jpg"),
    },
  },
  kawranBazar: {
    src: "/images/bd/kawran-bazar.jpg",
    alt: "Sacks of goods under lights at Kawran Bazar wholesale market",
    caption: "Kawran Bazar wholesale market, Dhaka",
    credit: {
      author: "Wasiul Bahar",
      license: "CC BY-SA 4.0",
      source: commons("Kawran_Bazar_market_108.jpg"),
    },
  },
} satisfies Record<string, Photo>;

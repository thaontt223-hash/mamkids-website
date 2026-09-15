import { Product } from '../types';

export const BRAND_LOGO = 'https://lh3.googleusercontent.com/aida-public/AB6AXuALUu2NvDBWZpSZ6_3dzqmIStoxUV9xCHM2CPt1Z89oNPE9ibsvRYI3fTNGxd6S66vwm0tNo5JlHKIM3W8_d15fr5RNqCtySSFpWLBcbsjuQ83nAzPi1Ry91XXIWcYVqqSfG6Xca0xQRIBFwVLTYEhKY7P0Thypx2E-0ypRsxJaMWasP0gLuh0o8v6qym9jzvB8PlF3wwS5vKWVzNG3LK8QmDEVk2wNOLpUsZpOeTfP6NJ7ROaSl44Rcw';
export const HERO_IMAGE = 'https://lh3.googleusercontent.com/aida-public/AB6AXuC0eUsEw4-I0M_dG4hlDIWuoP8N1nWXX8aj319ATc45bS0Qin7qtSkDiPB86GYar8S8V0tLbgZ3Eqsxt-7n4yRuvGdwoydCrb_n038L3oA9ZIRGMIhjXcnMMaesFRT9C5BefYKg2J8QL9ddI2SOA1OLrrWFsD1HT2eBJ8FrwJ-bjb0OokfHF2ox14l0_OofnGgfDwRPHnRNyH0xhuy5a3azX2NGnfaaB-VRtx5MSVo1YjN7RdawpMYEzw';
export const AVATAR_MOM = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDv9H2OgXLo5bxmMpcgGw315gmyguOpJ3qgeOyp2dHVmwgoCHwfCTN47VzfhSouaXfjSlsXJl1ubyKrc7EBp68-EfjXOTVy3vAgketTTRWFJsocCx1naJgnDTQgB6duC9YfzAr6sPOjQizIRM3P0bRd4HvTg3VodUt3mWaQAYiMVUJoET-HIK9AOZEtBYqhqWbPK7YSvpWJDRKOlV_5PiWtsnpmEGBl8Tsnd7qSgaF-UO3s5lDccdK6qw';

export const CATEGORY_PILLARS = [
  {
    id: 'boy-3-6',
    title: 'Bé Trai 3-6 Tuổi',
    subtitle: 'Năng động & Khám phá',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBfqaAdtrthPw3XUVLenNFnm6tOQwPl_IbwkDPrV8zeX1QYiGteU5kO2b7VkByDm1PA9PdLocdXtLa2qBuk3gJmUMv173tJjg-Z1frZqOK-3TV7nTW2ESe9SBCUdA-4bB33sC896jodwZcCv4HgOFsxlCVBuG5xunUKo0SroBwcUde4S3nUpsf5gIppUIfIweFv108iGTBxRjvDaem2JBoRnRMXLYFUo5ZYRrBdNeZpLpWXs4xzO3UxHA',
    gender: 'boy',
    ageRange: '3-6'
  },
  {
    id: 'girl-3-6',
    title: 'Bé Gái 3-6 Tuổi',
    subtitle: 'Ngọt ngào & Dịu êm',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuACZfMvvQ9lg08zFs0YylgSbzlMiyzG_7sAINQ8oMZ-vb7XuWhf3iob0mbJiJBm6SfzjjONWP1XMBpn7IekFyaX8qwwCU0EpVjut8vjrRQMpLRSxJJ_z7tDAvPaaw1h22O1S2fcOi_kcIKYr4DBFlnbCq43hyRPJQ7BTgucnVJ4crL9KT1jtQTTG8GFlmfkK6BnAzt0rGeOp63ucOpZrN3IU86feTMzzVPWjf2jA9AJYVTLoorkdz-6MQ',
    gender: 'girl',
    ageRange: '3-6'
  },
  {
    id: 'boy-7-12',
    title: 'Bé Trai 7-12 Tuổi',
    subtitle: 'Chững chạc & Cá tính',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAIlkbhms6Xsss7IeJwusX45zNQ5tKDWrH9ZCRG33I9AxPF8gF_YBjTncj1ZwpjSNYnHYYxltNJ65LPFDPwpMeg6IiGICe-nYq5QF7I0wXvIfN1cZ5FjlB_0snY2vZv4Qf7fVBxiVaPvAinBltKt_yBmyLo-C0p1trWG_H-iMGsdy_z2iotnsI5QOZu64UcBAEtdw2ayceKvrkFwQ2p9jnMYBV6xj1HpVsot06GGSys88bCJGDvzbjMMQ',
    gender: 'boy',
    ageRange: '7-12'
  },
  {
    id: 'girl-7-12',
    title: 'Bé Gái 7-12 Tuổi',
    subtitle: 'Thanh lịch & Tự tin',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA40iYIN5cHCi4MnDoevRUrP2FIm7qopmRnDlqWCjlDnY6rOr42jD9djj4lUYaO2V3yb0TNQxGt8JjuYjfCBeUuBit54TwQVDTKh8dXDSGoc6rjZx9ufuwFLcSBftEj_bDO6WKxRxTesEPmg5gFgcgdzC-4JOEMOOwW3iTCdt8k8hQStYI4PRB1dB7al-dAjgM80fyF4mMiaeRd6BXcylU0R8bywIJgyPzza-vgfaie0xTEew3rWyFv8g',
    gender: 'girl',
    ageRange: '7-12'
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'summer-meadow-dress',
    name: 'Váy hoa mùa hè - Summer Meadow Dress',
    vietnameseName: 'Váy hoa xô muslin Summer Meadow',
    category: 'vay',
    gender: 'girl',
    ageRange: '3-6',
    price: 249000,
    originalPrice: 320000,
    rating: 4.9,
    reviewsCount: 128,
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA0qAifZvFfaOesQUOoHJ4ZbSDYsOAMR30dsTfQO6WmYObfT9TXMYSiR5QRTwjV7r1JyLCni8AUb8F8PsMxUJk-De_cZtj3m76O31fuj996ICdIByum3M2JyAjcvcJqkTFI7sAA7YXF6gkrY3WXV1WfGxJiP7QGDLMqlmL0nO9M45fCtYcCSo4nLxVE1Zwh-ElNoid4mIA8IeqHNPdD1chi4Ggwt3SGEUCISCUrQG96sgP45zkZ40ivyw',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBohmTWSVztms6mWOsQlr3DktyIj8myklu4M5pAFQkGv1k9icckf2KG0NZWD65-fOAyWOmHOfm2KujO5XWvuOhKtfwFPqf3B0vTSevk8P6Kd9elhWJ0Hbkskvm_CRK-gE2fqnSf8849ahI0vPc1K_Sibgchkl_WFmaW0wEN7waNWQKDPh700Rw06xZPtxw--BW8JLVqmE5v-R0RDEX3dRftSvuS_h4f5e9PKJOnSUHUtD58o37AVcJb3g',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDCKKfpZ3t7VDGdhrsM_klWBWvhH1axu2gA4j3X0OyoTd7WF5GsL-vIUezkkOSYComzL3Cfh182A3EP64-hkYD2qpckh9PJxJLzi7TGA1Xw30Fv10WsWe-NPQROiqdxmu1O1PQwNrxquJoSe0RU5oObGqv7NiOIrYDrh2QneiRJ2RStfdp0OMRFmoaLzHVXQI8xq-Y0ai15awBlQ-6NyJ-RUHwyl_d8grhhraPYu4ZzDx4E1_9QcigsHA',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA_FpNSxXOi8A3455SI_J7RO1aCQIsU5m6LBSiJFhrpnibc7yts2Gp5xqPghOFCwx6NxoDnC-BfI7XX8Rp0XNPCC99v98-6PTIhBOt3pBBTRkRBoXbKJ9MqfuWsrXEzsqDsxk378DMQaOohhU5syT-CKWH8McXsYdaBWUzn1wXazV7eVN03vZORiNInw6Do6scmnV2eU-rrNPQIHEJ2lXOUhdJ_pmaDQWFaCpWrRGZpJ0spI_014tiOrA',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDXuEgzqVM8Klv_qudozc-aLg0g56wFQZ5FcBROlzrvjGOXs4sSwDRjOvTsEv77Tkz5v60k6wHKRtt4pgplEU9-tTk-GNf5Q7ps0ZpRV8oVXpsqTGC_ZC7tV92QvX-v4rEgwTf2g0ZWUrXWXL0iKLpFVreVB9Dvgsgk6Eqn0gR1P-bo6CHMx2lInCs9Sc5wrTkizNN2NGiE-J9Zt3sQZh1stAV_8NQGUaJauoip_8TIQlqS-nR7U_tDEg'
    ],
    colors: [
      { name: 'Hoa Nhí Vàng Mơ', hex: '#F9E2AF' },
      { name: 'Xanh Mint Dịu Mát', hex: '#D1E7DD' },
      { name: 'Hồng Phấn Ngọt Ngào', hex: '#FAD2E1' }
    ],
    sizes: ['90 (11-13kg)', '100 (13-16kg)', '110 (16-19kg)', '120 (19-23kg)'],
    badge: 'Bán chạy nhất',
    description: 'Chiếc váy xòe hoa nhí được may từ 100% sợi cotton tự nhiên dệt dạng xô muslin 2 lớp. Thoáng khí tối đa, thấm hút mồ hôi vượt trội giúp làn da nhạy cảm của bé luôn khô thoáng suốt ngày dài vận động mùa hè.',
    material: '100% Organic Double-Gauze Muslin Cotton (Chứng nhận OEKO-TEX Class 1)',
    details: [
      'Thiết kế tay bồng nhẹ nhàng, chun co giãn không thít bắp tay',
      'Nơ lưng buộc duyên dáng kết hợp hàng khuy gỗ dừa tự nhiên phía sau',
      'Không sử dụng nhãn mác vải gây ngứa, thông tin size được in chìm an toàn bằng mực gốc nước',
      'Đường may giấu mép kỹ lưỡng không cọ xát da bé'
    ],
    inStock: true,
    featured: true
  },
  {
    id: 'cotton-bear-tee',
    name: 'Áo thun cotton Gấu Nhỏ Tinh Nghịch',
    category: 'ao',
    gender: 'boy',
    ageRange: '3-6',
    price: 139000,
    originalPrice: 180000,
    rating: 4.8,
    reviewsCount: 94,
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB4AxR08xkzZRf6vV654yw2PIMjKT4p3s7Q4BFtybhuEzfhAD8BCcA_AsOrDdAoo5bYV48EydP0kw_Dko1joVv_RI4H0IeTjE2vVdw2NclwwpluN4bL596cqa1YeB4RvqhBqt3dm1om2TlF6VD1XbAd07HZLfppfseuPv77HDGpcblV_jsvg_hQhqNzy_6f48OgjMbmxkBWub6jtiWN2KPYaLiPUyd1ejhS_yzmFIa6dpKj0MgASyyzZg',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBynXxoF4xNH-4e7syYDkBJJB9k9a5Bl6VqxXV0YYkEb8j6kPllMrgT_fNW_YzkjimojAfmgItCQ64XkCJXiDKLN4C4o39JGxKLlXd2kukzIkmyV9Us6CP2HZpVmO1YuTzhf7HYsaiOgDKB_ADFFg0KanPq75j_cz6Mol7ELEhUpKng2ahkk6fVdKkTViwXw9r5jjCfHJQsNa2Vr3Ev1hQCbxRhXSAyTm1bAO1mkdSAZ0QhmeCpKKs8Dg'
    ],
    colors: [
      { name: 'Xanh Navy Cổ Điển', hex: '#2A4365' },
      { name: 'Trắng Sữa Tự Nhiên', hex: '#F7FAFC' },
      { name: 'Vàng Mù Tạt Ấm Áp', hex: '#D69E2E' }
    ],
    sizes: ['90 (11-13kg)', '100 (13-16kg)', '110 (16-19kg)', '120 (19-23kg)'],
    badge: 'Mới về',
    description: 'Áo thun cotton 100% chải kỹ mềm mịn, thấm hút mồ hôi gấp 2 lần sợi thông thường. Họa tiết chú gấu nhỏ in lụa gốc nước an toàn không nứt vỡ.',
    material: '100% Organic Combed Cotton 220gsm',
    details: [
      'Cổ bo thun dệt kim mềm, co giãn dễ dàng chui đầu không bị giãn nhão',
      'Đường chỉ may 4 kim chắc chắn, chịu được máy giặt công suất lớn',
      'Mực in gốc nước đạt chuẩn an toàn cho trẻ em sơ sinh và trẻ nhỏ'
    ],
    inStock: true,
    featured: true
  },
  {
    id: 'active-linen-shorts',
    name: 'Quần short đũi năng động Explorer',
    category: 'quan',
    gender: 'boy',
    ageRange: '3-6',
    price: 159000,
    originalPrice: 195000,
    rating: 4.9,
    reviewsCount: 76,
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCbzjiQnPc_WojbIGmjvhowB1GI6e7hqNAICfz1K4LXEvOXGwZbLtTZ-dDEvN2IAkQRuZ_Vs3L4IlYJOwk_DIIcq3lZln5LgPmMhD-gsIG0doY5rd9c-9DcBKsg9dKQMb5x4duLAUgSxPfLaJDsWR2uEgb7GhfbDVI0f6zGoG7XVpRQChgR3kUKN9Iu90H3CfotKaUDjCSy49eM_VJGXCIyTOWK5PpCF60TdDJx9nabIv-ItLuIk6xSfg',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDGY-XzpwfdHNcS2Cl4DLMWK4B3Io_XBgxGFJ6aET0ODDCcxCBAkh2fMErSgrHL_rv6Wq11I8R1Mdis-PaCof8onAd6jkDwdSRTjuqQbC9fCKaJinxfu5zP33cQ_1Eni-0QX0ebx0s9AWJSVnIPLLlBKK9_Ss-e1rw8Ey4ALnggYEQsieWzn5Bbx9MWYMDwwJaq8kkZFfhMF6pfDTPr6ybGyzC8CF8w159Cv3jTR6HIY5D5TJSMxM0jEg'
    ],
    colors: [
      { name: 'Be Cát Sa Mạc', hex: '#E2D9C8' },
      { name: 'Xanh Rêu Nhạt', hex: '#879782' },
      { name: 'Xanh Biển Pastel', hex: '#A5C4D4' }
    ],
    sizes: ['90 (11-13kg)', '100 (13-16kg)', '110 (16-19kg)', '120 (19-23kg)'],
    badge: 'Ưa chuộng',
    description: 'Chất đũi cotton pha lanh cao cấp siêu nhẹ, mềm rủ và thoáng khí. Lưng thun dệt bản êm không để lại vết hằn đỏ trên bụng bé yêu.',
    material: '70% Cotton hữu cơ, 30% Lanh tự nhiên',
    details: [
      'Dây rút cotton điều chỉnh vừa vặn vòng eo linh hoạt',
      '2 túi hông sâu để bé cất những món đồ chơi yêu thích',
      'Ống quần suông rộng rãi thoải mái chạy nhảy, leo trèo'
    ],
    inStock: true,
    featured: true
  },
  {
    id: 'sunny-day-loungewear',
    name: 'Đồ bộ mặc nhà Ngày Nắng Thoáng Khí',
    category: 'dobo',
    gender: 'unisex',
    ageRange: '3-6',
    price: 189000,
    originalPrice: 240000,
    rating: 5.0,
    reviewsCount: 112,
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBVFE3dfUtjXzdR8YiGagFMPQjvZqYM6bO_PPhMJkZ15YoStr5doa5Nf1rx4EPDv16sx6qmAvFnFZmMoD0H7fK_VJC2kXGMrzGZj3XHAFtGfzanxqDFrhmWKlsuQsmSE4rTk3QuzlBnWfwqBbBvGCnr5qAOSmSeWdWhUW4K3BT2BYdkiRZAV9e2IUyOwxtoYIq08gmLEWhAKso9OTG1MfPPNAtTre48DykNj9J6rRKHe1ugMbZkvDe79g',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAAd6gnwItFCNg9EN1neEm_-EKk4aCBf9-TWWoTw0SUVqA65N7-UJoN60UtHzZGgPIvLRWqIt8hE9cg4pxK053cuUzvw6Zg-1_mfURobtX_HvSGEI22TbldsxtNdsK9xermlqB5Fs66fvDj9VaV4SnX-DiO29sKxL4vZhd7Cjf9KWvnJOrbChOrfeQWI1S2_ERVwPOlQ3e_V1jJGmO8bn28rleL8CbRtSa1elF5ED83Re9kSKG_Kycwig'
    ],
    colors: [
      { name: 'Vàng Bơ Dịu Dàng', hex: '#FEEBC8' },
      { name: 'Xanh Bạc Hà Mát Mắt', hex: '#C6F6D5' },
      { name: 'Kem Vani Thuần Khiết', hex: '#FEFCBF' }
    ],
    sizes: ['90 (11-13kg)', '100 (13-16kg)', '110 (16-19kg)', '120 (19-23kg)'],
    badge: 'Top 1 Yêu Thích',
    description: 'Set đồ bộ mặc nhà chân ái cho bé ngủ ngon giấc và vui chơi không lo đổ mồ hôi trộm. Cấu trúc mắt dệt tổ ong xốp nhẹ siêu thông thoáng.',
    material: '100% Waffle Cotton Hữu Cơ Siêu Mềm',
    details: [
      'Công nghệ dệt xốp tổ ong giúp khí lưu thông liên tục 360 độ',
      'Cạp quần may bọc vải nhung mềm không cấn bụng',
      'Họa tiết in thêu tỉ mỉ mặt ngoài, hoàn toàn không chạm da bé'
    ],
    inStock: true,
    featured: true
  },
  {
    id: 'rainbow-fleece-hoodie',
    name: 'Áo hoodie nỉ bông Cầu Vồng Mộng Mơ',
    category: 'aokhoac',
    gender: 'girl',
    ageRange: '7-12',
    price: 279000,
    originalPrice: 350000,
    rating: 4.8,
    reviewsCount: 53,
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBd-4YYPhCOHaAxNpaklsoSYqA2oeA8NKhqWKZKlPY01AL3CJYMs_ZHfPHVEG5K9NoOAA-ez26E15lTo0UVe0WVeyllza0-8J55m4ItXKcG6Jl08080v9rq6kFwODcMOULZlZ8NrFA9HFgvL5ZWbRP7QAOVDh53coJT84PJS6ewJDAeVFbDgPd5W5_xLLK1lPNV5wgP4mmZB7QBiBSTp_5VJJLShbiDUViGm4pQSHW2jwcD2VwhF1XN_Q',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAGp7V1dXqK4gUZNKcEWDBjDkSvkBcbI4pw4E3yCK6g73Fl37YpuIBexYQ_n2DPmCpoVnO3K8T2MHjCnWNwj7s3gpdW6lftLuTIJ8INHBj8Ga-Z2k4RHx0yc4_uWn9qUo7LG3QJw--tLYqIqWbKmTyIA_0k2UIZD6W9_VQWawyy3pbxo49AqrVNrUtFrB37j1gA1flj-bEwszhJpOqgPbs6iezltaZ-uaX4OO_O2DtQ7Khqj609ZE7s-g'
    ],
    colors: [
      { name: 'Tím Lavender Nhạt', hex: '#E9D8FD' },
      { name: 'Hồng San Hô Mơ Mộng', hex: '#FED7D7' }
    ],
    sizes: ['130 (24-28kg)', '140 (28-33kg)', '150 (33-38kg)'],
    badge: 'Thu Đông 2025',
    description: 'Chất vải nỉ chân cua 100% cotton chải bông mềm mại như kẹo bông gòn. Giữ ấm vừa vặn trong thời tiết se lạnh hoặc phòng điều hòa.',
    material: 'French Terry Cotton 100% lót nỉ mịn',
    details: [
      'Mũ trùm 2 lớp ấm áp chống gió lùa',
      'Túi kangaroo phía trước tiện lợi sưởi ấm đôi bàn tay',
      'Bo chun cổ tay và gấu áo dệt rib co giãn đàn hồi tốt'
    ],
    inStock: true,
    featured: true
  },
  {
    id: 'pastel-princess-dress',
    name: 'Váy công chúa voan tơ Pastel Tự Tin',
    category: 'vay',
    gender: 'girl',
    ageRange: '7-12',
    price: 319000,
    originalPrice: 410000,
    rating: 4.9,
    reviewsCount: 88,
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD6vUGvBO3ApuLHditClT41nhYoyrnXEnQ_Qlqvn1b-uz_F80NENKXUqDJHPraevjQWvIoh4Kcwf2wCu0uePZf136R8wFDCcsi7lCc9uqR-SgX9IS1dunIPwRmp0EW5GH32aC5n-nQxItgB5Ml-bxKCezP7bFUl0aP1zlc60Oxb8XEh1Z-KuGQAn0DKqUyI-B0JDS3ELcyQ9JjtFS3YL1TEjiw-4zEfC1tpQk9DOKPdVMostHEuoCJqQQ',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA0tjOZnnQBD64I1ICpCfYOWJ_g1FSQCLCA3vg_Vw8WnOrBMhh5V2kNNjacWlMz2KLpOHMfwHk0Ye46xaXq3wFzC7QzZPdjmM2vWX50I3ID9jBfxZ0v83zxoJW7zCTSJ0HQC-86InB6UxS1eye-1wbWneBD21cXePY5jSkgAIs33WKsvQ_Xjx6Cs3Eni8RxXzLGo6FjZUJ95XYR-W-FOppP13bSm7dyVeZHAmvDrJT0XP1i991jzuew2A'
    ],
    colors: [
      { name: 'Hồng Phấn Công Chúa', hex: '#FBB6CE' },
      { name: 'Trắng Ngọc Trai', hex: '#EDF2F7' }
    ],
    sizes: ['120 (19-23kg)', '130 (24-28kg)', '140 (28-33kg)', '150 (33-38kg)'],
    badge: 'Dự tiệc & Lễ hội',
    description: 'Chiếc váy đài các dành riêng cho các sự kiện biểu diễn, sinh nhật hoặc dạo phố. Lớp lót trong cùng bằng 100% cotton tơ tằm siêu êm dịu.',
    material: 'Voan tơ kính cao cấp + Lót cotton lụa tự nhiên 100%',
    details: [
      'Phom váy phồng bồng bềnh tự nhiên không cần tùng kim loại nặng nề',
      'Khóa kéo giọt nước ẩn sau lưng trơn tru không chạm gáy bé',
      'Đính nơ ngọc trai handmade sang trọng nhưng chắc chắn'
    ],
    inStock: true,
    featured: true
  },
  {
    id: 'oxford-gentleman-shirt',
    name: 'Áo sơ mi Oxford Bé Trai Lịch Lãm',
    category: 'ao',
    gender: 'boy',
    ageRange: '7-12',
    price: 219000,
    originalPrice: 280000,
    rating: 4.7,
    reviewsCount: 65,
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAsQGppycNoWMvNkXI9TX7hlvbTOHFQdqbskf2jcIf9UwyI5i_Z93Nh9K5DKA7vQ6btYqAfpho0QxbHPFoOtM7h7GBTgpvK6LvcVjEZ25QZQQ9gRF02cYJ9PUq0PSX3lHZiGGhP-gjYMP9-DD1rMeQRMQTE0H_QtQHTToZvqKB4K5P3jq3_LbUB7JydwDroePG1eO72a7pXn1DdS4hVKDCjgRqTtp17vk6eCbJvgoh1d8MTyP-TrGlUeQ',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB8s8OfMiOyrYzvj7mEg9Pnur7oHN6sbMYvlLcJw9Sw8i5qTciFhBkf44FrLlIchV355oMPYVcTISuXMOXEN4bU66lboTERML0hieIE_ddarDbJGxORHwUnmQIMJkBJFv3IpST3Z9rMjNfIWQLE3mY_EGmoKgKXxEiZlUIxv9bXwRNP6Aa1A0L4-27FFMJmUhnpstO3FP4SBLPgpinodU0sr9kaCoNmbit8kFm5mrJDyGdjKrMbIpjXRA'
    ],
    colors: [
      { name: 'Xanh Baby Oxford', hex: '#BEE3F8' },
      { name: 'Trắng Sơ Mi Thanh Lịch', hex: '#FFFFFF' }
    ],
    sizes: ['120 (19-23kg)', '130 (24-28kg)', '140 (28-33kg)', '150 (33-38kg)'],
    badge: 'Đi học & Dạo phố',
    description: 'Chất vải Oxford dệt vân kim cương đặc trưng, đứng phom nhưng vẫn mềm rủ và thoáng khí. Rất thích hợp cho bé đến trường hoặc diện đi tiệc.',
    material: '100% Oxford Cotton Premium',
    details: [
      'Cổ áo có nút cài giấu giữ cổ luôn đứng nếp gọn gàng',
      'Cúc áo xà cừ tự nhiên bo tròn mép không gây cộm',
      'Xử lý giặt mềm sinh học enzyme chống nhăn tự nhiên'
    ],
    inStock: true,
    featured: true
  },
  {
    id: 'explorer-windbreaker',
    name: 'Áo khoác gió Nhà Thám Hiểm Nhí',
    category: 'aokhoac',
    gender: 'unisex',
    ageRange: '7-12',
    price: 299000,
    originalPrice: 380000,
    rating: 4.9,
    reviewsCount: 91,
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDYjJd6cw7rubrIvQ2PqgqctgOR4TohZl7VO5rrQ12yS7i5d8QBVbyIg72eySaW-uYOXNeRAwi1AZ1a0G1UE25BqlW2O2cei76iu1wpMXBPO6RqRyRorHvE_uCEOxtZTkPNeH7n9CVXlycjkW8boYkOVed6lIuf2U7lSppcAHKe8bLE2Zf0jjl3oYPfC1zQX17xB3iINfmGS676RHUR6i1uuq5usqjgggHicXYEeJzva9QQ9eu9N16t7A',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBM4pYXLWqQr1md-wYYbT3HGsYSnFRbMbJh7FpRANdBs9AOMgRlmxXSImORRE-gBvrFV0AG47k_rMUTdT3XZN1C1C8QtdbqO8uNI7-9g4MJtHW2zfAi2cXNO11JRhgc8dhUz6SNz1-mMlFl4iCVBRzw_a0797w8U_RZy-V4YHBAK2Wy0vX7Y8coTqoInHSmlGqLVEMwZCEU4iDFj2IKkPgpuF474NOMep2Isv2TnF6tJ7vNuHHO3O4KAg'
    ],
    colors: [
      { name: 'Xanh Olive Rừng Già', hex: '#4A5568' },
      { name: 'Vàng Nắng Explorer', hex: '#ECC94B' }
    ],
    sizes: ['120 (19-23kg)', '130 (24-28kg)', '140 (28-33kg)', '150 (33-38kg)'],
    badge: 'Chống thấm nước',
    description: 'Áo khoác gió siêu nhẹ 2 lớp chống nước trượt lá sen, cản gió và chống tia UV UPF50+. Bé tự tin vận động ngoài trời trong mọi điều kiện thời tiết.',
    material: 'Vải dù tái chế chống thấm + Lớp lót lưới cotton thấm mồ hôi',
    details: [
      'Khóa kéo trơn mượt kèm miếng bọc bảo vệ cằm bé',
      'Đường may dập ép keo chống nước ngấm qua khe chỉ',
      'Gấp siêu gọn thành chiếc túi nhỏ bé có thể tự đeo vào balo'
    ],
    inStock: true,
    featured: true
  },
  {
    id: 'stretch-kids-denim',
    name: 'Quần jeans co giãn mây mềm Mầm Denim',
    category: 'quan',
    gender: 'unisex',
    ageRange: '7-12',
    price: 239000,
    originalPrice: 310000,
    rating: 4.8,
    reviewsCount: 79,
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAg4PL6sONEyf9c6qX-LTL-JOirSxjZUunBcyS4ltO_UMQl-CIa8BZWrsmONKtqR9_SzOrtwyGDfgVpWkhtYyXloDhT3VYHexao6DKpUkvO8nBxFgM2g4TG4qcULlj3l-nrq3GYF6cgfyrqfJUD0RZ3afalRk7LjiLtl3dZqGQ0pf1-Bivho0b7oJNia1RMMJRnzdzOPNGoqXqJ0QqUrZacmi2OzN3PIT7bhEynuxqyWAgmqUTFFJZabg'
    ],
    colors: [
      { name: 'Xanh Denim Truyền Thống', hex: '#3182CE' },
      { name: 'Xanh Nhạt Mùa Hè', hex: '#90CDF4' }
    ],
    sizes: ['120 (19-23kg)', '130 (24-28kg)', '140 (28-33kg)', '150 (33-38kg)'],
    badge: 'Co giãn 4 chiều',
    description: 'Chất jeans mềm như bơ, dệt kết hợp sợi Spandex đàn hồi tối đa. Không còn cảm giác cứng ráp hay gò bó như các loại quần bò thông thường.',
    material: '95% Cotton denim organic, 5% Spandex co giãn',
    details: [
      'Chun chỉnh cúc bên trong hông quần giúp vừa vặn theo vòng bụng',
      'Mài wash bằng đá khoáng tự nhiên an toàn tuyệt đối cho da',
      'Độ bền màu cao qua hơn 100 lần giặt máy'
    ],
    inStock: true,
    featured: false
  },
  {
    id: 'sage-smile-tee',
    name: 'Áo thun nụ cười Sage Green Smile Club',
    category: 'ao',
    gender: 'unisex',
    ageRange: '3-6',
    price: 145000,
    originalPrice: 185000,
    rating: 4.9,
    reviewsCount: 62,
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCqM_Kh86C-kF-mAmBnzahuaIFYAlSGqUmu8irzsx4tsHKfa40DTAMOriRUhZLyBgUZY_DY0q9q34gT5kp_hjX0GN7KZG7Rrrq3EDZ8afQktw6Ybq0NaTOxfwhzk2wCzkIwD4izEnD0KqXmGE9eeBaCGYbowPA5ukfn8LfAGO7g6Z8Fg3BxVOd0ygA87ap4Vo4MGI7wa8pFbfZIl_01mtxI8VYVyN3SH5kO6DeFaOBf7Qa92BgT3JOxLg'
    ],
    colors: [
      { name: 'Xanh Xô Thơm Tươi Mới', hex: '#9AE6B4' },
      { name: 'Trắng Sữa Organic', hex: '#F7FAFC' }
    ],
    sizes: ['90 (11-13kg)', '100 (13-16kg)', '110 (16-19kg)', '120 (19-23kg)'],
    badge: 'Eco Friendly',
    description: 'Dòng sản phẩm nhuộm màu tự nhiên từ lá tràm trà và thảo mộc, cực kỳ thân thiện với môi trường và làn da bé.',
    material: '100% Organic Bamboo Cotton',
    details: [
      'Tính kháng khuẩn tự nhiên từ sợi tre',
      'Mềm mại gấp 3 lần cotton thông thường',
      'Họa tiết thêu mặt cười tối giản đầy năng lượng tích cực'
    ],
    inStock: true,
    featured: false
  },
  {
    id: 'dynamic-track-suit',
    name: 'Bộ thể thao Dynamic Champion',
    category: 'dobo',
    gender: 'boy',
    ageRange: '7-12',
    price: 269000,
    originalPrice: 340000,
    rating: 4.8,
    reviewsCount: 47,
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBmlr4Rlbm3VlbD17v3bKDnFZr5BR4aawAHgqeZx4q3qqEqXYOhrIYbsJ0l7zJhbMFM-8tkLE4Ods2WRYDPKk_qQ51PLBWYsJC6Jc3EVa2fmC-jxx5RarzRMkXM66Mg1ecmkypAuWuSUMk4kDUk_2ET7Tghh3HwKKnFNqPjq25YemqrnbvBjt3aMCSr7DeUoWxtF3mE_clGAMIXIXVfmHSaPWDDFqCShYLWYo3MOdmknESOGnAOIpxoIg'
    ],
    colors: [
      { name: 'Đỏ Năng Động & Xanh Navy', hex: '#9B2C2C' },
      { name: 'Xám Khói Thể Thao', hex: '#718096' }
    ],
    sizes: ['130 (24-28kg)', '140 (28-33kg)', '150 (33-38kg)'],
    badge: 'Vận động thể thao',
    description: 'Set thể thao năng động gồm áo thun raglan và quần thể thao phối dải sọc cá tính. Khô nhanh, thoát nhiệt tức thì khi bé chạy nhảy đá bóng.',
    material: '88% Cotton thoáng khí, 12% Poly coolmax',
    details: [
      'Công nghệ Cool-Dry thấm hút và bốc hơi mồ hôi nhanh chóng',
      'Đũng quần đắp gusset mở rộng giúp bé xoạc chân không rách chỉ',
      'Có phản quang ban đêm an toàn khi bé chạy bộ cùng bố mẹ'
    ],
    inStock: true,
    featured: false
  },
  {
    id: 'oat-cozy-joggers',
    name: 'Quần jogger nỉ bông Màu Yến Mạch',
    category: 'quan',
    gender: 'unisex',
    ageRange: '3-6',
    price: 169000,
    originalPrice: 210000,
    rating: 5.0,
    reviewsCount: 82,
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAP5ZPird9gsGL4CAztEuyngQ9SNxBY6OzhcH4D6RgBCdjAB_SoSwvKuKXw8DwVcm6_s2YuYnXNhiIcsrVyNwbDNp2C56p5_x3hPrbzMXbvyBuzJZ0ioTjpZeSgoLpRxULe0wPGRtxL036pZ0fUlo6yCWcZ4_6CFXjK3hFDi7xbo2w4pSDez4aSIrqQ2_B5OCQT1tJy7cx07r4lrzHZF_c0rvvgSOkXvHxUMREypmiQIY8BU0TpIBJm_Q'
    ],
    colors: [
      { name: 'Yến Mạch Ấm Cúng', hex: '#D7CCC8' },
      { name: 'Nâu Cacao Mộc Mạc', hex: '#8D6E63' }
    ],
    sizes: ['90 (11-13kg)', '100 (13-16kg)', '110 (16-19kg)', '120 (19-23kg)'],
    badge: 'Cozy Winter',
    description: 'Chiếc jogger mềm mại giữ ấm hoàn hảo cho bé đi dạo sáng sớm hoặc những buổi chiều thu mát mẻ. Thiết kế gấu bo êm ái tránh vấp ngã.',
    material: '100% Organic Fleece Cotton',
    details: [
      'Gấu quần may thun rib đàn hồi cao không siết cổ chân',
      'Túi sâu tiện lợi và đai lưng chun co giãn siêu mềm',
      'Giặt máy giặt sấy thoải mái không xù lông'
    ],
    inStock: true,
    featured: false
  }
];

export const CROSS_SELL_ITEMS = [
  {
    id: 'organic-cardigan',
    name: 'Áo khoác len dệt mỏng Cloud Soft',
    price: 189000,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCNYQpgp_ly_EGm6VZ8AMHdNfmYzhkJe-1k8FLq4JaMJeoWXLGug583PaVTtKXiwGoIYdYT6DUWcTjZgWrRQXqp2dXs1nCnD0YtVptWFh8nP8caKD5atTNe9m_dmWoCKrYm04bY6yryYIrFTbYXodSXyjhzEP119XV24pw147kevBu8R7W9bwiqHBJYHg7TcPo7Pc1RKyLjnWYwt2p3bFLZXynfOakFrk__fArSYKw0CQtgLXuurTmTKA'
  },
  {
    id: 'hair-clips',
    name: 'Set 3 kẹp nơ hoa lanh thủ công',
    price: 59000,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCAi54mNQ1lGI0uYu67-XsLqc8pHTk0NqC8lf4o71Q94TiV_R-WbMEaPGbNk5i2sYZIUUlyhK7VloC1AchYdoU6OP3V__XiHxamuqt_H_dBrkjHOf3xmLosBBpJTokO5UxAfxvgSU7cZ3UZM6c1Oztsqg0CCfytHhWwzgTEE1ebHDDtlo1xBJnhKm3hGBl9o3aAZGzAhipEXqQK0fF0773dRj6GpBurEO_ncaHUbjig9sbKpzc5xv_JhA'
  },
  {
    id: 'leather-sandals',
    name: 'Sandal da mềm chống trượt cho bé gái',
    price: 219000,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB-2-9nlmlFb9tB5VoeanBbGrHJ04r6LuABaPPRHWQOaodKe5o7cYoaCgja-QDr9QMMq4PrhFkTptC5rWjNB5xqCTD3WmPSzwRKQdmmYkKNr_czbY11Wtm6tB3OhgzY-jUCiCEnIgd578OyMsE1yYwdXch9zo7DEnmYQ9DSGyx_YqikOZ1bcDtGJKF99oGvVvDeL1BYomrJ6j9q4nqbjbjGVkLpC-PBBGnt_pk2Pi9GBM2boDNzOcZPXQ'
  }
];

export const PARENT_FEEDBACKS = [
  {
    id: 'fb-1',
    author: 'Mẹ Thanh Trúc',
    childInfo: 'Bé Bơ, 4 tuổi (TP. Hồ Chí Minh)',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    verified: true,
    quote: 'Chất vải xô muslin của Mầm Kids thực sự mềm mại ngoài mong đợi. Bé Bơ nhà mình da rất nhạy cảm, trước đây mặc đồ thương hiệu khác hay bị ngứa đỏ quanh cổ nhưng từ khi chuyển sang Mầm thì trộm vía chơi cả ngày mồ hôi nhễ nhại vẫn không bị rôm sảy!'
  },
  {
    id: 'fb-2',
    author: 'Ba Hoàng Nam',
    childInfo: 'Bé Tít, 6 tuổi (Hà Nội)',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    verified: true,
    quote: 'Điều mình ưng nhất ở Mầm là độ hoàn thiện: không có một sợi chỉ thừa, không hề có mác vải cọ vào gáy bé. Mình đặt size 110 vừa in theo bảng gợi ý chiều cao. Dịch vụ đổi trả tận nhà miễn phí làm vợ chồng mình rất an tâm khi mua sắm online.'
  },
  {
    id: 'fb-3',
    author: 'Mẹ Mai Lan',
    childInfo: 'Bé Sâu & Bé Miu, 3 & 8 tuổi (Đà Nẵng)',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    verified: true,
    quote: 'Màu sắc nhã nhặn, chuẩn bảng màu pastel Bắc Âu chụp ảnh lên xinh yêu vô cùng! Giặt máy qua 4-5 lần bằng nước giặt cho bé vẫn không hề co rút hay xù lông. Đã là khách hàng quen thuộc hơn 2 năm nay của shop.'
  }
];

export const SIZE_CHART = [
  { size: 'Size 90', age: '2 - 3 Tuổi', height: '85 - 95 cm', weight: '11 - 13 kg', chest: '50 - 52 cm', advice: 'Vừa vặn với bé nhỏ nhắn' },
  { size: 'Size 100', age: '3 - 4 Tuổi', height: '95 - 105 cm', weight: '13 - 16 kg', chest: '53 - 56 cm', advice: 'Chuẩn phom phổ biến' },
  { size: 'Size 110', age: '4 - 5 Tuổi', height: '105 - 115 cm', weight: '16 - 19 kg', chest: '57 - 60 cm', advice: 'Tăng 1 size nếu bé mũm mĩm' },
  { size: 'Size 120', age: '6 - 7 Tuổi', height: '115 - 125 cm', weight: '19 - 23 kg', chest: '61 - 64 cm', advice: 'Rộng rãi thoải mái vận động' },
  { size: 'Size 130', age: '7 - 8 Tuổi', height: '125 - 135 cm', weight: '24 - 28 kg', chest: '65 - 68 cm', advice: 'Dành cho bé tiểu học' },
  { size: 'Size 140', age: '9 - 10 Tuổi', height: '135 - 145 cm', weight: '28 - 33 kg', chest: '69 - 72 cm', advice: 'Phom suông năng động' },
  { size: 'Size 150', age: '11 - 12 Tuổi', height: '145 - 155 cm', weight: '33 - 38 kg', chest: '73 - 76 cm', advice: 'Chững chạc, tôn dáng' },
];

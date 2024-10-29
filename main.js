let currentSlide = 0;

function showSlide(index) {
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");

  slides.forEach((slide, i) => {
    slide.style.opacity = i === index ? "1" : "0";
  });

  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });

  document.querySelector(".carousel-slides").style.transform = `translateX(-${index * 100}%)`;
  currentSlide = index;
}

// Автоматична промяна на слайдовете
setInterval(() => {
  currentSlide = (currentSlide + 1) % document.querySelectorAll(".slide").length;
  showSlide(currentSlide);
}, 3000);
// Дефиниране на текстовите стойности за различните езици
const translations = {
  en: {
    title: "Ignite Your Passion 🔥 for Railways 🚆",
    topBar: "Welcome to the website of Bulgarian State Railway Builders AD. Feel at home.",
    home: "Home",
    trains: "Trains",
    aboutUS: "About Us",
    contacts: "Contacts",
    TheBestTrains: "The Coolest Trains",
    moreInfo: "More Information",
    seeMoreTrains: "SEE MORE COOL TRAINS",
    TrainsForFuture: "Trains for the Future",
    trainPositives_title: "The Positives of Train Compositions",
    trainPositives_description: "Trains have many positives that we can clearly notice here. Friendships made on the train sometimes last forever with these delays. Here are some of the good things:",
    trainPositive_First_title: "Fewer Harmful Emissions",
    trainPositive_First_description: "Trains produce significantly fewer harmful emissions per passenger kilometer compared to cars and planes. This makes them a more environmentally friendly choice.",
    trainPositive_Second_title: "Less Traffic",
    trainPositive_Second_description: "Trains are not affected by road traffic and can provide a more predictable travel time. But traveling with BDZ is still unpredictable.",
    trainPositive_Third_title: "Better Experience",
    trainPositive_Third_description: "Traveling by train can be a more social experience, as it allows passengers to meet and interact with others.",
    trainPositive_Fourth_title: "Less Stress",
    trainPositive_Fourth_description: "Traveling by train can be less stressful as it does not require driving or parking.",
    footerText: "Built with BULGARIAN love and hands 🤍💚❤️",
    allRightsReserved: "All rights reserved 2024",
    Shinkansen_shortDescription: "Japanese high-speed train known for its comfort and quiet operation.",
    TGVDuplex_shortDescriptioon: "French high-speed double-deck train offering high passenger capacity.",
    ICEFour_shortDescriptioon: "German high-speed train characterized by modern design and high automation.",
    FuxingHao_shortDescriptioon: "Chinese high-speed train, one of the fastest in the world.",
    Eurostar_shortDescriptioon: "High-speed train connecting the UK with continental Europe.",
    Velaro_shortDescriptioon: "Family of high-speed trains used in various countries around the world.",
    AGV575_shortDescriptioon: "Italian high-speed train known for its aerodynamic design.",
    Harmony_shortDescriptioon: "Chinese high-speed train used for domestic lines.",
    Talgo350_shortDescriptioon: "Spanish high-speed train known for its lightweight and low energy consumption.",
    train: "Train ",
    driveType: "Drive Type",
    power: "Power",
    maxSpeed: "MAX Speed",
    length: "Length",
    trackwidth: "Track Width",
    carCount: "Carriages",
    weight: "Weight",
    capacity: "Capacity",
    acceleration: "Acceleration",
    brakingDistance: "Braking Distance",
    serviceFrequency: "Service Frequency",
    yearOfManufacture: "Year",
    technicalSpecifications: "Technical Specifications",
    Comfort: "Comfort",
    Safety: "Safety",
    ComfortLong: "Comfort Features",
    SafetyLong: "Safety Features",
    from: " from ",
    milimeter: "mm",
    kW: "kW",
    tonCar: "t/car",
    electricity_changing: "Alternating Current",
    electricity_full: "Direct Current",
    mCar: "m/car",
    service_FrequencyAnswer: "Various by routes",
    earthquake_BrakeSystem: "Automatic braking system during earthquakes",
    flood_WarningSystem: "Flood warning system",
    rail_MonitoringSystem: "Rail monitoring systems",
    emergency_AutoBrakeSystem: "Emergency automatic braking system",
    incline_ControlSystem: "Incline control system",
    train_ControlSystem: "Train control system",
    collision_PreventionSystem: "Collision prevention system",
    general_MonitoringSystem: "Monitoring systems",
    train_AutoControlSystem: "Train automatic control system",
    individual_Screens: "Individual screens",
    wireless_Internet: "wireless internet",
    air_Conditioning: "air conditioning",
    quiet_Salons: "quiet lounges",
    bar_Service: "bar",
    restaurant_Service: "restaurant",
    power_Outlets: "power outlets",
    quiet_Wagons: "quiet carriages",
    aboutUS_description: "We are glad you are in this domain!",
    welcome_Message: "Welcome to our page – your place for everything related to Bulgarian and international trains! This site is created with one main goal: to provide railway enthusiasts with information about various models of locomotives, carriages, and their specifications. Whether you are a long-time fan of rail transport or just curious about the world of trains, here you will find data on all types of train compositions that run on Bulgarian lines, as well as information about their technical specifications, history, and modernizations.",
    site_Support: "Our site is supported by Bulgarian State Railway Builders (BDR) – an organization with a long-standing tradition in the development and maintenance of railway technology in our country. Thanks to their help, you will find not only information about classic Bulgarian models but also about new technologies and innovations implemented in modern trains. From iconic diesel locomotives to modern electric trains, we strive to showcase the diversity and development of rail transport in Bulgaria.",
    goal_Message: "Our goal is simple: to gather in one place the information about all types of trains in Bulgaria – their origins, specifications, and significance. Here you will be able to explore details about various train series, propulsion systems, speed characteristics, and other technical details that make each train unique. We hope our database will be useful not only for railway enthusiasts but also for those who want to learn more about the development of this industry in our country.",
    thank_You: "Thank you for visiting our site, and we hope you find inspiration and knowledge in the world of Bulgarian trains!🤍💚❤️",
    community_Message: "We are a community of enthusiasts who share a common passion for railways and everything related to them. Our goal is to provide up-to-date information on trains, railway routes, and infrastructure in Bulgaria. If you have questions, suggestions, or just want to share your experience, please feel free to contact us!",
    connection_Importance: "It is important for us to build a connection with our visitors and participants in the community. If you want information about a specific train or route, or need help navigating the site, our team is available to assist you. You can reach us through the contact form available on our page. We promise to respond to your inquiries as soon as possible to provide the necessary information and support.",
    participation_Invitation: "Additionally, if you are interested in participating in our community, please do not hesitate to write to us. We welcome new members who want to share their knowledge and experience. Participating in our community will not only enrich your own knowledge of trains but will also help other enthusiasts learn more about this exciting topic. Every opinion is important to us, and we believe that together we can create a truly special platform for all railway lovers.",
    thank_You_Message: "Thank you for choosing our site for your journey into the world of trains! We look forward to hearing from you and sharing this incredible passion with all of you.",
    kmH: " km/h",
    km: "km",
    France: "France",
    Spain: "Spain",
    Germany: "Germany",
    China: "China",     
  },
  bg: {
    title: "Запалете страстта си 🔥 към железниците 🚆",
    topBar: "Добре дошли в сайта на Българските държавни влакостроители АД. Чувствайте се като у дома.",
    home: "Начало",
    trains: "Влакове",
    aboutUS: "За нас",
    contacts: "Контакти",
    TheBestTrains: "Най-най-яките влакове",
    moreInfo: "Повече информация",
    seeMoreTrains: "РАЗГЛЕДАЙ ОЩЕ ЯКИ ВЛАКОВЕ",
    TrainsForFuture: "Влакове за бъдещето",
    trainPositives_title: "Позитивите на влаковите композиции",
    trainPositives_description: "Влаковете имат страшно много позитиви, които можем открито да забележим и на нашите ширини. Приятелствата, направени във влака понякога са вечни с тези закъснения. Част от хубавите неща са тук:",
    trainPositive_First_title: "По-малко вредни емисии",
    trainPositive_First_description: "Влаковете произвеждат значително по-малко вредни емисии на километър пътник, в сравнение с автомобилите и самолетите. Това ги прави по-екологичен избор.",
    trainPositive_Second_title: "По-малко задръствания",
    trainPositive_Second_description: "Влаковете не са засегнати от задръстванията по пътищата и могат да осигурят по-предсказуемо време за пътуване. Ама все пак пътуването с БДЖ е непредсказуемо.",
    trainPositive_Third_title: "По-добро преживяване",
    trainPositive_Third_description: "Пътуването с влак може да бъде по-социално преживяване, тъй като позволява на пътниците да се срещнат и да общуват с други хора.",
    trainPositive_Fourth_title: "По-малко стрес",
    trainPositive_Fourth_description: "Пътуването с влак може да бъде по-малко стресиращо, тъй като не изисква шофиране или паркиране.",
    footerText: "Построени с БЪЛГАРСКА любов и ръка 🤍💚❤️",
    allRightsReserved: "Всички права запазени 2024",
    Shinkansen_shortDescription: "Японски високоскоростен влак, известен с комфорта и тихата си работа.",
    TGVDuplex_shortDescriptioon: "Френски високоскоростен влак с двойна палуба, предлагащ голям капацитет на пътниците.",
    ICEFour_shortDescriptioon: "Немски високоскоростна влак, отличаващ се с модерен дизайн и висока степен на автоматизация.",
    FuxingHao_shortDescriptioon: "Китайски високоскоростен влак, един от най-бързите в света.",
    Eurostar_shortDescriptioon: "Високоскоростен влак, свързващ Великобритания с континентална Европа.",
    Velaro_shortDescriptioon: "Семейство високоскоростни влакове, използвани в различни страни по света.",
    AGV575_shortDescriptioon: "Италиански високоскоростна влак, известен с аеродинамичния си дизайн.",
    Harmony_shortDescriptioon: "Китайски високоскоростна влак, използван за вътрешни линии.",
    Talgo350_shortDescriptioon: "Испански високоскоростна влак, известен с лекото си тегло и ниската си консумация на енергия.",
    train: "Влак ",
    driveType: "Задвижване",
    power: "Мощност",
    maxSpeed: "MAX скорост",
    length: "Дължина",
    trackwidth: "Коловоз",
    carCount: "Вагони",
    weight: "Тегло",
    capacity: "Капацитет",
    acceleration: "Ускорение",
    brakingDistance: "Спирачен път",
    serviceFrequency: "Обслужване",
    yearOfManufacture: "Година",
    technicalSpecifications: "Техническии спецификации",
    Comfort: "Комфорт",
    Safety: "Безопасност",
    ComfortLong: "Възможности за комфорт",
    SafetyLong: "Възможности за Безопасност",
    from: " от ",
    milimeter: "мм",
    kW: "kW",
    tonCar: "т/вагон",
    electricity_changing: "Променлив ток",
    electricity_full: "Постоянен ток",
    mCar: "м/вагон",
    service_FrequencyAnswer: "Различни по линии",
    earthquake_BrakeSystem: "Автоматична спирачна система при земетресения",
    flood_WarningSystem: "система за предупреждение за наводнения",
    rail_MonitoringSystem: "системи за наблюдение на релсите",
    emergency_AutoBrakeSystem: "Система за автоматично спиране при авария",
    incline_ControlSystem: "система за контрол на наклона",
    train_ControlSystem: "Система за контрол на влака",
    collision_PreventionSystem: "система за предотвратяване на сблъсъци",
    general_MonitoringSystem: "Системи за наблюдение",
    train_AutoControlSystem: "автоматично управление на влака",
    individual_Screens: "Индивидуални екрани",
    wireless_Internet: "безжичен интернет",
    air_Conditioning: "климатизация",
    quiet_Salons: "тихи салони",
    bar_Service: "бар",
    restaurant_Service: "ресторант",
    power_Outlets: "контактни букси",
    quiet_Wagons: "тихи вагони",
    aboutUS_description: "Радваме се, че сте в този домейн!",
    welcome_Message: "Добре дошли на нашата страница – вашето място за всичко, свързано с българските и международните влакове! Този сайт е създаден с една основна цел: да предоставим на любителите на влаковете информация за различни модели локомотиви, вагони и техните спецификации. Независимо дали сте от дългогодишните фенове на железопътния транспорт или просто сте любопитни за света на влаковете, тук ще намерите данни за всякакви влакови композиции, които се движат из българските линии, както и информация за техните технически характеристики, история и модернизации.",
    site_Support: "Сайтът ни е подкрепен от Български държавни влакостроители (БДВС) – организация, която има дългогодишни традиции в разработката и поддръжката на железопътната техника у нас. Благодарение на тяхната помощ, тук ще намерите не само информация за класическите български модели, но и за новите технологии и иновации, внедрени в съвременните влакове. От емблематичните дизелови локомотиви до модерните електрически влакове, ние се стремим да покажем разнообразието и развитието на железопътния транспорт в България.",
    goal_Message: "Нашата цел е проста: да съберем на едно място информацията за всички видове влакове в България – техния произход, спецификации и значимост. Тук ще можете да разгледате подробности за различни серии влакове, задвижващи системи, скоростни характеристики и други технически детайли, които правят всеки влак уникален. Надяваме се нашата база данни да бъде полезна не само за любителите на железниците, но и за тези, които искат да научат повече за развитието на тази индустрия в страната ни.",
    thank_You: "Благодарим ви, че посетихте нашия сайт, и се надяваме да откриете вдъхновение и знание в света на българските влакове!🤍💚❤️",
    community_Message: "Ние сме общност от ентусиасти, които споделят общата си страст към железниците и всичко свързано с тях. Нашата цел е да предоставим актуална информация за влаковете, железопътните маршрути и инфраструктурата в България. Ако имате въпроси, предложения или просто искате да споделите своя опит, не се колебайте да се свържете с нас!",
    connection_Importance: "За нас е важно да изградим връзка с нашите посетители и участници в общността. Ако желаете да получите информация за определен влак или маршрут, или имате нужда от помощ с навигацията в сайта, нашият екип е на разположение да ви помогне. Можете да се свържете с нас чрез формуляра за контакт, наличен на нашата страница. Обещаваме да отговорим на вашите запитвания в най-кратък срок, за да осигурим необходимата информация и подкрепа.",
    participation_Invitation: "Допълнително, ако сте заинтересовани от участие в нашата общност, моля, не се колебайте да ни пишете. Ние приветстваме нови членове, които искат да споделят своите знания и опит. Участието в нашата общност не само ще обогати вашето собствено познание за влаковете, но и ще помогне на други любители да научат повече за тази вълнуваща тема. Всяко ваше мнение е важно за нас, и ние вярваме, че заедно можем да създадем една наистина специална платформа за всички почитатели на железниците.",
    thank_You_Message: "Благодарим ви, че избрахте нашия сайт за вашето пътешествие в света на влаковете! Очакваме с нетърпение да чуем от вас и да споделим тази невероятна страст с всички вас.",
    kmH: " км/ч",
    km: "км",
    France: "Франция",
    Spain: "Испания",
    Germany: "Германия",
    China: "Китай",

  }

};

// Функция за смяна на езика
function setLanguage(language) {
  const elements = document.querySelectorAll("[data-lang-key]");

  elements.forEach(element => {
    const key = element.getAttribute("data-lang-key");
    element.textContent = translations[language][key];
  });

  // Съхраняване на избора в localStorage
  localStorage.setItem("selectedLanguage", language);
}

// Сваляне на избора от localStorage при зареждане на страницата
document.addEventListener("DOMContentLoaded", () => {
  const savedLanguage = localStorage.getItem("selectedLanguage") || "en";
  document.getElementById("languageSwitcher").value = savedLanguage;
  setLanguage(savedLanguage);
});

// Промяна на езика при избор от падащото меню
document.getElementById("languageSwitcher").addEventListener("change", (event) => {
  setLanguage(event.target.value);
});

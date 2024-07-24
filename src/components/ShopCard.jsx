function ShopCard() {
  const elements = [
    {
      img: "https://www.apple.com/v/airpods/v/images/overview/hero_startframe__f6btrn4bhpyu_small.jpg",
      title: "AirPods Pro",
      subtitle: "Seconda generazione",
      price: "€ 279",
    },
    {
      img: "https://www.apple.com/v/airpods/v/images/overview/airpods_3rd_gen__dhy5bknhvtqq_small.jpg",
      title: "AirPods",
      subtitle: "Terza generazione",
      price: "A partire da € 199",
    },
    {
      img: "https://www.apple.com/v/airpods/v/images/chapternav/airpods_3gen_light__6r7zooyk4lua_large.svg",
      title: "AirPods",
      subtitle: "Seconda generazione",
      price: "A partire da € 149",
    },
    {
      img: "https://www.apple.com/v/airpods/v/images/overview/airpods_max__f265q4g4ddym_small.png",
      title: "AirPods Max",
      subtitle: "",
      price: "€ 579",
    },
  ];

  return (
    <div className="m-8 p-3 min-h-[529px] md:min-h-[639px] lg:min-h-[820px] rounded-lg bg-[url('https://www.apple.com/v/airpods/v/images/overview/hero_startframe__f6btrn4bhpyu_small.jpg')] bg-no-repeat bg-cover">
      <div className="text-white flex flex-col items-center">
        <h2 className="text-6xl font-medium">AirPods Pro</h2>
        <p className="text-xl font-normal">Seconda generazione</p>
        <span>€ 999</span>

      </div>
    </div>
  );
}

export default ShopCard;

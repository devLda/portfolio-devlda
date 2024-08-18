import Avatar from "../../assets/avatar/avatar.jpg";

// Gom chung các component có cùng dạng về 1 Array để dễ maintance
const aboutCareer = [
  {
    quantity: "1.5",
    describe_1: "Năm",
    describe_2: "kinh nghiệm",
  },
  {
    quantity: "09",
    describe_1: "Kỹ năng",
    describe_2: "công nghệ",
  },
  {
    quantity: "02",
    describe_1: "Dự án",
    describe_2: "thực tế",
  },
  {
    quantity: "03",
    describe_1: "Dự án",
    describe_2: "cá nhân",
  },
];

const Home = () => {
  return (
    <div className="w-full h-full grid grid-rows-4">
      <div className="row-span-3 grid grid-cols-3">
        <div className="col-span-2 flex flex-col justify-center gap-6">
          <h1 className="text-6xl font-primaryNomal tracking-[0.15em] text-white">
            Xin chào,Tôi là
          </h1>
          <h1 className="text-8xl font-primaryNomal tracking-widest text-blue-500">
            Le Duc Anh
          </h1>
          <h3 className="w-5/6 text-2xl font-primaryNomal tracking-[0.15em] text-white">
            "Cống hiến giá trị - Nhận lại thành công"
          </h3>
          <h3 className="w-5/6 text-2xl font-primaryNomal tracking-[0.15em] text-white">
            Trau dồi kiến thức mới và thực hành thành thạo luôn là ưu tiên của
            tôi
          </h3>
        </div>
        <div className="col-span-1 flex justify-center items-center">
          <div className="p-4">
            <img src={Avatar} alt="avatar" />
          </div>
        </div>
      </div>

      <div className="row-span-1 flex items-center justify-between">
        {aboutCareer.map((item, index) => {
          return (
            <div key={index} className="flex gap-4">
              <h3 className="text-5xl text-center text-blue-500 tracking-widest">
                {item.quantity}
              </h3>
              <div className="flex flex-col">
                <p className="text-base text-white tracking-widest">
                  {item.describe_1}
                </p>
                <p className="text-base text-white tracking-widest">
                  {item.describe_2}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;

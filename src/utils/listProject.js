import avatar from "../assets/avatar/avatar.jpg";
const project = [
  {
    project: "Portfolio cá nhân",
    time: "Tháng 08/2024 - Hiện tại",
    image: "../" + avatar,
    state: "done",
    describe: [
      "Website giới thiệu sơ lược các thông tin như kinh nghiệm làm việc, các project đã làm được và các thông tin liên quan.",
      "Đặc điểm nổi bật là web sử dụng nhiều animation và responsive tương thích trên rất nhiều thiết bị từ mobile, tablet đến laptop",
    ],
    mainFunction: [
      "Hiển thị các thông tin cá nhân",
      "Học thêm kinh nghiệm làm web bằng MUI và Farmer Motion"
    ],
    technologies: ["ReactJs", "Tailwindcss", "Material UI", "Farmer Motion"],
    link: [
      {
        label: "Live",
        url: "",
      },
      {
        label: "Source",
        url: "",
      },
    ],
  },
  {
    project: "Website Quản lý khách sạn Anh Oct",
    time: "Tháng 03/2023 - Tháng 06/2023",
    state: "done",
    describe:[
      "Đây là project tôi code cho việc bảo vệ đồ án tốt nghiệp.",
      "Web đầy đủ cả FE và BE,phía client có thể đặt phòng và mô phỏng thanh toán ( Stripe ). Phía admin có các chức năng quản lý khách sạn và thống kê"],
    mainFunction: [
      "Client: Đăng ký xác thực qua mail, Đăng nhập, Đặt phòng, Thanh toán, Yêu cầu thêm dịch vụ khi sử dụng phòng",
      "Admin: Quản lý các thông tin về phòng, hóa đơn, đơn đặt, chức năng báo cáo thống kê",
    ],
    technologies: ["ReactJs", "Tailwindcss", "Material UI", "Farmer Motion"],
    link: [
      {
        label: "Live",
        url: "",
      },
      {
        label: "Source",
        url: "",
      },
    ],
  },
];

export default project;

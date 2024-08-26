const timelineExp = [
  {
    title: "Công ty cổ phần hệ thống 2B",
    time: "04/ 2023 - Hiện tại",
    isLastest: true,
    describe: "",
    children: [
      {
        project:
          "Ứng dụng Web Quản lý điều hành công tác giáo dục hệ cao đẳng, đại học",
        time: "Tháng 08/2023 - Hiện tại",
        state: "processing",
        teamsize:
          "6 thành viên ( 3 frontend, 1 backend, 1 designer, 1 tester )",
        describe:
          "Ứng dụng web giúp cơ quan quản lý các thông tin về công tác giáo dục như các đợt tuyển sinh, đợt học, các nhân sự trong và ngoài trường, ...",
        responsibility: [
          "Tham gia quá trình lên ý tưởng giao diện, luồng xử lý, chức năng trong module cho product.",
          "Xây dựng giao diện, chức năng của các module theo thiết kế trong figma",
          "Xây dựng các component tái sử dụng trong hệ thống.",
          "Trao đổi, thống nhất ý kiến với designer về UI, UX giúp mang lại trải nghiệm tốt nhất cho người dùng.",
          "Triển khai sản phẩm lên mạng, fix bug tester log trên redmine",
        ],
        technologies: [
          "Architecture: Microservices",
          "Frontend: Angular, Angular Material, TailwindCss, Typescript, ...",
          "Backend: ASP.Net, MS SQL Server.",
        ],
      },
      {
        project:
          "Ứng dụng web Quản lý Đề xuất Đề tài Nghiên cứu khoa học hệ Đại học.",
        time: "Tháng 04/2023 - Tháng 07/2023",
        state: "done",
        teamsize:
          "5 thành viên ( 2 frontend, 1 backend, 1 designer, 1 tester )",
        describe:
          "Ứng dụng web giúp các cơ quan theo dõi, quản lý quá trình thực hiện các đề tài từ lúc bắt đầu gửi đề xuất đến khi nghiệm thu hoàn thành và các thông tin liên quan",
        responsibility: [
          "Thay đổi giao diện cũ theo thiết kế mới của figma",
          "Tối ưu lại code cũ (sử dụng nhiều hàm thừa, logic phức tạp, call api nhiều lần) giúp thời gian load giữa các trang từ 6-7s giảm xuống 2-3s. ",
        ],
        technologies: [
          "Architecture: Microservices",
          "Frontend: ReactJs 16, Ant Design, Bootstrap, Redux, ...",
          "Backend: ASP.Net, MS SQL Server.",
        ],
      },
    ],
  },
];

export default timelineExp;

- Trả lời các câu hỏi:

* Xác định cấu trúc Project

Chạy lệnh

- npm run dev --host
  chạy thêm network để các thiết bị cùng network có thể truy cập

- "build": "vite build --base=./" (cách khác là vào file vite.config.js)
  khi build sẽ tự động thêm đường dẫn để hạn chế lỗi tìm thấy đường dẫn (404)

  MUI
- Tối ưu cách import chuẩn Component của MUI
* import 2 cấp hoặc sử dụng plugin Babel

- Khi nào sử dụng 'style' và 'sx' prop
* 'style' khi render code sẽ trở thành css inline
* 'sx' prop khi render code sẽ tạo thành thẻ style
* 'sx' prop có thể dùng kiểu 'nested' còn 'style' thì ko
* lấy màu từ theme thì chỉ 'sx' prop làm được
* chỉ 'sx' prop mới responsive được thiết bị dạng shorthand
* 'sx' prop truy cập phần tử con
* 'sx' prop hỗ trợ nhiều kiểu css selector

- Phân biệt style, styled, sx prox, theme
* style: css inline thuần
* styled: style cho component được sử dụng nhiều
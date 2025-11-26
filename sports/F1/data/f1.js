const playerTitles = {
  "Lewis Hamilton": `Lewis Hamilton là tay đua sở hữu kỷ lục 7 chức vô địch thế giới (World Drivers’ Championship), ngang bằng Michael Schumacher, và là một trong những biểu tượng vĩ đại nhất lịch sử F1.

🏁 Chức vô địch thế giới (7 lần)
- 2008 (McLaren).
- 2014, 2015, 2017, 2018, 2019, 2020 (Mercedes).

🏎️ Các đội từng thi đấu
- McLaren: 2007–2012.
- Mercedes: 2013–nay.

✨ Ý nghĩa
- Hamilton định nghĩa chuẩn mực mới về tính ổn định và khả năng thích ứng qua nhiều kỷ nguyên xe F1.`,

  // --------------------------------------------------------------------

  "Michael Schumacher": `Michael Schumacher giành 7 chức vô địch thế giới, tạo nên chuẩn mực kỷ lục kéo dài hàng thập kỷ và đặt nền móng cho sự thống trị của Ferrari đầu những năm 2000.

🏁 Chức vô địch thế giới (7 lần)
- 1994, 1995 (Benetton).
- 2000, 2001, 2002, 2003, 2004 (Ferrari).

🏎️ Các đội từng thi đấu
- Jordan, Benetton, Ferrari, Mercedes.

✨ Ý nghĩa
- Schumacher là biểu tượng của tốc độ tuyệt đối, tính kỷ luật và tinh thần làm việc nhóm ở cấp độ cao nhất.`,

  // --------------------------------------------------------------------

  "Sebastian Vettel": `Sebastian Vettel là nhà vô địch thế giới 4 lần liên tiếp (2010–2013) và là nhà vô địch trẻ nhất lịch sử khi đăng quang năm 2010 ở tuổi 23 và 134 ngày.

🏁 Chức vô địch thế giới (4 lần)
- 2010, 2011, 2012, 2013 (Red Bull).

🏎️ Các đội từng thi đấu
- BMW Sauber, Toro Rosso, Red Bull, Ferrari, Aston Martin.

✨ Ý nghĩa
- Vettel gắn liền với kỷ nguyên khí động học cực đỉnh của Red Bull, tiêu chuẩn hóa phong cách lái chính xác và quản lý cuộc đua thông minh.`,

  // --------------------------------------------------------------------

  "Max Verstappen": `Max Verstappen là đương kim vô địch thế giới, vô địch 4 mùa liên tiếp và xác lập chuẩn mực thống trị mới trong kỷ nguyên hiệu suất cao của Red Bull.

🏁 Chức vô địch thế giới (4 lần)
- 2021, 2022, 2023, 2024 (Red Bull).

🏎️ Các đội từng thi đấu
- Toro Rosso (nay là RB), Red Bull Racing.

✨ Ý nghĩa
- Verstappen kết hợp bản năng tấn công với kỹ thuật tối ưu hóa lốp và chiến thuật, tạo nên một thời kỳ áp đảo hiện đại.`,

  // --------------------------------------------------------------------

  "Fernando Alonso": `Fernando Alonso là nhà vô địch thế giới 2 lần, người phá vỡ chuỗi thống trị của Schumacher, và được nể trọng bởi khả năng đọc cuộc đua, thích ứng kỹ thuật và bền bỉ.

🏁 Chức vô địch thế giới (2 lần)
- 2005, 2006 (Renault).

🏎️ Các đội từng thi đấu
- Minardi, Renault, McLaren, Ferrari, Alpine, Aston Martin.

✨ Ý nghĩa
- Alonso tượng trưng cho trí tuệ chiến thuật và sức cạnh tranh không ngừng, luôn tìm cách tối đa hóa chiếc xe trong mọi bối cảnh.`,

  // --------------------------------------------------------------------

  "Ayrton Senna": `Ayrton Senna là huyền thoại với 3 chức vô địch thế giới, nổi tiếng bởi tốc độ một vòng (qualifying), kỹ năng trong điều kiện mưa và tinh thần chiến đấu bất khuất.

🏁 Chức vô địch thế giới (3 lần)
- 1988, 1990, 1991 (McLaren).

🏎️ Các đội từng thi đấu
- Toleman, Lotus, McLaren, Williams.

✨ Ý nghĩa
- Senna là chuẩn mực về sự dũng cảm và độ tập trung, để lại di sản vượt quá con số danh hiệu trên đường đua.`,

  // --------------------------------------------------------------------

  "Alain Prost": `Alain Prost, biệt danh “Giáo sư”, là nhà vô địch thế giới 4 lần, nổi bật bởi phong cách lái mượt mà và tư duy chiến lược sắc bén.

🏁 Chức vô địch thế giới (4 lần)
- 1985, 1986, 1989 (McLaren).
- 1993 (Williams).

🏎️ Các đội từng thi đấu
- McLaren, Ferrari, Williams, Renault.

✨ Ý nghĩa
- Prost định hình khái niệm “đua bằng trí” trong F1, tối ưu hóa điểm số và rủi ro theo cả mùa giải.`,

  // --------------------------------------------------------------------

  "Niki Lauda": `Niki Lauda là nhà vô địch thế giới 3 lần, nổi tiếng với màn trở lại phi thường sau tai nạn năm 1976, biểu tượng của nghị lực và kỹ thuật tối ưu chiếc xe.

🏁 Chức vô địch thế giới (3 lần)
- 1975, 1977 (Ferrari).
- 1984 (McLaren).

🏎️ Các đội từng thi đấu
- March, BRM, Ferrari, Brabham, McLaren.

✨ Ý nghĩa
- Lauda chứng minh sức mạnh của ý chí và tư duy kỹ thuật có thể thay đổi cục diện cả sự nghiệp lẫn đội đua.`,

  // --------------------------------------------------------------------

  "Kimi Räikkönen": `Kimi Räikkönen là nhà vô địch thế giới 2007, biểu tượng của sự điềm tĩnh “Iceman” và khả năng lái sạch sẽ, hiệu quả.

🏁 Chức vô địch thế giới (1 lần)
- 2007 (Ferrari).

🏎️ Các đội từng thi đấu
- Sauber, McLaren, Ferrari, Lotus, Alfa Romeo.

✨ Ý nghĩa
- Kimi thể hiện một phong cách đua tối giản: ít lời, nhiều tốc độ, luôn đáng tin cậy trong mọi điều kiện.`,

  // --------------------------------------------------------------------

  "Nigel Mansell": `Nigel Mansell là nhà vô địch thế giới 1992, nổi tiếng với phong cách tấn công mạnh mẽ và sự quả cảm trên đường đua.

🏁 Chức vô địch thế giới (1 lần)
- 1992 (Williams).

🏎️ Các đội từng thi đấu
- Lotus, Williams, Ferrari, McLaren.

✨ Ý nghĩa
- Mansell đại diện cho thứ cảm xúc nguyên bản của F1: luôn bùng nổ, luôn vượt giới hạn để giành chiến thắng.`,

  // Bạn có thể thêm nhiều tay đua khác theo định dạng chuỗi như trên
};
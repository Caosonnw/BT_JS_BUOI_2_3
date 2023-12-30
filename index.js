// Bài 1
// Mô hình 3 khối: 
/** Đầu vào: Nhập số ngày làm:
 * 
 * Các bước xử lí: 
 * Lương 1 ngày: 100.000
 * Tiền lương = lương 1 ngày * số ngày làm
 * 
 * Đầu ra: Tổng tiền lương nhân viên
 */
document.getElementById('btn_tinhLuong').onclick = function() {
  var soNgayLam = document.getElementById('txt_soNgayLam').value * 1;
  var luong1Ngay = 100000;
  var tienLuong = luong1Ngay * soNgayLam;

  document.getElementById('txt_tienLuong').innerHTML = `Tổng tiền lương: ${tienLuong.toLocaleString({
    style: 'currency',
    currency: 'VND',
  })} VNĐ`;
}

// Bài 2
// Mô hình 3 khối:
/** Đầu vào: Nhập 5 số từ người dùng
 * 
 * Các bước xử lí: 
 * Tính trung bình của 5 số = tổng của 5 số / 5
 * 
 * Đầu ra: Trung bình của 5 số
 */
document.getElementById('btn_tinhTrungBinh').onclick = function() {
  var soThuNhat = document.getElementById('txt_soThuNhat').value * 1;
  var soThuHai = document.getElementById('txt_soThuHai').value * 1;
  var soThuBa = document.getElementById('txt_soThuBa').value * 1;
  var soThuBon = document.getElementById('txt_soThuBon').value * 1;
  var soThuNam = document.getElementById('txt_soThuNam').value * 1;

  var trungBinh = (soThuNhat + soThuHai + soThuBa + soThuBon + soThuNam) / 5;

  document.getElementById('txt_trungBinh').innerHTML = `Trung bình của 5 số là: ${trungBinh}`;
}

// Bài 3
// Mô hình 3 khối 
/** Đầu vào: Nhập số tiền muốn quy đổi (USD)
 * 
 * Các bước xử lí:
 * tienUSD = 23.500 VND
 * tienVND = tienUSD * số tiền người dùng nhập vào
 * 
 * Đầu ra: Tiền USD sau khi quy đổi sang VND
 */
document.getElementById('btn_quyDoiTien').onclick = function() {
  var tienQuyDoi = document.getElementById('txt_quyDoiTien').value * 1;
  var tienUSD = 23500;
  var tienVND = tienUSD * tienQuyDoi;

  document.getElementById('txt_ketQuaQuyDoi').innerHTML = `Tiền sau khi quy đổi: ${tienVND.toLocaleString({
    style: 'currency',
    currency: 'VND',
  })} VNĐ`;
}

// Bài 4 
// Mô hình 3 khối: 
/** Đầu vào: Nhập chiều dài và chiều rộng HCN
 * 
 * Các bước xữ lí:
 * Diện tích HCN = chiều dài * chiều rộng
 * Chu vi HCN = (chiều dài + chiều rộng) * 2
 * 
 * Đầu ra: Diện tích, chu vi hình chữ nhật
 */
document.getElementById('btn_tinhHCN').onclick = function() {
  var chieuDai = document.getElementById('txt_chieuDai').value * 1;
  var chieuRong = document.getElementById('txt_chieuRong').value * 1;
  var dienTich = chieuDai * chieuRong;
  var chuVi = (chieuDai + chieuRong) * 2;

  document.getElementById('txt_ketQuaHCN').innerHTML = `Diện tích HCN: ${dienTich} cm<sup>2</sup> <br> Chu vi HCN: ${chuVi} cm`;
}

// Bài 5 
// Mô hình 3 khối: 
/** Đầu vào: Nhập số có 2 chữ số
 * 
 * Các bước xử lí:
 * soHangDV = so % 10;
 * soHangChuc = so / 10;
 * Tổng 2 ký số = soHangDV + soHangChuc
 * 
 * Đầu ra: Tổng của 2 ký số
 */
document.getElementById('btn_tinhTong2KySo').onclick = function() {
  var so = document.getElementById('txt_so2ChuSo').value * 1;
  var soHangDV = so % 10;
  var soHangChuc = Math.floor(so / 10);
  var Tong2KySo = soHangDV + soHangChuc;

  document.getElementById('txt_ketQuaTong').innerHTML = `Tổng 2 ký số là: ${Tong2KySo}`;
}

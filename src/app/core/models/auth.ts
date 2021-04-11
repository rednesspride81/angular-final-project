export interface SignupParams {
  taiKhoan: string;
  matKhau: string;
  email: string;
  soDt: string;
  hoTen: string;
}

export interface SigninParams {
  taiKhoan: string;
  matKhau: string;
}

export type SignupResult = {
  maNhom: string;
  maLoaiNguoiDung: string;
} & SignupParams;

export interface SigninResult {
  taiKhoan: string;
  matKhau: string;
  email: string;
  soDT: string;
  hoTen: string;
  maNhom: string;
  maLoaiNguoiDung: string;
  accessToken: string;
}

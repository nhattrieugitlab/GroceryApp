export type Province = {
  idProvince: string;
  name: string;
};
export type District = {
  idProvince: string;
  idDistrict: string;
  name: string;
};
export type Commune = {
  idDistrict: string;
  idCommune: string;
  name: string;
};
export type Address = {
  ProvinceName: string;
  DistricName: string;
  CommnueName: string;
  DetailAddress: string;
};

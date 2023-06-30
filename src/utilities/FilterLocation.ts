import data from '../constant/location.json';
import {Commune, District} from '../datatypes/LocationDataTypes';
export const getIdProvince = (provinceName: string) => {
  const province = data.province.filter(province => {
    return province.name === provinceName;
  });
  return province[0].idProvince;
};

// lay nhung huyen co trong thanh pho dua vao id cua thanh pho
export const getDistrictByProvinceId = (provinceId: string): District[] => {
  const districts = data.district.filter(district => {
    return district.idProvince === provinceId;
  });
  return districts;
};
// lay nhung huyen co trong thanh pho dua vao id cua thanh pho
export const getHNDistrict = (): District[] => {
  const districts = data.district.filter(district => {
    return district.idProvince === '01';
  });
  return districts;
};

export const getCommuneByDistrictId = (districtId: string): Commune[] => {
  return data.commune.filter(commune => {
    return commune.idDistrict === districtId;
  });
};

export const getIdDistrict = (disStictName: string) => {
  const district = data.district.filter(province => {
    return province.name === disStictName;
  });
  return district[0].idDistrict;
};

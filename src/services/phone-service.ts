import axios from 'axios';
import Config from 'react-native-config';

export const sendOtpViaWhatsapp = async (phone: string) => {
  const body = {
    to: phone,
    channel: 'whatsapp',
    locale: 'en',
  };
  console.log(body);
  const {data} = await axios.post(`${Config.BASE_TWILIO_URL}/start-verify`, body);
  return data;
};

export const verifyOtp = async (phone: string, code: string) => {
  const body = {
    to: phone,
    code: 'whatsapp',
  };

  const {data} = await axios.post(`${Config.BASE_TWILIO_URL}/check-verify`, {
    body,
  });
  return data;
};

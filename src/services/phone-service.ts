import axios from 'axios';
import Config from 'react-native-config';
export const sendSmsVerification = async (phone: string) => {
  try {
    const body = {
      to: phone,
      channel: 'sms',
    };

    const {data} = await axios.post(`${Config.BASE_TWILIO_URL}/verify`, {body});
    return data;
  } catch (error) {
    console.error(error);
    return false;
  }
};

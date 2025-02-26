import axios from 'axios';
import { AsyncStorage } from '@react-native-async-storage/async-storage';

const axiosClient = axios.create({
        baseURL: '/',
        headers: {
            'Content-Type': 'application/json'
        },
        timeout: 5000
})

axiosClient.interceptors.request.use(
    async function(request) {
        try {
                // tiến hành lấy Token từ Async
        const token = await AsyncStorage.getItem("access_token");
        if(token) {
            request.headers.Authorization = `Bearer ${token}`;
         }
        } catch (error) {
                console.log("Lỗi xử lý "+error);
        }
        return request;
    },
    (error) => {
           console.error("Request error : "+error);
          return Promise.reject(error);
    }
)
axiosClient.interceptors.response.use(
    (response) => response.data,
    (error) => {
        if (error.response) {
            const { status, data } = error.response;
            const message = data?.message || "Có lỗi xảy ra.";

            // Xử lý các mã lỗi phổ biến
            switch (status) {
                case 404:
                    alert("Lỗi 404: Không tìm thấy tài nguyên.");
                    break;
                case 401:
                    alert(
                        "Lỗi 401: Thiếu quyền truy cập. Hãy kiểm tra lại token hoặc đăng nhập lại."
                    );
                    break;
                case 400:
                    alert("Lỗi 400: Yêu cầu không hợp lệ.");
                    break;
                default:
                    alert(`Lỗi ${status}: ${message}`);
            }
        } else {
            console.error("No response from server:", error);
        }
        return Promise.reject(error);
    }
)
export default axiosClient;
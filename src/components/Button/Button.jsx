import PropTypes from 'prop-types';
import { ChevronRight } from 'lucide-react';


const Button = ({ text, link ,type}) => {
  const handleClick = () => {
    switch(type){
      case 'DEMO':
        userLogin()
        break;
      default:
        window.open(link, "_blank", "noopener noreferrer");
        break;
    }
  };

  function userLogin(){
    let LoginURL = "https://cloud.weyutech.com/DCMATE_MEMS_API/WeyuLoginV2/Weyu_Login";
    let body  = {
      'UID': "GUEST",
      'PWD': "GUEST"
    };

    fetch(LoginURL, {
        method: 'POST', // 请求方式是POST
        headers: {
          'Content-Type': 'application/json', // 设置请求头的Content-Type为JSON
        },
        body: JSON.stringify(body) // 将请求参数放在请求的body中，需要将对象转换为JSON字符串
      })
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Network response was not ok');
      }
    })
    .then(async result => {

      if(result.result){
          // 儲存 帳號
          localStorage.setItem('DCMATE-MEMS_BI_accountNo', "GUEST");
          // 儲存 用戶名
          localStorage.setItem('DCMATE-MEMS_BI_userName', result.User_Name);
          // 儲存 第一次的 TokenKey
          localStorage.setItem('DCMATE-MEMS_BI_TokenKey', result.TokenKey);
          // 儲存 Refresh_tokenkey *只存這一次
          localStorage.setItem('DCMATE-MEMS_BI_Refresh_TokenKey', result.Refresh_TokenKey);
      }
      else{
        alert('Account or password input failed.')
      }
    })
    .catch(error => {
      // 处理错误
      console.error('An error occurred:', error);
    })
    .then(()=>{
      window.open(link, "_blank");
    });
  }
  

  return (
    <button className="font-bold group flex items-center gap-2 bg-blue-400/90 hover:bg-blue-300 text-white px-6 py-3 rounded-full transition-colors" onClick={handleClick}>
        {text}
        <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default Button;
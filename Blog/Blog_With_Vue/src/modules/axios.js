/*
  axiosGet이라는 함수 정의 http를 포함한 완전한 URL을 보내며 기번 사버로 정의된 
  호스트 네임과 포트만으로 구성된 localhost8000으로 요청을 보낼 때는 뒤에 URL만 써도 됨
  각 매개 변수의 역할
  URL : HTTP request를 보내는 URL
  onSuccess : HTTP Request가 성공하고 돌려받은 json의 rsp 속성이 'ok'일 때 반환
  onFailed : 성공이 아닐 떼 return code와 함께 호출 
*/

import {axios} from '@bundled-es-modules/axios'

export default function(){
  const BASE_URL = 'http://localhost8000'

  const axiosGet = (URL, onSuccess = null, omFailed = null)=> {
    const final_URL = URL.startWith('http') ? URL : BASE_URL + URL
    axios.get(final_URL).then((resp)=>{
      if(resp.status === 200 && resp.data.rsp === 'ok'){
        if(onSuccess){
          onSuccess(resp.data)
        }
      } else {
        if(onFailed) {
          onFailed(resp.data)
        }
      }
    }) 
  }
  return {
    axiosGet,
  }
}

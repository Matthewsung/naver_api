
-프로젝트 설명<br /> <br /> 
  네이버의 쇼핑인사이트 api를 이용하여 연령별 검색으로 데이터를 불러왔습니다.<br /> 
  불러온 데이터를 rechart를 이용하여 가독성 있게 구현했습니다.<br /> <br /> 
  
-CORS 해결<br /> <br /> 
  localhost와 https://openapi.naver.com의 도메인이 달라 CORS문제 발생<br /> 
  proxy 서버를 이용하기 위해 package.json에 추가 <br /> 
  추가로 request header에 Access-Control-Allow-Origin를 넣어 예외 처리하였습니다.<br /> 

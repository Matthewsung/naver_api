import { useEffect, useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { searchedData } from '../store/Action';
import axios from 'axios';
// style
import styled from 'styled-components'
// component
import Chart from './Chart';

const SearchComponent = styled.div`
  padding: 16px;
  margin-top: 24px;
  background: ${props => props.theme.bgColor};
  border: 1px solid ${props => props.theme.borderColor};
  border-radius: 8px;
`;

const Header = styled.h1`

`;

const Search =  () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.userData);

  useEffect(()=> {
    getSearchData()
  }, [users]);
  // API options
  const options = {
    url : '/v1/datalab/shopping/category/keyword/age',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Naver-Client-Id': process.env.REACT_APP_Client_ID,
      'X-Naver-Client-Secret': process.env.REACT_APP_Client_Secret,  
      'Access-Control-Allow-Origin': 'https://openapi.naver.com'
    },
    data: {
      "startDate": users.startDate,
      "endDate": users.endDate,
      "timeUnit": users.timeUnit,
      "category": users.category,
      "keyword": users.keyword,
      "device": users.device,
      "gender": users.gender,
      "ages": users.ages
    }
  };
  
  const [finalData, setFinalData] = useState([]);
  // API 요청
  const getSearchData = async () => {
    let changedData = [];
    let mergedData = [];
    
    const result = await axios(options);
    const resultData = result.data.results[0].data;
    dispatch(searchedData(resultData));

    /* 차트에 들어갈 데이터 변경 */
    // ratio와 ages 삭제
    const DeleteData = (el) => {
      delete el.group; 
      delete el.ratio
    };
    // data의 key 값을 teen, twe,third, forth...로 변경
    const changeData = await resultData.map(el => {
      if(el.group === '10') {
        el.teen = el.ratio;
      }
      else if(el.group === '20') {
        el.twe = el.ratio;
      }
      else if(el.group === '30') {
        el.third = el.ratio;
      }
      else if(el.group === '40') {
        el.forth = el.ratio;
      }
      else if(el.group === '50') {
        el.fifth = el.ratio;
      }
      else if(el.group === '60') {
        el.sixth = el.ratio;
      }
      DeleteData(el);
      changedData.push(el);

      return null
    });
    // period가 같은 객체를 합침
    const mergeData = await changedData.reduce((acc, cur, i, [])=> {
      acc.period === cur.period?
      mergedData[i] = Object.assign({},acc, cur):
      mergedData[i] = cur;
      
      return cur
    });
    // 빈 배열 삭제하여 data 완성
    setFinalData(mergedData.filter(el => true));
  }
  
  return(
    <>
      <SearchComponent>
        <Header>
          결과 내용
        </Header>
        {
          finalData?
          <Chart finalData={finalData}/>:
          ''
        }
      </SearchComponent>
    </>
  )
}

export default Search;
import { useState } from 'react';
import { useDispatch } from "react-redux";
import { getUserData } from '../store/Action';
// style
import styled, { css } from 'styled-components'
//component
import Search from './Search';

const inputStyle = css`
  border: none;
  outline: none;
  padding: 0 12px;
  box-shadow: 0 0 0 1px ${props => props.theme.borderColor};
  cursor: pointer;
`

const SearchComponent = styled.div`
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;
  padding: 50px 20px 0;
`

const TotalForm = styled.form`
  padding-top: 16px;
  border: 1px solid ${props => props.theme.borderColor};
  background: ${props => props.theme.bgColor};
  border-radius: 8px;
  overflow: hidden;
`
const ContentRow = styled.div`
  padding: ${props => props.submit? "0" : "0 24px"};
  display: flex;
  align-items: center;
  gap: 24px;
`
const ContentTitle = styled.h3`
  width: 120px;
  margin: 8px 0;
`

const Content = styled.div`
  width: ${props => props.date?'':'calc(100% - 120px - 24px)'};
`

const Input = styled.input`
  width: calc(100% - 24px);
  height: 30px;
  ${inputStyle};

  &:checked + label {
    background: ${props => props.theme.btnColor};
  };

  &[type=date] {
    width: 150px;
    height: 30px;
  };

  &[type=radio],
  &[type=checkbox] {
    display:none;
  };
  
`
const Button = styled.button`
  ${inputStyle};
  width: 100%;
  font-size: 20px;
  padding: 8px 0;
  background: ${props => props.theme.btnColor};
`

const Span = styled.span`
  margin: 0 8px;
`

const Label = styled.label`
  ${inputStyle};
  height: 30px;
  line-height: 30px;
  margin-right: 8px;
  display: inline-block;
  padding: 0 24px;

  &:last-child {
    margin-right: 0;
  }
`

const SubmitBtn = styled.div`
  width: 100%;
  margin-top: 24px;
`

const User = () => {  
  const dispatch = useDispatch();
  const [showComponent, setShowComponent] = useState(false);

  const getInfo = (event) => {
    event.preventDefault();

    const agesValue = event.target.ages;
    let checkedAge = [];
    agesValue.forEach(el => el.checked? checkedAge.push(el.value): '');

    let userData = {
      startDate: event.target.startDate.value,
      endDate: event.target.endDate.value,
      category: event.target.category.value,
      keyword: event.target.keyword.value,
      timeUnit: event.target.timeUnit.value,
      ages: checkedAge,
      gender: event.target.gender.value,
      device: event.target.device.value,
    };

    setShowComponent(true);
    dispatch(getUserData(userData));
  }

  return (
    <>
      <SearchComponent>
        <TotalForm onSubmit={getInfo}>
          <ContentRow>
            <ContentTitle>기간</ContentTitle>
            <Content date>
              <Input type="date" name="startDate"/>
              <Span>~</Span>
              <Input type="date" name="endDate" />
            </Content>
            <Content date>
              <Input type="radio" name="timeUnit" value="date" id='date'/>
              <Label htmlFor="date">일간</Label>
              <Input type="radio" name="timeUnit" value="week" id='week'/>
              <Label htmlFor="week">주간</Label>
              <Input type="radio" name="timeUnit" value="month" id='month'/>
              <Label htmlFor="month">월간</Label>
            </Content>
          </ContentRow>
          <ContentRow>
            <ContentTitle>카테고리</ContentTitle>
            <Content>
              <Input type="radio" name="category" value="50000167" id='women'/>
              <Label htmlFor="women">여성의류</Label>
              <Input type="radio" name="category" value="50000169" id='men'/>
              <Label htmlFor="men">남성의류</Label>
            </Content>
          </ContentRow>
          <ContentRow>
            <ContentTitle>키워드</ContentTitle>
            <Content>
              <Input type="text" name="keyword" keyword/>
            </Content>
          </ContentRow>
          <ContentRow>
            <ContentTitle>연령</ContentTitle>
            <Content>
              <Input type="checkbox" name="ages" value="10" id='teen'/>
              <Label htmlFor="teen">19세</Label>
              <Input type="checkbox" name="ages" value="20" id='tewenty'/>
              <Label htmlFor="tewenty">29세</Label>
              <Input type="checkbox" name="ages" value="30" id='thirty'/>
              <Label htmlFor="thirty">39세</Label>
              <Input type="checkbox" name="ages" value="40" id='forty'/>
              <Label htmlFor="forty">49세</Label>
              <Input type="checkbox" name="ages" value="50" id='fifty'/>
              <Label htmlFor="fifty">59세</Label>
              <Input type="checkbox" name="ages" value="60" id='sixty'/>
              <Label htmlFor="sixty">이상</Label>
            </Content>
          </ContentRow>
          <ContentRow>
            <ContentTitle>성별</ContentTitle>
            <Content>
              <Input  type="radio" name="gender" id='female' value='f'/>
              <Label htmlFor="female">여성</Label>
              <Input  type="radio" name="gender" id='male' value='m'/>
              <Label htmlFor="male">남성</Label>
            </Content>
          </ContentRow>
          <ContentRow>
            <ContentTitle>기기별</ContentTitle>
            <Content>
              <Input type="radio" name="device" id='pc' value='pc'/>
              <Label htmlFor="pc">PC</Label>
              <Input type="radio" name="device" id='mobile' value='mo'/>
              <Label htmlFor="mobile">MOBILE</Label>
            </Content>
          </ContentRow>
          <ContentRow submit>
            <SubmitBtn>
              <Button>조회하기</Button>
            </SubmitBtn>
          </ContentRow>
        </TotalForm>
        { showComponent?<Search />:'' }
      </SearchComponent>
    </>
  )
}

export default User;
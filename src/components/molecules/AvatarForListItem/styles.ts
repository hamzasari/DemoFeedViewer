import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
`;

export const Avatar = styled.Image`
  width: 50px;
  height: 50px;
  background-color: cyan;
  border-radius: 10px;
`;

export const NameContainer = styled.View`
  justify-content: center;
  align-items: center;
  padding-left: 20px;
`;

export const Name = styled.Text`
  font-size: 18px;
  color: white;
`;

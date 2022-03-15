import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  padding: 10px;
  background-color: gray;
  border-radius: 10px;
  margin-bottom: 2px;
`;

export const Body = styled.Text`
  color: white;
`;

export const AvatarAndFeedIdContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const FeedId = styled.Text`
  color: white;
`;

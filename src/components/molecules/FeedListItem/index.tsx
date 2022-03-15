import React, {useCallback} from 'react';

import {truncate} from '../../../common/util';

import {IFeed} from '../../../redux/reducers/feedReducer/interfaces';

import AvatarForListItem from '../AvatarForListItem';

import {Body, Container, AvatarAndFeedIdContainer, FeedId} from './styles';

interface Props {
  item: IFeed;
  index: number;
  onPress: (item: IFeed, index: number) => void;
}

/**
 * Feed List Item Component
 *
 * @description This component is to show every item in feed list
 * @param props props object
 * @returns Feed List Item Component
 */
const FeedListItem = (props: Props) => {
  const onPressHandler = useCallback(() => {
    props.onPress(props.item, props.index);
  }, [props]);

  return (
    <Container onPress={onPressHandler}>
      <AvatarAndFeedIdContainer>
        <AvatarForListItem authorId={props.item.author_id} />
        <FeedId>#{props.item.id}</FeedId>
      </AvatarAndFeedIdContainer>
      <Body>{truncate(props.item.body, 100)}</Body>
    </Container>
  );
};

export default React.memo(FeedListItem);

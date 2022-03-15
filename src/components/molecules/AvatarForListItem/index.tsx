import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';

import {IAuthor} from '../../../redux/reducers/authorReducer/interfaces';

import {mapStateToProps} from './state';
import {Avatar, Container, NameContainer, Name} from './styles';

interface Props {
  authorId: number;
  authors: IAuthor[];
}

/**
 * Avatar for List Item Component
 *
 * @description Component to render related author's avatar and name for feed list item, I connected this component to redux state intentionally to show different approaches about accessing global state data
 * @param props props object
 * @returns Avatar for List Item Component
 */
const AvatarForListItem = (props: Props) => {
  const [author, setAuthor] = useState<IAuthor>();

  useEffect(() => {
    setAuthor(props.authors.find(x => x.id === props.authorId));
  }, [props.authorId, props.authors]);

  return (
    <Container>
      <Avatar source={{uri: author?.small_avatar}} />
      <NameContainer>
        <Name>{author?.name}</Name>
      </NameContainer>
    </Container>
  );
};

export default React.memo(connect(mapStateToProps)(AvatarForListItem));

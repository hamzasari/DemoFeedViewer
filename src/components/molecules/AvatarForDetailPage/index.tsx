import React, {useCallback, useEffect, useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';

import {IAuthor} from '../../../redux/reducers/authorReducer/interfaces';

import {mapStateToProps} from './state';
import {AuthorName, AvatarImage, Container} from './styles';

interface Props {
  authorId: number;
  authors: IAuthor[];
  onPress: (authorId: number) => void;
}

/**
 * Avatar for Detail Page Component
 *
 * @description Component to render related author's avatar and name for feed detail page, I connected this component to redux state intentionally to show different approaches about accessing global state data
 * @param props props object
 * @returns Avatar for Detail Page Component
 */
const AvatarForDetailPage = (props: Props) => {
  const [author, setAuthor] = useState<IAuthor>();

  useEffect(() => {
    setAuthor(props.authors.find(x => x.id === props.authorId));
  }, [props.authorId, props.authors]);

  const onPressHandler = useCallback(() => {
    props.onPress(props.authorId);
  }, [props]);

  return (
    <Container>
      {author && (
        <TouchableOpacity onPress={onPressHandler}>
          <AvatarImage source={{uri: author.big_avatar}} />
          <AuthorName>{author.name}</AuthorName>
        </TouchableOpacity>
      )}
    </Container>
  );
};

export default React.memo(connect(mapStateToProps)(AvatarForDetailPage));

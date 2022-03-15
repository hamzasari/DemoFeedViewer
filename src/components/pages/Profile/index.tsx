import React, {useCallback, useEffect, useState} from 'react';
import {connect} from 'react-redux';

import {BaseNavigationProps, BaseRoute} from '../../../navigation/interfaces';
import {IAuthor} from '../../../redux/reducers/authorReducer/interfaces';

import ProfileDetailItem from '../../molecules/ProfileDetailItem';
import Header from '../../organisms/Header';

import {mapStateToProps} from './state';
import {
  PageContainer,
  ProfileContainer,
  ProfileImage,
  ProfileDetailsContainer,
} from './styles';

interface RouteParam {
  id: number;
}

interface Route extends BaseRoute {
  params: RouteParam;
}

interface Props extends BaseNavigationProps {
  route: Route;
  authors: IAuthor[];
}

/**
 * Profile Page Component
 *
 * @description This page shows the profile information of the author
 * @param props props object
 * @returns Profile Page
 */
const Profile = (props: Props) => {
  const [author, setAuthor] = useState<IAuthor>();

  useEffect(() => {
    setAuthor(props.authors.find(x => x.id === props.route.params.id));
  }, [props.authors, props.route.params.id]);

  const onBackButtonPressHandler = useCallback(() => {
    props.navigation.goBack();
  }, [props.navigation]);

  return (
    <PageContainer>
      <Header
        showBackIcon={true}
        onBackButtonPressHandler={onBackButtonPressHandler}
      />
      <ProfileContainer>
        <ProfileImage source={{uri: author?.big_avatar}} />
        <ProfileDetailsContainer>
          <ProfileDetailItem label={'Name'} value={author?.name} />
          <ProfileDetailItem label={'E-mail'} value={author?.email} />
          <ProfileDetailItem label={'Company'} value={author?.company} />
          <ProfileDetailItem label={'Department'} value={author?.department} />
          <ProfileDetailItem label={'Title'} value={author?.title} />
        </ProfileDetailsContainer>
      </ProfileContainer>
    </PageContainer>
  );
};

export default connect(mapStateToProps)(Profile);

import React, {useCallback, useEffect} from 'react';
import {BackHandler} from 'react-native';

import Header from '../../organisms/Header';
import AvatarForDetailPage from '../../molecules/AvatarForDetailPage';

import {BaseNavigationProps, BaseRoute} from '../../../navigation/interfaces';
import NavigationRoutes from '../../../navigation/NavigationRoutes';

import {IFeed} from '../../../redux/reducers/feedReducer/interfaces';

import {Body, FeedDetailContainer} from './styles';

interface RouteParam {
  item: IFeed;
  index: number;
  onGoBack: Function;
}

interface Route extends BaseRoute {
  params: RouteParam;
}

interface Props extends BaseNavigationProps {
  route: Route;
}

/**
 * Feed Detail Page Component
 *
 * @description This page shows the details of feed selected, also when we click back button at top left or hardware back button press we return to home page and scroll automatically to last opened feed
 * @param props props object
 * @returns Feed Detail Page
 */
const FeedDetail = (props: Props) => {
  const index = props.route.params.index;
  const body = props.route.params.item.body;
  const authorId = props.route.params.item.author_id;

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      onHardwareBackPress,
    );

    return () => backHandler.remove();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onHardwareBackPress = useCallback(() => {
    props.route.params.onGoBack(index);
    props.navigation.goBack();
    return true;
  }, [index, props.navigation, props.route.params]);

  const onBackButtonPressHandler = useCallback(() => {
    props.route.params.onGoBack(index);
    props.navigation.goBack();
  }, [index, props.navigation, props.route.params]);

  const onAvatarPressHandler = useCallback(
    id => {
      props.navigation.navigate(NavigationRoutes.profile, {id: id});
    },
    [props.navigation],
  );

  return (
    <FeedDetailContainer>
      <Header
        showBackIcon={true}
        onBackButtonPressHandler={onBackButtonPressHandler}
      />
      <AvatarForDetailPage authorId={authorId} onPress={onAvatarPressHandler} />
      <Body>{body}</Body>
    </FeedDetailContainer>
  );
};

export default FeedDetail;

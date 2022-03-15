import React, {useCallback, useEffect, useRef} from 'react';
import {FlatList} from 'react-native';
import {connect} from 'react-redux';
import {NavigationProp, ParamListBase} from '@react-navigation/native';

import NavigationRoutes from '../../../navigation/NavigationRoutes';

import Header from '../../organisms/Header';
import FeedList from '../../organisms/FeedList';

import {IFeed} from '../../../redux/reducers/feedReducer/interfaces';
import {FeedApiParam} from '../../../middleware/services/interfaces';

import {mapDispatchToProps, mapStateToProps} from './state';
import {PageContainer, FeedListContainer} from './styles';

interface Props {
  navigation: NavigationProp<ParamListBase>;
  pending: boolean;
  error: string | null;
  feeds: IFeed[];
  getAuthors: () => void;
  getInitialFeeds: () => void;
  getOlderFeeds: (params: FeedApiParam) => void;
}

/**
 * Home Page Component
 *
 * @description I handled the navigation and onFeedItemPressed functionality here intentionally to show different approaches like prop drilling or connecting redux to a child parameter, for example I connected redux state data to child components in molecules/AvatarForDetailPage and molecules/AvatarForListItem
 * @param props props object
 * @returns Home Page
 */
const Home = (props: Props) => {
  const feedListRef = useRef<FlatList>();

  useEffect(() => {
    props.getAuthors();
    props.getInitialFeeds();
    // We are ignoring dependencies for this useEffect block, because we want this block to run only once
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onFeedItemPressed = useCallback(
    (item, index) => {
      props.navigation.navigate(NavigationRoutes.feedDetail, {
        item: item,
        index: index,
        onGoBack: (itemIndex: number) => {
          feedListRef?.current?.scrollToIndex({
            index: itemIndex,
            animated: true,
          });
        },
      });
    },
    [props.navigation],
  );

  return (
    <PageContainer>
      <Header />
      {!pending && (
        <FeedListContainer>
          <FeedList
            feeds={props.feeds}
            getInitialData={props.getInitialFeeds}
            retrieveMore={props.getOlderFeeds}
            onFeedItemPressed={onFeedItemPressed}
            feedListRef={feedListRef as React.LegacyRef<FlatList<any>>}
          />
        </FeedListContainer>
      )}
    </PageContainer>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

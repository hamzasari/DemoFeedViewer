import React, {useCallback, useState} from 'react';
import {FlatList, RefreshControl} from 'react-native';

import {FeedApiParam} from '../../../middleware/services/interfaces';
import {IFeed} from '../../../redux/reducers/feedReducer/interfaces';

import FeedListItem from '../../molecules/FeedListItem';

interface Props {
  feeds: IFeed[];
  getInitialData: () => void;
  retrieveMore: (params: FeedApiParam) => void;
  onFeedItemPressed: (item: IFeed, index: number) => void;
  feedListRef: React.LegacyRef<FlatList<any>> | undefined;
}

/**
 * FeedList Component
 *
 * @description Main component to show feeds in a list on home page
 * @param props props object
 * @returns FeedList Component
 */
const FeedList = (props: Props) => {
  const [refreshing, setRefreshing] = useState<boolean>(false);

  const initialFeedLength = props.feeds.length;
  let indexOfLoadedFeeds = initialFeedLength;
  const retrieveFeedCount = 2;

  const renderItem = useCallback(
    ({item, index}: {item: IFeed; index: number}) => (
      <FeedListItem
        item={item}
        index={index}
        onPress={props.onFeedItemPressed}
      />
    ),
    [props.onFeedItemPressed],
  );

  const keyExtractor = useCallback((item, index) => `feed_${index}`, []);

  const waitForInitialData = useCallback(() => {
    return new Promise<void>(resolve => {
      props.getInitialData();
      // eslint-disable-next-line react-hooks/exhaustive-deps
      indexOfLoadedFeeds = initialFeedLength;
      resolve();
    });
  }, []);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    waitForInitialData().then(() => setRefreshing(false));
  }, [waitForInitialData]);

  const retrieveMore = useCallback(() => {
    props.retrieveMore({start: indexOfLoadedFeeds, limit: retrieveFeedCount});
    // eslint-disable-next-line react-hooks/exhaustive-deps
    indexOfLoadedFeeds += retrieveFeedCount;
  }, []);

  return (
    <FlatList
      data={props.feeds}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      onEndReached={retrieveMore}
      onEndReachedThreshold={0.5}
      ref={props.feedListRef}
    />
  );
};

export default React.memo(FeedList);

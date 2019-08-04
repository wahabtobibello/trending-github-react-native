import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { Layout, List, ListItem } from 'react-native-ui-kitten';
import { getRepos } from '../../api';

const ListScreen = ({ navigation }) => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    getRepos('javascript')
      .then(({ data: repos }) => {
        setLoading(false);
        setRepos(repos);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);
  const renderItem = ({ item }) => {
    return (
      <ListItem
        title={item.author}
        description={`${item.description.slice(0, 80)}${
          item.description.length > 80 ? '...' : ''
        }`}
        onPress={() => {
          navigation.navigate('Item', { item });
        }}
      />
    );
  };
  if (loading) {
    return (
      <Layout style={{ justifyContent: 'center', flex: 1 }}>
        <ActivityIndicator size={40} />
      </Layout>
    );
  }
  return (
    <Layout>
      <List data={repos} renderItem={renderItem} />
    </Layout>
  );
};

ListScreen.navigationOptions = {
  title: 'Trending Github Repos'
};

export default ListScreen;

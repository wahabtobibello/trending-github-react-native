import React from 'react';
import { Avatar, Layout, Text } from 'react-native-ui-kitten';

const ItemScreen = ({
  navigation: {
    state: {
      params: { item },
    },
  },
}) => {
  return (
    <Layout style={{ flex: 1 }}>
      <Layout
        style={{
          flexDirection: 'row',
          marginVertical: 16,
          paddingHorizontal: 16,
        }}
      >
        <Avatar source={{ uri: item.avatar }} size="giant" />
        <Layout style={{ marginLeft: 16 }}>
          <Text category="h4">{item.name}</Text>
          <Text category="s1">{item.author}</Text>
        </Layout>
      </Layout>
      <Layout
        level="2"
        style={{ flex: 1, paddingHorizontal: 16, paddingVertical: 16 }}
      >
        <Text category="label">Description</Text>
        <Text category="p1">{item.description}</Text>
      </Layout>
    </Layout>
  );
};

ItemScreen.navigationOptions = ({
  navigation: {
    state: {
      params: { item },
    },
  },
}) => ({
  title: item.name,
});

export default ItemScreen;

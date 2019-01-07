import React from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import { addDecorator, getStorybookUI, configure } from '@storybook/react-native';
import { loadStories } from './storyLoader';

addDecorator((storyFn) => <View style={styles.container}>{storyFn()}</View>);
configure(loadStories, module);

const StorybookUI = getStorybookUI({});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

const StorybookUIRoot = StorybookUI;

export default StorybookUIRoot;

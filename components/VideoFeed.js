// components/VideoFeed.js
import React, { useRef, useEffect, useState } from 'react';
import { View, Dimensions, ScrollView, StyleSheet } from 'react-native';
import VideoCard from './VideoCard';

const WINDOW_HEIGHT = Dimensions.get('window').height;

const SAMPLE_VIDEOS = [
  // Replace with your own hosted mp4 or streaming URLs later
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4'
];

export default function VideoFeed() {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    // nothing needed initially
  }, []);

  const onScroll = (e) => {
    const offsetY = e.nativeEvent.contentOffset.y;
    const index = Math.round(offsetY / WINDOW_HEIGHT);
    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  };

  return (
    <ScrollView
      ref={scrollRef}
      pagingEnabled
      showsVerticalScrollIndicator={false}
      onScroll={onScroll}
      scrollEventThrottle={16}
      style={styles.feed}
    >
      {SAMPLE_VIDEOS.map((src, i) => (
        <View key={i} style={{ height: WINDOW_HEIGHT }}>
          <VideoCard
            source={src}
            isActive={i === activeIndex}
            caption={`Short truth clip #${i + 1}`}
            scripture="John 3:16"
            creatorName={`Creator ${i + 1}`}
          />
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  feed: { flex: 1, backgroundColor: '#000' }
});

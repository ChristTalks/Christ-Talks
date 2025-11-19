// components/VideoCard.js
import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { Video } from 'expo-av';

export default function VideoCard({ source, isActive, caption, scripture, creatorName }) {
  const videoRef = useRef(null);
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // fade in when component mounts
    Animated.timing(opacity, { toValue: 1, duration: 350, useNativeDriver: true }).start();
  }, []);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    const control = async () => {
      try {
        if (isActive) {
          await v.setIsLoopingAsync(true);
          await v.setVolumeAsync(0); // start muted
          await v.playAsync();
        } else {
          await v.pauseAsync();
        }
      } catch (e) {
        // fail quietly in dev
        // console.log('Video control error', e);
      }
    };
    control();
  }, [isActive]);

  return (
    <Animated.View style={[styles.container, { opacity }]}>
      <Video
        ref={videoRef}
        source={{ uri: source }}
        style={styles.video}
        resizeMode="cover"
        shouldPlay={false}
        isLooping
        useNativeControls={false}
        isMuted
        posterSource={require('../assets/placeholder.png')}
      />
      <View style={styles.overlay}>
        <View style={styles.left}>
          <Text style={styles.creator}>{creatorName}</Text>
          <Text style={styles.caption}>{caption}</Text>
          <Text style={styles.scripture}>{scripture}</Text>
        </View>

        <View style={styles.right}>
          <TouchableOpacity style={styles.iconBtn}>
            <Text style={styles.iconText}>♡</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconBtn}>
            <Text style={styles.iconText}>🔖</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconBtn}>
            <Text style={styles.iconText}>↗</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000'
  },
  video: {
    ...StyleSheet.absoluteFillObject
  },
  overlay: {
    position: 'absolute',
    left: 12,
    right: 12,
    bottom: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end'
  },
  left: {
    maxWidth: '70%'
  },
  creator: { color: '#fff', fontSize: 14, fontWeight: '700', marginBottom: 6 },
  caption: { color: '#fff', fontSize: 16, marginBottom: 6 },
  scripture: { color: '#fff', fontSize: 12, opacity: 0.9 },
  right: {
    alignItems: 'center',
    gap: 12
  },
  iconBtn: {
    backgroundColor: 'rgba(255,255,255,0.08)',
    width: 52,
    height: 52,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12
  },
  iconText: { color: '#fff', fontSize: 18 }
});

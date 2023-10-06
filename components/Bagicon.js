import React from 'react';
import { View,Text } from 'react-native';
import Svg, { Path } from 'react-native-svg';

function BagIcon () {
  return (
    <View>
      <Svg width={14} height={12} viewBox="0 0 14 12" fill="none">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.48229 0C8.34441 0 7.25232 0.5297 6.53951 1.36676C5.8267 0.5297 4.73461 0 3.59673 0C1.58256 0 0 1.58256 0 3.59673C0 6.06866 2.22343 8.08283 5.59128 11.1433L6.53951 12L7.48774 11.1368C10.8556 8.08283 13.079 6.06866 13.079 3.59673C13.079 1.58256 11.4965 0 9.48229 0ZM6.6049 10.1689L6.5395 10.2343L6.47411 10.1689C3.3613 7.3504 1.3079 5.48664 1.3079 3.59672C1.3079 2.28882 2.28882 1.3079 3.59672 1.3079C4.60381 1.3079 5.58474 1.95531 5.93133 2.85122H7.15422C7.49427 1.95531 8.4752 1.3079 9.48228 1.3079C10.7902 1.3079 11.7711 2.28882 11.7711 3.59672C11.7711 5.48664 9.71771 7.3504 6.6049 10.1689Z"
          fill="#9B9B9B"
        />
      </Svg>
    </View>
  );
}

export default BagIcon  ;
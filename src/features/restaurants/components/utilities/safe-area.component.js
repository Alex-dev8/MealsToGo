import {StatusBar, SafeAreaView} from 'react-native';
import styled from 'styled-components';

export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  // The status bar is only for Android, so we need to use this conditional for iOS not to crash: if StatusBar.currentHeight == true, then set the margin-top to that height.
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

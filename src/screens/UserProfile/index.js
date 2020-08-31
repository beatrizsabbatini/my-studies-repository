import React from 'react';
import ThemesList from '../../components/ThemesList';

const UserProfile = ({ route, navigation }) => {
  const { userId, userName, isSearchTheme } = route.params;

  return (
    <ThemesList
      userId={userId}
      userName={userName}
      navigation={navigation}
      isMyProfile={isSearchTheme ? false : true}
    />
  );
};

export default UserProfile;

import React from 'react';
import ThemesList from '../../components/ThemesList';

const UserProfile = ({ route, navigation }) => {
  const { userId, userName, isMyProfile } = route.params;

  return (
    <ThemesList
      userId={userId}
      userName={userName}
      navigation={navigation}
      isMyProfile={isMyProfile}
    />
  );
};

export default UserProfile;

import React from 'react';
import ThemesList from '../../components/ThemesList';

const UserProfile = ({ route, navigation }) => {
  const { userId, userName } = route.params;

  return (
    <ThemesList userId={userId} userName={userName} navigation={navigation} />
  );
};

export default UserProfile;

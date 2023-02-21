import React, {useCallback, useContext, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {BaseButton, BaseHeader, BaseView} from '../components';
import {getBottomSpace} from 'react-native-iphone-x-helper';
import helper from '../constants/helper';
import {GiftedChat} from 'react-native-gifted-chat';
// import usePusher from '../../../../hooks/usePusher';
import {useDispatch, useSelector} from 'react-redux';

// import {
//   createChatMessage,
//   getChatMessages,
//   setServerLoading,
//   updateMessages,
// } from '../store';
// import server from '../../../../server';
import {COLORS} from '../constants/theme';
import AuthContext from '../context/AuthContext';
import dummyImages from '../dummyData';

export const ChatScreen = ({navigation, route}) => {
  //   const {serverLoading, messages} = useSelector(state => state.chat);
  //   const {user} = useContext(AuthContext);
  //   const dispatch = useDispatch();
  //   const friend = route.params?.friend;
  //   const chat_id = route.params?.chat_id;

  //   const isBlockedByMe = friend?.isBlockedByMe;

  //   const isBlockedMe = friend?.isBlockedMe;

  //   usePusher(friend?.id);

  //   useEffect(() => {
  //     dispatch(getChatMessages(chat_id));
  //   }, []);

  //   const onSend = useCallback((userMessages = []) => {
  //     const msg = userMessages[0];
  //     if (msg) {
  //       const values = {
  //         createdAt: msg.createdAt,
  //         text: msg.text,
  //         friend_id: friend?.id,
  //         user_id: user?.id,
  //         avatar: user?.dp,
  //         name: helper.getFullName(user),
  //       };
  //       dispatch(createChatMessage(values));
  //       dispatch(updateMessages(msg));
  //     }
  //   }, []);

  return (
    <BaseView>
      <BaseHeader
        isBack
        // title={friend?.name}
        title={'جدول أعمال'}
        // isProfile={helper.getImage(friend?.avatar)}
      />

      <GiftedChat
        // messages={messages}
        // onSend={messages => onSend(messages)}
        textInputProps={{
          style: {flex: 1, color: COLORS.black, paddingHorizontal: 10},
        }}

        // user={{
        //     //   _id: user?.id,
        //     //   name: helper.getFullName(user),
        //     //   avatar: helper.getImage(user?.dp),
        //   }}
      />

      <View style={{paddingBottom: getBottomSpace()}} />
    </BaseView>
  );
};
const styles = StyleSheet.create({});

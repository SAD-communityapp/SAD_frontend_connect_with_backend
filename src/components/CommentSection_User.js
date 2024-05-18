import React, { useState, useRef, useEffect} from 'react';
import { View, Text, TextInput, FlatList, TouchableWithoutFeedback,TouchableOpacity, StyleSheet, Image, Keyboard } from 'react-native';
import Send from './Send';
import colors from '../assets/colors/colors';
import { Smallest_Body_Regular } from '../assets/TextStyles';
const CommentSection = () => {
  // 留言列表数据
  const [comments, setComments] = useState([]);
  // 用户输入的留言内容
  const [inputText, setInputText] = useState('');
  const [replyText, setReplyText] = useState('');
  const [replyVisible, setReplyVisible] = useState(false); // 控制回复输入框的显示与隐藏
  const replyInputRef = useRef(null);
  // 处理用户输入留言
  const handleAddComment = () => {
    if (inputText.trim() !== '') {
      setComments([...comments, { id: comments.length + 1, text: inputText }]);
      setInputText('');
    }
  };
  const handleContainerPress = () => {
    // 当点击评论容器时，隐藏输入框
    setReplyVisible(false);
  };

  const handleReply = () => {
    if (replyVisible && replyText.trim() !== '') {
      // 如果回复框已经显示且有输入文字，则直接发送回复
      handleSendReply();
    } else {
      // 否则，显示回复框
      setReplyVisible(true);
    }
  };

  const handleSendReply = () => {
    if (replyText.trim() != '') {
      setComments([...comments, { id: comments.length + 1, text: replyText }]);
      setReplyText(''); // 清空回复输入框的文本
      setReplyVisible(false);
    }
  };

  const renderReplyInput = () => {
    return (
      <View style={styles.replyInputContainer}>
        <TextInput
          style={styles.replyInput}
          placeholder="輸入回覆..."
          placeholderTextColor={colors.tertiary_75}
          value={replyText}
          onChangeText={setReplyText}
        />
        <Send onPress={handleSendReply} disabled={replyText.trim() === ''} />
      </View>
    );
  };

  useEffect(() => {
    if (!replyText.trim()) {
      const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', handleKeyboardDidHide);
      return () => {
        keyboardDidHideListener.remove();
      };
    }
  }, [replyText]);


  const handleKeyboardDidHide = () => {
    if (!replyText.trim()) {
      setReplyVisible(false);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={handleContainerPress}>
          <View  style={{gap: 16, marginTop: 16}}>
              <View style={styles.container}>
                {/* 留言输入框 */}
                <View>
                  <Image
                    source={require("../assets/img/image12.png")}
                    style={styles.image}
                  />
                </View>
                <TextInput
                  style={styles.input}
                  placeholder="留個言吧"
                  placeholderTextColor={colors.tertiary_75}
                  value={inputText}
                  onChangeText={setInputText}
                />
                
                <Send onPress={handleAddComment} disabled={!inputText}/>
                  {/* 留言列表 */}

                {/* 留言列表 */}
                {/* <FlatList
                  data={comments}
                  keyExtractor={(item) => item.id.toString()}
                  renderItem={({ item }) => (
                    <TouchableOpacity style={styles.commentItem}>
                      <Text>{item.text}</Text>
                    </TouchableOpacity>
                  )}
                /> */}
              </View>
              <View style={styles.commentContainer}>
                <Image
                source={require("../assets/img/comment.png")}
                style={styles.image}
                >
                
                </Image>
                <View style={styles.commentTextContainer}>{/*main comment*/}
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={{color:colors.tertiary_100}}>留阿版{/*name*/}</Text>
                    <Text style={{color:colors.tertiary_100}}>13 小時前{/*time*/}</Text>
                  </View>
                  <Text>為什麼又要洗水塔，又要停水很麻煩欸！{/*content*/}</Text>
                  <TouchableOpacity onPress={handleReply}>
                        <Text style={styles.replyButton}>{/*item.text*/}回覆</Text>
                  </TouchableOpacity>
                  {replyVisible && renderReplyInput()}
                </View>
                
              </View>
              <View style={styles.replyContainer}>
                <Image
                source={require("../assets/img/image27.png")}
                style={styles.image}
                >
                
                </Image>
                <View style={styles.replyTextContainer}>{/*main comment*/}
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={{color:colors.tertiary_100}}>管理員{/*name*/}</Text>
                    <Text style={{color:colors.tertiary_100}}>剛剛{/*time*/}</Text>
                  </View>
                  <Text>不好意思，因為近日有颱風造成水質下降，因此管委會決定要再次清洗水塔，對於您的不便，我們深感抱歉。{/*content*/}</Text>
                  <TouchableOpacity >
                        <Text style={{color:colors.tertiary_100}}>{/*item.text*/}回覆</Text>
                  </TouchableOpacity>
                </View>
              </View>
          </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    justifyContent: 'space-between',
    
  },
  input: {
    flex: 1,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderWidth: 1.5,
    borderColor: colors.tertiary_75,
    borderRadius: 8,
    ...Smallest_Body_Regular,
    color: colors.text_black,
    backgroundColor: colors.text_white,
    height: 30,
  },
  image: {
    height: 40,
    width: 40,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: colors.tertiary_75,
  },
  commentContainer: {
    flexDirection: 'row',
    gap: 8,
    flex: 1,
    marginHorizontal: 20
  },
  commentTextContainer:{
    gap: 8,
    flex: 1,
  },
  replyContainer: {
    flexDirection: 'row',
    gap: 8,
    flex: 1,
    marginLeft: 60,
    marginRight: 20,
  },
  replyTextContainer:{
    gap: 8,
    flex: 1,
  },
  replyInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    gap: 4
  },
  replyInput: {
    flex: 1,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderWidth: 1.5,
    borderColor: colors.tertiary_75,
    borderRadius: 8,
    ...Smallest_Body_Regular,
    color: colors.text_black,
    backgroundColor: colors.text_white,
    height: 30,
  },
  replyButton: {
    color: colors.tertiary_100,
    marginTop: 8,
  },
  comments:{

  }
});

export default CommentSection;
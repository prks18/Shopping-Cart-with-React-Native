
import {StyleSheet} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    header : {
        height : hp("15%"),
        paddingHorizontal : wp("1.75%"),
        paddingVertical : hp("1.75%"),
        backgroundColor : "darkslateblue"
    },
    text : {
        color : "white"
    },
    addInput : {
        margin : 10,
        padding : 10,
        borderWidth : 1,
        borderColor : "gray"
    },
    addItemBtn : {
        backgroundColor : "firebrick",
        width : 100,
        height : 30,
        margin : 10
    },
    addItemTxt : {
        color : "#fff",
        textAlign : "center",
        padding : 5
    },
    item : {
        padding : 20,
        backgroundColor : "#F8F8F8",
        borderBottomWidth : 1,
        borderColor : "#eee"
      },
      itemText : {
        color : "#000"
      },
      itemTextInp : {
        color : "#000",
        padding : 5,
        borderWidth : 1,
        borderColor : "gray"
      },
      itemDelBtn : {
          position : "absolute",
          right : 10,
          bottom : 10,
          backgroundColor : "firebrick",
          color : "#fff",
          width : 70,
          height : 30
          
      },
      itemModBtn : {
        position : "absolute",
        right : 90,
        bottom : 10,
        backgroundColor : "#0096FF",
        color : "#fff",
        width : 70,
        height : 30
        
    },
      btnText : {
          color : "#fff",
          textAlign : "center",
          padding : 6
      }

})

export {styles}
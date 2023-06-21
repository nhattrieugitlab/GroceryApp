import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {cardStyle} from './CardStyle';
import DatePicker from 'react-native-date-picker';
import {useState} from 'react';
import {AppIcons} from '../../constant/IconPath';
type TimeFrame = {
  index: number;
  time: string;
  isSelected: boolean;
};
const TimeFrameData: TimeFrame[] = [
  {
    index: 0,
    time: '8 AM - 11 AM',
    isSelected: false,
  },
  {
    index: 1,
    time: '11 AM - 13 PM',
    isSelected: false,
  },
  {
    index: 2,
    time: '13 PM - 15 PM',
    isSelected: false,
  },
  {
    index: 3,
    time: '15 PM - 17 PM',
    isSelected: false,
  },
  {
    index: 4,
    time: '17 PM - 19 PM',
    isSelected: false,
  },
  {
    index: 5,
    time: '19 PM - 21 PM',
    isSelected: false,
  },
];
const ExpectedTimeCard = () => {
  const [ExpectedDate, setExpectedDate] = useState<Date>(new Date());
  const [isShowDatePicker, setShowDatePicker] = useState<boolean>(false);
  const [expectedTimeFrames, setexpectedTimeFrames] = useState<TimeFrame[]>([]);
  const selectTimeFrames = (timeFrame: TimeFrame) => {
    const isHasTimeFrames = expectedTimeFrames.find(
      item => item.index === timeFrame.index,
    );
    if (!isHasTimeFrames) {
      setexpectedTimeFrames(prevTimeFrames => {
        return [...prevTimeFrames, timeFrame];
      });
    } else {
      const newTimeFrames = expectedTimeFrames.filter(item => {
        return item.index != timeFrame.index;
      });
      setexpectedTimeFrames(newTimeFrames);
    }
  };
  return (
    <View style={cardStyle.container}>
      <Text style={cardStyle.titleText}>Expected date & Time</Text>
      <TouchableOpacity
        onPress={() => {
          console.log(isShowDatePicker);
          setShowDatePicker(true);
        }}
        style={styles.calenderInputContainer}>
        <TextInput
          value={
            ExpectedDate &&
            `${ExpectedDate.getDate()}/${
              ExpectedDate.getMonth() + 1
            }/${ExpectedDate.getFullYear()}`
          }
          placeholderTextColor={'#6D3805A3'}
          placeholder="Select Date"
          style={[cardStyle.titleText, styles.calenderInput]}
          focusable={false}
          editable={false}
        />
        <Image style={styles.iconCalender} source={AppIcons.IconCalender} />
        <Image style={styles.icArrow} source={AppIcons.IconArrowToBottom} />
      </TouchableOpacity>
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        }}>
        {TimeFrameData.map(timeFrames => {
          return (
            <TimeFrameItem
              key={timeFrames.index}
              onPress={() => {
                selectTimeFrames(timeFrames);
              }}
              label={timeFrames.time}
              isSelected={expectedTimeFrames.some(
                item => item.index == timeFrames.index,
              )}
            />
          );
        })}
      </View>
      <DatePicker
        onConfirm={date => {
          setShowDatePicker(false);
          setExpectedDate(date);
          console.log(date);
        }}
        onCancel={() => {
          setShowDatePicker(false);
        }}
        mode="date"
        modal
        date={ExpectedDate}
        open={isShowDatePicker}
      />
    </View>
  );
};
const TimeFrameItem: React.FC<{
  label: string;
  isSelected: boolean;
  onPress: Function;
}> = ({label, isSelected, onPress}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        onPress();
      }}
      style={[
        TimeFrameItemStyle.container,
        isSelected && {borderColor: '#FF5E00', borderWidth: 1},
      ]}>
      <Text style={[TimeFrameItemStyle.text]}>{label}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  calenderInput: {
    fontSize: 16,
    paddingHorizontal: 54,
    height: '100%',
  },
  calenderInputContainer: {
    height: 48,
    backgroundColor: 'white',
    borderRadius: 7,
    marginTop: 16,
    justifyContent: 'center',
  },
  icArrow: {
    width: 14,
    height: 9,
    position: 'absolute',
    top: 19.5,
    right: 16,
  },
  iconCalender: {
    width: 20,
    height: 20,
    position: 'absolute',
    top: 14,
    left: 16,
  },
});
const TimeFrameItemStyle = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
    width: 100,
    height: 40,
    backgroundColor: 'white',
    borderRadius: 7,
  },
  text: {
    color: '#6D3805',
    fontWeight: '400',
    fontSize: 13,
    lineHeight: 15.6,
  },
});
export default ExpectedTimeCard;

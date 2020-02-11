import React, { useState, useEffect } from 'react';

import { View, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text,
  Card,
  CardItem
} from 'native-base';

const screen = Dimensions.get('screen');

import { COLOR } from '../../utils/colors';
const TimerScreen = () => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  function toggle() {
    setIsActive(!isActive);
  }

  function reset() {
    setSeconds(0);
    setIsActive(false);
  }

  // const startTimer = () => {
  //   setTimerOn(true)
  //   setTimerStart(Date.now()-timerStart)

  //    timer = setInterval(() => {

  //     setTimerTime(Date.now() - timerStart)

  //   }, 10);
  // };

  //   const stopTimer = () => {
  //     setTimerOn(false)

  //   clearInterval(timer);
  // };

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  console.log('seconds', seconds);
  console.log('isActive', isActive);

  let totalSeconds = seconds;

  const hours = Math.floor(totalSeconds / 3600);
  totalSeconds %= 3600;
  let minutes = Math.floor(totalSeconds / 60);
  totalSeconds = totalSeconds % 60;

  minutes = minutes.toString().length === 1 ? `0${minutes.toString()}` : minutes;
  totalSeconds =
    totalSeconds.toString().length === 1 ? `0${totalSeconds.toString()}` : totalSeconds;
  // console.log('timerOn',timerOn)
  return (
    <Container style={{ backgroundColor: COLOR.header }}>
      <Content padder>
        <Card>
          <CardItem style={{ backgroundColor: COLOR.header }}>
            <Body style={styles.timeContainer}>
              <Text style={styles.hours}>{hours}</Text>
              <Text style={styles.timeSeperator}>:</Text>
              <Text style={styles.minutes}>{minutes}</Text>
              <Text style={styles.seconds}>{totalSeconds}</Text>
            </Body>
          </CardItem>

          <CardItem style={{ backgroundColor: COLOR.header }}>
            <Left style={styles.labelContainer}>
              <Text style={styles.label}>Hours</Text>
            </Left>
            <Right style={styles.labelContainer}>
              <Text style={styles.label}>Minutes</Text>
            </Right>
          </CardItem>
        </Card>

        {isActive ? (
          <TouchableOpacity style={styles.buttonStop} onPress={()=>toggle()}>
            <Text style={styles.buttonTextStop}>STOP</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.buttonStart} onPress={()=>toggle()}>
            <Text style={styles.buttonTextStart}>START</Text>
          </TouchableOpacity>
        )}
      </Content>

      <Footer>
        <FooterTab>
          <Button full>
            <Text style={{ color: 'red', fontFamily: 'Roboto', fontSize: 17 }}>
            {isActive?'Tap on Stop Button to save your time':'Tap on Start Button to start logging your time'}
            </Text>
          </Button>
        </FooterTab>
      </Footer>
    </Container>
  );
};

const styles = StyleSheet.create({
  timeContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingTop: 100,
    paddingBottom: 100
  },

  hours: {
    fontSize: 100,
    fontWeight: 'bold',
    color: COLOR.white
  },

  minutes: {
    fontSize: 100,
    fontWeight: 'bold',
    color: COLOR.white
  },

  seconds: { fontSize: 40, fontWeight: 'bold', color: 'yellow' },

  timeSeperator: {
    fontSize: 100,
    fontWeight: 'bold',
    color: COLOR.white
  },
  label: { color: 'yellow', textTransform: 'uppercase', fontWeight: 'bold' ,fontSize:18},
  labelContainer: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  buttonStart: {
    borderWidth: 10,
    borderColor: 'green',
    width: 150,
    height: 150,
    borderRadius: 75,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 30,
 
  },
  buttonStop: {
    borderWidth: 10,
    borderColor: 'red',
    width: 150,
    height: 150,
    borderRadius: 75,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 30,
   
  },
  buttonTextStart: {
    fontSize: 40,
    color: 'green',
    fontWeight: 'bold'
  },
  buttonTextStop: {
    fontSize: 45,
    color: 'red',
    fontWeight: 'bold'
  }
});

export default TimerScreen;

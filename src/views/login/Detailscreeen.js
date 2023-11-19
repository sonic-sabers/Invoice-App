
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from 'react-native';
import React, { useState, useEffect } from 'react';
// import { colors } from '../constants';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../utils/colors';

export default function Detailsscreen() {
  const [Data, setData] = useState([]);
  const [Loading, setLoading] = useState(false);
  const getDataUsingGet = () => {
    setLoading(true);
    //GET request
    fetch('https://attendence-production.up.railway.app/api/class/attendence', {
      method: 'GET',
      //Request Type
    })
      .then(response => response.json())
      //If response is in json then in success
      .then(responseJson => {
        setLoading(false);
        //Success
        let userData = responseJson;
        // alert(JSON.stringify(responseJson));
        setData(userData.data);
        console.log(Data);
      })
      //If response is not in json then in error
      .catch(error => {
        setLoading(false);

        //Error
        // alert(JSON.stringify(error));
        console.error(error);
      });
  };
  useEffect(() => {
    getDataUsingGet();
  }, []);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.primary,
        padding: 10,
      }}>
      <TouchableOpacity
        onPress={() => getDataUsingGet()}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          height: 40,
          width: 40,
          // padding: 10,
          backgroundColor: '#fefae0',
          alignSelf: 'flex-end',
          marginVertical: 20,
          borderRadius: 20,
          marginHorizontal: 8,
        }}>
        <Feather
          name="refresh-cw" //
          size={25}
          style={{
            color: '#023047',
          }}
        />
      </TouchableOpacity>
      {Loading ? (
        <ActivityIndicator size="large" color="#48cae4" />
      ) : (
        <>
          {Data.length ? (
            Data.map(person => {
              return (
                <View
                  style={{
                    flexDirection: 'row',
                    padding: 10,
                    borderRadius: 8,
                    backgroundColor: '#fff',
                    marginBottom: 10,
                  }}>
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: '400',
                      fontFamily: 'Roboto',
                      color: '#000',
                      flex: 1,
                    }}>
                    {person}
                  </Text>
                  <MaterialCommunityIcons
                    name="google-classroom"
                    size={25}
                    style={{ color: '#7209b7', marginRight: 10 }}
                  />
                </View>
              );
            })
          ) : (
            <>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: '400',
                  fontFamily: 'Roboto',
                  color: '#000'
                }}>
                No student Data to show
              </Text>
            </>
          )}
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({});

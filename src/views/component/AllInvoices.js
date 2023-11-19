import * as React from 'react';
import {
  View,
  Text,
  StatusBar,
  ScrollView,
  TextInput,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
// import { FlatList } from 'react-native-gesture-handler';

const colors = {
  themeColor: '#4263ec',
  white: '#fff',
  background: '#f4f6fc',
  greyish: '#a4a4a4',
  tint: '#2b49c3',
};

const Bills = [
  {
    task: 'Bill A',
    icon: 'account-tie',
    theme: '#008b8b',
    stamp: '2nd Shop-Batch',
  },
  {
    task: 'Bill B',
    icon: 'account-tie',
    theme: '#008b8b',
    stamp: '2nd Shop-Batch',
  },
  {
    task: 'Bill B',
    icon: 'account-tie',
    theme: '#008b8b',
    stamp: '3rd Shop-Batch',
  },
  {
    task: 'Bill C',
    icon: 'account-tie',
    theme: '#00ca8b',
    stamp: '3rd Shop-Batch',
  },
  {
    task: 'Bill C',
    icon: 'account-tie',
    theme: '#008b8b',
    stamp: '3rd Shop-Batch',
  },
  {
    task: 'Bill C',
    icon: 'account-tie',
    theme: '#008b8b',
    stamp: '3rd Shop-Batch',
  },
  {
    task: 'Bill C',
    icon: 'account-tie',
    theme: '#008b8b',
    stamp: '3rd Shop-Batch',
  },
];

const Task = ({ task, icon, theme, stamp }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Detailsscreen')}
      Key={stamp}
      style={{
        backgroundColor: colors.white,
        flexDirection: 'row',
        marginHorizontal: 16,
        marginVertical: 4,
        borderRadius: 20,
        paddingVertical: 20,
        paddingHorizontal: 24,
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <MaterialCommunityIcons
          name="google-classroom"
          size={25}
          style={{ color: '#7209b7', marginRight: 10 }}
        />
        <View>
          <Text style={{ fontSize: 16, color: '#343a40', fontWeight: '600' }}>
            {task}
          </Text>
          <Text style={{ color: '#415a77' }}>{stamp}</Text>
        </View>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TouchableOpacity>
          <MaterialCommunityIcons
            name="pencil"
            size={23}
            style={{ color: '#e9c46a80' }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Scanscreen')}>
          <AntDesign
            name="scan1"
            size={25}
            style={{ color: '#ef233c99', marginLeft: 8 }}
          />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const RenderItem = ({ item }) => {
  console.log('item', item)
  return (
    <Task
      task={item.task}
      icon={item.icon}
      theme={item.theme}
      stamp={item.stamp}
    />
  )
};

export default function AllInvoices({navigation}) {
  const [number, onChangeSearch] = React.useState('');
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.themeColor,
      }}>
      <StatusBar barStyle="light-content" backgroundColor={colors.themeColor} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ backgroundColor: colors.themeColor, flex: 1 }}>
          <View
            style={{
              padding: 16,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>

            <TouchableOpacity>
              <AntDesign name="user" size={30} style={{ color: colors.white }} />
            </TouchableOpacity>

            <TouchableOpacity>
              <MaterialCommunityIcons
                name="bell-outline" //
                size={30}
                style={{ color: colors.white }}
              />
            </TouchableOpacity>
          </View>
          <View style={{ padding: 16 }}>
            <Text style={{ color: colors.white, fontSize: 30 }}>
              {'Hello, Aman'}
            </Text>
            <View
              style={{
                paddingHorizontal: 16,
                // paddingVertical: 8,
                flexDirection: 'row',
                justifyContent: 'space-between',
                backgroundColor: '#ffffff30',
                borderRadius: 20,
                marginVertical: 20,
                alignItems: 'center',
                height: 50,
              }}>
              <TouchableOpacity>
                <MaterialCommunityIcons
                  name="magnify" //
                  size={30}
                  style={{ color: colors.white }}
                />
              </TouchableOpacity>
              <View
                style={{ flexDirection: 'row', flex: 1, alignItems: 'center' }}>
                <TextInput
                  style={{
                    backgroundColor: '#ffffff00',
                    flex: 1,
                    color: colors.white,
                    fontSize: 22,
                    marginLeft: 5,
                  }}
                  onChangeText={onChangeSearch}
                  value={number}
                  placeholder="Search"
                  // keyboardType="numeric"
                  placeholderTextColor={colors.white}
                />
                <TouchableOpacity>
                  <MaterialCommunityIcons
                    name="microphone" //
                    size={30}
                    style={{ color: colors.white }}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <MaterialCommunityIcons
                    name="tune" //
                    size={30}
                    style={{ color: colors.white }}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: colors.background,
            borderTopLeftRadius: 20,
            overflow: 'hidden',
            paddingBottom: 20,
          }}>
          <View
            style={{
              padding: 20,
              flexDirection: 'row',
              backgroundColor: colors.background,
              justifyContent: 'space-between',
              alignItems: 'center',
              borderTopLeftRadius: 20,
            }}>
            <Text style={{ fontSize: 24,color:colors.tint }}>Invoices</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('CreateBill')}>
              <MaterialCommunityIcons
                name="plus" //
                size={40}
                style={{
                  color: colors.themeColor,
                  backgroundColor: colors.white,
                  borderRadius: 20,
                  marginHorizontal: 8,
                }}
              />
            </TouchableOpacity>
          </View>
          <FlatList
            data={Bills}
            renderItem={RenderItem}
            keyExtractor={(item) => item.id}
          />
          {Bills.map(task => (
            <Task
              task={task.task}
              icon={task.icon}
              theme={task.theme}
              stamp={task.stamp}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

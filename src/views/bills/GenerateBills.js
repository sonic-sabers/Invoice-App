import { useState } from "react";
import * as React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,

  View,
  ScrollView,
  Button,
  Alert,
} from "react-native";
import dateFormat, { masks } from "dateformat";
import { Picker } from "@react-native-picker/picker";
import { PdfCode } from "../../utils/bill/PdfCode";
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import RNPrint from 'react-native-print';
import Share from "react-native-share";
import colors from "../../utils/colors";

const CreateBill = () => {
  const [name, set_Name] = useState("");
  const [Address, Set_Address] = useState("");
  const [Mobile_No, Set_Mobile_No] = useState("");
  const [Quantity, setQuantity] = useState('');
  const now = new Date();
  const [Invoice, setInvoice] = useState(dateFormat(now, "ddmmyyhhMss"))
  const [Product, Set_Product] = useState("मुरुम");
  const [Total, setTotal] = useState('');
  const [ReceivedBalance, SetReceivedBalance] = useState('');
  const [PaymentType, setPaymentType] = useState('Credit');
  const [RemaningBalance, setRemaningBalance] = useState('Paid');
  const [selectedPrinter, setSelectedPrinter] = React.useState();


  const printToFile = async () => {
    let html = PdfCode(name, Address, Mobile_No, Quantity, Invoice, Product, Total, ReceivedBalance, PaymentType, RemaningBalance);
    // On iOS/android prints the given html. On web prints the HTML from the current page.
    console.log('html', html)
    try {

      const results = await RNHTMLtoPDF.convert({
        html,
        fileName: 'test',
        base64: true,
      })

      await RNPrint.print({ filePath: results.filePath })
      const shareOptions = {
        title: 'Share via',
        message: 'some message',
        url: results.filePath,
        filename: results.filePath
      };
      console.log('File has been results to:', results.filePath);
      await Share.open(shareOptions)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          err && console.log(err);
        });
      set_Name('');
      setInvoice(dateFormat(now, "ddmmyyhhMss"));
      setTotal('');
      setQuantity('');
      SetReceivedBalance('');
      Set_Address('');
      Set_Mobile_No('');


    } catch (err) {
      console.log('err', err)
      Alert.alert("Make shure You have Internet Connection or contact @+91 8530730017");
    }


  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.InputContainer}>
          <Text style={{ color: colors.black, fontSize: 14, marginTop: 16 }}>Name :</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={(text) => set_Name(text)}
            value={name}
            placeholder="Full Name"
            placeholderTextColor={colors.lightblack}
          />
        </View>

        <View style={styles.InputContainer}>
          <Text style={{ color: colors.black, fontSize: 14, marginTop: 16 }}>Address : </Text>
          <TextInput
            style={styles.textInput}
            onChangeText={(text) => Set_Address(text)}
            value={Address}
            placeholder="Address"
            placeholderTextColor={colors.lightblack}
          />
        </View>

        <View style={styles.InputContainer}>
          <Text style={{ color: colors.black, fontSize: 14, marginTop: 16 }}>Mobile No : </Text>
          <TextInput
            style={styles.textInput}
            keyboardType="number-pad"
            onChangeText={(text) => Set_Mobile_No(text)}
            value={Mobile_No}
            placeholder="Mobile No"
            placeholderTextColor={colors.lightblack}
          />
        </View>
        <View style={styles.InputContainer}>
          <Text style={{ color: colors.black, fontSize: 14, marginTop: 16 }}>Product : </Text>
          <View style={styles.PickerContainer}>
            <Picker
              selectedValue={Product}
              placeholder='Product'
              style={{color:colors.lightblack}}

              placeholderTextColor={colors.lightblack}

              onValueChange={(itemValue, itemIndex) => Set_Product(itemValue)}
            >
              {/* 'ग्रिट (Grit)','दगड','Crash Sand','Plaster Sand' */}
              <Picker.Item label="1" value="1" />
              <Picker.Item label="2" value="2" />
              <Picker.Item label="3" value="3" />
              <Picker.Item label="4" value="4" />
              <Picker.Item label="5 (Grit)" value="5 (Grit)" />
              <Picker.Item label="6" value="6" />
              <Picker.Item label="7" value="7" />
              <Picker.Item label="8" value="8" />
            </Picker>
          </View>
        </View>
        <View style={styles.InputContainer}>
          <Text style={{ color: colors.black, fontSize: 14, marginTop: 16 }}>Quantity : </Text>
          <TextInput
            style={styles.textInput}
            keyboardType="numeric"
            onChangeText={(text) => setQuantity(text)}
            value={Quantity}
            placeholder="Quantity"
            placeholderTextColor={colors.lightblack}
          />
        </View>
        <View style={styles.InputContainer}>
          <Text style={{ color: colors.black, fontSize: 14, marginTop: 16 }}>Invoice No : </Text>
          <TextInput
            style={styles.textInput}
            onChangeText={(text) => setInvoice(text)}
            value={Invoice}
            placeholder="Invoice No"
            placeholderTextColor={colors.lightblack}
          />
        </View>
        {/* Total  */}
        <View style={styles.InputContainer}>
          <Text style={{ color: colors.black, fontSize: 14, marginTop: 16 }}>Total : </Text>
          <TextInput
            style={styles.textInput}
            keyboardType="numeric"
            onChangeText={(text) => setTotal(text)}
            value={Total}
            placeholder="Total ₹"
            placeholderTextColor={colors.lightblack}
          />
        </View>

        {/* ReceivedBalance  */}
        <View style={styles.InputContainer}>
          <Text style={{ color: colors.black, fontSize: 14, marginTop: 16 }}>Received Amount : </Text>
          <TextInput
            style={styles.textInput}
            keyboardType="numeric"
            onChangeText={(text) => SetReceivedBalance(text)}
            value={ReceivedBalance}
            placeholder="Received Amount ₹"
            placeholderTextColor={colors.lightblack}
          />
        </View>
        {/* Remaining Balance  */}
        <View style={styles.InputContainer}>
          <Text style={{ color: colors.black, fontSize: 14, marginTop: 16 }}>Remaining Balance : </Text>
          <TextInput
            style={styles.textInput}
            keyboardType="numeric"
            onChangeText={(text) => setRemaningBalance(text)}
            value={RemaningBalance}
            placeholder="Remaining Balance ₹"
            placeholderTextColor={colors.lightblack}
          />
        </View>
        {/* Payment Method  */}
        <View style={styles.InputContainer}>
          <Text style={{ color: colors.black, fontSize: 14, marginTop: 16 }}>Payment Method : </Text>
          <View style={styles.PickerContainer}>
            <Picker
              selectedValue={PaymentType}
              style={{color:colors.lightblack}}
              onValueChange={(itemValue, itemIndex) => setPaymentType(itemValue)}
            >
              {/* 'ग्रिट (Grit)','दगड','Crash Sand','Plaster Sand' */}
              <Picker.Item label="A" value="Credit" />
              <Picker.Item label="B" value="B" />
              <Picker.Item label="C" value="C" />
            </Picker>
          </View>

        </View>
        <View style={styles.CreateInvoiceButton}>
          <Button
            title="Create Invoice"
            onPress={printToFile}
          />
        </View>

      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    //   alignItems: 'center',
    //   justifyContent: 'center',
  },
  tinyLogo: {
    width: 70,
    height: 70,
  },
  button: {
    alignItems: "center",
    backgroundColor: "lightblue",
    padding: 10,
    borderRadius: 4,
  },
  InputContainer: {
    marginTop: 15,
    marginLeft: 15,
    marginRight: 15,
  },
  textInput: {
    // width:100,
    marginTop: 4,
    height: 40,
    borderColor: "#000",
    borderWidth: 1,
    borderRadius: 4,
    padding: 4,
    marginBottom: 6,
    paddingLeft: 12,
    fontSize: 13,
    color:colors.lightblack
  },
  PickerContainer: {
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 4,
    height: 50

  },
  CreateInvoiceButton: {
    marginTop: 15,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 15
  },
  spacer: {
    height: 8
  },
  printer: {
    textAlign: 'center',
  }
});

export default CreateBill;

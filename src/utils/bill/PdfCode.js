import dateFormat, { masks } from "dateformat";

function GetTime(date) {
  var hours = parseInt(dateFormat(date, "hh"));
  var minutes = parseInt(dateFormat(date, "MM"));
  var ampm = hours >= 12 ? "AM" : "PM";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  var strTime = hours + ":" + minutes + " " + ampm;
  return strTime;
}

const PdfCode = (
  name,
  Address,
  Mobile_No,
  Quantity,
  Invoice,
  Product,
  Total,
  ReceivedBalance,
  PaymentType,
  RemainingBalance
) => `
<html>

<head>
<script data-dojo-config="async: 1" src="//ajax.googleapis.com/ajax/libs/dojo/1.10.4/dojo/dojo.js"></script>
  <meta name="viewport"
    content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
</head>

<body>
  <div style="
  min-height: auto;
    width: 100%;
    height : auto;
     background-color: rgba(246, 221, 178, 0.5);
    border: solid 3px #000000;">
    <div style="height: auto;
    width: 100%;
    display: flex;
    justify-content: space-between;

    align-items: center;">
      <div>
      </div>

      <div style="
    display: flex;
    flex-direction: column;
    align-items: flex-start; 
    padding-right: 20px;
        padding-top: 20px;
    ">Invoice</div>

    </div>

    <div style="
        <!-- width: 100%; -->
        height: auto;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
            align-items: flex-start;
            padding:20

        ">
      <div style='margin-left:0'>

        <p>
          Invoice Date<br/>
                Date : ${dateFormat(Date.now(), "dd-mm-yyyy")}<br/>
      </div>
      </p>
      <p>
        Invoice No.<br/>
        ${Invoice}
      </p>
      <p>
        Place to Supply <br/>
       Delhi
      </p>
    </div>
    <div style="
        height: auto;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
            align-items: flex-start;
            padding:20;
    margin-top:-15px;

        ">
      <p>
        Bill To :<br/>
                    Name : ${name} <br/>
                    Address : ${Address}<br/>
                    Contact No : +91 ${Mobile_No}
      </p>
      <p>
        Bill From :<br/>
                    Name : ${name} <br/>
                    Address : ${Address}<br/>
                    Contact No : +91 ${Mobile_No}
    </div>
    <div style="
        height: auto;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
            align-items: flex-start;
            padding:20;
    margin-top:-15px;
        ">
      <div>
        <p>
          Supply Type Code :<br/>
  EOPXS
        </p>
        <p>
          IBN: <br/>
43242 3432423 12312ADADV
        </p>
      </div>
      <p>
        Document Type Code<br/>
EOPXS
      </p>

      <div>
        <p>
          QR Code </p>
        <img style="
        height: 90px;
    width: 90px;
    margin-right:15px;
        " src="https://w7.pngwing.com/pngs/619/184/png-transparent-qr-code-barcode-scanners-scanner-q-text-rectangle-logo-thumbnail.png" />
      </div>
    </div>


    <div>

      <div style="height: auto;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;">
        <table style="width:100%; border-collapse: collapse;">
          <tr style="background-color: rgba(255, 0, 62, 0.8); color: white;">
            <th style="height: 30px;">#</th>
            <th style="height: 30px;">Item Name</th>
            <th style="height: 30px;">Price/Unit</th>
            <th style="height: 30px;">QTY</th>
            <th style="height: 30px;">Discount</th>
            <th style="height: 30px;">GST</th>
            <th style="height: 30px;">Amount</th>
          </tr>
          <tr style="background-color: rgba(246, 221, 178, 0.8);">
            <td style="text-align: center;height: 30px;">1</td>
            <td style="text-align: center;height: 30px;">${Product}</td>
            <td style="text-align: center;height: 30px;">${parseFloat(
              parseFloat(Total) / parseFloat(Quantity)
              ).toFixed(2)}</td>
            <td style="text-align: center;height: 30px;">${Quantity}</td>
            <td style="text-align: center;height: 30px;">₹0</td>
            <td style="text-align: center;height: 30px;">₹0</td>
            <td style="text-align: center;height: 30px;">₹ ${Total}</td>
          </tr>

        </table>
        <div style="width:100%;align-self: flex-end; display: flex; flex-direction: row;">
          <div style="width:40%"></div>
          <table style="width: 50%; align-self: flex-end;">
            <tr>
              <th style="text-align: start;">Sub Total: </th>
              <td style="text-align: center;height: 30px;">₹ ${Total}</td>
            </tr>
            <tr style="border-bottom: solid ;">
              <th style="text-align: start;">GST </th>
              <td style="text-align: center;height: 30px;">₹ ${ReceivedBalance}</td>
            </tr>

            <tr style="border-bottom: solid ;">
              <th style="text-align: start;">Total Due: </th>
              <td style="text-align: center;height: 30px;">₹ ${Total+ReceivedBalance}</td>
            </tr>

          </table>
        </div>
      </div>
      <div style="
        <!-- width: 100%; -->
        height: auto;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
            align-items: flex-start;
            padding:20

        ">
        <div style='margin-left:0'>

          <p>
            UPI ID<br/>
Random@ybl
          </p>
          <p>
            CUSTOM FIELD<br/>
Custom Field info
          </p>
          <p>
            CUSTOM FIELDS<br/>
random@123
          </p>
        </div>
          <div  style="text-align:end"
            <p>
              Signature </p>
            <img style="
        height: 90px;
    width: 90px;
    margin-right:15px;
        " src="https://e7.pngegg.com/pngimages/895/900/png-clipart-electronic-signature-signature-miscellaneous-angle.png" />
        <div style='display:flex,align-items:flex-end'>
          <p>
            CUSTOM FIELDS<br/>
CSCDSCDCDSCDCSDc
          </div>
          
          </p>
          </div>

      </div>

    </div>
</body>

</html>
`;


export { PdfCode };

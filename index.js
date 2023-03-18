let property = new Array();
let unit = new Array();

property[1] = "Length";
unit[1] = new Array(
  "Meter",
  "Centimeter",
  "Kilometer",
  "Foot",
  "Inch",
  "Millimeter"
);

property[2] = "Volume & Capacity";
unit[2] = new Array(
  "Cubic Meter (m^3)",
  "Cubic centimeter",
  "Cubic millimeter",
  "Cubic inch (in^3)",
  "Liter (new)"
);

property[3] = "Time";
unit[3] = new Array("Second", "Day", "Hour", "Minute", "Month", "Year");

let time_arr = [
  {
    input: "Year",
    Second: 3.154e7,
    Day: 365,
    Hour: 8760,
    Minute: 525600,
    Month: 12,
  },
  {
    input: "Month",
    Second: 2.628e6,
    Day: 30,
    Hour: 730,
    Minute: 43800,
    Year: 0.0833334,
  },
  {
    input: "Minute",
    Second: 60,
    Day: 0.000694444,
    Hour: 0.0166667,
    Year: 525600,
    Month: 12,
  },
  {
    input: "Hour",
    Second: 3600,
    Day: 0.0416667,
    Year: 0.000114,
    Minute: 60,
    Month: 0.0013,
  },
  {
    input: "Day",
    Second: 86400,
    Year: 365,
    Hour: 24,
    Minute: 1440,
    Month: 0.032,
  },
  {
    input: "Second",
    Year: 3.154e7,
    Day: 1.1574e-5,
    Hour: 0.00027,
    Minute: 0.0166667,
    Month: 3.8052e-7,
  },
];

let Lenght_arr = [
  {
    input: "Kilometer",
    Meter: 1000,
    Centimeter: 100000,
    Foot: 3280.84,
    Inch: 39370.1,
    Millimeter: 1000000,
  },
  {
    input: "Meter",
    Kilometer: 0.001,
    Centimeter: 100,
    Foot: 3.28084,
    Inch: 39.3701,
    Millimeter: 1000,
  },
  {
    input: "Centimeter",
    Meter: 0.01,
    Kilometer: 1e-5,
    Foot: 0.0328084,
    Inch: 0.393701,
    Millimeter: 10,
  },
  {
    input: "Foot",
    Meter: 0.3048,
    Centimeter: 30.48,
    Kilometer: 0.0003048,
    Inch: 12,
    Millimeter: 304.8,
  },
  {
    input: "Inch",
    Meter: 0.0254,
    Centimeter: 2.54,
    Foot: 0.0833333,
    Kilometer: 2.54e-5,
    Millimeter: 25.4,
  },
  {
    input: "Millimeter",
    Meter: 0.001,
    Centimeter: 0.1,
    Foot: 0.00328084,
    Inch: 0.0393701,
    Kilometer: 1e-6,
  },
];

const UpdateUnitMenu = (propMenu, unit_menu) => {
  var name;
  var i;
  console.log(unit_menu);
  //selects the property arr index
  name = propMenu.value;
  i = propMenu.selectedIndex;
  console.log(i);
  // Updates the units displayed in the unitMenu
  FillMenuWithArray(unit_menu, unit[i]);
};

const FillMenuWithArray = (unit_menu, myArr) => {
  var i;
  // mymenu is select
  console.log(unit_menu);
  console.log(myArr[0]);
  // sel = document.getElementById("unit_menu1");
  if (unit_menu.length > 0) {
    removeOptions(unit_menu);
  }
  for (i = 0; i < myArr.length; i++) {
    var opt = document.createElement("option");
    opt.innerHTML = myArr[i];
    opt.value = myArr[i];
    unit_menu.appendChild(opt);
  }
};

function removeOptions(selectElement) {
  var i,
    L = selectElement.options.length - 1;
  for (i = L; i >= 0; i--) {
    selectElement.remove(i);
  }
}

const ConvertFromTo = () => {
  var unit_arr = document.getElementById("main_menu").value;

  if (unit_arr === "length") {
    // console.log(Lenght_arr);
    calculate(Lenght_arr);
  } else {
    calculate(time_arr);
  }
};

const calculate = (Arr) => {
  var inpVal = document.getElementById("input").value;
  var outval = document.getElementById("output");

  var inpOpt = document.getElementById("unit_menu1").value;
  var outOpt = document.getElementById("unit_menu2").value;

  console.log(inpVal);
  Arr.map((obj) => {
    if (obj.input === inpOpt) {
      let right = outOpt;
      if (obj.hasOwnProperty(right)) {
        //stores the value of right
        let multiply = obj[right];
        let res = inpVal * multiply;
        outval.value = res;
        console.log(multiply);
      }
    }
  });
};

// Arr = [
//   {
//    “left” : “km”,
//   “meter”:1000,
//   “cm”:1000*100,
//   },
//   {
//   “left” : “km”,
//   “meter”:1000,
//   “cm”:1000*100,
//   }

//   ]

//   Arr.map((obj)=>{
//   If(Obj.left ===”km”){
//   Var right = cm;
//      Let multiply = Right.cm ;
//     Reslut = input * multiprty;

//   }
//   })

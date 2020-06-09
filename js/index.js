//Variables
//Pick the content variable that are showed in the window.
const modalColor = document.querySelector(`.modal__color`);
const colorImg = document.querySelector(`.colorImg`);
//Variables uniques of the modal
const types = Array.from(modalColor.querySelectorAll(`.typeColor`));
const btnForm = modalColor.querySelector(`.random`);
const result = modalColor.querySelector(`.result`);
const closeBtn = modalColor.querySelector(`.close`);

//Functions

function hndClick() {//Fn handler click show & hide
  modalColor.classList.toggle(`show`);
  colorImg.classList.toggle(`hide`);
};

function rdmNmb(range) {//Fn random number 
  return Math.floor(Math.random()*(range + 1))
};

function hndSubmit(e) {//Fn handler submit event
  e.preventDefault();
  const typesChecked = types.filter(type => type.checked === true);//every checkbox checked
  const rdmChecked = typesChecked[rdmNmb(typesChecked.length - 1)]; //Random check
  let rdmColor = `Pick your type`;//Defatul for the result
  if(rdmChecked) {
    const rdmNameCheck = typesChecked[rdmNmb(typesChecked.length - 1)].name;
    switch (rdmNameCheck) {
      case `rgb`:
        let red = rdmNmb(255);//max for rgb
        let green = rdmNmb(255);
        let blue = rdmNmb(255);
        rdmColor = `rgb(${red}, ${green}, ${blue})`;
      break;
      case `hsl`:
        let hue = rdmNmb(360);//360 the max for hue
        let saturation = `${rdmNmb(100)}%`;
        let lightness = `${rdmNmb(100)}%`;
        rdmColor = `hsl(${hue}, ${saturation}, ${lightness})`;
      break;
      case `hex`:
        const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
        const hexfill = Array(6).fill(`1`).map(a=> hex[rdmNmb(hex.length-1)]).join(``);//6max digits
        rdmColor = `#${hexfill}`;
      break;
      case `sim`:
        const defaultColors = "salmon,darksalmon,lightcoral,indianred,crimson,firebrick,red,darkred,coral,tomato,orangered,gold,orange,darkorange,lightyellow,lemonchiffon,lightgoldenrodyellow,papayawhip,moccasin,peachpuff,palegoldenrod,khaki,darkkhaki,yellow,lawngreen,chartreuse,limegreen,lime,forestgreen,green,darkgreen,greenyellow,yellowgreen,springgreen,mediumspringgreen,lightgreen,palegreen,darkseagreen,mediumseagreen,seagreen,olive,darkolivegreen,olivedrab,lightcyan,cyan,aqua,aquamarine,mediumaquamarine,paleturquoise,turquoise,mediumturquoise,darkturquoise,lightseagreen,cadetblue,darkcyan,teal,powderblue,lightblue,lightskyblue,skyblue,deepskyblue,lightsteelblue,dodgerblue,cornflowerblue,steelblue,royalblue,blue,mediumblue,darkblue,navy,midnightblue,mediumslateblue,slateblue,darkslateblue,lavender,thistle,plum,violet,orchid,fuchsia,magenta,mediumorchid,mediumpurple,blueviolet,darkviolet,darkorchid,darkmagenta,purple,indigo,pink,lightpink,hotpink,deeppink,palevioletred,mediumvioletred,white,snow,honeydew,mintcream,azure,aliceblue,ghostwhite,whitesmoke,seashell,beige,oldlace,floralwhite,ivory,antiquewhite,linen,lavenderblush,mistyrose,gainsboro,lightgray,silver,darkgray,gray,dimgray,lightslategray,slategray,darkslategray,black,cornsilk,blanchedalmond,bisque,navajowhite,wheat,burlywood,tan,rosybrown,sandybrown,goldenrod,peru,chocolate,saddlebrown,sienna,brown,maroon,"; //every standart color
        const dftColorsArr = defaultColors.split(`,`);
        rdmColor = dftColorsArr[rdmNmb(dftColorsArr.length - 1)].toUpperCase();
        break;
      default:
        rdmColor = `Pick your type of color`
        break;
      }
    }
  result.style.backgroundColor = rdmColor;
  result.innerHTML = rdmColor;
  btnForm.innerHTML = rdmColor;
}

//Listeners
modalColor.addEventListener(`submit`, hndSubmit);
colorImg.addEventListener(`click`, hndClick);
closeBtn.addEventListener(`click`, hndClick);

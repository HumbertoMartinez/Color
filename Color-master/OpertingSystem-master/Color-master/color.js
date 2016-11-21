//Declare the Color Object with our new keyword below here.


/*
** rgb is an array that hold the color values.
** first is red -> R, then green -> G, and blue -> B
** Example
*/

Color.isColor = function(rgb){
  //each color must be between 0 and 255. Also can be equal.

  let redworks = (rgb[0] >= 0) && (rgb[0] <= 255);
  let greenworks = (rgb[1] >= 0) && (rgb[1] <= 255);
  let blueworks = (rgb[2] >= 0) && (rgb[2] <= 255);

  if(redworks && greenworks && blueworks){
    return true;
  }
  else{
    return false;
  }
};

Color.redIntensity = function(rgb){
  let redIntensity = (rgb[0]/255)*100
  redIntensity = Math.Round(redIntensity)
  return redIntensity;
};

//greenIntensity
Color.greenIntensity = function(rgb){
  let greenIntensity = (rgb[0]/255)*100
  greenIntensity = Math.Round(greenIntensity)
  return greenIntensity;
};

//blueIntensity
Color.blueIntensity = function(rgb){
  let blueIntensity = (rgb[0]/255)*100
  blueIntensity = Math.Round(blueIntensity)
  return blueIntensity;
};

//brightness
Color.brightness = function(rgb){}
  var bright = (Color.redIntensity(rgb) + Color.greenIntensity(rgb) + Color.blueIntensity(rgb))/3;
  return bright;

}

//complement
Color.complement = function(rgb){
  var comp = [];
  for (var c=0;c<3;c++){
    comp[c]=255 - rgb[c];
  }
  return comp;
}

import React from "react";
import TextTransition, {presets} from "react-text-transition";

const words = [
  "Developer",
  "Designer",
  "Photographer"
];

export default function Tagline(){
  const [index, setIndex] = React.useState(0);

  React.useEffect(() =>{
    const intervalId = setInterval(() =>
      setIndex(index => index+1),
      1000
      );
  return () => clearTimeout(intervalId);
  }, []);

  return(
    <h2 className = "info">
      <TextTransition
        text={ words[index % words.length] }
        springConfig={ presets.wobbly }
      />
    </h2>
    )
}
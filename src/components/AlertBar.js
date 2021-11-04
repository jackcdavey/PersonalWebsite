
export default function AlertBar(){
  return(
     <div id="alertBar">Test 
     <span id='close' onclick='this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode); return false;'>x</span>

     </div>
    );
}


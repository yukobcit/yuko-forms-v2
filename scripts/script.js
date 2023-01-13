let otherText = document.querySelector('[name="referredby"]');
otherText.onchange = event => { 
    const other = otherText.value;
   // console.log(otherText.value);
    if(other =="magic"){
        document.getElementById('hidden').style.display = "block";
    }else if (other =="other"){
        // blockで表示
        document.getElementById('hidden').style.display = "block";
    }else{
        document.getElementById('hidden').style.display = "none";
    }
}


function calculate(){
  clear()
  amt = document.getElementById('amount').value;
  dur = document.getElementById('duration').value;
  //opt = document.getElementById('opt').checked;
  e = document.getElementById("opt");
  opt = e.options[e.selectedIndex].value;


  if(opt == '1'){
    cal = (amt*dur*13)/(100*12)
    tp = parseInt(amt)+cal
    if (amt=='' || dur==''){
      document.getElementById("err").innerHTML = "Fields cannot be blank."
    }else{

      document.getElementById("msg1").innerHTML = "Your Monthly Interest is: N"+cal.toFixed(2)
      document.getElementById("msg2").innerHTML = "After "+dur+" months your total money will be N"+tp.toFixed(2)
    }
  }

  else if(opt == '2'){
    cal = (amt*dur*10)/(100*12)
    tp = parseInt(amt)+cal
    if (amt=='' || dur==''){
      document.getElementById("err").innerHTML = "Fields cannot be blank."
    }else{

      document.getElementById("msg1").innerHTML = "Your Monthly Interest is: N"+cal.toFixed(2)
      document.getElementById("msg2").innerHTML = "After "+dur+" months your total money will be N"+tp.toFixed(2)
    }
}

else if(opt == '3'){
  cal = (amt*dur*10)/(100*12)
  tp = parseInt(amt)+cal
  if (amt=='' || dur==''){
    document.getElementById("err").innerHTML = "Fields cannot be blank."
  }else{

    document.getElementById("msg1").innerHTML = "Your Monthly Interest is: N"+cal.toFixed(2)
    document.getElementById("msg2").innerHTML = "After "+dur+" months your total money will be N"+tp.toFixed(2)
  }
}
  event.preventDefault();
}

function clear(){
  document.getElementById("msg1").innerHTML = ''
  document.getElementById("msg2").innerHTML =''
  document.getElementById("err").innerHTML = ''
}

function getInputValueById(Id){
    const addMoney = document.getElementById(Id).value;
    const inputMoney = parseFloat(addMoney);

    const addMoneyFeni = document.getElementById(Id).value;
    const inputMoneyFeni = parseFloat(addMoneyFeni);

    const addMoneyQuota = document.getElementById(Id).value;
    const inputMoneyQuota = parseFloat(addMoneyQuota);

    const remainMoney = document.getElementById(Id).value;
    const remainInput = parseFloat(remainMoney);
  
    
   
    return inputMoney,remainInput,inputMoneyFeni,inputMoneyQuota;
}
 function getInputMoneyById(Id){
     const balanceAmount = document.getElementById(Id).innerText;
     const balanceNUmber = parseFloat(balanceAmount)
     return balanceNUmber;

 }


 function showSectionById(id){


document.getElementById('history').classList.add('hidden');
document.getElementById(id).classList.remove('hidden')
}
function showSectionById(id){


    document.getElementById('history-feni').classList.add('hidden');
    document.getElementById(id).classList.remove('hidden')
    }

function showSectionById(id){


        document.getElementById('history-quota').classList.add('hidden');
        document.getElementById(id).classList.remove('hidden')
}
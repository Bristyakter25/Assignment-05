document.getElementById('btn-add-money')
.addEventListener('click',function(event){
    event.preventDefault();
   const addMoney = getInputValueById("add-money");
   if(Number.isInteger(addMoney) && addMoney>0){
    const balance = getInputMoneyById('update-balance');
    const updatedBalance = balance + addMoney;


    const remain = getInputMoneyById('remain-balance');
    const remainBalance = remain - addMoney;
   
    
    document.getElementById('update-balance').innerText = updatedBalance;
    document.getElementById('remain-balance').innerText = remainBalance;

    document.getElementById("my_modal_1").showModal();
   }
   else{
    alert("failed");
   }
//    history section
   const div = document.createElement('div');

   const amount =document.createElement('p');
   amount.innerText = `${addMoney} Taka is Donated for famine-2024 at Feni, Bangladesh`;
  div.classList.add('donation-entry');
  amount.classList.add('amount-style');
   div.appendChild(amount); 

   const currentDate = new Date();
   const formattedDate = `Date : ${currentDate.toString()}`;
   const date = document.createElement('p');
   date.innerText = formattedDate;
   div.classList.add('donation-entry');
   date.classList.add('date-style');
   div.appendChild(date); 
document.getElementById('history').appendChild(div);
})
// feni fund
document.getElementById('btn-add-money-2')
.addEventListener('click',function(event){
    event.preventDefault();
   const addMoneyFeni = getInputValueById("add-money-feni");
   
   if(Number.isInteger(addMoneyFeni) && addMoneyFeni>0){
    const balanceFeni = getInputMoneyById('update-balance-feni');
    const updatedBalanceFeni = balanceFeni + addMoneyFeni;


    const remain = getInputMoneyById('remain-balance');
    const remainBalance = remain - addMoneyFeni;
   
    
    document.getElementById('update-balance-feni').innerText = updatedBalanceFeni;
    document.getElementById('remain-balance').innerText = remainBalance;

    document.getElementById("my_modal_1").showModal();
}
   else{
  alert("failed");}
// history section

  const div = document.createElement('div');

   const amount2 =document.createElement('p');
   amount2.innerText = `${addMoneyFeni} Taka is Donated for Flood Relief in Feni,Bangladesh`;
  div.classList.add('donation-entry');
  amount2.classList.add('amount-style');
   div.appendChild(amount2); 

   

   const currentDate2 = new Date();
   const formattedDate2 = `Date : ${currentDate2.toString()}`;
   const date2 = document.createElement('p');
   date2.innerText = formattedDate2;
   div.classList.add('donation-entry');
   date2.classList.add('date-style');
   div.appendChild(date2); 

   document.getElementById('history-feni').appendChild(div);
    
})

document.getElementById('btn-add-money-3')
.addEventListener('click',function(event){
    event.preventDefault();
   const addMoneyQuota = getInputValueById("add-money-quota");
   
   if(Number.isInteger(addMoneyQuota) && addMoneyQuota>0){
    const balanceQuota = getInputMoneyById('update-balance-quota');
    const updatedBalanceQuota = balanceQuota + addMoneyQuota;


    const remain = getInputMoneyById('remain-balance');
    const remainBalance = remain - addMoneyQuota;
   
    
    document.getElementById('update-balance-quota').innerText = updatedBalanceQuota;
    document.getElementById('remain-balance').innerText = remainBalance;

    document.getElementById("my_modal_1").showModal();
   
   }
   else{
    alert("failed");
   }

   const div = document.createElement('div');

   const amount3 =document.createElement('p');
   amount3.innerText = `${addMoneyQuota} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh`;
  div.classList.add('donation-entry');
  amount3.classList.add('amount-style');
   div.appendChild(amount3); 

   const currentDate3 = new Date();
   const formattedDate3 = `Date : ${currentDate3.toString()}`;
   const date3 = document.createElement('p');
   date3.innerText = formattedDate3;
   div.classList.add('donation-entry');
   date3.classList.add('date-style');
   div.appendChild(date3); 

   document.getElementById('history-quota').appendChild(div);

//    modal


});

// document.getElementById("closeModal").addEventListener("click", function () {
//     // Hide the modal
//     document.getElementById("donationModal").classList.remove("active");

  

  

// button clickable
const historyButton =document.getElementById('history-btn');
const assistantButton =  document.getElementById('assistant-btn');



historyButton.addEventListener('click',function(){
    
    historyButton.classList.add(
      'bg-[#B4F461]'
    );
    
    assistantButton.classList.remove(
        'bg-[#B4F461]'
    );
    document.getElementById('donation-section').classList.add('hidden');
   
})

assistantButton.addEventListener('click',function(){
   
    assistantButton.classList.add(
       'bg-[#B4F461]' 
    );
    
    historyButton.classList.add(
        'bg-[#B4F461]'
    );
    document.getElementById('history-section').classList.add('hidden'); 
  
    
})
const historySection = document.getElementById('history-section');
const donationSection = document.getElementById('donation-section');
 historyButton.addEventListener('click',function(){
    historySection.classList.remove('hidden');
 })
 assistantButton.addEventListener('click',function(){
    donationSection.classList.remove('hidden');
 })

// const historyBtn = document.getElementById('history-btn');
//     const donationBtn = document.getElementById('donation-btn');
//     const historySection = document.getElementById('history-section');
//     const donationSection = document.getElementById('donation-section');

//     historyBtn.addEventListener('click', function() {
//         historySection.classList.remove('hidden');
//         donationSection.classList.add('hidden');
//     });


//     donationBtn.addEventListener('click', function() {
//         donationSection.classList.remove('hidden');
//         historySection.classList.add('hidden');
//     });





 


   


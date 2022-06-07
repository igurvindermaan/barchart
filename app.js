const switches = document.querySelectorAll('.switch');
const bars = document.querySelectorAll('.bar');
const years = document.querySelectorAll('.year');
const chartMoney = document.querySelectorAll('.chart-money');
let click = false;

// base amount

const baseAmounts = {
    benefits: 20400,
    target: 1700,
    signOn: 10000,
    equity: 77500,
    base: 100000

}



// click toggle
switches.forEach((el) => {
    el.addEventListener('click', () => {
        el.classList.toggle('switch-off');
        const value = `${el.dataset.category}`;
        bars.forEach(bar => {
            if(bar.dataset.category == el.dataset.category){
                bar.classList.toggle('bar-hide')
            }         
        });
        moneyDeduct(baseAmounts[`${value}`]);
        addMoney(baseAmounts[`${value}`]);
    })
})




// functionality
years.forEach(el => {
    const yearMoney = Number( el.querySelector('.chart-money').innerHTML.slice(1).split(',').join(''));
    const yearBase = el.querySelector('.base-salary');
    const yearEquity = el.querySelector('.equity');
    const yearSignOn = el.querySelector('.sign-on');
    const yearTarget = el.querySelector('.target');
    const yearBenefit = el.querySelector('.benefits');
    let percentage;

    // height calculator
    function heightCalc(employBenefit){
        percentage = employBenefit / yearMoney * 100;
        return  percentage * 500   / 100;
    }

    const baseHeight =   heightCalc(baseAmounts.base);
    const equityHeight = heightCalc(baseAmounts.equity)
    const signonHeight = heightCalc(baseAmounts.signOn);
    const targetHeight = heightCalc(baseAmounts.target);
    const benefitHeight = heightCalc(baseAmounts.benefits);

    yearBase.style.height = `${baseHeight}px`;
    yearEquity.style.height = `${equityHeight}px`;
    yearSignOn.style.height = `${signonHeight}px`;
    yearTarget.style.height = `${targetHeight}px`;
    yearBenefit.style.height = `${benefitHeight}px`;


    if(el.id =='year-2'  || el.id =='year-3' || el.id =='year-4'){
        yearSignOn.style.height = 0;
    }

})

// deduct amount on toggle off

function moneyDeduct (value){
    let chartMoneyNumber;

    chartMoney.forEach(el => {
      chartMoneyNumber = Number(el.innerHTML.slice(1).split(',').join(''));
      if(!click){
        const updatedMoney =  `$${chartMoneyNumber - value}`;
        el.innerHTML = updatedMoney;

    }
    });
    click = click; 
}

// add amount on toggle on
function addMoney(value){
    let chartMoneyNumber;
    chartMoney.forEach(el => {
      chartMoneyNumber = Number(el.innerHTML.slice(1).split(',').join(''));
      
      if(click){
        const updatedMoney =  `$${chartMoneyNumber + value}`;
        el.innerHTML = updatedMoney;
    }
    });
    click = !click; 

}

const switches = document.querySelectorAll('.switch');
const bars = document.querySelectorAll('.bar');
const years = document.querySelectorAll('.year');

// base amount
const benefit = 20400;
const target = 1700;
const signOn = 10000;
const equity = 77500;
const base = 100000;




// click toggle
switches.forEach((el) => {
    el.addEventListener('click', () => {
        el.classList.toggle('switch-off');
        bars.forEach(bar => {
            if(bar.dataset.category == el.dataset.category){
                bar.classList.toggle('bar-hide')
            }         
        });
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

    const baseHeight =   heightCalc(base);
    const equityHeight = heightCalc(equity)
    const signonHeight = heightCalc(signOn);
    const targetHeight = heightCalc(target);
    const benefitHeight = heightCalc(benefit);
  
    console.log(typeof heightCalc(base));
    yearBase.style.height = `${baseHeight}px`;
    yearEquity.style.height = `${equityHeight}px`;
    yearSignOn.style.height = `${signonHeight}px`;
    yearTarget.style.height = `${targetHeight}px`;
    yearBenefit.style.height = `${benefitHeight}px`;


    if(el.id =='year-2'  || el.id =='year-3' || el.id =='year-4'){
        yearSignOn.style.height = 0;
    }

})



// Function to calculate
function calculate() {

    // Clear previous error messages
    clearErrorMessages();
  
    // Get input values
    const capital = parseFloat(document.getElementById("inputCapital").value);
    const riskPercentageOnCapital = parseFloat(document.getElementById("riskPercentageList").value);
  
    const entryPrice = parseFloat(document.getElementById("inputEntryPrice").value);
    const targetPrice = parseFloat(document.getElementById("inputTargetPrice").value);
    const stopLossPrice = parseFloat(document.getElementById("inputStopLossPrice").value);
  
    // Get error elements
    const capitalErrorElement = document.getElementById('capitalError');
    const entryPriceErrorElement = document.getElementById('entryPriceError');
    const targetPriceErrorElement = document.getElementById('targetPriceError');
    const stopLossPriceErrorElement = document.getElementById('stopLossPriceError');
  
  
    // Validate inputs
    if (!validateInputs()) {
      return;
    }
  
    const profitPerShareOnTarget = (targetPrice - entryPrice).toFixed(2);
    const lossPerShareOnStopLoss = (entryPrice - stopLossPrice).toFixed(2);
  
    // Calculate values
    let quantityToBuy = Math.floor((capital * riskPercentageOnCapital) / lossPerShareOnStopLoss);
  
    let capitalRequired = (quantityToBuy * entryPrice).toFixed(2);
  
    // Adjust quantityToBuy if capitalRequired is greater than capital
    if (capitalRequired > capital) {
        quantityToBuy = Math.floor((capital * (riskOnCapital / 100)) / entryPrice);
        capitalRequired = calculateCapitalRequired(quantityToBuy, entryPrice);
    }
  
  
    riskRewardRatioString = calculateRiskRewardRatio(profitPerShareOnTarget,lossPerShareOnStopLoss);
  
    const totalProfitOnTarget = (quantityToBuy * profitPerShareOnTarget).toFixed(2);
    const totalLossOnStopLoss = (quantityToBuy * lossPerShareOnStopLoss).toFixed(2);
  
    // Update HTML with calculated values
    document.getElementById("stockQuantity").textContent = quantityToBuy;
    document.getElementById("outputCapitalRequired").textContent = "₹" + capitalRequired;
    document.getElementById("outputCapitalRequiredPercentage").textContent = ((capitalRequired / capital) * 100).toFixed(2) + "%";
  
    
    document.getElementById("outputRiskRatio").textContent = "1:";
    document.getElementById("outputRewardRatio").textContent = riskRewardRatioString;
    
    document.getElementById("outputPotentialProfitOnTarget").textContent = "₹" + totalProfitOnTarget;
    document.getElementById("outputPotentialProfitOnTargetPercentage").textContent = ((totalProfitOnTarget / capitalRequired) * 100).toFixed(2) + "%";
    document.getElementById("outputPotentialProfitPerShare").textContent = "(₹" + profitPerShareOnTarget + " per share)";
  
    document.getElementById("outputPotentialLossOnStopLoss").textContent = "₹" + totalLossOnStopLoss;
    document.getElementById("outputPotentialLossOnStopLossPercentage").textContent = ((totalLossOnStopLoss / capitalRequired) * 100).toFixed(2) + "%";
    document.getElementById("outputPotentialLossPerShare").textContent = "(₹" + lossPerShareOnStopLoss + " per share)";
  
  
    // Function to validate input values
    function validateInputs() {
  
      if (isNaN(capital) || capital <= 0) {
          capitalErrorElement.innerText = 'Please enter valid Capital amount.';
          return false;
      }
  
      if (capital > 999999999.99) {
          capitalErrorElement.innerText = 'The Capital amount must be between ₹1 - ₹999999999.99';
          return false;
      }
  
      if (isNaN(entryPrice) || entryPrice <= 0) {
        entryPriceErrorElement.innerText = 'Please enter valid Entry Price!';
        return false;
      }
  
      if(entryPrice > capital){ 
        entryPriceErrorElement.innerText = `Entry Price must be less than or equal to Capital (₹${capital})`;
        return false;
      }
  
  
      if (isNaN(targetPrice) || targetPrice <= 0) {
        targetPriceErrorElement.innerText = 'Please enter valid Target Price!';
        return false;
      }
  
      if(entryPrice >= targetPrice){ 
        targetPriceErrorElement.innerText = `Target Price must be greater than Entry Price (₹${entryPrice})`;
        return false;
      }
  
  
      if (isNaN(stopLossPrice) || stopLossPrice <= 0) {
        stopLossPriceErrorElement.innerText = 'Please enter valid Stop-Loss Price!';
        return false;
      }
  
      if (stopLossPrice >= entryPrice) {
        stopLossPriceErrorElement.innerText = `Stop-Loss Price must be less than Entry Price (₹${entryPrice})`;
        return false;
      }
  
      return true;
    }
  
    // Function to clear error messages
    function clearErrorMessages() {
      document.getElementById('capitalError').innerText = '';
      document.getElementById('entryPriceError').innerText = '';
      document.getElementById('targetPriceError').innerText = '';
      document.getElementById('stopLossPriceError').innerText = '';
    }
  
  
  }
  
  
  function calculateRiskRewardRatio(potentialProfit, potentialLoss) {
    if (potentialLoss === 0) {
      throw new Error("Potential loss cannot be zero.");
    }
  
    // Ensure both profit and loss are positive
    const profit = Math.abs(potentialProfit);
    const loss = Math.abs(potentialLoss);
  
    // Calculate and format the ratio in "1:X" form
    const ratio = profit / loss;
    const ratioString = `${ratio.toFixed(2)}`;
  
    return ratioString;
  }
  
  
  function handleRiskChange(src) {
    capital = parseFloat(document.getElementById("inputCapital").value);
    
    if (isNaN(capital) || capital <= 0) {
          return;
    }
  
    riskAmount = (capital*parseFloat(src.value)).toFixed(2);
    document.getElementById("riskAmount").innerText = `₹${riskAmount}`;
    
  }
function convertToWords() {
    const capitalInput = document.getElementById('inputCapital');
    const capitalInWords = document.getElementById('capitalInWords');

    const capitalAmount = parseFloat(capitalInput.value).toFixed(2);
    
    if (isNaN(capitalAmount) || capitalAmount <= 0) {
        capitalInWords.innerText = '';
        return;
    }
    
    if (capitalAmount > 999999999.99) {
        capitalInput.valueAsNumber = 999999999.99;
        capitalInWords.innerText = '';
        document.getElementById('capitalError').innerText = 'The Capital amount must be between ₹1 - ₹999999999.99';
        return;
    }

    if(capitalAmount > 0){
        document.getElementById('capitalError').innerText = '';
    }
    
    const words = convertAmountInNumberToWords(capitalAmount);
    capitalInWords.innerText = `(${words})`;


    
    capital = parseFloat(document.getElementById("inputCapital").value);
    
    if (isNaN(capital) || capital <= 0) {
            return;
    }

    selectedRiskPercentage = parseFloat(document.getElementById("riskPercentageRange").value);
    riskAmount = (capitalAmount*(selectedRiskPercentage/100)).toFixed(2);

    document.getElementById("riskAmount").innerText = `₹${riskAmount}`;
}

function Rs(amount) {
    var words = new Array();
    words[0] = 'Zero';
    words[1] = 'One';
    words[2] = 'Two';
    words[3] = 'Three';
    words[4] = 'Four';
    words[5] = 'Five';
    words[6] = 'Six';
    words[7] = 'Seven';
    words[8] = 'Eight';
    words[9] = 'Nine';
    words[10] = 'Ten';
    words[11] = 'Eleven';
    words[12] = 'Twelve';
    words[13] = 'Thirteen';
    words[14] = 'Fourteen';
    words[15] = 'Fifteen';
    words[16] = 'Sixteen';
    words[17] = 'Seventeen';
    words[18] = 'Eighteen';
    words[19] = 'Nineteen';
    words[20] = 'Twenty';
    words[30] = 'Thirty';
    words[40] = 'Forty';
    words[50] = 'Fifty';
    words[60] = 'Sixty';
    words[70] = 'Seventy';
    words[80] = 'Eighty';
    words[90] = 'Ninety';
    var op;
    amount = amount.toString();
    var atemp = amount.split('.');
    var number = atemp[0].split(',').join('');
    var n_length = number.length;
    var words_string = '';
    if (n_length <= 9) {
        var n_array = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0);
        var received_n_array = new Array();
        for (var i = 0; i < n_length; i++) {
            received_n_array[i] = number.substr(i, 1);
        }
        for (var i = 9 - n_length, j = 0; i < 9; i++, j++) {
            n_array[i] = received_n_array[j];
        }
        for (var i = 0, j = 1; i < 9; i++, j++) {
            if (i == 0 || i == 2 || i == 4 || i == 7) {
                if (n_array[i] == 1) {
                    n_array[j] = 10 + parseInt(n_array[j]);
                    n_array[i] = 0;
                }
            }
        }
        value = '';
        for (var i = 0; i < 9; i++) {
            if (i == 0 || i == 2 || i == 4 || i == 7) {
                value = n_array[i] * 10;
            } else {
                value = n_array[i];
            }
            if (value != 0) {
                words_string += words[value] + ' ';
            }
            if ((i == 1 && value != 0) || (i == 0 && value != 0 && n_array[i + 1] == 0)) {
                words_string += 'Crores ';
            }
            if ((i == 3 && value != 0) || (i == 2 && value != 0 && n_array[i + 1] == 0)) {
                words_string += 'Lakhs ';
            }
            if ((i == 5 && value != 0) || (i == 4 && value != 0 && n_array[i + 1] == 0)) {
                words_string += 'Thousand ';
            }
            if (i == 6 && value != 0 && (n_array[i + 1] != 0 && n_array[i + 2] != 0)) {
                words_string += 'Hundred and ';
            } else if (i == 6 && value != 0) {
                words_string += 'Hundred ';
            }
        }
        words_string = words_string.split(' ').join(' ');
    }
    return words_string;
}

function convertAmountInNumberToWords(n) {

    if (isNaN(n) == true) {
        op = 'Error : Amount in number appears to be incorrect. Please Check.';
        return op;
    }

    nums = n.toString().split('.')
    var whole = Rs(nums[0])
    if (nums[1] == null) nums[1] = 0;
    if (nums[1].length == 1) nums[1] = nums[1] + '0';
    if (nums[1].length > 2) {
        nums[1] = nums[1].substring(2, length - 1)
    }
    if (nums.length == 2) {
        if (nums[0] <= 9) {
            nums[0] = nums[0] * 10
        } else {
            nums[0] = nums[0]
        };
        var fraction = Rs(nums[1])
        if (whole == '' && fraction == '') {
            op = 'Zero only';
        }
        if (whole == '' && fraction != '') {
            op = fraction + ' Paise';
        }
        if (whole != '' && fraction == '') {
            op = whole + ' Rupees';
        }
        if (whole != '' && fraction != '') {
            op = whole + ' Rupees and ' + fraction + ' Paise';
        }
        
        return op;

    }
}

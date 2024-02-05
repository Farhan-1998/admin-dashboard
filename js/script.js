// mini statement datalist start!!!!
input.onfocus = function () {
   browsers.style.display = 'block';
   input.style.borderRadius = "5px 5px 0 0";
};
for (let option of browsers.options) {
   option.onclick = function () {
      input.value = option.value;
      browsers.style.display = 'none';
      input.style.borderRadius = "5px";
   }
};

input.oninput = function () {
   currentFocus = -1;
   var text = input.value.toUpperCase();
   for (let option of browsers.options) {
      if (option.value.toUpperCase().indexOf(text) > -1) {
         option.style.display = "block";
      } else {
         option.style.display = "none";
      }
   };
}
var currentFocus = -1;
input.onkeydown = function (e) {
   if (e.keyCode == 40) {
      currentFocus++
      addActive(browsers.options);
   } else if (e.keyCode == 38) {
      currentFocus--
      addActive(browsers.options);
   } else if (e.keyCode == 13) {
      e.preventDefault();
      if (currentFocus > -1) {
         /*and simulate a click on the "active" item:*/
         if (browsers.options) browsers.options[currentFocus].click();
      }
   }
}

function addActive(x) {
   if (!x) return false;
   removeActive(x);
   if (currentFocus >= x.length) currentFocus = 0;
   if (currentFocus < 0) currentFocus = (x.length - 1);
   x[currentFocus].classList.add("active");
}

function removeActive(x) {
   for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("active");
   }
}
// mini statement datalist End!!!!


// Cash Withdrawal datalist Start!!!!
input1.onfocus = function () {
   browsers1.style.display = 'block';
   input1.style.borderRadius = "5px 5px 0 0";
};
for (let option of browsers1.options) {
   option.onclick = function () {
      input1.value = option.value;
      browsers1.style.display = 'none';
      input1.style.borderRadius = "5px";
   }
};

input1.oninput = function () {
   currentFocus = -1;
   var text = input1.value.toUpperCase();
   for (let option of browsers1.options) {
      if (option.value.toUpperCase().indexOf(text) > -1) {
         option.style.display = "block";
      } else {
         option.style.display = "none";
      }
   };
}
var currentFocus = -1;
input1.onkeydown = function (e) {
   if (e.keyCode == 40) {
      currentFocus++
      addActive(browsers1.options);
   } else if (e.keyCode == 38) {
      currentFocus--
      addActive(browsers1.options);
   } else if (e.keyCode == 13) {
      e.preventDefault();
      if (currentFocus > -1) {
         /*and simulate a click on the "active" item:*/
         if (browsers1.options) browsers1.options[currentFocus].click();
      }
   }
}

function addActive(x) {
   if (!x) return false;
   removeActive(x);
   if (currentFocus >= x.length) currentFocus = 0;
   if (currentFocus < 0) currentFocus = (x.length - 1);
   x[currentFocus].classList.add("active");
}

function removeActive(x) {
   for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("active");
   }
}
// Cash Withdrawal datalist End!!!!

// Balance Enquiry datalist Start!!!!

input2.onfocus = function () {
   browsers2.style.display = 'block';
   input2.style.borderRadius = "5px 5px 0 0";
};
for (let option of browsers2.options) {
   option.onclick = function () {
      input2.value = option.value;
      browsers2.style.display = 'none';
      input2.style.borderRadius = "5px";
   }
};
input2.oninput = function () {
   currentFocus = -1;
   var text = input2.value.toUpperCase();
   for (let option of browsers2.options) {
      if (option.value.toUpperCase().indexOf(text) > -1) {
         option.style.display = "block";
      } else {
         option.style.display = "none";
      }
   };
}
var currentFocus = -1;
input2.onkeydown = function (e) {
   if (e.keyCode == 40) {
      currentFocus++
      addActive(browsers2.options);
   } else if (e.keyCode == 38) {
      currentFocus--
      addActive(browsers2.options);
   } else if (e.keyCode == 13) {
      e.preventDefault();
      if (currentFocus > -1) {
         /*and simulate a click on the "active" item:*/
         if (browsers2.options) browsers2.options[currentFocus].click();
      }
   }
}
function addActive(x) {
   if (!x) return false;
   removeActive(x);
   if (currentFocus >= x.length) currentFocus = 0;
   if (currentFocus < 0) currentFocus = (x.length - 1);
   x[currentFocus].classList.add("active");
}
function removeActive(x) {
   for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("active");
   }
}
// Balance Enquiry datalist End!!!!
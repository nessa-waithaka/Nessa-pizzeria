let price;
let crustPrice;
let toppingPrice;
let total = 0;

function Pizza(name, size, crust, toppings, total) {
  this.name = name;
  this.size = size;
  this.crust = crust;
  this.toppings = toppings;
  this.total = total;
}

$(".orderme").click(function() {
  $("#f1").toggle();
  $(".choice").toggle();
});

$(document).ready(function() {
  $("#btnorder").click(function(event) {
    let pizzaName = $("#pizza option:selected").val();
    let pizzaSize = $("#size option:selected").val();
    let pizzaCrust = $("#crust option:selected").val();
    let pizzaTopping = [];

    $.each($("input[name='toppings']:checked"), function() {
      pizzaTopping.push($(this).val());
    });

    switch (pizzaSize) {
      case "0":
        s_price = 0;
        break;
      case "mega":
        s_price = 1050;
        break;
      case "large":
        s_price = 850;
        break;
      case "medium":
        s_price = 700;
        break;
      case "small":
        s_price = 500;
        break;
    }

    switch (pizzaCrust) {
      case "0":
        c_price = 0;
        break;
      case "Crispy":
        c_price = 200;
        break;
      case "Glutten":
        c_price = 180;
        break;
      case "Stuffed":
        c_price = 150;
        break;
    }

    if (pizzaSize == "0" && pizzaCrust == "0") {
      $("#btnorder").show();
      alert("Please select the Pizza size and crust");
    } else {
      $("#btnorder").hide();
    }

    let total_topping = pizzaTopping.length * 150;
    total = s_price + c_price + total_topping;

    $("#pName").html($("#pizza option:selected").val());
    $("#pSize").html($("#size option:selected").val());
    $("#pCrust").html($("#crust option:selected").val());
    $("#pTopping").html(pizzaTopping.join(", "));
    $("#total").html(total);

    let checkoutBill = 0;
    checkoutBill = checkoutBill + total;
    $("#btn_addPizza").click(function(event) {
      let pizzaName = $("#pizza option:selected").val();
      let pizzaSize = $("#size option:selected").val();
      let pizzaCrust = $("#crust option:selected").val();
      let pizzaTopping = [];

      $.each($("input[name='toppings']:checked"), function() {
        pizzaTopping.push($(this).val());
      });

      switch (pizzaSize) {
        case "0":
          s_price = 0;
          break;
        case "mega":
          s_price = 1050;
          break;
        case "large":
          s_price = 850;
          break;
        case "medium":
          s_price = 700;
          break;
        case "small":
          s_price = 500;
          break;
      }

      switch (pizzaCrust) {
        case "0":
          c_price = 0;
          break;
        case "Crispy":
          c_price = 200;
          break;
        case "Glutten":
          c_price = 180;
          break;
        case "Stuffed":
          c_price = 150;
          break;
      }
      let total_topping = pizzaTopping.length * 150;
      total = s_price + c_price + total_topping;
      checkoutBill = checkoutBill + total;

      newOrder = new Pizza(
        pizzaName,
        pizzaSize,
        pizzaCrust,
        pizzaTopping,
        total
      );

      $("#ordersmade").append(
        `<tr><td id="pName">` +
          newOrder.name +
          `</td><td id="pSize"> ` +
          newOrder.size +
          `</td><td id="pCrust"> ` +
          newOrder.crust +
          `</td><td id="pTopping"> ` +
          newOrder.toppings.join(",") +
          `</td><td id="total"> ` +
          newOrder.total +
          `</td></tr>`
      );
    });

    $("#btn_Checkout").click(function() {
      $("#pizzatotal").show();
      $("#pizzatotal").append("Your bill is ksh. " + checkoutBill);
    });

    event.preventDefault();
  });
});

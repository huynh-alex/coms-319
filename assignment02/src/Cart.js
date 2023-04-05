// import React, { useState } from "react";
import { Products } from "./Products";

let validate = function () {
  var order = {
    name: "",
    email: "",
    card: "",
  };
  let val = true;
  let email = document.getElementById("inputEmail4");
  let name = document.getElementById("inputName");
  let card = document.getElementById("inputCard");
  const alertPlaceholder = document.getElementById("liveAlertPlaceholder");
  const form = document.getElementById("checkout-form");
  // const inputCard = document.querySelector("#inputCard");
  // const alertTrigger = document.getElementById("#inputCard");
  const summaryCard = document.querySelector(".card");
  // const summaryList = document.querySelector(".card > ul");

  if (
    !email.value.match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
  ) {
    email.setAttribute("class", "form-control is-invalid");
    val = false;
  } else {
    email.setAttribute("class", "form-control is-valid");
    order.email = email.value;
  }

  if (name.value.length === 0) {
    name.setAttribute("class", "form-control is-invalid");
    val = false;
  } else {
    name.setAttribute("class", "form-control is-valid");
    order.name = name.value;
  }

  if (!card.value.match(/^[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}$/)) {
    card.setAttribute("class", "form-control is-invalid");
    val = false;
  } else {
    card.setAttribute("class", "form-control is-valid");
    order.card = card.value;
  }

  const alert = (message, type) => {
    const wrapper = document.createElement("div");
    wrapper.innerHTML = [
      `<div className="alert alert-${type} alert-dismissible" role="alert">`,
      ` <div>${message}</div>`,
      ' <button type="button" className="btn-close" data-bs-dismiss="alert" arialabel="Close"></button>',
      "</div>",
    ].join("");
    alertPlaceholder.append(wrapper);
  };

  if (val) {
    form.classList.add("collapse");

    // for (const [key, value] of Object.entries(order)) {
    //   summaryList.innerHTML +=
    //     '<li className="list-group-item"> <b>' +
    //     `${key}` +
    //     ": </b>" +
    //     `${value}` +
    //     "</li>";
    // }
    summaryCard.classList.remove("collapse");
    alertPlaceholder.innerHTML = "";
    alert(
      '<i className="bi-cart-check-fill"></i> You have made an order!',
      "success"
    );
  }
  return val;
};

export function Cart({ isActive, changePage, cart, productPrices }) {
  function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }

  function inputCardValidator(event) {
    const inputCard = document.querySelector("#inputCard");

    if (!inputCard.value) {
      return event.preventDefault(); // stops modal from being shown
    } else {
      inputCard.value = inputCard.value.replace(/-/g, "");
      let newVal = "";
      for (var i = 0, nums = 0; i < inputCard.value.length; i++) {
        if (nums !== 0 && nums % 4 === 0) {
          newVal += "-";
        }
        newVal += inputCard.value[i];
        if (isNumeric(inputCard.value[i])) {
          nums++;
        }
      }
      inputCard.value = newVal;
    }
  }

  return !isActive ? (
    <></>
  ) : (
    <div>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx"
        crossOrigin="anonymous"
      ></link>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa"
        crossOrigin="anonymous"
      ></script>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css"
      ></link>

      <div className="container">
        <div className="row">
          <div className="col-3">
            <div className="border-black border-2 p-4">
              <h1>Cart</h1>
              <div className="text-left">
                {Object.keys(cart).map((key) =>
                  cart[key] > 0 ? (
                    <div key={key}>
                      {key}: {cart[key]} x ${productPrices[key].toFixed(2)}
                    </div>
                  ) : null
                )}
              </div>
              <br></br>
              <div>
                Total: $
                {Object.keys(cart)
                  .map((key) => (cart[key] > 0 ? productPrices[key] : 0))
                  .reduce(
                    (total, price, index) =>
                      total + price * cart[Object.keys(cart)[index]],
                    0
                  )
                  .toFixed(2)}
              </div>
            </div>
          </div>

          <div className="col-8">
            <div id="liveAlertPlaceholder"></div>

            <form className="row g-3" id="checkout-form">
              <div className="col-md-6">
                <label htmlFor="inputName" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputName"
                ></input>
                <div className="valid-feedback">Looks good!</div>
                <div className="invalid-feedback">Must be like, "John Doe"</div>
              </div>

              <div className="col-md-6">
                <label htmlFor="inputEmail4" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail4"
                ></input>
                <div className="valid-feedback">Looks good!</div>
                <div className="invalid-feedback">
                  Must be like, "abc@xyz.efg"
                </div>
              </div>

              <div className="col-12">
                <label htmlFor="inputCard" className="form-label">
                  Card
                </label>
                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    <i className="bi-credit-card-fill"></i>
                  </span>
                  <input
                    type="text"
                    id="inputCard"
                    className="form-control"
                    placeholder="XXXX-XXXX-XXXX-XXXX"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    onChange={() => {
                      inputCardValidator();
                    }}
                  ></input>
                  <div className="valid-feedback">Looks good!</div>
                  <div className="invalid-feedback">
                    Must be like, "7777-7777-7777-7777"
                  </div>
                </div>
              </div>

              <div className="col-12">
                <label htmlFor="inputAddress" className="form-label">
                  Address
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputAddress"
                  placeholder="1234 Main St"
                ></input>
              </div>
              <div className="col-12">
                <label htmlFor="inputAddress2" className="form-label">
                  Address 2
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputAddress2"
                  placeholder="Apartment, studio, or floor"
                ></input>
              </div>
              <div className="col-md-6">
                <label htmlFor="inputCity" className="form-label">
                  City
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputCity"
                ></input>
              </div>
              <div className="col-md-4">
                <label htmlFor="inputState" className="form-label">
                  State
                </label>
                <select id="inputState" className="form-select">
                  <option>Choose...</option>
                </select>
              </div>
              <div className="col-md-2">
                <label htmlFor="inputZip" className="form-label">
                  Zip
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputZip"
                ></input>
              </div>
              <div className="col-12">
                <button
                  type="submit"
                  className="btn btn-success"
                  onClick={(event) => {
                    console.log("!");
                    if (!validate()) {
                      const alertPlaceholder = document.getElementById(
                        "liveAlertPlaceholder"
                      );
                      alertPlaceholder.innerHTML = "";
                      alert("Something went wrong!");
                      event.preventDefault();
                      event.stopPropagation();
                    }
                    event.preventDefault();
                    event.stopPropagation();
                  }}
                >
                  {" "}
                  <i className="bi-bag-check"></i> Order
                </button>
              </div>
            </form>

            <div className="card collapse" style={{ width: "18rem" }}>
              <div className="card-body">
                <h5 className="card-title">Order summary</h5>
                <p className="card-text">Here is a summary of your order.</p>
              </div>
              <ul className="list-group list-group-flush"></ul>
              <button
                href=""
                onClick={() => {
                  changePage("Browse");
                }}
                className="btn btn-secondary"
              >
                {" "}
                <i className="bi-arrow-left-circle"></i>
                Return
              </button>
            </div>
          </div>

          <div className="col-2"></div>
        </div>
      </div>
    </div>
  );
}

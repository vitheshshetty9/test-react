import React, { useEffect } from "react";
import validator from "validator";
import { useState } from "react";

function Pop() {
  const [emailError, setEmailError] = useState("");
  const [email, setEmail] = useState("");
  const [mail, setmail] = useState("");
  const [show, setshow] = useState(false);
  const [e, sete] = useState(true);

  useEffect(() => {
    const date = new Date();
    let d = date.getDay();




    let pp = localStorage.getItem("permanent");
    let sh = localStorage.getItem("shown");
    let dd = localStorage.getItem("day");

    if(pp === null || sh===null || dd ===null){
      localStorage.setItem("day",d);
      localStorage.setItem("shown",true);
       localStorage.setItem("permanent",true);
    }








    // localStorage.setItem("day",d);
    // localStorage.setItem("shown",true);
    //  localStorage.setItem("permanent",true);
    let shown = localStorage.getItem("shown");
    let day = localStorage.getItem("day");
    let per = localStorage.getItem("permanent");
    if (day === d.toString() && shown == "true" && per == "true") {
      setTimeout(() => {
        setshow(true);

        // localStorage.setItem("shown",false);
      }, 2000);
    } else if (day !== d.toString()) {
      localStorage.setItem("day", d);
      localStorage.setItem("shown", true);
      let shown = localStorage.getItem("shown");
      let day = localStorage.getItem("day");
      let per = localStorage.getItem("permanent");
      if (day === d.toString() && shown == "true" && per == "true") {
        setTimeout(() => {
          setshow(true);

          // localStorage.setItem("shown",false);
        }, 2000);
      }
    }

    // let dd = localStorage.getItem("permanent");
    // console.log("d is",dd)
   
  }, []);

  const validateEmail = (e) => {
    var email = e.target.value;
    setmail(email);
    if (validator.isEmail(email)) {
      setEmail("Valid Email :)");
      sete(true);
    } else {
      setEmailError("Enter valid Email!");
      sete(false);
    }
  };

  const togle = () => {
    setshow(!show);
    localStorage.setItem("shown", false);
  };

  const sub = (e) => {
    e.preventDefault();
    if (validator.isEmail(mail)) {
      alert("registered!!");
      localStorage.setItem("permanent", false);
      setshow(!show);
    }
  };

  return (
    <div className="sx">
      {show && (
        <div className="con">
          <pre className="inner">
            <form
              className="frm"
              onSubmit={(e) => {
                sub(e);
              }}
            >
              <h2 className="x" onClick={togle}>
                X
              </h2>
              <h1 className="h2">Register here</h1>
              <div className="box">
                <span className="enter">Enter the Email: </span>
                <div>
                  <input
                    className="inp"
                    type="text"
                    id="uem"
                    autoFocus
                    onChange={(e) => validateEmail(e)}
                  ></input>

                  <input className="btn" type="submit" value="submit" />
                </div>
                <br />
                <span className="err">{!e && emailError}</span>
                <span className="suc">{e && email}</span>
              </div>
            </form>
          </pre>
        </div>
      )}
    </div>
  );
}

export default Pop;

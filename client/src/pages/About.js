import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import AuthService from "../services/auth.service";

const About = () => {
  const history = useHistory();
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [phone, setPhone] = useState("");
  let [need, setNeed] = useState("");
  let [message, setMessage] = useState("");

  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangePhone = (e) => {
    setPhone(e.target.value);
  };
  const handleChangeNeed = (e) => {
    setNeed(e.target.value);
  };
  const handleContact = () => {
    AuthService.contact(name, email, phone, need)
      .then(() => {
        window.alert("Contact succeeds.");
      })
      .catch((error) => {
        console.log(error.response);
        setMessage(error.response.data);
      });
  };

  return (
    <div style={{ minHeight: "100vh" }} class="about">
      <h1>Contact Method</h1>
      <section class="contact">
        <section class="contactWord">
          <h2>My phone number : 0903-356-451</h2>
          <h2>My email : a0903356451@gmail.com</h2>
          <h2>Convenient contact time : Monday to Saturday</h2>
          <h2>Other contact methods : FaceBook、Instagram</h2>
        </section>

        <div class="line"></div>

        <section class="form">
          <div class="form2">
            <div>
              <label for="name">Name:</label>
              <input
                onChange={handleChangeName}
                type="text"
                id="name"
                name="name"
              />
            </div>
            <br />

            <div>
              <label for="email">Email:</label>
              <input
                onChange={handleChangeEmail}
                type="email"
                id="email"
                name="email"
              />
            </div>
            <br />

            <div>
              <label for="phone">Phone:</label>
              <input
                onChange={handleChangePhone}
                type="text"
                id="phone"
                name="phone"
              />
            </div>
            <br />

            <div>
              <label for="need">Need:</label>
              <textarea
                onChange={handleChangeNeed}
                name="need"
                id="need"
                rows="10"
              ></textarea>
            </div>
            <br />

            <button onClick={handleContact} type="submit">
              Submit Form
            </button>
            <div>{message && <div class="error">{message}</div>}</div>
          </div>
        </section>
      </section>

      {/* <footer>
        <a href="https://www.facebook.com/profile.php?id=100004662224032">
          <img
            src="../icons/facebook.svg"
            alt="facebook"
            title="facebook page"
          />
        </a>

        <a href="https://www.instagram.com/daniel38530324/">
          <img
            src="../icons/instagram.svg"
            alt="instagram"
            title="instagram page"
          />
        </a>
      </footer> */}
    </div>
  );
};

export default About;

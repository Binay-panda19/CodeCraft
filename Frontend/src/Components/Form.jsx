import React, { useState } from "react";
import { FaUpload } from "react-icons/fa";

export default function Form() {
  const [members, setMembers] = useState([
    {
      name: "",
      email: "",
      contact: "",
      college: "",
      team: "",
      members: 4,
      memberList: [{ name: "" }, { name: "" }, { name: "" }, { name: "" }],
      payment: null,
    },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("leaderName", e.target.leaderName.value);
    formData.append("email", e.target.email.value);
    formData.append("contact", e.target.contact.value);
    formData.append("college", e.target.College.value);
    formData.append("team", e.target.team.value);
    formData.append("members", e.target.members.value);

    // Add member list as JSON
    const memberList = Array.from(
      { length: Number(e.target.members.value) },
      (_, i) => ({
        name: e.target[`member${i + 1}`].value,
      })
    );
    formData.append("memberList", JSON.stringify(memberList));

    // File input
    const paymentFile = e.target.fileUpload.files[0];
    if (paymentFile) {
      formData.append("payment", paymentFile);
    }

    // Send to backend
    fetch("/api/register", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Form submitted:", data);
        alert("Form submitted successfully!");
      })
      .catch((err) => console.error("Error:", err));

    // Reset form and state
    e.target.reset();
    setMembers([
      {
        name: "",
        email: "",
        contact: "",
        college: "",
        team: "",
        members: 4,
        memberList: [{ name: "" }, { name: "" }, { name: "" }, { name: "" }],
        payment: null,
      },
    ]);
  };

  return (
    <div>
      {/* <h3 className="bold large text-centre"> Register!!</h3> */}
      <div className="container mt-5 border p-4 form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Leader Name</label>
            <input
              type="text"
              className="form-control"
              id="leaderName"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Contact No.</label>
            <input
              type="Number"
              className="form-control"
              id="contact"
              placeholder="Enter your contact number"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="team">College Name</label>
            <input
              type="text"
              className="form-control"
              id="College"
              placeholder="Enter your college name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="team">Team Name</label>
            <input
              type="text"
              className="form-control"
              id="team"
              placeholder="Enter your team name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="problem">Number of members</label>
            <select
              className="form-control"
              id="members"
              required
              value={members}
              onChange={(e) => setMembers(e.target.value)}
            >
              <option value="" disabled>
                Select number of members
              </option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
          {members &&
            Array.from({ length: Number(members) }, (_, i) => (
              <div className="form-group" key={i + 1}>
                <label htmlFor={`member${i + 1}`}>Member {i + 1} Name</label>
                <input
                  type="text"
                  className="form-control"
                  id={`member${i + 1}`}
                  placeholder={`Enter Member ${i + 1} Name`}
                  required
                />
                <label htmlFor={`member${i + 1}`}>Contact no.</label>
                <input
                  type="Number"
                  className="form-control"
                  id={`member${i + 1}`}
                  placeholder="contact"
                  required
                />
              </div>
            ))}
          <br></br>
          <br></br>
          <p>
            Payment : <b>Rs 150.</b>
          </p>
          <div className="form-group mt-3">
            <label htmlFor="fileUpload" className="form-label fw-bold">
              <FaUpload className="me-2 text-primary" size={20} />
              Upload Payment Screenshot for verification
            </label>

            <input
              type="file"
              className="form-control"
              id="fileUpload"
              accept=".pdf,.jpg,.jpeg,.png"
              required
            />
            <small className="form-text text-muted">
              <p>
                format: TeamName.jpg/pdf/png &nbsp;(Accepted formats: PDF, JPG,
                PNG)
              </p>
            </small>
          </div>
          <div className="form-text text-muted">
            <p>
              Note: Please ensure all details are correct before submitting. By
              submitting this form, you agree to the terms and conditions of the
              event.
            </p>
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-dark mt-3 ">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

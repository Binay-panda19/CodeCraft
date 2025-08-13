import React, { useState } from "react";

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
      payment: false,
    },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      leaderName: e.target.leaderName.value,
      email: e.target.email.value,
      contact: e.target.contact.value,
      college: e.target.College.value,
      team: e.target.team.value,
      members: e.target.members.value,
      memberList: Array.from(
        { length: Number(e.target.members.value) },
        (_, i) => ({
          name: e.target[`member${i + 1}`].value,
        })
      ),
      // Assuming payment is a file input
      // You might want to handle file uploads differently in a real application
      // Here we just log the file object
      //send this to a server or handle it as needed

      payment: e.target.fileUpload.files[0],
    };
    console.log("Form submitted:", formData);
    // Here you can handle the form submission, e.g., send data to a server
    alert("Form submitted successfully!");
    e.target.reset(); // Reset the form after submission
    setMembers(""); // Reset the members state
  };

  return (
    <div>
      <h3 className="bold large text-centre"> Register!!</h3>
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
              type="contact"
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
          <img
            src="C:\Users\LENOVO\OneDrive\Desktop\CLASSROOM\CodeCraft\CodeCraft\Frontend\public\images\512px-Qr-1.svg.webp"
            alt="QR Code"
            className="img-fluid mb-3"
          />
          <p>
            Scan the QR code to join the WhatsApp group for CodeArena updates.
          </p>
          <p>Upload the screenshot of the payment for verification</p>

          <div className="form-group">
            <label htmlFor="fileUpload"></label>
            &nbsp;
            <input
              type="file"
              className="form-control-file"
              id="fileUpload"
              accept=".pdf,.jpg,.jpeg,.png"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary mt-3">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

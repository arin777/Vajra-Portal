import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Dcptr from './images/Dctpr.png';
import Ptnt from './images/Ptnt.png';
import HealthcareBackground from './images/7283494.jpg'; // Import the background image

const LoginPage = () => {
  const [userType, setUserType] = useState(null); // 'doctor' or 'patient'
  const navigate = useNavigate();

  const handleUserTypeSelect = (type) => {
    setUserType(type);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/home");
  };

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      backgroundImage: `url(${HealthcareBackground})`, // Set the background image
      backgroundSize: "cover", // Ensure the image covers the entire background
      backgroundPosition: "center", // Center the image
      fontFamily: "Arial, sans-serif",
      padding: "10px", // Added padding for smaller screens
    },
    header: {
      fontSize: "3rem",
      color: "#ff0000",
      textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
      marginBottom: "30px",
      textAlign: "center",
    },
    cardContainer: {
      display: "flex",
      gap: "20px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "wrap", // Allow wrapping on smaller screens
    },
    card: {
      backgroundColor: "#ffffff",
      padding: "20px",
      borderRadius: "15px",
      boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
      textAlign: "center",
      cursor: "pointer",
      transition: "transform 0.3s, box-shadow 0.3s",
      width: "150px",
    },
    cardImage: {
      width: "100px",
      height: "100px",
      marginBottom: "10px",
    },
    cardTitle: {
      fontSize: "1rem",
      fontWeight: "bold",
      color: "#1e3a8a",
    },
    form: {
      backgroundColor: "#ffffff",
      padding: "20px",
      borderRadius: "15px",
      boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
      width: "100%",
      maxWidth: "400px",
    },
    formHeader: {
      fontSize: "1.5rem",
      fontWeight: "bold",
      color: "#1e3a8a",
      marginBottom: "15px",
      textAlign: "center",
    },
    label: {
      fontSize: "0.9rem",
      color: "#1e3a8a",
      marginBottom: "10px",
      display: "block",
    },
    input: {
      width: "100%",
      padding: "8px",
      fontSize: "0.9rem",
      borderRadius: "5px",
      border: "1px solid #ccc",
      marginBottom: "15px",
    },
    button: {
      width: "100%",
      padding: "10px",
      fontSize: "1rem",
      color: "#ffffff",
      backgroundColor: "#1e3a8a",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      transition: "background-color 0.3s ease",
    },
    buttonHover: {
      backgroundColor: "#163d74",
    },
    forgotPassword: {
      fontSize: "0.9rem",
      color: "#1e3a8a",
      textAlign: "right",
      cursor: "pointer",
      marginBottom: "10px",
    },
    signupLink: {
      textAlign: "center",
      marginTop: "10px",
      color: "#1e3a8a",
      fontSize: "0.9rem",
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Vajra HealthCare Portal</h1>
      {!userType ? (
        <div style={styles.cardContainer}>
          <div
            style={styles.card}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            onClick={() => handleUserTypeSelect("doctor")}
          >
            <img src={Dcptr} alt="Doctor" style={styles.cardImage} />
            <h3 style={styles.cardTitle}>Login as Doctor</h3>
          </div>
          <div
            style={styles.card}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            onClick={() => handleUserTypeSelect("patient")}
          >
            <img src={Ptnt} alt="Patient" style={styles.cardImage} />
            <h3 style={styles.cardTitle}>Login as Patient</h3>
          </div>
        </div>
      ) : (
        <form style={styles.form} onSubmit={handleSubmit}>
          <h2 style={styles.formHeader}>{userType === "doctor" ? "Doctor Login" : "Patient Login"}</h2>
          <label style={styles.label}>
            Email:
            <input style={styles.input} type="email" placeholder="Enter your email" required />
          </label>
          <label style={styles.label}>
            Password:
            <input style={styles.input} type="password" placeholder="Enter your password" required />
          </label>
          {userType === "doctor" && (
            <>
              <label style={styles.label}>
                Speciality:
                <input style={styles.input} type="text" placeholder="Enter your speciality" required />
              </label>
              <label style={styles.label}>
                Experience:
                <input style={styles.input} type="number" placeholder="Years of experience" required />
              </label>
            </>
          )}
          {userType === "patient" && (
            <>
              <label style={styles.label}>
                Age:
                <input style={styles.input} type="number" placeholder="Enter your age" required />
              </label>
              <label style={styles.label}>
                Common Diseases:
                <select style={styles.input} required>
                  <option value="">Select</option>
                  <option value="diabetes">Diabetes</option>
                  <option value="hypertension">Hypertension</option>
                  <option value="allergy">Allergy</option>
                  <option value="asthma">Asthma</option>
                </select>
              </label>
            </>
          )}
          <div style={styles.forgotPassword}>Forgot Password?</div>
          <button
            style={styles.button}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#163d74")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#1e3a8a")}
            type="submit"
          >
            Submit
          </button>
          <div style={styles.signupLink}>Don't have an account? <span onClick={() => navigate("/signup")}>Sign Up</span></div>
        </form>
      )}
    </div>
  );
};

export default LoginPage;

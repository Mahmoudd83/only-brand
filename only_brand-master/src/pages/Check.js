import React from "react";
import { FaCreditCard } from "react-icons/fa";
import {
  FaMoneyBillWave,
  FaMobileAlt,
  FaStore,
  FaWallet,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const CheckOut = () => {
  return (
    <div style={styles.checkoutContainer}>
      {/* Header */}
      <header style={styles.header}>
        <Link to="/cart">
          <button style={styles.backButton}>&larr;</button>
        </Link>
        <h1 style={styles.title}>Secure Checkout</h1>
        <h2 style={styles.brand}>ONLY BRAND</h2>
      </header>

      {/* Content */}
      <div style={styles.content}>
        {/* Left Section */}
        <div style={styles.leftSection}>
          {/* Delivery Address */}
          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>Delivery Address</h2>
            <input
              type="text"
              placeholder="336 Downtown, Cairo, Egypt"
              style={styles.input}
            />
            <div style={styles.checkboxContainer}>
              <input className="m-2" type="checkbox" id="save-address" />
              <label htmlFor="save-address">Save Address</label>
            </div>
          </div>

          {/* Personal Information */}
          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>Personal Information</h2>
            <div style={styles.inputGroup}>
              <input
                type="text"
                placeholder="First Name"
                style={styles.input}
              />
              <input type="text" placeholder="Last Name" style={styles.input} />
            </div>
          </div>

          {/* Mobile Number */}
          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>Mobile Number</h2>
            <div style={styles.inputGroup}>
              <input type="text" placeholder="+20" style={styles.input} />
              <input
                type="text"
                placeholder="Enter your number"
                style={styles.input}
              />
            </div>
          </div>

          {/* Payment Method */}
          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>Payment Method</h2>
            <div style={styles.radioGroup}>
              <label style={styles.radioLabel}>
                <input className="m-2" type="radio" name="payment" />
                Credit Card
                <FaCreditCard style={styles.icon} />
              </label>
              <label style={styles.radioLabel}>
                <input className="m-2" type="radio" name="payment" />
                Cash On Delivery
                <FaMoneyBillWave style={styles.icon} />
              </label>
              <label style={styles.radioLabel}>
                <input className="m-2" type="radio" name="payment" />
                Insta Pay
                <FaMobileAlt style={styles.icon} />
              </label>
              <label style={styles.radioLabel}>
                <input className="m-2" type="radio" name="payment" />
                Fawry
                <FaStore style={styles.icon} />
              </label>
              <label style={styles.radioLabel}>
                <input className="m-2" type="radio" name="payment" />
                Vodafone Cash
                <FaWallet style={styles.icon} />
              </label>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div style={styles.rightSection}>
          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>Order Summary</h2>
            <div style={styles.summaryItem}>
              <p>1 Item</p>
              <p>750 EGY</p>
            </div>
            <div style={styles.summaryItem}>
              <p>Delivery Shipping</p>
              <p>50 EGY</p>
            </div>
            <hr />
            <div style={{ ...styles.summaryItem, fontWeight: "bold" }}>
              <p>Total</p>
              <p>800 EGY</p>
            </div>
            <button style={styles.verifyButton}>Verify</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  checkoutContainer: {
    maxWidth: "1200px",
    margin: "30px auto",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 0",
    borderBottom: "1px solid #ddd",
  },
  title: {
    fontSize: "1.5rem",
    fontWeight: "bold",
  },
  brand: {
    fontSize: "1.2rem",
    color: "#555",
  },
  backButton: {
    fontSize: "1rem",
    background: "none",
    border: "none",
    cursor: "pointer",
  },
  content: {
    display: "grid",
    gridTemplateColumns: "2fr 1fr",
    gap: "20px",
    marginTop: "20px",
  },
  leftSection: {},
  rightSection: {},
  section: {
    background: "#fff",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "8px",
  },
  sectionTitle: {
    fontSize: "1.2rem",
    marginBottom: "10px",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "10px",
    border: "1px solid #ccc",
    borderRadius: "4px",
  },
  inputGroup: {
    display: "flex",
    gap: "10px",
  },
  checkboxContainer: {
    display: "flex",
    alignItems: "center",
  },
  radioGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  radioLabel: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: "1rem",
    padding: "5px 0",
  },
  icon: {
    marginLeft: "auto",
    marginRight: "10px",
    color: "#888",
    fontSize: "1.2rem",
  },
  summaryItem: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "10px",
    textAlign: "center", // الجديد
    padding: "10px 0", // لتوفير padding بين العناصر
  },
  verifyButton: {
    width: "100%",
    padding: "10px",
    background: "black",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  // إضافة responsive design
  "@media (max-width: 768px)": {
    content: {
      display: "block",
    },
    rightSection: {
      marginTop: "20px",
    },
    summaryItem: {
      flexDirection: "column",
      textAlign: "center",
    },
  },
};

export default CheckOut;

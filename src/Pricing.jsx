// Pricing.jsx
import { motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';
import './pricing.css';

function Pricing() {
  return (
    <div className="pricing-wrapper">
      <div className="pricing-container">
        {/* Flat Purchase */}
        <motion.div 
          className="price-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="price-header flat">
            <h2>FLAT PURCHASE</h2>
          </div>
          <div className="price-amount">
            <h3>$2,000/appliance</h3>
          </div>
          <div className="price-features">
            <ul>
              <li>Flat license fee of $500</li>
              <li>Receive the newest update and feature with no additional cost</li>
              <li>Receive a robust hardware equipped with strong capacity for 10+ cameras</li>
              <li>Cameras not included</li>
            </ul>
          </div>
        </motion.div>

        {/* Basic Subscription */}
        <motion.div 
          className="price-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="price-header basic">
            <h2>BASIC SUBSCRIPTION</h2>
          </div>
          <div className="price-amount">
            <h3>$15/camera/month</h3>
          </div>
          <div className="price-features">
            <ul>
              <li>Flat license fee of $500</li>
              <li>Receive the newest update and feature through subscription period</li>
              <li>Free customer and technical support 24/7</li>
              <li>SMS fees at additional cost</li>
            </ul>
          </div>
        </motion.div>

        {/* Premium Subscription */}
        <motion.div 
          className="price-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="price-header premium">
            <h2>PREMIUM SUBSCRIPTION</h2>
          </div>
          <div className="price-amount">
            <h3>$50/camera/month</h3>
          </div>
          <div className="price-features">
            <ul>
              <li>All of the previous subscription benefits PLUS additional safety detection features tailored for businesses</li>
              <li>Receive further discounts by opting for an extended contract term</li>
            </ul>
          </div>
        </motion.div>
      </div>

      {/* Contact Us Button */}
      <motion.div 
        className="contact-button-container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <Link to="/contact" className="contact-button">
          Contact Us
        </Link>
      </motion.div>
    </div>
  );
}

export default Pricing;
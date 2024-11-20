# Air Quality Prediction for Södermalm Island, Stockholm, Sweden - Lab Description

This project is part of **Lab 1** for the course **ID2223 - HT2024**. The goal is to build a serverless AI system that predicts air quality levels (PM2.5) in Södermalm Island, Stockholm, Sweden using historical and forecasted weather data. The system includes data pipelines, a machine learning model, and a Dashboard for visualization. 4 (active) sensors is used troughout the island of Södermalm for this project.

## Project Overview

This lab implements:
1. **Feature Pipelines**: Collect and preprocess air quality and weather data.
2. **Training Pipeline**: Train a machine learning model to predict PM2.5 levels.
3. **Batch Inference Pipeline**: Generate predictions and update a public dashboard.
4. **[Dashboard](https://lab1-id-2223.vercel.app/)**: A web-based visualization of predictions utilizing different database and React frontend.

## Prerequisites

To complete the lab, ensure you have:
1. **Accounts**:
   - [Hopsworks](https://app.hopsworks.ai) (Feature Store for managing data and models).
   - [GitHub](https://github.com) (for source code and workflows).
2. **Python Environment**:
   - Use Conda or venv to set up a virtual environment:
     ```bash
     pip install -r requirements.txt
     ```
3. **Data Sources**:
   - Air quality data: [AQICN](https://aqicn.org).
   - Weather data: [Open-Meteo](https://open-meteo.com).
   
## GitHub Action

GitHub action is used to schedule the run to collect current data and make another batch inference.
It will also upload the prediction data to a database that then is routed to the dashboard for visualization.

## Features Implemented

### 1. Feature Pipelines
- **Backfill Pipeline**: Loads historical data (1+ year) and registers it in Hopsworks feature groups.
- **Daily Pipeline**: Fetches daily air quality and weather data and updates the feature groups in Hopsworks.

### 2. Training Pipeline
- Combines data from the `air_quality` and `weather` feature groups.
- Trains a regression model using **XGBoost**.
- Registers the trained model in Hopsworks for future use.

### 3. Batch Inference Pipeline
- Retrieves the trained model from Hopsworks.
- Predicts air quality levels for the next 7–10 days.
- Generates a visualization of predictions.

### 4. Dashboard
 
- Displays PM2.5 predictions and historical model performance (hindcast graphs).




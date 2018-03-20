# WatsonSlack
A simple application to link IBM watson Conversation with Slack

## Before you begin

* Create an IBM Cloud account
    * [Sign up](https://console.ng.bluemix.net/registration/?target=/catalog/%3fcategory=watson) in IBM Cloud, or use an existing account. Your account must have available space for at least 1 app and 1 service.

* Make sure that you have the following prerequisites installed:
    * The [Node.js](https://nodejs.org/#download) runtime, including the [npm](https://www.npmjs.com/) package manager
    * A [Telegram](https://telegram.org/) Account (obviously)

          Note: Ensure that you Cloud Foundry version is up to date

## Create your Slack bot

* On [Slack API web page](https://api.slack.com/), create a new application and create a SalckBot.

* Save the Bot user token, we will use it in our app.

## Create your Conversation instance on IBM Cloud

* Go to IBM Cloud and create a Watson Conversation service

* Create your new credentials and launch the tool 

* Create your a new workspace and get your Workspace ID

* To learn how to create a ChatBot with IBM Watson Conversation, please refer to the IBM Cloud documentation


## Configure the environment

* Rename the `.env.example` into `.env` (nothing before the dot) and paste your Bot User token and your Conversation Username, Password and Workspace ID.

## Installing and starting the app

1. Install the demo app package into the local Node.js runtime environment:

    ```bash
    npm install
    ```

1. Start the app:

    ```bash
    npm start
    ```
This app uses Botkit, for more documentation, check [here](https://github.com/howdyai/botkit)

You can now interact with your Watson Conversation service via Slack !!
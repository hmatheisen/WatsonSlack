const Botkit = require('botkit');
const Conversation = require('watson-developer-cloud/conversation/v1');
const server = require('http').createServer();

require('dotenv').config();

const workspace_id = process.env.CONVERSATION_WORKSPACE_ID;
const slack_token = process.env.SLACK_TOKEN;

const conversation = new Conversation({
    username: process.env.CONVERSATION_USERNAME,
    password: process.env.CONVERSATION_PASSWORD,
    version_date: '2018-02-16'
});

const controller = Botkit.slackbot({
    require_delivery: true
});

const slackBot = controller.spawn({
    token : slack_token
});

slackBot.startRTM((err, bot, payload) => {
    if (err) {
        throw new Error('Could not connect to Slack');
    }
    controller.log('Slack connection established.');
});

controller.hears([".*"], ['direct_message', 'direct_mention'], (bot, message) => {

    const payload = {
        workspace_id: workspace_id,
        input: message || {}
    }

    conversation.message(payload, (err, response) => {
        if (err) {
            console.log('error : ', err);
        } else {
            console.log(response.output.text[0]);
            bot.reply(message, response.output.text.join('\n'));
        }
    });

});

server.listen(8080);

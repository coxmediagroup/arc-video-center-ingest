const AWS = require('aws-sdk');
const sns = new AWS.SNS();

const exportObj = {}

/**
 * Publishes a message to an SNS topic
 *
 * @param {string} topicArn - ARN of the SNS topic
 * @param {string} message - The message body
 * @param {string} subject - The message title
 * @param {Object} messageAttributes - Optional message attributes (for subscriber filtering)
 * 
 * @return {Promise<Object>} The response from SNS
 */
exportObj.publishWithSNS = async (topicArn, message, subject, messageAttributes) => {
  try {
    const params = {
      TopicArn: topicArn,
      Message: message,
      Subject: subject,
    };

    if(messageAttributes) {
      params.MessageAttributes = messageAttributes;
    }

    const response = await sns.publish(params).promise();
    return response;
  } catch (err) {
      return err;
  }
}

module.exports = exportObj;

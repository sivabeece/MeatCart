import axios from "axios";

const headers = {
  "Content-Type": "application/json",
  // Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
};

export const CustomWhatsappMessages = {
  sendTemplateMessage: (phonenumer, templatename) => {
    return PostWhatsAppMessage(templateMessage(phonenumer, templatename));
  },
  sendTemplateDocument: (phonenumer, filepath, filename, caption) => {
    return PostWhatsAppMessage(
      templateDocument(phonenumer, filepath, filename, caption)
    );
  },
  sendTextMessage: (phonenumer, message) => {
    return PostWhatsAppMessage(sendText(phonenumer, message));
  },
};

const templateMessage = (phonenumer, templatename) => {
  let _params = {
    messaging_product: "whatsapp",
    to: `+91${phonenumer}`,
    type: "template",
    template: {
      name: templatename,
      language: {
        code: "en_US",
      },
    },
  };

  return _params;
};

const sendText = (phonenumer, message) => {
  let _params = {
    messaging_product: "whatsapp",
    recipient_type: "individual",
    to: `+91${phonenumer}`,
    type: "text",
    text: {
      body: message,
    },
  };
  return _params;
};

const templateDocument = (phonenumer, filepath, filename, caption) => {
  let _params = {
    messaging_product: "whatsapp",
    to: `+91${phonenumer}`,
    type: "document",
    document: {
      link: filepath,
      caption: caption,
      filename: filename,
    },
  };

  return _params;
};

const PostWhatsAppMessage = async (params) => {
  try {
    // await axios.post(process.env.REACT_APP_WHATSAPP_URL, params, {
    // headers: headers,
    // });
    return "success";
  } catch (err) {
    if (err.response) {
      return "fail";
    } else if (err.request) {
      return "fail";
    }
  }
};

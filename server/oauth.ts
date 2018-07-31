import { google } from 'googleapis';
import * as decode from 'jwt-decode';

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URL = 'http://localhost:8080/auth';

const oauth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URL
);

const url = oauth2Client.generateAuthUrl({
  scope: 'email',
  access_type: 'online'
});

interface Query {
  code: string
}

export default class {

  code: string;

  constructor(query: Query) {
    this.code = query.code;
  }

  async makeRequest() {
    try {
      const { tokens } = await oauth2Client.getToken(this.code);

      oauth2Client.setCredentials(tokens);
      return decode(oauth2Client.credentials.id_token);
    } catch (err) {
      throw new Error(err);
    }
  }
}
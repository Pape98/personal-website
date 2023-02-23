import Airtable from 'airtable';

var airtable = new Airtable({
  apiKey: process.env.NEXT_PUBLIC_AIRTABLE_TOKEN,
}).base(process.env.AIRTABLE_BASE_ID);

export default airtable;

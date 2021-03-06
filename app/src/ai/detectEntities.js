import AWS from 'aws-sdk';

export default async function detectEntities(text, clientParams) {
    const comprehendMedical = new AWS.ComprehendMedical(clientParams);

    if(text === undefined || text.replace(/\s/g,"") === "") return [];
    const resp = await comprehendMedical.detectEntitiesV2({ Text: text }).promise();
    return resp.Entities;
}

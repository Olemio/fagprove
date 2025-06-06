import { DynamoDBClient, ScanCommand } from "@aws-sdk/client-dynamodb";
import { json } from "@remix-run/node";

export const action = async () => {
  const client = new DynamoDBClient({ region: "eu-central-1" });

  // Jeg har brukt chat gpt for å generere scan commandoen
  const command = new ScanCommand({
    TableName: "code-typer",
  });

  const result = await client.send(command);
  return json(result.Items ?? []);
};

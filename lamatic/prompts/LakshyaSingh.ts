const promptConfig = {
  "id": "f750dd11-9fb5-4e92-8ab3-66e6d697e19d",
  "name": "Lakshya Singh",
  "config": {
    "values": {
      "tools": [],
      "prompts": [
        {
          "id": "187c2f4b-c23d-4545-abef-73dc897d6b7b",
          "role": "system",
          "content": "You are an AI Assistant"
        },
        {
          "id": "187c2f4b-c23d-4545-abef-73dc897d6b7d",
          "role": "user",
          "content": "Write your prompt here"
        }
      ],
      "memories": "[]",
      "messages": "[]",
      "nodeName": "Lakshya Singh",
      "attachments": "",
      "credentials": "",
      "generativeModelName": [
        {
          "type": "generator/text",
          "params": {},
          "configName": "configA",
          "provider_name": "",
          "credential_name": ""
        }
      ]
    }
  },
  "type": "LLMNode",
  "status": "inactive",
  "created_at": "2026-07-26T21:07:16.674121+00:00"
};

export async function getPromptConfig(): Promise<Record<string, any>> {
    return promptConfig;
}